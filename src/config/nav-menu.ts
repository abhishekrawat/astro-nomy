import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Malaffi Health Portal",
          href: "/landing",
          description: "A healthcare app showing your medical records fetched from the HIE.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Appointment Booking",
          href: "/releases",
          description: "A section of an app to book doctor's appointment",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Augmented Reality",
          href: "/waitlist",
          description:
            "Ecommerce app for Homecenter to view furnitures in your own space.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Skydive",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "Authentification",
          href: "/auth",
          description: "Implement an authentification using Astro DB & Lucia",
          // image: "/images/examples/auth.jpg",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
