import React, { useState } from "react";
import { UserData } from "@/types/UserData";
import { sendMessage } from "@/helpers/messageHelpers";
import Tiptap from "../Tiptap/Tiptap";
import { htmlToText } from "html-to-text";
import ExpirationModal from "./ExpirationModal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

interface SendMessageModalProps {
  onClose: () => void;
  selectedUsers: (UserData | undefined)[];
}

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  onClose,
  selectedUsers,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);

  const handleContentChange = (newContent: string) => {
    setDescription(newContent);
  };

  const handleSendMessage = async () => {
    const recipients = selectedUsers
      .filter((user): user is UserData => user !== undefined)
      .map((user) => user.id);

    const messageData = {
      title,
      description,
      // description: htmlToText(description),
      recipients,
    };

    try {
      await sendMessage(messageData);
      toast.success("¡Mensaje envadio con éxito!");
      onClose();
    } catch (error) {
      setExpirationModal(true);
      toast.error("Falló al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl mb-4">Enviar mensaje</h2>
        <div className="mb-4">
          <label className="block">Título</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Tiptap content={description} onChange={handleContentChange} />
        <div className="mb-4">
          <h3 className="text-lg">Mensaje para:</h3>
          <div className="bg-[#eff3f6] border border-[#dcdde1] p-2 text-sm">
            {selectedUsers.map((user, index) =>
              user ? (
                <div
                  className="hover:bg-blue-300 transition-all duration-300"
                  key={index}
                >
                  - {user.firstName} {user.lastName} - ({user.email})
                </div>
              ) : null
            )}
          </div>
        </div>
        <button
          className={`bg-blue-900 text-sm font-bold text-white rounded-lg cursor-pointer w-20 hover:bg-blue-600 p-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSendMessage}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
        <button
          className="bg-gray-500 text-sm font-bold text-white rounded-lg cursor-pointer w-20 hover:bg-blue-300 p-2 ml-2"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
      {expirationModal && <ExpirationModal />}
    </div>
  );
};

export default SendMessageModal;
