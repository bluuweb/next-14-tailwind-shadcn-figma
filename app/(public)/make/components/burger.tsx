"use client";

import Image from "next/image";
import { BurgerItem } from "../interfaces/burgerItem.type";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  burger: BurgerItem[];
}

const MakeBurger = ({ burger }: Props) => {
  let position = 50
  let lastWasSmall = false;
  // const [position, setPosition] = useState(50)
  return (
    <div className="bg-[url('/images/make/bg.png')] h-[550px] w-full bg-contain bg-no-repeat bg-center relative flex flex-col justify-center">
      {burger.map(
        ({ alt, image, small, placement }, index) => {
          if (index > 0) {
            if (lastWasSmall) {
              position += small ? 10 : 30
            } else {

              position += small ? 12 : 35
            }
            if (small) {
              lastWasSmall = true
            }

          }
          return (
            <div className="w-full" key={index}>
            {index === burger.length - 1 && (
              <Image
                  src="/images/make/bun_top.png"
                alt="burger bun top"
                width={1000}
                height={300}
                  className="absolute z-20"
                style={{
                  bottom: `${position + 25}px`,
                }}
              />
            )}

            <Image
              src={image}
              alt={alt}
                width={small ? 200 : 1000}
                height={small ? 100 : 300}
                className={cn("absolute", placement)}
              style={{
                bottom: `${position}px`,
                zIndex: index + 1 
              }}
            />



          </div>
          )

        }
      )}

      <Image
        src="/images/make/bun.png"
        alt="burger bun"
        width={1000}
        height={300}
        className="absolute bottom-0 z-0"
      />



    </div>
  );
};
export default MakeBurger;
