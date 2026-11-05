
import React, { useEffect, useState } from "react";
import "./Concept01.css";

const courses = [
  {
    number: "01",
    title: "Java Full Stack Development",
    subtitle: "Build Powerful Web Applications",
    category: "POPULAR COURSE",
    icon: "☕",
    description:
      "Learn to build complete web applications using Java, Spring Boot, React and modern development tools.",
    topics: [
      "Core Java & OOP",
      "Spring Boot",
      "React Development",
      "REST APIs & Microservices",
    ],
    accent: "java",
  },
  {
    number: "02",
    title: "Python Full Stack Development",
    subtitle: "Turn Your Ideas Into Applications",
    category: "FULL STACK",
    icon: "🐍",
    description:
      "Develop dynamic web applications and backend systems using Python, Django, frontend technologies and databases.",
    topics: [
      "Python Programming",
      "Django Framework",
      "HTML, CSS & JavaScript",
      "SQL & Database Integration",
    ],
    accent: "python",
  },
  {
    number: "03",
    title: "Generative AI",
    subtitle: "Create The Future With AI",
    category: "TRENDING COURSE",
    icon: "🧠",
    description:
      "Explore generative AI, large language models and practical AI tools to build intelligent applications.",
    topics: [
      "Generative AI Fundamentals",
      "Prompt Engineering",
      "Large Language Models",
      "AI Tools & Applications",
    ],
    accent: "ai",
  },
  {
    number: "04",
    title: "Cybersecurity",
    subtitle: "Protect The Digital World",
    category: "IN-DEMAND SKILL",
    icon: "🛡️",
    description:
      "Understand security fundamentals, identify vulnerabilities and learn how to protect digital systems.",
    topics: [
      "Network Security",
      "Ethical Hacking Basics",
      "Security Tools",
      "Threat Analysis",
    ],
    accent: "cyber",
  },
  {
    number: "05",
    title: "Software Testing",
    subtitle: "Build Quality Into Every Product",
    category: "CAREER COURSE",
    icon: "🔍",
    description:
      "Learn software testing methodologies, write test cases, report defects and explore API and automation testing.",
    topics: [
      "Manual Testing",
      "Test Scenarios & Test Cases",
      "API Testing with Postman",
      "Automation Testing",
    ],
    accent: "testing",
  },
  {
    number: "06",
    title: "Soft Skills",
    subtitle: "Build Confidence. Communicate Better.",
    category: "CAREER DEVELOPMENT",
    icon: "🗣️",
    description:
      "Improve your communication, professional behavior and interview skills to become workplace-ready.",
    topics: [
      "Communication Skills",
      "Interview Preparation",
      "Group Discussions",
      "Resume Building",
    ],
    accent: "soft",
  },
  {
    number: "07",
    title: "Digital Marketing",
    subtitle: "Make Brands Grow Online",
    category: "DIGITAL SKILLS",
    icon: "📈",
    description:
      "Understand digital marketing strategies and learn how to reach audiences through online platforms.",
    topics: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
    ],
    accent: "marketing",
  },
];

function CourseCard({ course, transition }) {
  return (
    <article className={`course-card ${course.accent} ${transition}`}>
      <div className="card-glow" />

      <div className="card-top">
        <span className="course-number">
          COURSE / {course.number}
        </span>

        <span className="course-category">
          {course.category}
        </span>
      </div>

      <div className="card-content">
        <div className="course-info">
          <div className="course-icon">{course.icon}</div>

          <p className="course-eyebrow">
            QUICKED LEARNING PROGRAM
          </p>

          <h2>{course.title}</h2>

          <h3>{course.subtitle}</h3>

          <p className="course-description">
            {course.description}
          </p>

          <div className="course-topics">
            <h4>WHAT YOU'LL LEARN</h4>

            <div className="topic-list">
              {course.topics.map((topic, index) => (
                <span className="topic-item" key={index}>
                  <span className="topic-check">✦</span>
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <a
            className="enroll-button"
            href="mailto:info@quickedsolutions.com?subject=Course%20Enquiry"
          >
            Explore Course <span>↗</span>
          </a>
        </div>

        <div className="course-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />

          <div className="visual-icon">
            {course.icon}
          </div>

          <span className="floating-dot dot-one" />
          <span className="floating-dot dot-two" />
          <span className="floating-dot dot-three" />

          <div className="visual-label">
            <span>✦</span> LEARN · BUILD · GROW
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <span>QUICKED SOLUTIONS</span>
        <span>YOUR CAREER STARTS HERE ✦</span>
      </div>
    </article>
  );
}

export default function Concept01() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState("enter");

  useEffect(() => {
    let exitTimer;
    let enterTimer;

    const interval = setInterval(() => {
      setTransition("exit");

      exitTimer = setTimeout(() => {
        setActiveIndex((current) => (current + 1) % courses.length);
        setTransition("enter");

        enterTimer = setTimeout(() => {
          setTransition("");
        }, 700);
      }, 650);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(enterTimer);
    };
  }, []);

  const activeCourse = courses[activeIndex];

  return (
    <main className="concept01">
      <div className="background-grid" />
      <div className="background-glow glow-left" />
      <div className="background-glow glow-right" />

      <header className="course-header">
        <a href="/" className="brand-logo">
          <span className="brand-mark">Q</span>
          <span>
            QUICKED
            <small>SOLUTIONS</small>
          </span>
        </a>

        <div className="header-right">
          <span className="header-line" />
          <span>COURSE COLLECTION</span>
          <span className="header-count">07 PROGRAMS</span>
        </div>
      </header>

      <section className="course-hero">
        <p className="hero-label">
          <span /> LEARN SOMETHING NEW
        </p>

        <h1>
          Build Your <span>Tech Career.</span>
        </h1>

        <p className="hero-description">
          Explore industry-focused programs designed to help you
          learn, grow and build your future.
        </p>
      </section>

      <section className="carousel-section">
        <div className="carousel-heading">
          <div>
            <p>EXPLORE OUR PROGRAMS</p>
            <h2>Find Your <span>Next Skill.</span></h2>
          </div>

          <div className="slide-counter">
            <span>{activeCourse.number}</span>
            <span className="counter-divider">/</span>
            <span>07</span>
          </div>
        </div>

        <div className="carousel-window" aria-live="polite">
          <CourseCard
            key={activeCourse.number}
            course={activeCourse}
            transition={transition}
          />
        </div>

        <div className="carousel-progress">
          <div className="progress-track">
            <div
              className="progress-fill"
              key={activeCourse.number}
            />
          </div>

          <div className="progress-labels">
            <span>{activeCourse.title}</span>
            <span>AUTO EXPLORING</span>
          </div>
        </div>
      </section>

      <footer className="course-footer">
        <span>LEARN <b>✦</b> BUILD <b>✦</b> GROW</span>
        <span>© QUICKED SOLUTIONS</span>
      </footer>
    </main>
  );
}
