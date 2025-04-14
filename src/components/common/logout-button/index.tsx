// components/LogoutButton.tsx
import React from "react";
import { auth } from "../../../../config/firebase.config"; // Use named import
import { useRouter } from "next/router";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Use the `auth` instance to sign out
      console.log("User logged out");
      router.push("/login"); // Redirect to the login page after logout
    } catch (err: any) {
      console.error("Error signing out: ", err.message);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
