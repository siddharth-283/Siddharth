import { motion } from "framer-motion"


function Project({ title, projectVariant, proImage, projectLink }) {

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30
     flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`

    //  title = Project 1 
    //  projectTitle = project-1 
    const projectTitle = title.toLowerCase()
    console.log(projectTitle);
    return (
        <motion.div variants={projectVariant} className="relative">

            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">Beneath the flickering streetlights, a stray cat darted across the empty alleyway, its eyes glowing in the darkness.</p>
                <a href={projectLink} className="mt-5 px-10 py-2 border-2 font-bold hover:bg-blue hover:text-white transition duration-1000 rounded-xl border-sky-500 ">Link</a>
            </div>

            <img src={`${proImage}`} alt={projectTitle} />
        </motion.div>
    )
}

export default Project