import React from "react";
import Item from "./Item";
import Carousel from "react-material-ui-carousel";
import { homeHeroLinks } from "../../types/constants";
import { CarouselItem } from "../../types/interfaces";


const HomeHeroCarousel: React.FC = () => {

  return (
    <Carousel className="max-lg:hidden">
      {homeHeroLinks.map((item: CarouselItem) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default HomeHeroCarousel;
