import { getAllUsers, TokenExpiredError } from "@/helpers/userHelpers";
import { UserData } from "@/types/UserData";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import SendMessageModal from "../Modals/SendMessageModal";
import ExpirationModal from "../Modals/ExpirationModal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UsersList = () => {
  const [usersList, setUsersList] = useState<UserData[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        if (users) {
          setUsersList(users);
        } else {
          return null;
        }
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          setExpirationModal(true);
        } else {
          toast.error("Error al obtener datos del usuario.");
        }
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (user: UserData) => {
    setSelectedUsers((prev) =>
      prev.some((selectedUser) => selectedUser.id === user.id)
        ? prev.filter((selectedUser) => selectedUser.id !== user.id)
        : [...prev, user]
    );
  };

  const handleRemoveUser = (userId: number) => {
    setSelectedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userId)
    );
  };

  const columns: TableColumn<UserData>[] = [
    {
      name: "Seleccionar",
      cell: (row: UserData) => (
        <input
          type="checkbox"
          checked={selectedUsers.some((user) => user.id === row.id)}
          onChange={() => handleSelectUser(row)}
        />
      ),
      width: "100px",
      style: { display: "flex", justifyContent: "center" },
    },
    {
      name: "Nombre",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="max-h-[18rem] overflow-y-auto shadow-md rounded-lg">
        {usersList?.length === 0 ? (
          <div className="flex items-center justify-center p-5">
            No hay usuarios registrados
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={usersList}
            pagination
            fixedHeader
            className="max-h-[18rem]"
          />
        )}
      </div>
      <button
        className={`mt-4 p-2 ${
          selectedUsers.length === 0
            ? "bg-gray-400 text-sm font-bold text-gray-500 cursor-not-allowed rounded-lg"
            : "bg-blue-900 text-sm font-bold text-white rounded-lg cursor-pointer hover:bg-[#46C2CA]"
        }`}
        disabled={selectedUsers.length === 0}
        onClick={() => setIsModalOpen(true)}
      >
        Enviar mensaje
      </button>
      {isModalOpen && (
        <SendMessageModal
          onClose={() => setIsModalOpen(false)}
          selectedUsers={selectedUsers}
          onRemoveUser={handleRemoveUser}
        />
      )}
      {expirationModal && (
        <ExpirationModal setExpirationModal={setExpirationModal} />
      )}
    </div>
  );
};

export default UsersList;
