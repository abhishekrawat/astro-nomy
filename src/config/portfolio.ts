/** Replace editorial samples using CONTENT_GUIDE.md before promoting the site. */
export const portfolio = {
  email: "abhishek@rawat.dev",
  availability: "Open to lead design roles",
  location: "Abu Dhabi, UAE",
  navigation: [
    { href: "/work", label: "Work" },
    { href: "/builds", label: "Builds" },
    { href: "/blog", label: "Writing" },
    { href: "/about", label: "About" },
  ],
  // Add only approved, attributable quotes. Empty entries are never rendered.
  testimonials: [] as { quote: string; name: string; role: string }[],
};
