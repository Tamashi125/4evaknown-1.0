import { motion } from "motion/react";
// react icon
import { FaPlay } from "react-icons/fa";

const Mucis = () => {
  // tailwindcss
  const iconstyle = "bg-smalt-blue-600 text-smalt-blue-300 p-4 rounded-full";
  const iconmusic = [{ icon: <FaPlay /> }];
  return (
    <>
      <div className="flex w-1/2 items-center justify-center space-x-6 text-2xl">
        {iconmusic.map((item, index) => (
          <motion.div
            key={index}
            className={iconstyle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Mucis;
