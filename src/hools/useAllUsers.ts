//全ユーザー一覧を取得するカスタムフック

import axios from "axios";
import { useState } from "react";
import { User } from "../components/types/api/user";
import { UserPrf } from "../components/types/userPrf";

export const userAllUsers = () => {
  const [userPrf, setUserPrf] = useState<Array<UserPrf>>([]);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoding(true);
    setError(false);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserPrf(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  return { getUsers, userPrf, loding, error };
};
