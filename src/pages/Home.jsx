import { Helmet } from "react-helmet-async";
import {
  FiArrowLeft,
  FiMail,
  FiGithub,
  FiSend,
  FiExternalLink,
} from "react-icons/fi";
import { config } from "../data/config";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* ═══ SEO پایه ═══ */}
        <title>
          {config.fullNameFa} — {config.roleFa} | پورتفولیو
        </title>
        <meta name="description" content={config.bioFa.substring(0, 160)} />
        <meta
          name="keywords"
          content="محسن خیری, برنامه‌نویس فول‌استک, Django, React, Python, JavaScript, پورتفولیو, نمونه کار"
        />
        <meta name="author" content={config.fullNameFa} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/" />

        {/* ═══ Open Graph (فیسبوک، لینکدین، تلگرام) ═══ */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${config.fullNameFa} — ${config.roleFa}`}
        />
        <meta
          property="og:description"
          content={config.bioFa.substring(0, 160)}
        />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta
          property="og:image"
          content="https://your-domain.com/images/og-image.jpg"
        />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content={config.fullNameFa} />

        {/* ═══ Twitter Card ═══ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${config.fullNameFa} — ${config.roleFa}`}
        />
        <meta
          name="twitter:description"
          content={config.bioFa.substring(0, 160)}
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/og-image.jpg"
        />

        {/* ═══ Schema.org (اطلاعات ساخت‌یافته) ═══ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: config.fullNameFa,
            alternateName: config.fullName,
            jobTitle: config.roleFa,
            description: config.bioFa,
            url: "https://your-domain.com",
            email: config.contact.email,
            sameAs: [
              config.contact.github,
              config.contact.linkedin,
              config.contact.telegram,
            ],
            knowsAbout: [
              "Django",
              "React",
              "Python",
              "JavaScript",
              "Web Development",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: config.education.university,
            },
          })}
        </script>
      </Helmet>

      {/* ═══ Hero ═══ */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <div className="hero-avatar">
            <img src="/images/logoo.png" alt={config.fullName} />
          </div>
          <h1 className="hero-title">
            سلام، من <span>{config.fullNameFa}</span> هستم
          </h1>
          <p className="hero-subtitle">{config.roleFa}</p>
          <p className="hero-description">{config.bioFa}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              مشاهده‌ی پروژه‌ها <FiArrowLeft />
            </a>
            <a href="#contact" className="btn btn-outline">
              تماس با من
            </a>
          </div>
        </div>
      </section>

      {/* ═══ About ═══ */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">درباره من</h2>
          <p className="section-subtitle">یه کم بیشتر بشناس</p>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🎓</div>
              <h3>تحصیلات</h3>
              <p>{config.education.university}</p>
              <p className="about-muted">{config.education.degree}</p>
            </div>
            <div className="about-card">
              <div className="about-icon">💻</div>
              <h3>تخصص</h3>
              <p>{config.roleFa}</p>
              <p className="about-muted">Django + React</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🚀</div>
              <h3>هدف</h3>
              <p>ساخت محصولات کاربردی</p>
              <p className="about-muted">با کیفیت و مدرن</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Skills ═══ */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">مهارت‌ها</h2>
          <p className="section-subtitle">
            تکنولوژی‌هایی که با اونها کار می‌کنم
          </p>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">🔧 Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag skill-tag-gold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">🎨 Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag skill-tag-cyan">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">🛠 Tools</h3>
              <div className="skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Projects ═══ */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">پروژه‌ها</h2>
          <p className="section-subtitle">نمونه‌کارهای من</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.description.substring(0, 50)}`}
                    />
                  ) : (
                    <span>{project.icon}</span>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                        aria-label={`مشاهده کد ${project.title} در GitHub`}
                      >
                        <FiGithub /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                        aria-label={`مشاهده آنلاین ${project.title}`}
                      >
                        <FiExternalLink /> مشاهده آنلاین
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">تماس با من</h2>
          <p className="section-subtitle">خوشحال می‌شم با من در ارتباط باشی</p>

          <div className="contact-grid">
            <a href={`mailto:${config.contact.email}`} className="contact-card">
              <div className="contact-icon">
                <FiMail />
              </div>
              <h3>ایمیل</h3>
              <p>{config.contact.email}</p>
            </a>

            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <FiGithub />
              </div>
              <h3>GitHub</h3>
              <p>mohsenkheiri1384-pixel</p>
            </a>

            <a
              href={config.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <FiSend />
              </div>
              <h3>تلگرام</h3>
              <p>@im_mohse_n</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
