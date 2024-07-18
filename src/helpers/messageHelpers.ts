import { MessageData } from "@/types/MessageData";

export async function getMessages(accessToken: string): Promise<MessageData[]> {
  try {
    const response = await fetch("http://localhost:8000/messages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
}

export const updateMessageStatus = async (
  id: number,
  accessToken: string
): Promise<MessageData> => {
  const response = await fetch(`http://localhost:8000/messages/${id}/status`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "READ" }),
  });
  return response.json();
};
