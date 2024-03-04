import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section id="team" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
OUR TEAM
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        We believe that collaboration and synergy are the keys to success. We are a dynamic and diverse group of individuals who are passionate about delivering exceptional results and making a positive impact. Our team is dedicated to working together, harnessing our unique skills and expertise, and striving for excellence in everything we do.
        </p>
      </motion.div>

      {/* Team */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-purple-900  max-w-md-[215px] max-w-sm-[400px] h-[270px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[99px] before:left-1/2 before:content-person1 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
          &nbsp;&nbsp;&nbsp;NAHIDA&nbsp;&nbsp; <br /> <span className="text-white font-bold">MD</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-md-[215px] max-w-sm-[400px] h-[270px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            SAKSHAM PAREEK <br /> <span className="text-white font-bold">COO</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple-900 max-w-md-[215px] h-[270px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[99px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
          &nbsp;AZHAR SHAD  <br /> <span className="text-white font-bold"> CEO</span>
          </p>
        </motion.div>
       
        <motion.div
          className="mx-auto relative bg-red min-w-[215px]  h-[270px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person4 before:rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
          &nbsp;VIKAS YADAV <br /> <span className="text-white font-bold"> CMO
            </span>
          </p>
        </motion.div>
        
        <motion.div
          className="mx-auto relative bg-purple-900 max-w-md-[215px] max-w-sm-[400px] h-[270px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            JAIDEEP DASWANI <br /> <span className="text-white font-bold">CTO</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

