import React from "react";
import { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  /* const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/akki-2k")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); */
  return (
    <>
      <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
        URL of {data.name} is: {data.url}
        <img
          src={data.avatar_url}
          width={200}
          className="mt-4 place-self-center rounded-full"
        />
      </div>
    </>
  );
}
export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/akki-2k");
  return response.json();
};
