import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { SheetClose } from "./ui/sheet";

interface MainNavProps {
  items?: NavItem[];
  divClasses?: string;
  linkClasses?: string;
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <div className="gap-6 md:gap-10 hidden md:flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavbarItems items={items} />
    </div>
  );
}

export const NavbarItems = ({ items, divClasses, linkClasses }: MainNavProps) => {
  return items?.length ? (
    <nav className={cn("flex gap-6", divClasses)}>
      {items?.map(
        (item, index) =>
          item.href &&
          (divClasses || linkClasses ? (
            <SheetClose asChild>
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-gray-600 dark:text-slate-400",
                  item.disabled && "cursor-not-allowed opacity-80",
                  linkClasses
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          ) : (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium text-gray-600 dark:text-slate-400",
                item.disabled && "cursor-not-allowed opacity-80",
                linkClasses
              )}
            >
              {item.title}
            </Link>
          ))
      )}
    </nav>
  ) : null;
};
