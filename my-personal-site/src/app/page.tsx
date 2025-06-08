'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Hey, I’m Marshall 👋
      </h1>
      <p className="text-lg sm:text-xl text-center text-gray-300 max-w-xl">
        I’m a photographer, future engineer, barista & creator. This is my space to share my work, offer courses, and let you book sessions with me.
      </p>
    </motion.main>
  );
}
