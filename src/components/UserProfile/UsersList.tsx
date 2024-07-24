import { getAllUsers } from "@/helpers/userHelpers";
import { UserData } from "@/types/UserData";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import SendMessageModal from "../Modals/SendMessageModal";
import ExpirationModal from "../Modals/ExpirationModal";

const UsersList = () => {
  const [usersList, setUsersList] = useState<UserData[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      if (users) {
        setUsersList(users);
      } else {
        setExpirationModal(true);
      }
    };

    fetchUsers();
  }, []);

  const handleSelectUser = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const columns: TableColumn<UserData>[] = [
    {
      name: "Seleccionar",
      cell: (row) => (
        <input
          type="checkbox"
          checked={selectedUsers.includes(row.id)}
          onChange={() => handleSelectUser(row.id)}
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
          <DataTable columns={columns} data={usersList} pagination />
        )}
      </div>
      <button
        className={`mt-4 p-2 ${
          selectedUsers.length === 0
            ? "bg-gray-400 text-sm font-bold text-gray-500 cursor-not-allowed rounded-lg"
            : "bg-blue-900 text-sm font-bold text-white rounded-lg cursor-pointer hover:bg-blue-600"
        }`}
        disabled={selectedUsers.length === 0}
        onClick={() => setIsModalOpen(true)}
      >
        Enviar mensaje
      </button>
      {isModalOpen && (
        <SendMessageModal
          onClose={() => setIsModalOpen(false)}
          selectedUsers={selectedUsers.map((id) =>
            usersList.find((user) => user.id === id)
          )}
        />
      )}
      {expirationModal && <ExpirationModal />}
    </div>
  );
};

export default UsersList;
