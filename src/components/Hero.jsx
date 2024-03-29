import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { GalaxyCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5bb2ed]" />
          <div className="w-1 sm:h-80 h-40 blue-white-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} 
          text-white`}
          >
            Hello there, I'm <span className="text-[#f4f4f4]">Jesse.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software developer that is friendly, <br className="sm:block hidden" />
            team-oriented, and adaptable to high-stress situations. Resourceful, persistent, and patient. Pursuing a role that allows for growth and development,
            with the ultimate goal of working with creative,
            like-minded individuals who want to make the world a better place.
          </p>
        </div>
      </div>
      <GalaxyCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;