import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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

const OurChallenges = () => {
  const [data, setData] = useState<any[]>();
  const [recordPerPage, setRecordPerPage] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [active, setActive] = useState<string | number>();

  async function httpGetPost() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  const  control = useAnimation();

  const {ref,inView}= useInView()

  useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);

  const getData = useCallback(async () => {
    let res: any;
    res = await httpGetPost();
    if (res.status == 200) {
      setData(res.data);
      setIsLoading(false);
    }
  }, [recordPerPage]);

  useEffect(() => {
    getData();
  }, [getData]);

  function viewMore(): void {
    setIsLoading(true);
    setTimeout(() => {
      setRecordPerPage((prev: number) => {
        return prev + 3;
      });
    }, 1000);
  }

  function Active(val: string | number): void {
    setActive(val);
  }

  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={control} className="py-[95px] mx-auto lg:w-[1024px] 2xl:w-[1600px] ">
    
        <motion.div variants={item} className="flex gap-5 justify-end items-center mb-12">
          <p className=" text-xl font-bold">
            OUR <span className="text-[#2DC4EA]">CHALLENGES</span>
          </p>
          <p className="text-xs text-red-500 mb-[-19px] font-bold w-[390px] ">
            I bind the the data with title field when you click the viewmore
            each api call can get the 3 api scroll and watch , can select
          </p>
        </motion.div>

      <div className="grid grid-cols-1  lg:grid-cols-2">
    
          <motion.div variants={item} className="relative z-[-10] ">
          <img src="/cube.png" alt="" />
        </motion.div>
          
        <motion.div variants={item} className="relative">
          <div
            className={`max-h-[400px]  px-5  overflow-x-hidden relative z-50 ${
              recordPerPage > 5 && "overflow-y-scroll"
            }`}
          >
            {data?.slice(0, recordPerPage)?.map((item, index) => {
              return (
                <div>
                
                   <div
                    onClick={() => Active(item.id)}
                    key={item.id}
                    className={`py-5 px-4 shadow-lg mb-7 rounded flex items-center gap-4  cursor-pointer hover:scale-[1.1] ease-in-out transition-all duration-500 ${
                      active == item.id ? "button text-white" : ""
                    }`}
                  >
                    <p className="text-xl font-bold text-[#2DC4EA]">
                      {index + 1 >= 10 ? <>{index + 1}</> : <>0{index + 1}</>}
                    </p>
                    <p className="text-sm capitalize">
                      {item?.title?.length > 40 ? (
                        <>{item?.title?.substring(0, 30)}...</>
                      ) : (
                        <>{item?.title}</>
                      )}{" "}
                    </p>
                  </div>
                   
                </div>
              );
            })}
            <div></div>
          </div>
          <div className="absolute z-[500] bottom-[5%] left-[40%]">
            {isLoading && (
              <>
                <LoadingSpinner />
              </>
            )}
          </div>
          <div className="mt-4">
            <button
              onClick={viewMore}
              className=" text-white font-[500] px-10 py-3 rounded-full button"
            >
              VIEW MORE
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurChallenges;
