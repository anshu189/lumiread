import { Navbar as NextUINavbar, NavbarBrand } from "@nextui-org/navbar";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarBrand className="flex justify-center items-center pt-2">
        <Link className="font-display p-1" href="/">
          <Chip color="secondary" variant="dot" size="lg">
            Lumiread
          </Chip>
        </Link>
      </NavbarBrand>
    </NextUINavbar>
  );
};
