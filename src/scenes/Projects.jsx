import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, discription, imageName, }) => {
  const overlayStyles = `absolute h-full w-full opacity-90  transition duration-500
     z-30 flex flex-col justify-center items-center text-center p-16 text-deep-white`;
  // const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  //   bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        {discription}
        </p>
      </div>
      <img src={`../assets/${imageName}`} alt={projectTitle} />
     
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Our portfolio includes many products, including robotic arms, conveyor belt systems, service robots, and AMRs (Autonomous Mobile Robots). These solutions are designed to enhance efficiency, productivity, and safety across various sectors, including manufacturing, logistics, healthcare, and more.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-purple-900
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Pioneering Excellence in Robotic Engineering
          </div>
          <Project title="Robotic Arm" imageName="purpleBac.jpg" discription=''/>
          <Project title="Autonomous Mobile Robot" imageName="purpleBac2.jpg" discription=''/>

          {/* ROW 2 */}
          <Project title="Conveyor Belt System" imageName="purpleBac.jpg" discription='' />
          <Project title="Service Robot" imageName="purpleBac2.jpg" discription=''/>
          {/* <Project title="Project 5" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" /> */}
          {/* <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
         WE INVOLVES THE CONCEPTION, DESIGN, MANUFACTURE AND OPERATION OF ROBOTS.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
