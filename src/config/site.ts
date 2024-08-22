import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Abhishek Rawat",
  description:
    "Healthcare product, ux/ui designer, maker and a skydiving coach working at Malaffi, Department of Health, Abu Dhabi.",
  url: "https://rawat.dev",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/abhishekrawat",
    instagram: "https://www.instagram.com/_rawat/",
    linkedin: "https://www.linkedin.com/in/abhishek-rawat-62336a10/",
    x: "https://x.com/rawat899",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];