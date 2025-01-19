// Login.tsx
import { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../../../config/firebase.config"; // Import Firebase auth
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  // Handle email/password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect after successful login
    } catch (err: any) {
      setError("Invalid email or password.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err: any) {
      setError("Google login failed.");
    }
  };

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push("/");
      toast.success("Login Success")
    } catch (err: any) {
      setError("Facebook login failed.");
      toast.error("Login failed")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        {/* Display error message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Email input */}
        <input
          type="email"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full p-3 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 transition duration-200"
        >
          Login with Google
        </button>

        {/* Facebook login button */}
        <button
          onClick={handleFacebookLogin}
          className="w-full p-3 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700 transition duration-200"
        >
          Login with Facebook
        </button>

        {/* Signup link */}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
          <Link href='/forgot-password'>Forgot Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
