import { NavLink, LogLinks, CarouselItem } from "./interfaces";
import {
  login,
  signup,
  facebook,
  instagram,
  twitter,
  copyright,
} from "../assets/icons";

import { slide1, slide2, slide3 } from "../assets/images";

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

export const homeHeroLinks: CarouselItem[] = [
  {
    id: 1,
    image: slide1,
    title: "Bachelorette Party",
    description:
      "We curate sensational moments, blending sophistication with excitement.",
  },
  {
    id: 2,
    image: slide2,
    title: "18th birthday party",
    description:
      "Witness the magic of their expertise in curating exceptional and tailored events that left a lasting impression on every guest.",
  },
  {
    id: 3,
    image: slide3,
    title: "Baby Shower Celebrations",
    description:
      "Memorable celebrations with creativity, elegance, and personalized touches, ensuring unforgettable moments for expecting parents.",
  },
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
