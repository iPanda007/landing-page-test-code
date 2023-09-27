import { motion, useAnimation } from "framer-motion";


const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity:1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5
    }
  }
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration:0.6}
  }
};
const HeroSection = () => {

  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    >
      <section className="w-full">
        <header>
          <img src="/Header@2x.png" alt="" />
        </header>
        <div className="hero-section flex justify-center mt-[-5px] py-[80px]">
          <div
               className="container"
             
          >
            <motion.p
                variants={item}
              className=" text-white text-center text-2xl md:text-4xl lg:text-5xl mb-10"
            >
              TRIPPRO - AN ECOMMERCE SOLUTION
            </motion.p>

            <motion.div
               variants={item}
            >
              <p className="text-white px-[70px] text-center text-base mb-10">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex gap-5 items-center justify-center">
              <div className="flex items-center gap-5">
                <p className="text-xl font-bold text-white">Built for:</p>
                <div>
                  <img src="/responsive.png" alt="" />
                </div>
                <div className="w-[2px] h-[60px] bg-[#fff]"></div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-xl text-white">Technologies:</p>
                  <p className="text-xl font-bold text-white">Built for:</p>
                </div>
                <div>
                  <img src="/wordpress-development-logo-banner.png" alt="" />
                </div>
                <div className="w-[2px] h-[60px] bg-[#fff]"></div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-xl text-white">Industry:</p>
                  <p className="text-xl font-bold text-white">Ecommerce</p>
                </div>
                <div>
                  {/* <img src="/wordpress-development-logo-banner.png" alt="" /> */}
                  <img src="/shopping-cart.png" alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div variants={item} className="flex justify-center mt-[-115px]">
            <div className="relative overflow-hidden">
              <img
                src="/Laptop@2x.png"
                className="relative "
                width={600}
                height={600}
                alt=""
              />
              <div
                className="
            "
              >
                <img
                  className="absolute top-[6.4%] left-[12%] z-[200] md:max-w-[455px] md:min-w[100px]  md:max-h-[286px] "
                  src="/devwp.visibleone.net_tripprohk_@2x.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 }
// };

// const Box = ({ num }) => {

//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       className="box"
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//     >
//       <h1>Box {num} </h1>
//     </motion.div>
//   );
// };

// export default function App() {
//   return (
//     <div className="App">
//       <Box num={1} />
//       <Box num={2} />
//       <Box num={3} />
//     </div>
//   );
// }
