import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {

  const testimonialsStyles = `mx-auto relative bg-blue max-w-[400px] h-max flex flex-col justify-end sm:p-8 p-4 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* Heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        Don't just take my word for it, read through my testimonials to see how our Peoples have benefited by working with me.
        </p>
      </motion.div>

      {/* TESTIMONNIALS */}
      <div className="md:flex md:justify-between gap-8">
      <motion.div
          className={`bg-blue ${testimonialsStyles} before:content-person1` }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl sm:p-0 p-5 mt-5">
            Working with Siddharth has been an absolute pleasure. He is incredibly hardworking and consistently deliver exceptional results. Their punctuality is remarkable, always meeting deadlines without compromising quality. I highly recommend Vivek for their dedication, consistency, and remarkable ability to continuously expand their knowledge.
          </p>
        </motion.div>

      <motion.div
          className={`bg-red ${testimonialsStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl sm:p-0 p-5 mt-5">
            Working with Siddharth has been an absolute pleasure. He is incredibly hardworking and consistently deliver exceptional results. Their punctuality is remarkable, always meeting deadlines without compromising quality. I highly recommend Vivek for their dedication, consistency, and remarkable ability to continuously expand their knowledge.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialsStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl sm:p-0 p-5 mt-5">
            Working with Siddhart has been an absolute pleasure. He is incredibly hardworking and consistently deliver exceptional results. Their punctuality is remarkable, always meeting deadlines without compromising quality. I highly recommend Vivek for their dedication, consistency, and remarkable ability to continuously expand their knowledge.
          </p>
        </motion.div>
       </div>
    </section>
  );
};

export default Testimonials;
