import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedInTemporary } = useSelector((state) => state.auth);
  const isLoggedInPersisted = user.isLoggedInPersisted;
  const isLoggedTemporary = isLoggedInTemporary;
  const isLoggedCondition =
    isLoggedInPersisted === "true" || isLoggedTemporary === "true";
  const uid = user.id;

  return (
    <>
      <div className="text-center mt-5">
        <h2 className="text-2xl font-medium">Main Page</h2>
        <p className="text-xl mt-2">
          Do fugiat consectetur culpa labore ipsum dolore enim dolore mollit
          esse cillum.
        </p>
        {isLoggedCondition ? (
          <>
            <div className="text-lg relative mt-5 left-0 right-0">
              <p className="mb-5">YOUR UID: {uid}</p>
              <button
                onClick={() => dispatch(logout())}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mt-5 space-x-4">
              <button
                onClick={() => navigate("/register")}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
              >
                Sign Up
              </button>
              <br />
              <button
                onClick={() => navigate("/login")}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
              >
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
