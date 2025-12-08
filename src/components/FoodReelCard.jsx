import React, { useState } from "react";
import { Heart, Bookmark, MapPin } from "lucide-react";

const FoodReelCard = ({ food }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-64 flex-shrink-0 m-2">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-bold text-lg">{food.name}</h3>
        <p className="text-gray-300 text-sm">{food.restaurantName}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`${liked ? "text-red-500" : "text-gray-400"} transition`}
            >
              <Heart size={20} />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`${saved ? "text-yellow-400" : "text-gray-400"} transition`}
            >
              <Bookmark size={20} />
            </button>
          </div>
          <a
            href={`/restaurant/${food.restaurantId}`}
            className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition text-sm flex items-center gap-1"
          >
            <MapPin size={16} /> Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodReelCard;
