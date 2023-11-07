import CartMain from "@/components/cart/cart-main";
import HeroMain from "@/components/hero-main";

const HomePage = () => {
  return (
    <main>
      <HeroMain />
      <div className="sm:hidden">
        <CartMain />
      </div>
    </main>
  );
};
export default HomePage;
