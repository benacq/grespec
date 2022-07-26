import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav({ setSidebar, bgColor }) {
  const [scrollNav, setScrollNav] = React.useState(false);

  const router = useRouter();

  const changeNav = () => {
    if (window.scrollY >= window.innerHeight - 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, []);
  return (
    <nav
      className={
        bgColor
          ? bgColor
          : `${!scrollNav ? "bg-custom-transparent" : " bg-gray-900"} `
      }
    >
      <div className="relative my-4 h-10 w-20 md:h-16 md:w-40 ">
        <Image layout="fill" src="/logo.png" alt="Logo" />
      </div>

      <div>
        <IoMenuOutline
          size={40}
          onClick={setSidebar}
          className="text-white block cursor-pointer md:hidden"
        />
      </div>

      <ul className="gap-10 hidden md:flex">
        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="home" spy smooth>
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

        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" offset={-100} to="about" spy smooth>
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

        <li className="relative cursor-pointer font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="services" offset={-70} spy smooth>
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


        {/* <li className="relative cursor-pointer font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="our-team" offset={-70} spy smooth>
                Our team
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/#our-team">
                <a>Our team</a>
              </Link>
            </>
          )}
        </li> */}

        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="footer" spy smooth>
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
    </nav>
  );
}

export default Nav;
