import React, { useEffect, useState } from "react";
import { getMessages, updateMessageStatus } from "@/helpers/messageHelpers";
import { MessageData } from "@/types/MessageData";
import DataTable, { TableColumn } from "react-data-table-component";
import Date from "../Date/Date";
import { parseISO } from "date-fns";
import MessageModal from "../Modals/MessageModal";
import { useAppDispatch } from "@/redux/hooks";
import { readMessageAction } from "@/redux/features/userSlice";

function UserMessages() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<MessageData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const messages = await getMessages(accessToken);
          setMessages(messages);
        } else {
          setError("No access token found");
        }
      } catch (error) {
        setError("Error fetching messages");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleReadClick = async (message: MessageData) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === message.id ? { ...msg, status: "READ" } : msg
      )
    );
    setSelectedMessage(message);
    setShowModal(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        await updateMessageStatus(message.id, accessToken);
        dispatch(readMessageAction(message.id));
      } else {
        setError("No access token found");
      }
    } catch (error) {
      setError("Error updating message status");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  const columns: TableColumn<MessageData>[] = [
    {
      name: "",
      cell: (row) => (
        <button
          onClick={() => handleReadClick(row)}
          className="my-4 px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Leer
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Enviado por",
      selector: (row) => row.sender.firstName,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => parseISO(row.createdAt).toISOString(),
      cell: (row) => <Date dateString={row.createdAt} />,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) =>
        row.status === "READ" ? (
          <div className="px-4 py-2 rounded-lg bg-green-300 font-bold text-green-700">
            visto
          </div>
        ) : (
          <div className="px-4 py-2 rounded-lg bg-red-300 font-bold text-red-700">
            no visto
          </div>
        ),
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-h-[14rem] overflow-y-auto shadow-md rounded-lg">
      <DataTable columns={columns} data={messages} pagination fixedHeader />

      {showModal && (
        <MessageModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          selectedMessage={selectedMessage}
        />
      )}
    </div>
  );
}

export default UserMessages;
