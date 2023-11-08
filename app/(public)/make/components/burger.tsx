"use client";

import Image from "next/image";
import { Ingredient } from "../interfaces/ingredient.type";

interface Props {
  burger: Ingredient[];
}

const MakeBurger = ({ burger }: Props) => {
  return (
    <div className="bg-[url('/images/make/bg.png')] h-[550px] w-full bg-contain bg-no-repeat bg-center relative flex justify-center">
      {burger.map(({ alt, id, image, name, price, quantity, rotate }, i) => (
        <>
          {i === burger.length - 1 && (
            <Image
              src="/images/make/bun_top.png"
              alt="burger bun top"
              width={1000}
              height={300}
              className="absolute z-20"
              style={{
                bottom: `${(i + 2) * 40}px`,
              }}
            />
          )}
          <Image
            key={id}
            src={image}
            alt={alt}
            width={1000}
            height={300}
            className="absolute z-10"
            style={{
              bottom: `${(i + 1) * 40}px`,
            }}
          />
        </>
      ))}

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
