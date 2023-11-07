import { cn } from "@/lib/utils";

interface CartHeaderProps {
  text?: string;
  icon: React.ElementType;
  iconColor?: "purple" | "orange" | "red" | "green" | "blue" | "yellow";
}

const CartHeader = ({
  text,
  icon: Icon,
  iconColor = "purple",
}: CartHeaderProps) => {
  const colorVariants: Record<string, string> = {
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
    yellow: "bg-yellow-600",
  };

  const colorVariantsIcon: Record<string, string> = {
    purple: "stroke-purple-600",
    orange: "stroke-orange-600",
    red: "stroke-red-600",
    green: "stroke-green-600",
    blue: "stroke-blue-600",
    yellow: "stroke-yellow-600",
  };

  const baseBgIconColor =
    "bg-purple-600 h-8 w-8 rounded-full grid place-items-center";
  const baseIconColor = "stroke-purple-600 fill-white";

  return (
    <article className="flex items-center gap-x-2">
      <span className={cn(baseBgIconColor, colorVariants[iconColor])}>
        <Icon className={cn(baseIconColor, colorVariantsIcon[iconColor])} />
      </span>
      <span className="font-bold">{text}</span>
    </article>
  );
};
export default CartHeader;
