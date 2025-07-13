import './App.css';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaJs, FaJava, FaDatabase, FaAws, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa';
import hackathonImg from './assets/hackthon image.avif';
import { useState } from 'react';

const projectImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
];

const skills = [
  { name: 'Python', icon: <FaPython />, level: 90 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'Java', icon: <FaJava />, level: 80 },
  { name: 'React.js', icon: <FaReact />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'SQL/Databases', icon: <FaDatabase />, level: 75 },
  { name: 'AWS', icon: <FaAws />, level: 70 },
  { name: 'Docker', icon: <FaDocker />, level: 70 },
];

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership & Activities' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const profileImg = 'https://randomuser.me/api/portraits/men/32.jpg'; // Placeholder profile image
  return (
    <div className="portfolio-root">
      {/* Hero Section */}
      <motion.header className="portfolio-header hero" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div>
            <h1>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                Siddhivinayak Raghavraju
              </motion.span>
            </h1>
            <motion.p className="animated-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
              Full Stack Developer | AI/ML Enthusiast
            </motion.p>
            <div className="hero-links">
              <a href="mailto:vinayakraju01@gmail.com" title="Email"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/vinayak-raju/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/vinayakraju16" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
            </div>
          </div>
        </div>
        <nav className="portfolio-nav">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollToSection(s.id)}>{s.label}</button>
          ))}
        </nav>
      </motion.header>
      <main>
        <motion.section id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>About</h2>
          <p>Full Stack Developer with 1.9 years of experience in designing and building scalable web applications, combined with a strong foundation in Artificial Intelligence and Machine Learning. Skilled in Python, Java, JavaScript, React, Node.js, TensorFlow, and AWS. Passionate about developing innovative solutions by blending software engineering and AI expertise. Seeking opportunities in AI/ML or software development to contribute to impactful projects.</p>
        </motion.section>
        <motion.section id="skills" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Technical Skills</h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill-bar" key={skill.name}>
                <div className="skill-label">{skill.icon} {skill.name}</div>
                <div className="bar-bg">
                  <motion.div className="bar-fill" initial={{ width: 0 }} whileInView={{ width: skill.level + '%' }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section id="experience" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Professional Experience</h2>
          <h3>Full Stack Software Developer, Infynect Labs PVT LTD <span className="date">Dec 2022 - Aug 2024</span></h3>
          <ul>
            <li>Developed and maintained end-to-end web applications using React.js, Node.js, and MySQL, enhancing application performance and user experience.</li>
            <li>Implemented automation solutions and optimized workflows, increasing productivity by 15%.</li>
            <li>Worked on IPTV systems and integrated Digital Rights Management (DRM) solutions to ensure secure content delivery.</li>
            <li>Collaborated with cross-functional teams to deliver software aligned with business goals.</li>
            <li>Containerized applications with Docker and deployed on AWS, improving deployment efficiency.</li>
          </ul>
        </motion.section>
        <motion.section id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Projects</h2>
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000} className="project-carousel">
            <div>
              <img src={projectImages[0]} alt="Cryptocurrency Prediction" />
              <div className="legend">
                <h3>Cryptocurrency Prediction</h3>
                <ul>
                  <li>Developed and fine-tuned a logistic regression-based machine learning model achieving an 87% accuracy rate in predicting credit card fraud.</li>
                  <li>Minimized false positives by 16% through rigorous feature engineering and hyperparameter tuning processes.</li>
                  <li>Implemented under-sampling and ensemble techniques to address class imbalance, leading to 15% improved performance.</li>
                  <li>Successfully mitigated fraudulent transactions while optimizing model efficiency by 23% and accuracy by 6%.</li>
                  <li>Integrated REST API endpoints for model predictions and created a simple dashboard using Flask for real-time insights.</li>
                </ul>
              </div>
            </div>
            <div>
              <img src={projectImages[1]} alt="Early Heart Disease Prediction" />
              <div className="legend">
                <h3>Early Heart Disease Prediction</h3>
                <ul>
                  <li>Spearheaded the implementation of HIPAA-compliant data encryption protocols across all healthcare solutions, decreasing data breach incidents by 40% and ensuring patient privacy and security.</li>
                  <li>Demonstrated commitment to ethical data practices while contributing to the development of data-driven healthcare solutions.</li>
                  <li>Enhanced healthcare outcomes by 26% through accurate prediction of heart disease, positively impacting patient well-being.</li>
                  <li>Designed data pipelines for preprocessing patient data and visualizing prediction results using Matplotlib and Tableau.</li>
                </ul>
              </div>
            </div>
          </Carousel>
        </motion.section>
        <motion.section id="education" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Education</h2>
          <ul>
            <li><b>Master of Science in Artificial Intelligence</b><br/>University Of North Texas, Denton TX USA<br/>Expected Graduation: May 2026</li>
            <li><b>Bachelor of Technology in Computer Science</b><br/>SVPCET Puttur, Andhra Pradesh, India<br/>Graduated: May 2021</li>
          </ul>
        </motion.section>
        <motion.section id="leadership" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Leadership & Activities</h2>
          <ul>
            <li>Coordinated and facilitated an Interstate Robotics Workshop, enhancing collaboration and technical skills among participants.</li>
            <li>Volunteered in planning and organizing FEASTA, a major cultural and technical fest, contributing to team management and event success.</li>
            <li>Completed a Personality Development Program by AP Skill Development, strengthening communication and professional skills.</li>
            <li>Participated in a Web Development Coding Competition, applying creative problem-solving to build innovative solutions.</li>
            <li>Recognized as one of five winning teams out of 26 in a University Hackathon for developing an innovative AI-powered web application.</li>
          </ul>
        </motion.section>
        <motion.section id="achievements" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Achievements</h2>
          <div className="achievement-content">
            <ul>
              <li>Recognized as one of five winning teams out of 26 in a University Hackathon for developing a machine learning-based solution that improved process automation and user engagement.</li>
            </ul>
            <motion.img 
              src={hackathonImg} 
              alt="Hackathon Achievement" 
              className="achievement-img"
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
              onClick={() => setShowModal(true)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {showModal && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="modal-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
                <img src={hackathonImg} alt="Hackathon Preview" className="modal-img" />
              </motion.div>
            </motion.div>
          )}
        </motion.section>
        <motion.section id="contact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:vinayakraju01@gmail.com">vinayakraju01@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/vinayak-raju/" target="_blank" rel="noopener noreferrer">vinayak-raju</a></p>
          <p>GitHub: <a href="https://github.com/vinayakraju16" target="_blank" rel="noopener noreferrer">vinayakraju16</a></p>
        </motion.section>
      </main>
    </div>
  );
}
