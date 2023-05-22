import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Footers = () => {
  return (
    <div>
      <footer className="bg-violet-200 text-white items-center flex flex-wrap justify-center md:justify-between py-12 w-full ">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center text-center text-[20px] gap-6 mx-8"
        >
          <a href="https://github.com/Vrilli">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vrilli-castro-rodriguez-37584822a/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/VRILLYCASTRO1?t=56kZeK5lpDMfSa-PYBGvGw&s=09">
            <FaTwitter />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col justify-center items-center mx-8"
        >
          <p className="mb-2 text-black">
            Desarrollado con <FcLike className="w-auto h-5" />{" "}
          </p>
          <p className="text-sm text-black">
            &copy; 2023 All Rights Reserved by
            <a href="https://github.com/Vrilli" className="text-blue-600 ml-1">
              VRILLI CASTRO
            </a>
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footers;
