"use client";

import Image from "next/image";
import { BurgerItem } from "../interfaces/burgerItem.type";

interface Props {
  burger: BurgerItem[];
}

const MakeBurger = ({ burger }: Props) => {
  return (
    <div className="bg-[url('/images/make/bg.png')] h-[550px] w-full bg-contain bg-no-repeat bg-center relative flex flex-col justify-center">
      {burger.map(
        ({ alt, image }, index) => (
          <div className="w-full" key={index}>
            {index === burger.length - 1 && (
              <Image
                src="/images/make/bun_top.png"
                alt="burger bun top"
                width={1000}
                height={300}
                className="absolute z-20"
                style={{
                  bottom: `${(index + 2) * 40}px`,
                }}
              />
            )}
            <Image
              src={image}
              alt={alt}
              width={1000}
              height={300}
              className="absolute z-10"
              style={{
                bottom: `${(index + 1) * 40}px`,
              }}
            />



          </div>
        )
      )}

      <Image
        src="/images/make/bun.png"
        alt="burger bun"
        width={1000}
        height={300}
        className="absolute bottom-0"
      />



    </div>
  );
};
export default MakeBurger;
