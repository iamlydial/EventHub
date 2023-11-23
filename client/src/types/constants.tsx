import { NavLink, LogLinks } from "./interfaces";
import { login, signup } from "../assets/icons";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/our-work", label: "Our Work" },
];

export const logLinks: LogLinks[] = [
  { href: "/signup", label: "Sign Up", icon: signup },
  { href: "/login", label: "Log In", icon: login },
];
