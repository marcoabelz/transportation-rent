import { toast } from "react-toastify";

export default function ShowToastError(error) {
  toast.error(error, {
    position: "top-right",
    autoClose: true,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      background: "linear-gradient(to right, #00a0a9, #699cd3)",
      color: "white",
    },
  });
}

// import { toast } from "react-toastify";

// export default function showToast(message = "Something went wrong") {
//   toast.error(message, {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   });
// }
