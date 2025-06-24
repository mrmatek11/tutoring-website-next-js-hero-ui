export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Linglow.pl - Indywidualne lekcje angielskiego online",
  description: "Indywidualne lekcje angielskiego online — skuteczna nauka mówienia i pewność siebie w przyjaznej atmosferze.",
 // Dodaj SEO sekcję
  seo: {
    title: "Korepetycje Angielskiego Online - Linglow Academy | Skuteczna Nauka",
    description: "Naucz się angielskiego skutecznie z Linglow Academy. Indywidualne lekcje online dostosowane do Twoich potrzeb.",
    keywords: "korepetycje angielskiego online, lekcje angielskiego, nauka angielskiego, korepetytor angielskiego",
  },
  
  // Dane firmy dla structured data
  company: {
    name: "Linglow Academy",
    founder: "Lidia Sobisz",
    email: "lidia@lidiasobisz.pl",
    url: "https://linglow.pl",
  },

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
    instagram: "https://instagram.com/linglowacademy",
    linkedin: "https://linkedin.com/in/lidiasobisz",
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};