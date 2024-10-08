import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DURATION = 0.5;
const STAGGER = 0.025;

const About = () => {
  return (
    <div
      className="flex flex-col z-30 pt-16 p-8 md:pt-32 md:p-16 pb-20 md:pb-36 relative bg-[#1C9FE5] min-h-[80vh]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px", // Adjusted for mobile scaling
      }}
    >
      <div className="bg-white p-4 md:p-8 rounded-lg">
        <FlipHeading text="About" />
        <p className="text-base md:text-2xl leading-relaxed">
          CodeCraft, a unique opportunity for aspiring coders across Kerala to
          learn, create, and compete is held from September 28 to October 2,
          2024 as a five-day online event, introducing participants to the
          fascinating world of Python Turtle graphics. Under the expert guidance
          of Aadithya Sai, R&D Lead at FOCES CEC, you can gain hands-on
          experience in creating stunning visual designs using code. Proudly
          organized by the EETI Foundation, CodeCraft is to be held in
          collaboration with EETI CET, IEDC BOOTCAMP CEC, FOCES CEC, IEDC CEK,
          IEDC VISAT, NEOTERIC IEDC, and IEDC Catalyst MBCET. <br />
          <br />
          <br />
          Participants will not only put their newly acquired skills to the test
          through engaging coding tasks but also compete against others on a
          real-time leaderboard, tracking their progress and striving for top
          rankings. Not only do the participants enhance their coding skills and
          develop a strong foundation in Python programming but also foster
          their creativity by exploring their imagination and creating unique
          visual designs. Additionally, CodeCraft provides a valuable platform
          for networking with other aspiring coders from across Kerala.
        </p>
      </div>
    </div>
  );
};

// FlipHeading Component
const FlipHeading = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.h1
      ref={ref}
      className="text-3xl md:text-5xl lg:text-8xl font-bold mb-4 md:mb-8 overflow-hidden text-[#1C9FE5] relative"
      initial="initial"
      animate={inView ? "hovered" : "initial"}
      style={{
        lineHeight: 0.85,
      }}
    >
      {/* Initial Layer (Current State) */}
      <div className="relative">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Hover Layer (Flipping in) */}
      <div className="absolute inset-0 top-0 left-0">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};

export default About;
