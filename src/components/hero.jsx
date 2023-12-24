
import { motion } from "framer-motion";


export default function Hero() {
  return(
    <div class="w-full h-[90vh] md:grid lg:grid-cols-2 grid-cols-1 flex justify-center items-center">
      <div class="flex justify-center items-center flex-col ">
        <div class="flex md:justify-start flex-col gap-[15px] ">
          <h1 class="md:w-[456px] w-screen text-white lg:text-[90px] text-[50px] font-black text-left leading-[100%]">UIC BB Extension</h1>
          <p class="md:w-[551px] w-screen text-white lg:text-xl text-sm text-left leading-[100%]">Powerful browser extension designed for students using the University of Illinois at Chicago's Blackboard Learn platform. It enhances your grading experience by providing streamlined features</p>
          <div class="flex flex-row md:gap-[42px] gap-[20px] flex-wrap">
            <a href="/install" class="w-[185px] h-16 rounded-[11px] bg-black flex justify-center items-center cursor-pointer flex-row gap-2">
              <span class="text-white text-2xl font-black leading-[160%]">Get Started</span>
              <img src="/images/extension.png" alt="" width="20" height="20" class="invert"></img>
            </a>
            <a href="https://github.com/zijunw04/uic-blackboard-extension" target="_blank" class="w-[185px] h-16 rounded-[11px] bg-white flex justify-center items-center cursor-pointer flex-row gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width="30" height="30" class=""></img>
              <span class="text-black text-2xl font-black leading-[160%]">Github</span>
              
            </a>
          </div>
        </div>
        
      </div>
      <div class="lg:flex justify-center items-center flex-col hidden">
        <motion.img
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x:0}}
        viewport={{ once: true }}
        transition={{duration: 1}}
        
        src="/images/example2.jpg" alt="" width="504" height="269" class=" absolute right-[188px] top-[500px] shadow-[0px_4px_7.8px_2px_rgba(0,0,0,0.25)]"></motion.img>
        <motion.img
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x:0}}
        viewport={{ once: true }}
        transition={{duration: 1}}
        src="/images/example1.jpg" alt="" width="504" height="269" class="absolute right-[288px] top-[250px] shadow-[0px_4px_7.8px_2px_rgba(0,0,0,0.25)]"></motion.img>
      </div>
    </div>

  )
}
