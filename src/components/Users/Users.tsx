import { IUser } from "../../types/product.types";

interface IUsers {
  usersData: Array<{ email: string }>;
}

export const Users = ({ usersData }: IUsers) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div data-testid="users">Users</div>
      {usersData.map((user: IUser) => {
        return <div data-testid="singleUser">{user.email}</div>;
      })}
    </div>
  );
};
