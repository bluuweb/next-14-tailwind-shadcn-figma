import CartHeader from "@/components/cart/cart-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Beaker, Clock } from "lucide-react";
import { Ingredient } from "../interfaces/ingredient.type";

interface MakeCartProps {
  ingredients: Ingredient[];
}

export const MakeCart = ({ ingredients }: MakeCartProps) => {
  const total = ingredients.reduce((acc, item) => {
    return acc + item.price! * item.quantity;
  }, 0);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-medium mb-4">Summary</h2>
      <Separator className="mb-4" />
      <div className="grid grid-cols-2">
        <p className="font-extrabold text-2xl text-indigo-500">
          ${total.toFixed(2)}
        </p>
        <Button
          className="bg-indigo-500 rounded-full"
          disabled={total === 0}
        >
          Checkout
        </Button>
      </div>
      <section className="flex justify-between mt-8 bg-indigo-100 p-4 rounded-full">
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
