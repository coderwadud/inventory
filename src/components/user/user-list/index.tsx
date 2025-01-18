import React from "react";
import { UserData } from "@/FakeData/userListData";
import UserTable from "../user-table";
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


