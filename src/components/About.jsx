import React from 'react';
import  {Tilt}  from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (

    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right, spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options= {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] 
            py-5 px-12 min-h-[280px] flex 
            justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] 
          font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I&apos;m <span className="font-bold text-accent">Zephania Lema</span> - a builder, creator, and problem-solver at the intersection of <strong> technology, music, and film</strong>.<br /><br />
        On the <span className="font-bold text-accent">software side</span>, I design and develop full-stack applications across React, Next.js, TypeScript, Node.js, Java/Spring Boot, and Python/Django. I also work with AI-assisted development and product automation tools like OpenAI, Claude, Codex, and Cursor, using them to move faster while still owning the architecture, code quality, and final decisions.<br /><br />
        On the <span className="font-bold text-accent">creative side</span>, I work as a Music Producer, Audio Engineer (mixing, mastering, production in Logic & FL Studio)
        and Film Editor (music videos, SFX in Adobe Premiere Pro & After Effects). <br /><br />
         I thrive where technology meets art, and I bring that perspective into every project I take on. <br />
         Whether it is code, music, or film, I aim to bring ideas to life with craft and imagination.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} 
            index={index} {...service}/>

        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")
