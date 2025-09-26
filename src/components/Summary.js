import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
        Motivated professional with a background in Forensic Science and hands-on
        experience in cloud computing, DevOps, and DevSecOps practices. Skilled in
        building and securing MERN stack applications, deploying on AWS and Vercel,
        and integrating CI/CD pipelines with tools like Docker, Kubernetes, Jenkins,
        and Terraform. Passionate about cybersecurity, financial crime investigation,
        and leveraging technology to create secure and scalable solutions. Eager to
        contribute to projects that combine technical expertise with analytical
        problem-solving to drive innovation and security.
      </p>
    </motion.section>
  );
}

export default Summary;
