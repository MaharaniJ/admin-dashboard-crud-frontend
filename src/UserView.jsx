import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

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
      let user = await axios.get(
        `https://645cd360e01ac61058945382.mockapi.io/users/${params.id}`
      );
      setUserData(user.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      {userData.username && (
        <>
          <h2>Username: {userData.username}</h2>
          <h2>Subject: {userData.subject}</h2>
          <h2>Book Name: {userData.bookname}</h2>
          <h2>User ID: {userData.userid}</h2>
          <h2>Admission Date: {userData.admissionon}</h2>
          <h2>Book ID: {userData.bookid}</h2>
        </>
      )}
    </div>
  );
}

export default UserView;

//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     loadUser();
//   }, []);
//   let loadUser = async () => {
//     try {
//       let user = await axios.get(
//         `https://645cd360e01ac61058945382.mockapi.io/users/${params.id}`
//       );
//       setUserData(user.data);
//     } catch (error) {}
//   };

//   return (
//     <div>
//       <h1>{userData.name}</h1>
//       <h1>{userData.position}</h1>
//       <h1>{userData.office}</h1>
//       <h1>{userData.age}</h1>
//       <h1>{userData.startdate}</h1>
//       <h1>{userData.salary}</h1>
//     </div>
//   );
// }

// export default UserView;
