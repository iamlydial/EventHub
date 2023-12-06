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
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/create-event", label: "Create Event" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/our-work", label: "Our Work" },
];

export const logLinks: LogLinks[] = [
  { href: "/signup", label: "Sign Up", icon: signup },
  { href: "/login", label: "Log In", icon: login },
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
