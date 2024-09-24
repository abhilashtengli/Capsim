import React from "react";
import { motion } from "framer-motion";
const BgBox = ({ rowNum }) => {
  return (
    <div>
      <div className="fixed inset-0 -z-10  flex overflow-hidden">
        {[...Array(80)].map((_, index) => (
          <motion.div className=" " key={index}>
            {[...Array(rowNum)].map((_, index) => (
              <motion.div
                initial={{
                  rotate: "0deg",
                }}
                animate={{
                  rotate: "0deg",
                }}
                key={index}
                className="border border-purple-50  w-10 h-10 grid place-content-center"
              ></motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BgBox;
