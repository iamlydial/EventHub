import React, { FC } from "react";
import { copyright } from "../../assets/icons";
import logo from "../../assets/images/EventHub-Logo1.jpg";
import { footerLinks, socialMedia } from "../../types/constants";

const Footer: FC = () => {
  return (
    <footer className="flex-row justify-center  border-red-500 bg-onyx p-10">
      <div className="flex items-start  w-full gap-10 lg:gap-20 flex-wrap max-md:flex-row">
        <div className="flex flex-col items-start">
          <a href="/">
            {/* <img
              src={logo}
              alt="logo"
              width={130}
              height={46}
              className="m-0"
            /> */}
            <h1 className="text-white font-mukta font-bold text-2xl">
              EventHub
            </h1>
          </a>
          <p className="mt-6 text-base leading-7 font-roboto text-white sm:max-w-sm">
            All your event needs under one roof.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-white lg:gap-48 gap-5 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-mukta text-sage text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-1 font-roboto text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-roboto cursor-pointer">
          <img
            src={copyright}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="font-roboto text-white">
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="font-roboto text-white cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
