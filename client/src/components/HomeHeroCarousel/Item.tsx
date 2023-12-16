import React from "react";
import { CarouselItem } from "../../types/interfaces";
import { Paper, Button } from "@mui/material";

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper className="mt-10">
      <div className="relative">
        <img src={item.image} className="w-full h-auto" alt={item.title} />
        <div className="absolute left-0 bottom-0 top-0 w-3/12 leading-loose bg-dutchWhite bg-opacity-90 p-4">
          <div className="flex flex-col items-center p-10 ">
            <div className="flex h-full flex-col gap-y-12 items-center">
              <h1 className="flex text-4xl  text-onyx flex-row font-bold font-mukta">
                Curate your perfect
              </h1>
              <h2 className="text-4xl font-bold  text-rosyBrown flex-row">{item.title}</h2>
              <h3 className="flex font-md  text-onyx ">{item.description}</h3>
              <div className="flex flex-row text-center mt-4">
                <button className="bg-rosyBrown rounded-md p-3">
                  Create Your Event!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Item;
