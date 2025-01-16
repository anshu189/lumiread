import { Navbar as NextUINavbar, NavbarBrand } from "@nextui-org/navbar";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";
import {Switch} from "@nextui-org/switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export const Navbar = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const { setTheme } = useTheme();
  
  const handleThemeToggle = (value: boolean) => {
    setIsSelected(value);
    setTheme(value ? "light" : "dark");
  };

  useEffect(() => {
    handleThemeToggle(isSelected);
  }, []);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent md:mb-0 mb-16">
      <NavbarBrand className="flex justify-start md:justify-center items-center pt-2 bg-transparent">
        <Link className="funnel-display p-1" href="/">
          <Chip color="secondary" variant="dot" size="lg">
            Lumiread
          </Chip>
        </Link>
      </NavbarBrand>
      <Switch isSelected={isSelected} onValueChange={handleThemeToggle} color="primary" size="sm"/>
    </NextUINavbar>
  );
};
