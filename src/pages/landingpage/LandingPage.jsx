import React from 'react';
import { Link } from 'react-router-dom';
import { services, stats, steps, testimonials } from '../../utils/landingpagelist';
import { motion } from 'framer-motion';
import Footer from '../../components/layout/footer/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* HERO */}
      <motion.section
        className="text-center py-20 px-5 md:px-20 bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Boost Your Aptitude Skills
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-white">Practice, Learn, and Improve</p>
        <p className="mt-2 text-white text-xl">Live Exams • Mock Tests • Study Resources</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8"
        >
          <Link
            to="/examlists"
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:shadow-xl transition"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-5 md:px-20 text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/30 dark:bg-white/10 backdrop-blur-md border dark:border-gray-700 rounded-lg p-6 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">{item.value}</h3>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="w-full"
            >
              <Link to={service.link} className="block">
                <div className="p-6 bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg rounded-lg border dark:border-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2">{service.text}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((user, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl text-center shadow-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={`https://i.pravatar.cc/100?img=${i + 5}`}
                alt={user.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic">"{user.text}"</p>
              <div className="flex justify-center mt-2">
                {Array(user.stars)
                  .fill()
                  .map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
              </div>
              <p className="font-bold mt-2">{user.name}</p>
              <p className="text-sm text-gray-500">Student</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="text-4xl text-blue-500 mb-4">✔️</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
