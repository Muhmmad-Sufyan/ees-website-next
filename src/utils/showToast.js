import { toast } from "react-toastify";

const styles = {
  success: {
    style: {
      background: "#28a745",
      color: "#fff",
    },
    progressStyle: {
      background: "rgba(255, 255, 255, 0.4)",
    },
  },
  error: {
    style: {
      background: "#e74c3c",
      color: "#fff",
    },
    progressStyle: {
      background: "rgba(255, 255, 255, 0.4)",
    },
  },
};

export default function showToast(status, message) {
  if (status === "success") {
    toast.success(message, styles.success);
  } else if (status === "error") {
    toast.error(message, styles.error);
  }
}
