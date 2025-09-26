import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'AWS CI/CD Pipeline with DevSecOps',
    duration: 'Sep 2025 – Present',
    company: 'Self-Learning Project',
    description:
      'Designed and deployed a CI/CD pipeline on AWS using GitHub Actions, Docker, and Elastic Beanstalk. Integrated security scans (Snyk, Trivy) and monitoring with Prometheus & Grafana.',
    responsibilities:
      'Configured GitHub Actions workflows, containerized MERN application with Docker, deployed to AWS Elastic Beanstalk, integrated security scanning in pipeline, and set up monitoring alerts.'
  },
  {
    title: 'MERN Blog Application',
    duration: 'Feb 2025 – May 2025',
    company: 'Self Project',
    description:
      'A blog platform built with MERN stack where users can register, login, write, and manage their blogs with JWT authentication.',
    responsibilities:
      'Developed REST APIs using Express.js, integrated MongoDB Atlas, implemented JWT authentication, built frontend with React, and deployed app on Vercel.'
  },
  {
    title: 'React Portfolio Website',
    duration: 'July 2024 – Nov 2024',
    company: 'Self Project',
    description:
      'A personal portfolio website to showcase projects, certifications, and experience.',
    responsibilities:
      'Designed UI with React and Framer Motion, integrated assets (resume & profile image), and deployed on GitHub Pages + Vercel.'
  },
  {
    title: 'Cybersecurity Tools Blog',
    duration: 'Mar 2024 – Jun 2024',
    company: 'Self-Learning',
    description:
      'Wrote beginner-friendly blogs on using open-source security tools (Nmap, Wireshark, Burp Suite) and DevSecOps practices for MERN applications.',
    responsibilities:
      'Researched cybersecurity concepts, documented practical steps, created tutorials for students, and published blogs for awareness.'
  },
  {
    title: 'Forensic Data Analysis with Python',
    duration: 'Mar 2024 – Jun 2024',
    company: 'Academic Project',
    description:
      'Analyzed forensic case datasets using Python libraries (Pandas, Matplotlib, Scikit-learn) to detect fraud and anomalies.',
    responsibilities:
      'Preprocessed data, applied machine learning models, generated reports, and visualized patterns for investigation insights.'
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
