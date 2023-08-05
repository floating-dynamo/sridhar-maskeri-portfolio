import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/nav";
import { NavbarItems } from "./main-nav";
import { Icons } from "./icons";

interface MobileNavProps {
  items?: NavItem[];
  divClasses?: string;
  linkClasses?: string;
}

const MobileNav = ({ items, divClasses, linkClasses }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="flex flex-col items-center">
          <Icons.logo className="h-12 w-12 mb-5" />
          <SheetTitle>Sridhar Maskeri</SheetTitle>
          <SheetDescription>SWE | Web Developer | Graphic Designer</SheetDescription>
        </SheetHeader>
        <div className="flex gap-4 py-4 flex-col h-2/3 mt-10">
          <NavbarItems items={items} divClasses={divClasses} linkClasses={linkClasses} />
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
          {/* <SheetDescription>Sridhar Maskeri ©️ 2023-2024</SheetDescription> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
