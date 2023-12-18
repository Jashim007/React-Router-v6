import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./../context/MyContext";
const Profile = () => {
  const { isAuthorized } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized) navigate("/");
  }, [isAuthorized, navigate]);

  return (
    <>
      <div className="p-10 m-10 border border-blue-700 flex items-center justify-center bg-blue-500 text-white rounded-md">
        <div className="text-2xl font-bold">Profile Page is a protected route</div>
      </div>
    </>
  );
};

export default Profile;
