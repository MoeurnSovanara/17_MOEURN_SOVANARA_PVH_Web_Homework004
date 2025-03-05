import React from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import {learningMaterials} from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {learningMaterials.map((item) => (
        <div className="space-y-3">
        <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
          <img
            src={item.image}
            alt={item.title}
            width={50}
            height={50}
            className="rounded-xl"	
          />

          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-base font-medium">{item.title}</p>
              <Star size={20} />
            </div>
            <p className="text-gray-400 text-sm">{item.postedAt}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
