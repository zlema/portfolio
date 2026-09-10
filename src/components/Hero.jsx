import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full 
      min-h-screen mx-auto overflow-hidden'>
      <div className="hero-noise" aria-hidden="true" />
      <div className={`${styles.paddingX} absolute
        inset-0 top-[132px] max-w-7xl mx-auto flex
        flex-row items-start gap-5 z-10 pointer-events-none`}>
        <div className='flex flex-col 
          justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full 
          bg-accent shadow-[0_0_35px_rgba(18,247,214,0.75)]'/>
          <div className='w-1 sm:h-80 h-40 
          violet-gradient'/>
        </div>
        <div>
          <p className="mb-4 max-w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
            Full Stack Engineer / Creative Technologist
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I&apos;m
            <span className='text-gradient-metal'> Zephania</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-3xl text-white-100`}>
            I design and build polished full-stack products with TypeScript, React, Node, Java, Python, and AI automation, bringing a creative background in music, film, and visual production into every interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
            <a href="#work" className="glass-pill">View Work</a>
            <a href="#contact" className="glass-pill glass-pill-muted">Start a Project</a>
          </div>
        </div>
      </div>
      <div className="hero-proof-panel pointer-events-none">
        <div className="proof-chip">
          <span>Interface Systems</span>
          <strong>TypeScript, React, responsive UX</strong>
        </div>
        <div className="proof-chip">
          <span>Product Engineering</span>
          <strong>APIs, data flow, auth, payments</strong>
        </div>
        <div className="proof-chip">
          <span>Automation</span>
          <strong>AI workflows, ops tools, handoff</strong>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom:32 
        w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] 
            rounded-3xl border-4 border-secondary flex
            justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity, 
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full
                  bg-secondary mb-1'
              />

            </div>

          </a>

      </div>
    </section>

  )
}

export default Hero
