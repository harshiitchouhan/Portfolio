import "./Portfolio.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithubAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiRedis,
  SiCloudinary,
  SiCplusplus
  
} from "react-icons/si";
import { useEffect, useState } from "react";
import {ActivityCalendar} from "react-activity-calendar";


export default function Portfolio() {
const [leetcodeData, setLeetcodeData] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    // Generate a full 365-day calendar baseline mapped by YYYY-MM-DD
    const generateEmptyYear = () => {
      const yearMap = {};
      const today = new Date();
      for (let i = 365; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split("T")[0];
        yearMap[dateStr] = { date: dateStr, count: 0, level: 0 };
      }
      return yearMap;
    };

    const processCalendarData = (rawCalendar) => {
      const fullYearMap = generateEmptyYear();
      const parsed = typeof rawCalendar === "string" ? JSON.parse(rawCalendar) : rawCalendar;

      Object.keys(parsed).forEach((timestamp) => {
        const dateStr = new Date(parseInt(timestamp) * 1000).toISOString().split("T")[0];
        if (fullYearMap[dateStr]) {
          const count = parsed[timestamp];
          let level = 1;
          if (count > 8) level = 4;
          else if (count > 5) level = 3;
          else if (count > 2) level = 2;

          fullYearMap[dateStr] = { date: dateStr, count, level };
        }
      });

      return Object.values(fullYearMap);
    };

    // Primary Fetch with Fallback Backup
    const fetchLeetCodeData = async () => {
      try {
        // Primary API endpoint
        const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/Harshiitchouhan");
        if (!res.ok) throw new Error("Primary API rate limited");
        const data = await res.json();
        
        if (data && data.submissionCalendar) {
          setLeetcodeData(processCalendarData(data.submissionCalendar));
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Primary API failed, trying fallback API...", err);
      }

      // Fallback API Endpoint
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=Harshiitchouhan");
        if (!res.ok) throw new Error("Fallback API rate limited");
        const data = await res.json();
        if (data && data.submissionCalendar) {
          setLeetcodeData(processCalendarData(data.submissionCalendar));
        }
      } catch (err) {
        console.error("All LeetCode APIs failed or rate limited:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Github", icon: FaGithubAlt, },
  { name: "Postman", icon: SiPostman },
  { name: "Redis", icon: SiRedis },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "C++", icon: SiCplusplus },
  
];

  const projects = [
    {
      title: "CodeBit - Coding Platform",
      desc: "A full-stack coding platform with authentication, problem solving, submissions, AI assistant, and admin features.",
      img: "/codebitt.png",
      live: "https://codebit-dev.vercel.app/",
      github: "https://github.com/harshiitchouhan/Coding-Platform",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "AI"],
    },
    {
      title: "Swiggy Frontend Clone",
      desc: "A responsive food delivery frontend clone using live API data and modern React concepts.",
      img: "/swiggy.png",
      live: "https://swiggy-frontend-eta.vercel.app/",
      github: "https://github.com/harshiitchouhan/Swiggy-Frontend",
      tags: ["React", "CSS", "API", "JavaScript"],
    },
    {
      title: "Amazon Clone",
      desc: "An e-commerce frontend clone built with HTML and CSS.",
      img: "/amazon.png",
      live: "https://amazonbyhc.netlify.app/",
      github: "https://github.com/harshiitchouhan/AmazonClone",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Astrology Prediction",
      desc: "Get Astrology Insights which tells about you based on your DOB",
      img: "/astro.png",
      live: "https://amazonbyhc.netlify.app/",
      github: "https://github.com/harshiitchouhan/AstrologyPrediction",
      tags: ["HTML", "CSS"],
    },
  ];

  return (
    <div className="portfolio-page">
      <div className="main-container">
        <aside className="sidebar">
          <div className="profile">
            <img src="/profile.jpeg" alt="Harshit Chouhan" />
            <h2>Harshit Chouhan</h2>
            <p>Full Stack Developer</p>
          </div>

          <div className="contact">
            <div>
              <h4 className="label">Email</h4>
              <a href="mailto:harshiitchouhan12@gmail.com" className="value">
                harshiitchouhan12@gmail.com
              </a>
            </div>

            <div>
              <h4 className="label">Phone</h4>
              <a href="tel:+918447523493" className="value">
                +91-8447523493
              </a>
            </div>

            <div>
              <h4 className="label">Location</h4>
              <p className="value">New Delhi, India</p>
            </div>
          </div>

          <div className="social">
            <a href="https://github.com/harshiitchouhan" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/harshit-chouhan-3a0526346/" target="_blank" rel="noreferrer">
              Linkedin
            </a>
            <a href="https://leetcode.com/u/Harshiitchouhan/"target="_blank" rel="noreferrer" >Leetcode</a>
          </div>
        </aside>

        <main className="content">
          <nav className="navbar">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <section id="about" className="section">
            <h2 className="heading">About Me</h2>
            <div className="line"></div>
            <p className="detail">
              I am a passionate Full Stack Developer specializing in the MERN stack and
              modern web technologies. Alongside web development, I actively practice
              Data Structures and Algorithms to strengthen my problem-solving and
              analytical skills. I enjoy building scalable applications, solving coding
              challenges, and continuously learning new technologies. Currently, I am
              focused on developing full-stack projects and preparing for software
              engineering opportunities.
            </p>
          </section>

          <section id="skills" className="section">
            <h2 className="heading">Technologies</h2>
            <div className="line"></div>

            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-card" key={skill.name}>
                    <Icon className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="leetcode" className="section">
              <h2 className="heading">Leetcode Activity</h2>
              <div className="line"></div> {/* Yellow underline accent */}

              <div className="leetcode-card">
                {loading ? (
                  <p style={{ color: "#aaa" }}>Loading LeetCode activity...</p>
                ) : leetcodeData.length > 0 ? (
                  <ActivityCalendar
                    data={leetcodeData}
                    blockSize={10}
                    blockMargin={3}
                    fontSize={14}
                    theme={{
                      dark: ["#2d2d2d", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    colorScheme="dark"
                    showWeekdayLabels
                  />
                ) : (
                  <p style={{ color: "#aaa" }}>Unable to load activity data.</p>
                )}
              </div>
            </section>

          <section id="education" className="section">
            <h2 className="heading">Education</h2>
            <div className="line"></div>

            <div className="timeline">
              <div className="timeline-item">
                <span>2020 - 2022</span>
                <h4>Class 10th - 12th</h4>
                <p>M.M Public School, New Delhi</p>
              </div>

              <div className="timeline-item">
                <span>2023 - 2027</span>
                <h4>Bachelor of Technology in CSE</h4>
                <p>Guru Gobind Singh Indraprastha University, New Delhi</p>
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <h2 className="heading">Projects</h2>
            <div className="line"></div>

            <div className="project-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.title}>
                  <img src={project.img} alt={project.title} />

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>

                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="heading">Contact Me</h2>
            <div className="line"></div>

            <div className="contact-section">
              <div className="contact-info-box">
                <h3>Let's Connect</h3>
                <p>
                  I am open to internships, full-stack projects, and collaboration
                  opportunities.
                </p>

                <div className="contact-detail">
                  <strong>Email:</strong>
                  <span>harshiitchouhan12@gmail.com</span>
                </div>

                <div className="contact-detail">
                  <strong>Location:</strong>
                  <span>New Delhi, India</span>
                </div>
              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/harshiitchouhan12@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

                <input
                  type="hidden"
                  name="_next"
                  value="https://harshitchouhan.vercel.app/"
                />

                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}