import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getMessages, updateMessageStatus } from "@/helpers/messageHelpers";
import { MessageData } from "@/types/MessageData";
import DataTable, { TableColumn } from "react-data-table-component";
import DateComponent from "../Date/Date";
import MessageModal from "../Modals/MessageModal";
import { readMessageAction } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ExpirationModal from "../Modals/ExpirationModal";

function UserMessages() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<MessageData | null>(
    null
  );
  const [expirationModal, setExpirationModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userActive);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const messages = await getMessages(accessToken);

          const sortedMessages = messages.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setMessages(sortedMessages);
        } else {
          setError("No access token found");
        }
      } catch (error) {
        setExpirationModal(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("User data:", user);
  }, [user]);

  const handleReadClick = async (message: MessageData) => {
    if (message.status === "UNREAD" && user?.role === "USER") {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === message.id ? { ...msg, status: "READ" } : msg
        )
      );
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
    }

    setSelectedMessage(message);
    setShowModal(true);
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
          className=" ml-4 px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          {user?.role === "ADMIN" ? "Ver" : "Leer"}
        </button>
      ),
      ignoreRowClick: true,
      width: "100px",
    },
    {
      name: "Título",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.createdAt,
      cell: (row) => <DateComponent dateString={row.createdAt} />,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => {
        if (user?.role === "ADMIN") {
          if (row.sender.id === user.id) {
            return (
              <div className="px-4 py-2 rounded-lg bg-blue-300 font-bold text-blue-700">
                enviado
              </div>
            );
          } else {
            return (
              <div className="px-4 py-2 rounded-lg bg-yellow-300 font-bold text-yellow-700">
                recibido
              </div>
            );
          }
        } else {
          return row.status === "READ" ? (
            <div className="px-4 py-2 rounded-lg bg-green-300 font-bold text-green-700">
              visto
            </div>
          ) : (
            <div className="px-4 py-2 rounded-lg bg-red-300 font-bold text-red-700">
              no visto
            </div>
          );
        }
      },
    },
  ];

  if (user?.role === "USER") {
    columns.splice(2, 0, {
      name: "Enviado por",
      selector: (row) => row.sender.firstName,
      sortable: true,
    });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-h-[22rem] overflow-y-auto shadow-md rounded-lg">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center p-5">
          <Image
            src="/images/Sinergia-NoMessages.png"
            alt={""}
            width={160}
            height={160}
          />
        </div>
      ) : (
        <DataTable columns={columns} data={messages} pagination fixedHeader />
      )}
      {showModal && (
        <MessageModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          selectedMessage={selectedMessage}
        />
      )}
      {expirationModal && <ExpirationModal />}
    </div>
  );
}

export default UserMessages;
