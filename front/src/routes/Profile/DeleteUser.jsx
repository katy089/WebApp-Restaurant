import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import appApi from "../../api/appApi";
import { useAuthContext } from "../../context/AuthProvider";
import { BiSolidUserMinus } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

const DeleteUser = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setLogIn } = useAuthContext();
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    if (!password) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Please enter your password to delete the user.",
      });
      return;
    }
    Swal.fire({
      title: "You're sure?",
      text: "You won't be able to reverse this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete user",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await appApi.delete("/user", {
            data: { password },
          });

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "User successfully deleted!",
          }).then(() => {
            setLogIn(false);
            navigate("/registro");
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Could not delete user",
          });
        }
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="mx-auto max-w-md">
      <h1 className="mb-4 text-start text-2xl">Delete User</h1>
      <div className="flex relative">
        <div className="flex items-center w-full gap-2">
          <BiSolidUserMinus className="mt-2 text-gray-500" size={30} />
          <input
            className="p-2 mt-1 w-full rounded-md border text-gray-500 border-gray-500 shadow-sm focus:border-gray-300  focus:ring-gray-200 focus:ring-opacity-50 h-10"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-4 right-3"
          >
            {showPassword ? (
              <MdOutlineVisibilityOff />
            ) : (
              <MdOutlineVisibility />
            )}
          </button>
          <label
            className="absolute top-[-10px] text-gray-500 font-bold px-2 left-[calc(50%-50px)] bg-white"
            htmlFor="User name:"
          >
            Password:
          </label>
        </div>
      </div>
      <div className="text-end">
        <button
          className="w-3/6 bg-red-500 text-white mt-4 py-2 px-4 rounded-xl hover:bg-red-700 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          onClick={handleDeleteUser}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default DeleteUser;
