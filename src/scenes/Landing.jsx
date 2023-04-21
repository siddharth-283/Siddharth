import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                            before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full
                            before:border-2 before:border-blue before:z-[-1]">
            <img
              src={ProfileImg}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400] md:max-w-[600px]"
            />
          </div>
        ) : (
          <div>
            <img
              src={ProfileImg}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400] md:max-w-[600px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default Landing;
