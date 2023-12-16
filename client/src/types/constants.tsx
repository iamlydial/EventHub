import { NavLink, LogLinks } from "./interfaces";
import {
  login,
  signup,
  facebook,
  instagram,
  twitter,
  copyright,
} from "../assets/icons";

export const navLinks: NavLink[] = [
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/account-dashboard", label: "Account Dashboard" },
  { href: "/your-event-history", label: "My Event" },
];

export const logLinks: LogLinks[] = [
  { href: "/signup", label: "Sign Up", icon: signup },
  { href: "/login", label: "Log In", icon: login },
  { href: "/logout", label: "Log Out", icon: login },
];

export const footerLinks = [
  {
    title: "Event Themes",
    links: [
      { name: "Birthday", link: "/gallery" },
      { name: "Kids Birthday", link: "/gallery" },
      { name: "Baby Shower", link: "/gallery" },
      { name: "Bridal Party", link: "/gallery" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@eventhub.com", link: "mailto:customer@eventhub.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

// import { NavLink, LogLinks } from "./interfaces";
// import {
//   login,
//   signup,
//   facebook,
//   instagram,
//   twitter,
//   copyright,
// } from "../assets/icons";

// // Define the initial state for user login status (assumed to be false initially)
// const isLoggedIn = false;

// // Define all the navigation links
// const allNavLinks: NavLink[] = [
//   { href: "/", label: "Home" },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/services", label: "Services" },
//   { href: "/contact-us", label: "Contact Us" },
//   // ... other common links
//   { href: "/create-event", label: "Create Event" },
//   { href: "/account-dashboard", label: "Account Dashboard" },
//   { href: "/your-event-history", label: "Your Event History" },
//   // ... other specific links for logged-in users
// ];

// // Based on the login status, filter the navigation links to display
// const filteredNavLinks = isLoggedIn
//   ? allNavLinks.filter(
//       (link) =>
//         link.href !== "/create-event" &&
//         link.href !== "/account-dashboard" &&
//         link.href !== "/your-event-history"
//     )
//   : allNavLinks;

// export const navLinks: NavLink[] = filteredNavLinks;

// export const logLinks: LogLinks[] = [
//   { href: "/signup", label: "Sign Up", icon: signup },
//   { href: "/login", label: "Log In", icon: login },
// ];

// ... other constants (footerLinks, socialMedia, etc.)
