import React from "react";
import UserTable from "../user-table";
import { UserData } from "@/FakeData/userListData";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
    return (
        <div className="inventory-list">
            <UserTable items={UserData} heading="Users List" />
        </div>
	);
};

export default UserList;


