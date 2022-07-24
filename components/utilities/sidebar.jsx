import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";

import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
                  <Link href="/">
                    <a
                      className={`text-oval-px-24 font-bold ${
                        router.pathname !== "/" && "opacity-50"
                      }`}
                      onClick={() => props.setSidebar((sidebar) => !sidebar)}
                    >
                      Personal
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/business">
                    <a
                      className={`text-oval-px-24 font-bold ${
                        router.pathname !== "/business" && "opacity-50"
                      }`}
                      onClick={() => props.setSidebar((sidebar) => !sidebar)}
                    >
                      Business
                    </a>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => {
                      props.setSidebar((sidebar) => !sidebar);
                      props.setModal(true);
                    }}
                    className="text-oval-px-24 font-bold"
                  >
                    Join the waitlist
                  </button>
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
