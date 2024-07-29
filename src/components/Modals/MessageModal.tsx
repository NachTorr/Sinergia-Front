import { MessageData } from "@/types/MessageData";
import { FaTimes } from "react-icons/fa";
import DateComponent from "../Date/Date";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";

interface MessageModalProps {
  onRequestClose: () => void;
  selectedMessage: MessageData | null;
}

const MessageModal: React.FC<MessageModalProps> = ({
  onRequestClose,
  selectedMessage,
}) => {
  const user = useAppSelector((state) => state.user.userActive);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      onRequestClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-fit max-w-[60%] md:min-w-[40%] z-[100] ${
          isVisible ? "scale-100" : "scale-90"
        } transition-all duration-300`}
      >
        <div className="flex justify-end">
          <button
            onClick={handleCloseModal}
            className="text-blue-900 hover:bg-blue-300 transition-all duration-300 rounded-full p-1"
          >
            <FaTimes size={25} />
          </button>
        </div>
        {selectedMessage && (
          <div className="">
            <div className="mb-4">
              <div className="font-bold">Título:</div>
              <div className="p-2 border rounded">{selectedMessage.title}</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">Descripción:</div>
              <div
                className="overflow-auto text-justify max-h-96 px-6 py-3 border w-full font-medium text-[16px] pt-4 rounded-b outline-none"
                dangerouslySetInnerHTML={{
                  __html: selectedMessage.description,
                }}
              />
            </div>
            <div className="flex justify-between">
              <div>
                {user?.role === "ADMIN" ? (
                  <div>
                    <div>Enviado a:</div>
                    <div className="flex">
                      <div className="font-bold">
                        {selectedMessage.recipient.firstName}{" "}
                        {selectedMessage.recipient.lastName}{" "}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>Enviado por:</div>
                    <div className="flex">
                      <div className="font-bold">
                        {selectedMessage.sender.firstName}{" "}
                        {selectedMessage.sender.lastName}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="">
                <div className="mr-1">Enviado el</div>
                <div className="font-bold">
                  <DateComponent dateString={selectedMessage.createdAt} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageModal;
