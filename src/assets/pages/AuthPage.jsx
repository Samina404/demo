import React, { useState } from "react";
import { loginUser, loginFoodPartner } from "../../services/api.js";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      console.log("User logged in:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "user");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handlePartnerLogin = async () => {
    try {
      const res = await loginFoodPartner({ email, password });
      console.log("Food Partner logged in:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "foodPartner");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2"
      />

      <div className="flex gap-4 mt-4">
        <button onClick={handleUserLogin} className="bg-indigo-600 text-white px-4 py-2 rounded">
          Login as User
        </button>
        <button
          onClick={handlePartnerLogin}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Login as Partner
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
