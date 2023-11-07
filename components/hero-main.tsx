import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroMain = () => {
  return (
    <div className="mt-20 sm:mt-0 sm:flex sm:items-center sm:max-h-[735px]">
      <h1 className="text-gray-800 text-5xl font-medium sm:w-1/3">
        <span className="">Make Your Burger</span>
      </h1>
      <p className="text-gray-800 text-xl font-normal leading-loose mt-5 sm:hidden">
        Parallax screen. Burger ingredients and emojis moving depending on the
        position of the mouse pointer.
      </p>
      <div className="relative flex justify-center items-center sm:grow sm:w-2/3">
        <Link
          href="/make"
          className="absolute sm:top-[500px] sm:left-0"
        >
          <Button className="w-32 h-32 rounded-full uppercase text-xl">
            make burger
          </Button>
        </Link>
        {/* <Image
          src="/images/bg-burger.png"
          alt="Burger background"
          width={375}
          height={520}
          className="mx-auto"
        /> */}
        <Image
          src="/images/sm-bg-burger.png"
          alt="Burger background"
          width={973}
          height={934}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
export default HeroMain;
