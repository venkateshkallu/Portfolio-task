import React from 'react';
import '../App.css';
import profileImg from '../assets/Avi.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">Venkatesh </h4>
              <p className="text-muted">
                { "I'm an aspiring DevOps Engineer with a keen interest in cloud computing, DevOps, and DevSecOps practices. My journey began with a BSc in Forensic Science, and my passion for technology has driven me to explore the dynamic world of infrastructure automation, monitoring, and security in software systems."}
              </p>
              <p className="text-muted">
                { " I have hands-on experience with tools and platforms like Docker, Kubernetes, Linux (Ubuntu), Jenkins CI/CD, Git, GitHub, GitLab, Ansible, Terraform, Prometheus, Grafana, Python, and Shell Scripting. I enjoy integrating security and automation to make systems more reliable and efficient."}
              </p>
              <p className="text-muted">
                {/* I'm also proficient with tools like <strong>Git</strong>, <strong>Amazon EC2</strong>, and <strong>Amazon S3</strong>, and have strong foundations in DevOps Tools like <strong>Kubernetes, Docker, Linux(Ubuntu), Jenkins CI/CD, GitHub, GitLab, GitHub Actions, Ansible, Terraform, SonarQube, NewRelic, Prometheus, Grafana, Python, Shell Scripting.</strong> */}
              </p>
              <p className="text-muted mb-0">
                { "My goal is to contribute to robust, secure, and scalable DevOps solutions while continuously learning and exploring new technologies in the cloud and DevSecOps space."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

