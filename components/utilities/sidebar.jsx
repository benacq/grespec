import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";

import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

const SideBar = (props) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      {props.sidebar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed  bg-gray-900 text-white shadow-lg top-0 right-0 w-full h-screen p-5 text-right
            flex flex-col items-end gap-10 z-50"
          >
            <div>
              <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setSidebar((sidebar) => !sidebar)}
              />
            </div>

            <div>
              <ul className="flex flex-col gap-10">
                <li>
                  {router.route === "/" ? (
                    <>
                      <ScrollLink
                        className="cursor-pointer"
                        to="home"
                        spy
                        smooth
                        onClick={() => props.setSidebar(false)}
                      >
                        Home
                      </ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </>
                  )}
                </li>

                <li>
                  {router.route === "/" ? (
                    <>
                      <ScrollLink
                        className="cursor-pointer"
                        to="about"
                        spy
                        smooth
                        offset={-50}
                        onClick={() => props.setSidebar(false)}
                      >
                        About Us
                      </ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link href="/#about">
                        <a>About Us</a>
                      </Link>
                    </>
                  )}
                </li>

                <li>
                  {router.route === "/" ? (
                    <>
                      <ScrollLink
                        className="cursor-pointer"
                        to="services"
                        spy
                        smooth
                        offset={-50}
                        onClick={() => props.setSidebar(false)}
                      >
                        Services
                      </ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link href="/#services">
                        <a>Services</a>
                      </Link>
                    </>
                  )}
                </li>

                <li>
                  {router.route === "/" ? (
                    <>
                      <ScrollLink
                        className="cursor-pointer"
                        to="contact"
                        spy
                        smooth
                        offset={-50}
                        onClick={() => props.setSidebar(false)}
                      >
                        Contact Us
                      </ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link href="/#contact">
                        <a>Contact Us</a>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
