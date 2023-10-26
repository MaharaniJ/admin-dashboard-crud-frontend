import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { env } from "./config";

function UserView() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/user/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      setUserData(user.data);
    } catch (error) {}
  };

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>{userData.position}</h1>
      <h1>{userData.office}</h1>
      <h1>{userData.age}</h1>
      <h1>{userData.startdate}</h1>
      <h1>{userData.salary}</h1>
    </div>
  );
}

export default UserView;
