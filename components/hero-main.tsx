import Image from "next/image";
import { Button } from "./ui/button";

const HeroMain = () => {
  return (
    <div className="mt-20">
      <h1 className="text-gray-800 text-5xl font-medium ">Make Your Burger</h1>
      <p className="text-gray-800 text-xl font-normal leading-loose mt-5">
        Parallax screen. Burger ingredients and emojis moving depending on the
        position of the mouse pointer.
      </p>
      <div className="relative flex justify-center items-center">
        <Button className="w-32 h-32 rounded-full uppercase text-xl absolute">
          make burger
        </Button>
        <Image
          src="/images/bg-burger.png"
          alt="Burger background"
          width={375}
          height={520}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
export default HeroMain;
