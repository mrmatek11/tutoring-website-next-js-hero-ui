"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const LinglowLogo = () => (
  <svg 
    width="120" 
    height="40" 
    viewBox="0 0 101 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-auto transition-all duration-300 hover:scale-105"
  >
    <path 
      d="M7.2 22.65L8.61 23.82V24H0.54V23.82L1.92 22.65V3.69L0.03 3.03V2.85L7.02 0.719999H7.2V22.65ZM11.1206 22.65L11.1506 9.48L9.77063 8.22V8.04H16.4606V9.48L16.4006 22.65L17.7806 23.82V24H9.71063V23.82L11.1206 22.65ZM13.7306 6.21C12.9306 6.21 12.2806 5.99 11.7806 5.55C11.3006 5.09 11.0606 4.49 11.0606 3.75C11.0606 3.03 11.3006 2.45 11.7806 2.01C12.2806 1.57 12.9306 1.35 13.7306 1.35C14.4906 1.35 15.1006 1.57 15.5606 2.01C16.0406 2.45 16.2806 3.03 16.2806 3.75C16.2806 4.49 16.0406 5.09 15.5606 5.55C15.1006 5.99 14.4906 6.21 13.7306 6.21ZM34.4527 22.65L35.8627 23.82V24H27.7927V23.82L29.1727 22.65V13.23C29.1727 11.93 28.6327 11.28 27.5527 11.28C26.8527 11.28 26.2627 11.62 25.7827 12.3V22.65L27.1627 23.82V24H19.0927V23.82L20.5027 22.65V11.43L18.2527 12.54L18.1327 12.39L18.7627 11.49C19.4227 10.55 19.9527 9.84 20.3527 9.36C20.7527 8.86 21.1827 8.45 21.6427 8.13C22.1027 7.81 22.5827 7.65 23.0827 7.65C23.8027 7.65 24.3627 7.9 24.7627 8.4C25.1827 8.9 25.3927 9.76 25.3927 10.98C25.3927 11.38 25.3827 11.7 25.3627 11.94H25.3927C27.4927 9.06 29.0027 7.62 29.9227 7.62C31.5027 7.62 32.6627 8.11 33.4027 9.09C34.1427 10.05 34.5127 11.31 34.5127 12.87L34.4527 22.65Z" 
      fill="currentColor"
      className="transition-all duration-300"
    />
    <path 
      d="M53.7023 9.33C52.6023 9.31 51.5823 9.24 50.6423 9.12C49.7023 8.98 48.7123 8.78 47.6723 8.52L47.5823 8.7C48.7623 9.12 49.6423 9.74 50.2223 10.56C50.8023 11.38 51.0923 12.3 51.0923 13.32C51.0923 14.74 50.6223 15.88 49.6823 16.74C48.7623 17.6 47.7523 18.22 46.6523 18.6C45.5723 18.96 44.7923 19.14 44.3123 19.14C42.7323 19.14 41.3623 18.75 40.2023 17.97C39.9823 18.23 39.8723 18.59 39.8723 19.05C39.8723 20.39 40.9323 21.06 43.0523 21.06L47.4923 21.09C49.0723 21.09 50.2723 21.45 51.0923 22.17C51.9323 22.89 52.3523 23.81 52.3523 24.93C52.3523 26.03 51.9623 27.11 51.1823 28.17C50.4223 29.23 49.3623 30.1 48.0023 30.78C46.6623 31.46 45.1823 31.8 43.5623 31.8C41.7623 31.8 40.1223 31.51 38.6423 30.93C37.1823 30.37 36.1223 29.5 35.4623 28.32C35.3423 28.08 36.5523 26.85 39.0923 24.63C38.2323 24.31 37.5523 23.83 37.0523 23.19C36.5723 22.55 36.3323 21.83 36.3323 21.03C36.3323 20.89 36.4923 20.67 36.8123 20.37C37.1523 20.05 37.7223 19.54 38.5223 18.84L39.8123 17.7C39.1523 17.18 38.6323 16.56 38.2523 15.84C37.8923 15.12 37.7123 14.34 37.7123 13.5C37.7123 12.02 38.1923 10.84 39.1523 9.96C40.1123 9.08 41.1323 8.47 42.2123 8.13C43.2923 7.79 44.0223 7.62 44.4023 7.62C44.7623 7.62 45.3623 7.68 46.2023 7.8C47.2823 7.96 48.1923 8.04 48.9323 8.04H53.7023V9.33ZM45.9623 18.24C46.6023 18.2 46.9223 17.76 46.9223 16.92C46.9223 16.16 46.6723 15.06 46.1723 13.62C45.0523 10.28 43.9023 8.61 42.7223 8.61C42.0423 8.61 41.7023 9.05 41.7023 9.93C41.7023 10.67 41.9523 11.78 42.4523 13.26C43.6123 16.58 44.7823 18.24 45.9623 18.24ZM41.6723 25.11C40.8723 25.11 40.1423 25 39.4823 24.78C39.3023 25.02 39.2123 25.28 39.2123 25.56C39.2123 26.26 39.6723 26.83 40.5923 27.27C41.5123 27.71 42.6023 28.03 43.8623 28.23C45.1223 28.43 46.2923 28.53 47.3723 28.53C48.5123 28.53 49.4423 28.38 50.1623 28.08C50.8823 27.78 51.2423 27.39 51.2423 26.91C51.2423 25.89 49.9123 25.34 47.2523 25.26L41.6723 25.11ZM60.3152 22.65L61.7252 23.82V24H53.6552V23.82L55.0352 22.65V3.69L53.1452 3.03V2.85L60.1352 0.719999H60.3152V22.65ZM70.1222 24.45C68.5822 24.45 67.2222 24.09 66.0422 23.37C64.8622 22.63 63.9522 21.64 63.3122 20.4C62.6722 19.16 62.3522 17.81 62.3522 16.35C62.3522 14.15 62.8622 12.4 63.8822 11.1C64.9222 9.8 66.0522 8.9 67.2722 8.4C68.4922 7.88 69.4222 7.62 70.0622 7.62C71.6022 7.62 72.9622 7.99 74.1422 8.73C75.3422 9.45 76.2622 10.44 76.9022 11.7C77.5422 12.94 77.8622 14.31 77.8622 15.81C77.8622 17.99 77.3422 19.72 76.3022 21C75.2822 22.28 74.1522 23.18 72.9122 23.7C71.6922 24.2 70.7622 24.45 70.1222 24.45ZM72.7922 22.98C73.2922 22.78 73.5422 22.18 73.5422 21.18C73.5422 19.94 73.1122 18.06 72.2522 15.54C70.7122 11.18 69.2522 9 67.8722 9C67.0522 9 66.6422 9.65 66.6422 10.95C66.6422 12.25 67.0522 14.1 67.8722 16.5C68.6322 18.68 69.3822 20.32 70.1222 21.42C70.8822 22.5 71.6222 23.04 72.3422 23.04C72.4422 23.04 72.5922 23.02 72.7922 22.98ZM93.9909 8.04H100.351V8.22L93.0009 24.45H92.6709L88.9509 15.42H88.7409L85.2609 24.45H84.9309L77.3109 8.22V8.04H84.6309V8.22L83.2509 9.45L87.0609 17.91H87.2409L87.6009 16.8C87.8209 15.82 87.9309 14.91 87.9309 14.07C87.9309 11.67 87.0709 9.72 85.3509 8.22V8.04H93.3009V8.22L91.9209 9.45L95.2809 17.91H95.4609L95.8209 16.8C96.0809 16.08 96.2109 15.25 96.2109 14.31C96.2109 13.23 96.0309 12.16 95.6709 11.1C95.3109 10.02 94.7509 9.06 93.9909 8.22V8.04Z" 
      fill="currentColor"
      className="transition-all duration-300"
    />
    <defs>
      <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export const Navbar = () => {
  const scrollToSection = useScrollToSection();

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="backdrop-blur-md bg-background/70 border-b border-divider/20 shadow-lg"
      height="70px"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink 
            className="flex justify-start items-center gap-2 group" 
            href="/"
          >
            <div className="relative">
              <LinglowLogo />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
        <div className="flex gap-8">
          <NavbarItem>
            <button 
              onClick={() => scrollToSection('o-mnie')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium cursor-pointer bg-transparent border-none"
            >
              O mnie
            </button>
          </NavbarItem>
          <NavbarItem>
            <button 
              onClick={() => scrollToSection('pakiety')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium cursor-pointer bg-transparent border-none"
            >
              Pakiety
            </button>
          </NavbarItem>
          <NavbarItem>
            <NextLink 
              href="/blog" 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
            >
              Blog
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium cursor-pointer bg-transparent border-none"
 >
              Kontakt
            </button>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3 items-center">
          <ThemeSwitch />
          <div className="w-px h-6 bg-divider" />
<Button
  className="text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 px-6"
  onClick={() => scrollToSection('pakiety')}
  variant="solid"
  radius="full"
>
  Zabookuj lekcję
</Button>

        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle className="text-foreground" />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-md bg-background/95 border-t border-divider/20">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          <NavbarMenuItem>
            <button 
              onClick={() => scrollToSection('o-mnie')}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 text-left w-full bg-transparent border-none"
            >
              O mnie
            </button>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <button 
              onClick={() => scrollToSection('pakiety')}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 text-left w-full bg-transparent border-none"
            >
              Pakiety
            </button>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <NextLink 
              href="/blog" 
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              Blog
            </NextLink>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 text-left w-full bg-transparent border-none"
            >
              Kontakt
            </button>
          </NavbarMenuItem>
          
          <NavbarMenuItem className="mt-4">
<Button
  className="w-full text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg font-semibold"
  onClick={() => scrollToSection('pakiety')}
  variant="solid"
  radius="full"
  size="lg"
>
  Zabookuj lekcję
</Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};