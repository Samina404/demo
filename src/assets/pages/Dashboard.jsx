import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [role, setRole] = useState("user"); // or "foodPartner"

  useEffect(() => {
    // fake role detection: ideally decode token here
    const token = localStorage.getItem("token");
    if (token && localStorage.getItem("isFoodPartner") === "true") {
      setRole("foodPartner");
    } else {
      setRole("user");
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        {role === "foodPartner" ? "Food Partner Dashboard" : "User Dashboard"}
      </h1>

      {role === "foodPartner" ? (
        <div className="space-y-4">
          <Link to="/foods/new" className="block p-4 bg-blue-600 text-white rounded-lg">➕ Add Food</Link>
          <Link to="/foods" className="block p-4 bg-green-600 text-white rounded-lg">📋 Manage Foods</Link>
        </div>
      ) : (
        <div className="space-y-4">
          <Link to="/foods" className="block p-4 bg-blue-600 text-white rounded-lg">🍽️ Browse Foods</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
