import axiosInstance from "./axiosInstance";
import { MessageData, SendMessageData } from "@/types/MessageData";

export const getMessages = async (
  accessToken: string
): Promise<MessageData[]> => {
  const response = await axiosInstance.get("/messages", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const updateMessageStatus = async (
  id: number,
  accessToken: string
): Promise<MessageData> => {
  const response = await axiosInstance.patch(
    `/messages/${id}/status`,
    { status: "READ" },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const sendMessage = async (
  messageData: SendMessageData
): Promise<void> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) throw new Error("Access token is missing");

  const response = await axiosInstance.post("/messages", messageData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.status.toString().startsWith("2")) {
    throw new Error("Failed to send message");
  }
};
