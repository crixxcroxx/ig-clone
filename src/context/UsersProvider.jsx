import { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import shapeData from "../utils/shapeData";

import UsersContext from "./UsersContext";

const UsersProvider = ({ children }) => {
  const {
    data ,
    loading,
    error
  } = useFetch(false, "user", false, 100);

  const [USERS_DB, setUSERS_DB] = useState(null);
  const [USER_ID, setUSER_ID] = useState(null);

  useEffect(() => {
    let { finalArray, userId } = shapeData(data)

    setUSERS_DB(finalArray)
    setUSER_ID(userId)
  }, [data]);

  return (
    <>
      {loading && <div>Loading</div>}
      {error && <div>Something went wrong</div>}
      {!loading && !error &&
        <UsersContext.Provider value={{ USERS_DB, USER_ID }}>
          { children }
        </UsersContext.Provider>
      }
    </>
  );
}

export default UsersProvider;