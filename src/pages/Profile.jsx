import useUser from "../hooks/useUser";
import { useForgotPasswordMutation } from "../../redux-store/apis/authApi";

import { FaUserCircle } from "react-icons/fa";
import EditProfile from "../components/Profile/EditProfile";
import ForgotPasswordModal from "../components/Auth/ForgotPasswordModal";
import Layout from "../containers/Layout";

export default function Profile() {
  const { userData } = useUser();
  const [forgotPassword, { isLoading, data }] = useForgotPasswordMutation();
  console.log("data", data);

  const openEditProfileHandler = () => {
    document.getElementById("edit-profile").showModal();
  };

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await forgotPassword({
        email: userData?.user?.email,
      }).unwrap();
      if (response?.message) {
        document.getElementById("forgot-password").showModal();
        localStorage.setItem("resetToken", response?.resetToken);
      }
      console.log("Forgot password response", response);
    } catch (error) {
      console.error("Forgot password error", error);
    }
  };

  return (
    <Layout>
      <div className="my-8 text-center">
        <div className="space-y-4 flex flex-col items-center">
          {userData?.user?.profilePic ? (
            <img
              src={userData?.user?.profilePic}
              alt={userData?.user?.name}
              height={100}
              width={100}
              className="rounded-full object-cover w-64 h-64"
            />
          ) : (
            <FaUserCircle size={100} className="w-64 h-64" />
          )}
          <div>
            <h1 className="text-2xl font-semibold text-cyan-300">
              {userData?.user?.name}
            </h1>
            <p className="text-teal-600">{userData?.user?.email}</p>
            <p className="text-teal-600">{userData?.user?.mobileNumber}</p>
            <p className="text-teal-600">{userData?.user?.gender}</p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="btn btn-info w-40"
              onClick={openEditProfileHandler}
            >
              Edit Profile
            </button>
            {isLoading ? (
              <button className="btn btn-info w-40">
                <span className="loading loading-dots loading-lg"></span>
              </button>
            ) : (
              <button
                type="button"
                disabled={isLoading}
                className="btn btn-info w-40"
                onClick={forgotPasswordHandler}
              >
                Forgot Password
              </button>
            )}
          </div>
        </div>
      </div>
      <EditProfile />
      <ForgotPasswordModal message={data?.message} />
    </Layout>
  );
}
