import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Work",
      href: "/work",
      items: [
        {
          title: "Malaffi Health Portal",
          href: "/work/malaffi-health-portal",
          description: "Patient-facing HIE portal redesign for 3M+ Abu Dhabi residents.",
          image: "/images/work/malaffi-cover.jpg",
        },
      ],
    },
  ],
  // Blog hidden until posts are written — restore entries here to re-enable
  examplesNav: [],
  links: [
    {
      title: "About",
      href: "/about",
      chevron: false,
    },
  ],
};
