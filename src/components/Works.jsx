import { Tilt }  from 'react-tilt';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, hyperlink } from'../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description,
  tags, image, source_code_link, website_link, role, highlights, tech, activeTech, expanded, onToggle, isDimmed }) => {
    const normalizedTech = tech || [];
    const isLinked = activeTech && normalizedTech.some((item) => {
      const lowerItem = item.toLowerCase();
      const lowerActive = activeTech.toLowerCase();
      return lowerItem === lowerActive || lowerItem.includes(lowerActive) || lowerActive.includes(lowerItem);
    });

    return(
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.18, 0.75)}
        layout
        whileHover={expanded ? { scale: 1.01 } : { y: -12 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className={`project-shell ${expanded ? "is-focused" : ""} ${isDimmed ? "is-dimmed" : ""}`}
        onMouseEnter={() => window.dispatchEvent(new CustomEvent("portfolio-project-hover", {
          detail: { project: name, tech: normalizedTech },
        }))}
        onMouseLeave={() => window.dispatchEvent(new CustomEvent("portfolio-project-hover", {
          detail: { project: null, tech: [] },
        }))}
      >
        <Tilt
          options={{
            max: expanded ? 0 : 45,
            scale: 1,
            speed: expanded ? 0 : 450,
            perspective: expanded ? 10000 : 1000
          }}
          className={`project-card p-5 rounded-2xl ${isLinked ? "is-linked" : ""} ${expanded ? "is-expanded" : ""}`}
        >
          <div className={expanded ? "project-focus-layout" : ""}>
          <div className='relative w-full h-[230px] project-media'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl project-image'
            />

            <div className='absolute inset-0 flex
            justify-end m-3 card-img-hover'
            >
              <button
                type="button"
                aria-label={`Open ${name} source code`}
                onClick={() => window.open
                (source_code_link, "_blank")}
                className='glass-icon-button'
              >
                <img
                  src={github}
                  alt="github"
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
              <button
                type="button"
                aria-label={`Open ${name} website`}
                onClick={() => window.open
                (website_link, "_blank")}
                className='glass-icon-button'
              >
                <img
                  src={hyperlink}
                  alt="hyperlink"
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            </div>
          </div>

          <div className='mt-5 project-body'>
            <h3 className={`text-white font-bold ${expanded ? "text-[34px]" : "text-[24px]"}`}>{name}</h3>
            <p className='mt-2 text-secondary 
            text-[14px]'>{description}</p>
            {role && (
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
                {role}
              </p>
            )}
            {!expanded && highlights && (
              <ul className="mt-3 space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-[13px] leading-5 text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p key={tag.name} 
                className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="project-tech-strip">
                {(expanded ? normalizedTech : normalizedTech.slice(0, 4)).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <button type="button" className="case-study-toggle" onClick={onToggle}>
                {expanded ? "Close" : "Explore"}
              </button>
            </div>
            {expanded && (
              <motion.div
                className="case-study-panel"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div>
                  <span>Problem</span>
                  <p>{description}</p>
                </div>
                <div>
                  <span>System</span>
                  <p>{highlights?.join(" ")}</p>
                </div>
                <div>
                  <span>Stack</span>
                  <p>{normalizedTech.join(" / ")}</p>
                </div>
              </motion.div>
            )}
          </div>
          </div>
        
        </Tilt>
      </motion.div>
    )
}

const Works = () => {
  const [activeTech, setActiveTech] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const handleTechHover = (event) => {
      setActiveTech(event.detail?.tech || null);
    };

    window.addEventListener("portfolio-tech-hover", handleTechHover);
    return () => window.removeEventListener("portfolio-tech-hover", handleTechHover);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
      <p className= {styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Featured Projects</h2>
      </motion.div>

      <div className='w-full flex flex-col'>
        <motion.h3
          variants={fadeIn("", "", 0.05, 1)}
          className='text-white text-[24px] font-bold'
        >
        Real-world applications with clear product thinking, technical decisions, and working implementation.
        </motion.h3>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Each project card now focuses on what I built, the stack behind it, and the engineering decisions that made the product useful. The goal is simple: make the work easy to scan, but substantial enough that a hiring manager or client can see the depth quickly.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={ index }
              activeTech={activeTech}
              expanded={expandedProject === project.name}
              isDimmed={expandedProject && expandedProject !== project.name}
              onToggle={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
              {...project}
            />
          ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
