"use client";

import IconLogo from "@/components/icons/icon-logo";
import { Phone } from "lucide-react";
import IconMenu from "./icons/icon-menu";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-between items-center sm:gap-x-10 sm:justify-start py-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-gray-100"
        >
          <IconLogo />
        </Button>

        <Link
          href="/"
          className={cn(
            "hidden sm:block pb-3",
            pathname === "/" && "border-b-4 border-indigo-500 font-medium"
          )}
        >
          Discover
        </Link>

        <Link
          href="/make"
          className={cn(
            "hidden sm:block pb-3",
            pathname === "/make" && "border-b-4 border-indigo-500 font-medium"
          )}
        >
          Make Your Burger
        </Link>

        <Button className="rounded-full bg-rose-50 text-red-500 hover:bg-rose-500 hover:text-rose-50 sm:ml-auto">
          <Phone className="mr-2 h-4 w-4" />
          Call Me Back
        </Button>

        <Link
          href="tel:+88004378722"
          className="hidden sm:block font-medium"
        >
          8 800 437-87-22
        </Link>

        <Button
          className="rounded-full hidden sm:block"
          variant={"secondary"}
        >
          😅
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-100 sm:hidden"
            >
              <IconMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};
export default Navbar;
