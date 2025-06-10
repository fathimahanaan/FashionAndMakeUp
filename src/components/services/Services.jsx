import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "woman4.jpg",
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "chanel.jpg",
  },
  {
    title: "Eiusmod Tempor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "wedding3.jpg",
  },
  {
    title: "Labore Et Dolore",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "contact.jpg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#efeeee] to-[#f6c3ca] py-24 px-6 md:px-16 font-sans">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#6b4c4c] mb-4 tracking-tight">
          Services
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full h-72 sm:h-80 md:h-[26rem] overflow-hidden group shadow-xl rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Transparent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-xl" />
            <div className="absolute bottom-6 left-6 right-6 text-white px-2 sm:px-4">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base opacity-90 leading-relaxed drop-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
