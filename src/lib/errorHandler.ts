// utils/errorHandler.ts
import { toast } from "sonner";

export function handleApiError(error: any) {
  const message = error?.data?.message;
  console.log("API Error:", message);

  const fallbackMessage = error?.message;

  // Handle unauthorized/network issues
  if (
    (typeof message === "string" && message.startsWith("Unauthorized")) ||
    (typeof fallbackMessage === "string" && fallbackMessage.startsWith("Unauthorized")) ||
    message === "Missing Authorization Header"
  ) {
    toast.error("Session expired. Please log in again.");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  
    return;
  }

  // Handle array of messages
  if (Array.isArray(message)) {
    message.forEach((msg) => toast.error(msg));
    return;
  }

  // Handle single string message
  if (typeof message === "string") {
    toast.error(message);
    return;
  }

  // Handle fallback error message
  if (typeof fallbackMessage === "string") {
    toast.error(fallbackMessage);
    return;
  }

}