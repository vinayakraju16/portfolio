import './App.css';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  FaArrowRight, FaAws, FaCode, FaDatabase, FaDocker, FaDownload,
  FaEnvelope, FaExternalLinkAlt, FaGithub, FaGraduationCap, FaLinkedin,
  FaMapMarkerAlt, FaPhoneAlt, FaReact, FaServer,
} from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';
import profileImg from './assets/Vinayak-normal-v2.jpg';

const projects = [
  {
    number: '01', eyebrow: 'Full-stack machine learning', featured: true,
    title: 'Seattle House Price Prediction',
    summary: 'Built a production-oriented valuation platform that turns official King County property data into explainable home-price estimates.',
    result: '0.832 R²', resultLabel: 'on an untouched temporal holdout',
    details: [
      'Prepared 83,593 validated sales and engineered 18 model inputs from assessor extracts.',
      'Served a tuned HistGradientBoosting pipeline through a Django API and React dashboard.',
      'Added calibrated ranges, feature contributions, model versioning, monitoring, Docker and CI.',
    ],
    stack: ['React', 'Django', 'Scikit-learn', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/vinayakraju16/House-Price-Prediction',
  },
  {
    number: '02', eyebrow: 'MS thesis research', featured: true,
    title: 'Adversarial Robustness of NLP Models',
    summary: 'Evaluated how temporal relation classifiers behave under real-world adversarial language attacks.',
    result: '86% → 12%', resultLabel: 'accuracy under PWWS attack',
    details: [
      'Fine-tuned BERT and RoBERTa on the TLINK temporal relation dataset.',
      'Benchmarked 15 attacks, including TextFooler, PWWS, BAE and BERT-Attack.',
      'Built a YAML-driven, GPU-accelerated evaluation pipeline with automated result logging.',
    ],
    stack: ['Python', 'PyTorch', 'Hugging Face', 'TextAttack'],
  },
  {
    number: '03', eyebrow: 'Machine learning system',
    title: 'Credit Card Fraud Detection',
    summary: 'Built an end-to-end fraud classification workflow with an API and real-time prediction dashboard.',
    result: '16%', resultLabel: 'fewer false positives',
    details: [
      'Developed a logistic regression pipeline and exposed predictions through a Flask REST API.',
      'Used feature engineering and hyperparameter tuning to reduce false positives.',
      'Improved model efficiency by 23% with ensemble and under-sampling techniques.',
    ],
    stack: ['Python', 'Scikit-learn', 'Flask', 'REST API'],
  },
  {
    number: '04', eyebrow: 'Predictive analytics',
    title: 'Early Heart Disease Prediction',
    summary: 'Created a patient risk-classification workflow with encrypted data handling and analytical dashboards.',
    result: '26%', resultLabel: 'improved detection outcomes',
    details: [
      'Built and evaluated a predictive model for early risk-factor classification.',
      'Implemented encrypted data pipelines with privacy-conscious handling practices.',
      'Presented model findings through Matplotlib and Tableau dashboards.',
    ],
    stack: ['Python', 'Scikit-learn', 'Matplotlib', 'Tableau'],
  },
];

const capabilities = [
  { icon: <FaCode />, title: 'Languages', items: ['Python', 'JavaScript'] },
  { icon: <FaReact />, title: 'Full-stack', items: ['React.js', 'Node.js', 'Express.js', 'REST APIs'] },
  { icon: <SiPytorch />, title: 'AI & machine learning', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face'] },
  { icon: <FaServer />, title: 'Cloud & data', items: ['AWS', 'Docker', 'MySQL', 'PostgreSQL', 'MongoDB'] },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function App() {
  return (
    <div className="site-shell">
      <motion.header className="site-header" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <a className="brand" href="#top" aria-label="Siddhivinayak Raghavraju, home">SR<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="mailto:rajuvinayak06@gmail.com">Let&apos;s talk <FaArrowRight aria-hidden="true" /></a>
      </motion.header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.65 }}>
            <p className="availability"><span /> Open to full-time opportunities</p>
            <p className="hero-introduction">Hi, I&apos;m Siddhivinayak Raghavraju.</p>
            <h1 id="hero-title">Full-stack developer and <em>AI engineer.</em></h1>
            <p className="hero-summary">I build reliable web applications and practical machine-learning systems. My experience spans React, Node.js, AWS and graduate research in adversarial NLP.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <FaArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href="/Siddhivinayak-Raghavraju-Resume.pdf" download><FaDownload aria-hidden="true" /> Download résumé</a>
            </div>
            <div className="hero-meta">
              <span><FaMapMarkerAlt aria-hidden="true" /> Denton, Texas</span>
              <span>MS in Artificial Intelligence · UNT</span>
            </div>
          </motion.div>

          <motion.aside className="profile-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.15 }} aria-label="Profile summary">
            <div className="profile-image-wrap">
              <img src={profileImg} alt="Siddhivinayak Raghavraju" className="profile-image" />
              <div className="profile-scrim" aria-hidden="true" />
              <div className="profile-badge"><span /> Available for opportunities</div>
            </div>
            <div className="profile-content">
              <p className="eyebrow">Applied AI × Software Engineering</p>
              <h2>Siddhivinayak Raghavraju</h2>
              <p>Full Stack Developer &amp; AI/ML Engineer</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/vinayak-raju/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
                <a href="https://github.com/vinayakraju16" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a>
                <a href="mailto:rajuvinayak06@gmail.com" aria-label="Send email"><FaEnvelope /></a>
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section className="proof-strip" aria-label="Career highlights" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={{ duration: 0.55 }}>
          <div><strong>~2 yrs</strong><span>professional experience</span></div>
          <div><strong>15</strong><span>NLP attacks evaluated</span></div>
          <div><strong>15%</strong><span>workflow productivity gain</span></div>
          <div><strong>Thousands</strong><span>concurrent IPTV users served</span></div>
        </motion.section>

        <section className="section-wrap section-block" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Projects with measurable outcomes.</h2></div>
            <a className="text-link" href="https://github.com/vinayakraju16" target="_blank" rel="noreferrer">View GitHub <FaExternalLinkAlt aria-hidden="true" /></a>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ duration: 0.5, delay: index * 0.06 }}>
                <div className="project-topline"><span>{project.number}</span><p>{project.eyebrow}</p></div>
                <div className="project-layout">
                  <div className="project-copy">
                    <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
                    <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                  <div className="project-result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div>
                </div>
                <div className="project-footer">
                  <div className="tag-list" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.repo && <a className="project-link" href={project.repo} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> View repository <FaExternalLinkAlt aria-hidden="true" /></a>}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><div><p className="eyebrow">Professional experience</p><h2>Engineering from interface to infrastructure.</h2></div></div>
          <motion.article className="experience-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.55 }}>
            <div className="experience-sidebar"><p className="experience-date">Dec 2022 — Aug 2024</p><p>Bengaluru, India</p></div>
            <div className="experience-main">
              <p className="eyebrow">Infynect Labs Private Limited</p><h3>Full Stack Software Developer</h3>
              <p className="experience-intro">Built and operated features for a live IPTV streaming platform serving thousands of concurrent users.</p>
              <div className="impact-grid">
                <div><FaReact /><p>Developed end-to-end applications with React, Node.js and MySQL.</p></div>
                <div><FaDatabase /><p>Integrated DRM workflows for secure, licensed content delivery.</p></div>
                <div><FaDocker /><p>Containerized microservices and deployed them on AWS.</p></div>
                <div><FaAws /><p>Automated workflows, increasing team productivity by 15%.</p></div>
              </div>
            </div>
          </motion.article>
        </section>

        <motion.section className="about-section section-wrap section-block" id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ duration: 0.55 }}>
          <div className="about-copy">
            <p className="eyebrow">How I work</p><h2>I bridge product engineering and applied machine learning.</h2>
            <p>My background spans user-facing React applications, Node.js services, cloud deployment and machine-learning research. I care about making systems understandable, reproducible and useful—not just technically impressive.</p>
            <div className="education-card"><FaGraduationCap aria-hidden="true" /><div>
              <p className="eyebrow">University of North Texas</p><h3>MS in Artificial Intelligence</h3>
              <p>August 2024 — December 2026 (expected)</p>
              <small>Deep Learning · Advanced Machine Learning · Computer Vision · Analysis of Algorithms</small>
            </div></div>
          </div>
          <div className="capabilities" aria-label="Technical capabilities">
            {capabilities.map((capability, index) => <motion.article key={capability.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <div className="capability-title">{capability.icon}<h3>{capability.title}</h3></div><p>{capability.items.join(' · ')}</p>
            </motion.article>)}
          </div>
        </motion.section>

        <motion.section className="contact-section section-wrap" id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={{ duration: 0.55 }}>
          <p className="eyebrow">Let&apos;s build something useful</p><h2>Looking for a full-stack or AI/ML engineer?</h2>
          <p>I&apos;m currently pursuing full-time opportunities where I can contribute across software engineering and applied AI.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:rajuvinayak06@gmail.com"><FaEnvelope /> Email me</a>
            <a className="contact-detail" href="tel:+19406296186"><FaPhoneAlt /> (940) 629-6186</a>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Siddhivinayak Raghavraju</p>
        <div><a href="https://www.linkedin.com/in/vinayak-raju/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/vinayakraju16" target="_blank" rel="noreferrer">GitHub</a><a href="/Siddhivinayak-Raghavraju-Resume.pdf" target="_blank" rel="noreferrer">Résumé</a></div>
      </footer>
    </div>
  );
}

export default App;
