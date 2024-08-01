import React, { useEffect, useState } from "react";
import { UserData } from "@/types/UserData";
import { sendMessage } from "@/helpers/messageHelpers";
import Tiptap from "../Tiptap/Tiptap";
import ExpirationModal from "./ExpirationModal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TokenExpiredError } from "@/helpers/userHelpers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messageSchema } from "@/validations/messageSchema";
import { FaTimes } from "react-icons/fa";

interface SendMessageModalProps {
  onClose: () => void;
  selectedUsers: (UserData | undefined)[];
  onRemoveUser: (userId: number) => void;
}

type Inputs = {
  title: string;
  description: string;
};

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  onClose,
  selectedUsers,
  onRemoveUser,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(messageSchema),
    mode: "onChange",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cerrar el modal si no hay usuarios seleccionados
  useEffect(() => {
    if (selectedUsers.length === 0) {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [selectedUsers, onClose]);

  const handleContentChange = (newContent: string) => {
    setValue("description", newContent, { shouldValidate: true });
    trigger("description");
  };

  const handleSendMessage = async (data: Inputs) => {
    if (!isValid) {
      return;
    }

    const recipients = selectedUsers
      .filter((user): user is UserData => user !== undefined)
      .map((user) => user.id);

    // Solo enviar el mensaje si hay destinatarios
    if (recipients.length === 0) {
      toast.error("No hay usuarios seleccionados.");
      return;
    }

    const messageData = {
      ...data,
      recipients,
    };

    try {
      setLoading(true);
      await sendMessage(messageData);
      toast.success("¡Mensaje enviado con éxito!");
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        setExpirationModal(true);
      } else {
        toast.error("Error al enviar el mensaje.");
      }
    } finally {
      setLoading(false);
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleRemoveUser = (userId: number) => {
    onRemoveUser(userId);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      <div
        className={`bg-white p-6 rounded shadow-lg mt-40 md:mt-0 max-w-full lg:w-1/2 ${
          isVisible ? "scale-100" : "scale-90"
        } transition-all duration-300`}
      >
        <h2 className="text-xl mb-4">Enviar mensaje</h2>
        <form onSubmit={handleSubmit(handleSendMessage)}>
          <div className="mb-4">
            <label className="block">Título</label>
            <input
              id="title"
              type="text"
              className="w-full p-2 border rounded"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mb-5">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Tiptap content={""} onChange={handleContentChange} />
            {errors.description && (
              <p className="text-red-500 text-sm mb-5">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Mensaje para:</h3>
            <div className="bg-[#eff3f6] border border-[#dcdde1] p-2 text-sm flex flex-wrap gap-2">
              {selectedUsers.map((user, index) =>
                user ? (
                  <div className="relative" key={index}>
                    <button
                      type="button"
                      onClick={() => handleRemoveUser(user.id)}
                      className="group"
                    >
                      <FaTimes className="group-hover:bg-[#dcdde1] absolute top-[-4px] right-[-4px] bg-gray-400 rounded-full p-[2px] transition-all duration-300" />
                      <div className="bg-[#46C2CA] font-semibold w-fit transition-all duration-300 px-2 py-1 rounded-full group-hover:text-white group-hover:font-bold">
                        {user.firstName} {user.lastName}
                      </div>
                    </button>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <button
            className={`bg-blue-900 text-sm font-bold text-white rounded-lg cursor-pointer w-20 hover:bg-blue-600 p-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          <button
            className="bg-gray-500 text-sm font-bold text-white rounded-lg cursor-pointer w-20 hover:bg-blue-300 p-2 ml-2"
            onClick={handleCloseModal}
            type="button"
          >
            Cancelar
          </button>
        </form>
      </div>
      {expirationModal && (
        <ExpirationModal setExpirationModal={setExpirationModal} />
      )}
    </div>
  );
};

export default SendMessageModal;
