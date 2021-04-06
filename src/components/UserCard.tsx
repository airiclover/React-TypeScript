import { VFC } from "react";
import { UserPrf } from "./types/userPrf";

type Props = {
  user: UserPrf;
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px",
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
