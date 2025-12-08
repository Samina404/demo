import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("/api/foods").then((res) => setFoods(res.data.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Available Foods</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <Link
            key={food._id}
            to={`/foods/${food._id}`}
            className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">{food.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">${food.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
