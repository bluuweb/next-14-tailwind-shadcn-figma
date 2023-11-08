import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Ingredient } from "../interfaces/ingredient.type";

interface CartIngredientProps {
  ingredient: Ingredient;
  addIngredient: (id: string) => void;
  removeIngredient: (id: string) => void;
}

const MakeIngredient = ({
  ingredient,
  addIngredient,
  removeIngredient,
}: CartIngredientProps) => {
  const { alt, id, image, name, quantity, price, rotate } = ingredient;

  return (
    <Card className="rounded-[3rem]">
      <CardHeader>
        <Image
          src={image}
          width={104}
          height={37}
          alt={alt}
          className={cn("mx-auto h-[30px]", rotate && "-rotate-12")}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold text-center">{name}</h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => removeIngredient(id)}
          className="rounded-full p-2 bg-[#F5F5FF] group"
        >
          <Minus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>
        <span className="text-xl font-bold">{quantity}</span>
        <Button
          onClick={() => addIngredient(id)}
          className="rounded-full p-2 bg-[#F5F5FF] group"
        >
          <Plus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default MakeIngredient;
