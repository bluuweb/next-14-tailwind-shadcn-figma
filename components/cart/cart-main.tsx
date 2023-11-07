import { Beaker, Clock } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import CartHeader from "./cart-header";
import CartIngredient from "./cart-ingredient";

const CartMain = () => {
  return (
    <div className="mt-20">
      <Image
        src="/images/cart-burger.png"
        width={325}
        height={310}
        alt="Cart Burger"
        className="mx-auto"
      />
      <section className="flex justify-between mt-8">
        <CartHeader
          text="7 min"
          icon={Clock}
          iconColor="green"
        />
        <CartHeader
          text="60 oz"
          icon={Beaker}
          iconColor="orange"
        />
        <CartHeader
          text="249 kcal"
          icon={Clock}
          iconColor="red"
        />
      </section>
      <Button className="group w-full bg-rose-50 rounded-2xl mt-8 text-base hover:bg-rose-500">
        <span className="group-hover:text-white text-red-500">
          + Tomato Ketchup
        </span>
        <Badge className="bg-red-500 ml-2 group-hover:bg-black">0.2 oz</Badge>
      </Button>

      <section className="grid grid-cols-2 gap-x-8 mt-8">
        <CartIngredient
          src="/images/burger/sm/cutlet.png"
          alt="Cutlet Burger"
          title="Cutlet"
        />

        <CartIngredient
          src="/images/burger/sm/mayo.png"
          alt="Cutlet Burger"
          title="Mayo"
        />
      </section>

      <section>
        <p className="text-indigo-700 text-4xl font-extrabold text-center mt-8">
          $12.95
        </p>
        <Button className="w-full bg-indigo-700 rounded-full mt-8 text-xl py-8">
          Checkout
        </Button>
      </section>
    </div>
  );
};
export default CartMain;
