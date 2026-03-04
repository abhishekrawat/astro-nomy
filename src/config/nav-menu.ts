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
        {
          title: "Appointment Booking",
          href: "/work/appointment-booking",
          description: "Frictionless doctor booking flow across Abu Dhabi healthcare facilities.",
          image: "/images/work/appointment-cover.jpg",
        },
        {
          title: "AR Furniture Experience",
          href: "/work/ar-furniture",
          description: "Augmented reality shopping for Homecenter — view furniture in your space.",
          image: "/images/work/ar-cover.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Blog",
      href: "/blog",
      items: [
        {
          title: "Writing",
          href: "/blog",
          description: "Thoughts on healthcare UX, design leadership, and building products.",
          image: "/images/examples/static-blog.jpg",
        },
      ],
    },
  ],
  links: [
    {
      title: "About",
      href: "/about",
      chevron: false,
    },
  ],
};
