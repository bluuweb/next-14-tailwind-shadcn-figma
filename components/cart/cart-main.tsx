import { Beaker, Clock } from "lucide-react";
import Image from "next/image";
import CartHeader from "./cart-header";

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
    </div>
  );
};
export default CartMain;
