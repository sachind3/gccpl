import { motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-50 bg-orange-500"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
      ></motion.div>
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-40 bg-lime-500"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-30 bg-teal-500"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};
export default TransitionEffect;
