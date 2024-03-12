"use strict";
interface CarouselProps {
  items: any[];
}

import CardDetails from "./CardDetails";
import React, { useState } from "react";

export default function CarouselDefault({ items }: CarouselProps) {
  const [activeItem, setActiveItem] = useState(items.length - 1);

  return (
    <div id="default-carousel" className="w-full" data-carousel="slide">
      <div className="rounded-lg sm:overflow-visible">
        <div className="duration-700 ease-in-out" data-carousel-item>
          {items.map((item, index) => (
            <div
              className={`${
                index === activeItem ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
              key={index}
            >
              <CardDetails
                key={index}
                title={item.title}
                img={item.img}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="flex space-x-6 overflow-x-auto">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.img}
            className="w-20 h-20 cursor-pointer rounded-lg object-cover"
            onClick={() => setActiveItem(index)}
          />
        ))}
      </div>
    </div>
  );
}
// TODO: Create a carousel component that takes in an array of items and renders them in a carousel
