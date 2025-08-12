import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full violet-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a software developer with a bit of a unique career path. After several years
        in the auto industry and before that retail, I transitioned into tech through the Tech Elevator
        bootcamp in 2020. Within a month of graduating, I joined a bank as a
        Quality Engineer, where I gained hands-on experience writing and
        executing automation tests, SIT, integration, and E2E scenarios. I
        worked extensively with Cucumber for front-end testing and Karate for
        backend systems.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My persistence and drive eventually led me to a backend developer role,
        where I build APIs using a microservices architecture. Beyond coding, I’m
        able to deploy, monitor, and debug CI/CD pipelines, primarily working
        with Kubernetes/OpenShift on Jenkins.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Outside of work, I love challenging myself through personal coding
        projects and exploring my passion for music. I'm proficient in
        percussion and guitar, and dabble with keyboard. My greatest strengths
        lie in my soft skills. I thrive in collaborative environments, value
        team success, and bring persistence and enthusiasm to every project I
        work on.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");