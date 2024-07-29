import axiosInstance from "./axiosInstance";
import { MessageData, SendMessageData } from "@/types/MessageData";
import { TokenExpiredError } from "./userHelpers";

export const getMessages = async (): Promise<MessageData[] | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  try {
    const response = await axiosInstance.get("/messages", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new TokenExpiredError();
    }
    console.error("Error fetching messages:", error);
    return null;
  }
};

export const updateMessageStatus = async (
  id: number
): Promise<MessageData | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  try {
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
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new TokenExpiredError();
    } else if (error.response && error.response.status === 404) {
      return null;
    } else {
      console.error(`Failed to update message: ${error.response.statusText}`);
      return null;
    }
  }
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
