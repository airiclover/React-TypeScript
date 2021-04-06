import "./App.css";

import { UserCard } from "./components/UserCard";
import { userAllUsers } from "./hools/useAllUsers";

export default function App() {
  const { getUsers, userPrf, loding, error } = userAllUsers();

  const onClickFechUser = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFechUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得失敗</p>
      ) : loding ? (
        <p>Loading...</p>
      ) : (
        <>
          {userPrf.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
