import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "C1x Adtech Pvt Ltd",
    date: "Jun 2018 -Apr 2022",
    responsibilities: [
      "Developed web application using HTML, CSS, Typescript & JS.",
      "Participated in large scale application.",
      "Generated new ideas for better user experience.",
      "Bug fixing based on weekly build release"
    ],
  },
  {
    job: "Angular Developer",
    company: "Credopay",
    date: "Jun 2022 - Nov 2022",
    responsibilities: [
      "Developed a transaction verification application using Angular framework.",
      "Helped team member with their tasks and grade them weekly.",
      "Provided support for team member through their learning journey.",
    ],
  },
  {
    job: "Software Engineer",
    company: "DSSI Solutions Pvt Ltd",
    date: "Dec 2022 - Oct 2023",
    responsibilities: [
      "Developed an employee BGV application using Angular 9.",
      "Participating in upgrading the version of the application.",
      "Implemented 3rd party libraries for the enhancements.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
