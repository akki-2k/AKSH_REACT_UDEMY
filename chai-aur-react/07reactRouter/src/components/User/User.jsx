import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="bg-gray-700 text-white p-4 text-4xl text-center">
        User: {userid}
      </h1>
    </>
  );
}

export default User;
