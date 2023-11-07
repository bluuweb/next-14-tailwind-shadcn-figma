import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartIngredientProps {
  src: string;
  alt: string;
  title: string;
}

const CartIngredient = ({ src, alt, title }: CartIngredientProps) => {
  return (
    <Card className="rounded-[3rem]">
      <CardHeader>
        <Image
          src={src}
          width={104}
          height={37}
          alt={alt}
          className="mx-auto"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="rounded-full p-2 bg-[#F5F5FF] group">
          <Plus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>
        <span className="text-xl font-bold">0</span>
        <Button className="rounded-full p-2 bg-[#F5F5FF] group">
          <Minus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CartIngredient;
