import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg"
import project2 from "../assets/project-2.jpeg"
import project3 from "../assets/project-3.jpeg"
import project4 from "../assets/project-4.jpeg"
import project5 from "../assets/project-5.jpeg"
import project6 from "../assets/project-6.jpeg"
import project7 from "../assets/project-7.jpeg"

import Project from "../components/Project"

const Projects = () => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Behold, my collection of innovative and impactful projects.
        </p>
      </motion.div>


      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-2 sm:my-0 my-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* ROW 1 */}

          <div className="flex justify-center items-center text-center p-10 bg-red 
           max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project1" proImage={project1} projectLink={""} projectVariant={projectVariant} />
          <Project title="Project2" proImage={project2} projectVariant={projectVariant} />

          {/* ROW 2 */}
          <Project title="Project3" proImage={project3} projectVariant={projectVariant} />
          <Project title="Project4" proImage={project4} projectVariant={projectVariant} />
          <Project title="Project5" proImage={project5} projectVariant={projectVariant} />

          {/* ROW 2 */}
          <Project title="Project6" proImage={project6} projectVariant={projectVariant} />
          <Project title="Project7" proImage={project7} projectVariant={projectVariant} />

          <div className="flex justify-center items-center text-center p-10 bg-blue 
           max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
