"use client";

import { motion } from "framer-motion";

export function MotionSection({ id, title, className = "", children }) {
  return (
    <section id={id} className={className}>
      {title && (
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-2xl md:text-3xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
