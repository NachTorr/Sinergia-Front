import { MessageData } from "@/types/MessageData";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import DateComponent from "../Date/Date";

interface MessageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedMessage: MessageData | null;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onRequestClose,
  selectedMessage,
}) => {
  const handleCloseModal = async () => {
    onRequestClose();
  };

  return (
    <div className="bg-red-400">
      <Modal
        className="fixed inset-0 flex items-center justify-center z-50 outline-none"
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        shouldCloseOnOverlayClick={true}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-[75%] z-[100]">
          <div className="flex justify-end">
            <button
              onClick={handleCloseModal}
              className="text-blue-900 hover:bg-blue-300 transition-all duration-300 rounded-full p-1"
            >
              <FaTimes size={25} />
            </button>
          </div>
          {selectedMessage && (
            <div>
              <div className="mb-4">
                <div className="font-bold">Título:</div>
                <div className="p-2 border rounded">
                  {selectedMessage.title}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold">Descripción:</div>
                <div
                  className="overflow-auto text-justify max-h-96 px-4 py-3 border w-full font-medium text-[16px] pt-4 rounded-b outline-none"
                  dangerouslySetInnerHTML={{
                    __html: selectedMessage.description,
                  }}
                />
              </div>
              <div className="flex justify-end">
                <div className="mr-1">Enviado el</div>
                <div className="font-bold">
                  <DateComponent dateString={selectedMessage.createdAt} />
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MessageModal;
