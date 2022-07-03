import React from "react";

function Footer() {
  const mailto = () => {
    document.location.href =
      "mailto:consultgreepec@gmail.com?subject=Hi Grespec consult";
  };

  const goTo = (location) => {
    document.location.href = `https://${location}`;
  };

  return (
    <div>
      <div className="flex-grow border-t my-10 border-custom-violet"/>

    <section className="responsive py-20" id="footer">
      <footer id="contact" className="flex gap-20">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <div>
              <ul className="flex flex-col gap-3">
                <li className="font-semibold">Contact Us</li>
                <li
                  className=" cursor-pointer hover:font-semibold"
                  onClick={mailto}
                  >
                  consultgreepec@gmail.com
                </li>
                <li
                  className=" cursor-pointer hover:font-semibold"
                  onClick={() => goTo("wa.me/+233209126193")}
                >
                  +233 (0)20 299 8006
                </li>

                <li
                  className=" cursor-pointer hover:font-semibold"
                  onClick={() => goTo("wa.me/+233209126193")}
                >
                  +233 (0)24 945 1884
                </li>
              </ul>

              <ul className="flex gap-4 my-3">
                <li>
                  <div
                    onClick={() =>
                      goTo("www.facebook.com/Starzec-Energy-103972402344165")
                    }
                    className="bg-[url('/facebook.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                  />
                </li>
                <li>
                  <div
                    onClick={() =>
                      goTo("instagram.com/starzec_energy?igshid=YmMyMTA2M2Y=")
                    }
                    className="bg-[url('/instagram.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                  />
                </li>
                <li>
                  <div
                    onClick={() => goTo("twitter.com/starzec_energy")}
                    className="bg-[url('/twitter.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                  />
                </li>

                <li>
                  <div
                    onClick={() =>
                      goTo("www.linkedin.com/company/starzec-energy")
                    }
                    className="bg-[url('/linkedin.png')] bg-no-repeat bg-contain h-5 w-5 cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex">
            <div>
              <ul className="flex flex-col gap-3">
                <li className="font-semibold">Address</li>
                <li
                  className=" cursor-pointer hover:font-semibold"
                  onClick={mailto}
                >
                  Plot 130, Asofan – Ofankor, Accra
                </li>
                <li
                  className=" cursor-pointer hover:font-semibold"
                  onClick={() => goTo("wa.me/+233209126193")}
                >
                  P.O Box AE 13, Atomic Energy
                </li>
                <li className="">Accra, Ghana</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center mt-8">
        &copy; Greepec Consult 2022, All rights reserved
      </div>
    </section>
                      </div>
  );
}

export default Footer;
