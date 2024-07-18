import { MessageData } from "@/types/MessageData";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

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
          <button
            onClick={handleCloseModal}
            className="text-[#3D63DD] hover:text-blue-600 hover:bg-[#93B4FF] transition-all duration-300 rounded-full p-1"
          >
            <FaTimes size={25} />
          </button>
          <h2 className="text-lg font-bold mb-4">Mensaje</h2>
          {selectedMessage && (
            <>
              <p>
                <strong>Título:</strong> {selectedMessage.title}
              </p>
              <p>
                <strong>Descripción:</strong> {selectedMessage.description}
              </p>
              <p>
                <strong>Fecha:</strong> {selectedMessage.createdAt}
              </p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MessageModal;
