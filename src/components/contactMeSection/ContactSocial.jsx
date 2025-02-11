import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/kuzhali-kumaraguru"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://www.github.com/kuzhalikumaraguru"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/kuzhali_kumaraguru"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
