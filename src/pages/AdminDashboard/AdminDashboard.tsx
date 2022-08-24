import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminDashboard() {
  const { userEmail } = useSelector((state: any) => state.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (userEmail !== "admin@admin") {
      navigate("/");
      const notify = () =>
        toast.error("شما دسترسی به این بخش ندارید", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
    }
    // eslint-disable-next-line
  }, [userEmail]);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      <div>AdminDashboard</div>
    </>
  );
}

export default AdminDashboard;
