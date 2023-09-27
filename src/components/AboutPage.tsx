import React, { useState , useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {motion , useAnimation} from 'framer-motion'

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
    transition: {duration: 1}
  }
};

const AboutPage = () => {

 const control = useAnimation();
  const dataArray = ["ABOUT", "TRIPPRO"];
  const [active, setActive] = useState(dataArray[0]);

  const {ref,inView}= useInView()

    useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={control}  className="py-[95px] container mx-auto lg:w-[1024px] 2xl:w-[1600px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:place-items-center">
    
          <motion.div variants={item} className="grow ">
            <div className="flex gap-3 cursor-pointer mb-5">
              {dataArray.map((item) => (
                <p
                  onClick={() => setActive(item)}
                  key={item}
                  className={`${
                    item == active
                      ? "text-[#000] border-b-2 border-b-[#2DC4EA]"
                      : "text-[#2DC4EA]"
                  } text-2xl py-2 px-1 font-bold  `}
                >
                  {item}
                </p>
              ))}
            </div>
            <div>
              <p className="text-sm mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet,
              </p>
            </div>
            <div>
              <button className=" text-white font-[500] px-10 py-3 rounded-full button">
                TOUR TO WEBSITE
              </button>
            </div>
          </motion.div>
    
        <motion.div variants={item} className="grow">
        
            <div className="layout mt-5 lg:mt-0">
              <img src="/Tablet.png" width={280} height={280} alt="" />
            </div>
      
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;


