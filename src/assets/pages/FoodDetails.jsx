import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    axios.get(`/api/foods/${id}`).then((res) => setFood(res.data.data));
  }, [id]);

  if (!food) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <img src={food.image} alt={food.name} className="w-full h-60 object-cover rounded-lg" />
        <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-100">{food.name}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{food.description}</p>
        <p className="mt-4 text-xl font-semibold text-blue-600">${food.price}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
