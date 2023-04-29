import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/siddharth-yadav-715565201/"
        target="_blank"
              rel="noreferrer"
          >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/_0xSiddharth"
        target="_blank"
        rel="noreferrer">
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Siddh0rth"
        target="_blank"
        rel="noreferrer">
        <img alt="facebook-link" src={facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/_sidd__28/"
        target="_blank"
        rel="noreferrer">
        <img alt="instagram-link" src={instagram} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
