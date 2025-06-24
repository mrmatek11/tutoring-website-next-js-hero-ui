export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Linglow.pl - Indywidualne lekcje angielskiego online",
  description: "Indywidualne lekcje angielskiego online — skuteczna nauka mówienia i pewność siebie w przyjaznej atmosferze.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Book a Lesson",
      href: "/book",
    },
  ],
  navMenuItems: [
    {
      label: "Book a Lesson",
      href: "/book",
    },
  
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
