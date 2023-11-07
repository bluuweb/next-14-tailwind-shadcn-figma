import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="hidden sm:flex sm:gap-x-4 py-8">
      <p className="">{year}. Make Your Burger</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <Image
        src="/images/footer/payment.png"
        width={293}
        height={24}
        alt="payment methods"
        className="sm:ml-auto"
      />
    </div>
  );
};
export default Footer;
