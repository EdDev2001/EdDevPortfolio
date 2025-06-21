<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  const skills = [
    {
      name: 'PHP',
      icon: 'logos:php',
      description: 'Powerful server-side scripting for dynamic web pages.'
    },
    {
      name: 'Flutter',
      icon: 'logos:flutter',
      description: 'Building beautiful, natively compiled applications from a single codebase.'
    },
    {
      name: 'Python',
      icon: 'logos:python',
      description: 'Versatile language for web backends, data science, and more.'
    },
    {
      name: 'MySQL',
      icon: 'logos:mysql',
      description: 'Robust and reliable open-source relational database.'
    },
    { name: 'SQL', icon: 'carbon:sql', description: 'The standard language for managing and querying databases.' },
    {
      name: 'Web Development',
      icon: 'mdi:web',
      description: 'Crafting responsive and engaging websites and applications.'
    },
    {
      name: 'IoT',
      icon: 'carbon:iot-platform',
      description: 'Connecting the physical world to the digital through smart devices.'
    },
    {
      name: 'Svelte',
      icon: 'logos:svelte-icon',
      description: 'A radical, new approach to building fast and efficient user interfaces.'
    }
  ];
</script>

<svelte:head>
  <title>About | EdDev2001</title>
</svelte:head>

<main class="content-container">
  <section id="about" class="page-section" in:fly={{ y: 20, duration: 500 }}>
    <h1 class="section-title">About Me</h1>
    <div class="about-content">
      <div class="about-text" style="animation-delay: 200ms">
        <p>
          Hello! I'm a passionate full-stack developer dedicated to building seamless digital
          experiences that bridge imagination and reality. I thrive on crafting innovative digital
          solutions using modern technologies.
        </p>
        <p>
          My expertise spans across various technologies, allowing me to bring ideas to life from
          concept to deployment. I'm experienced in building robust back-ends with technologies
          like PHP and Python, creating dynamic front-ends, and even diving into mobile
          development with Flutter. I'm always excited to leverage my skills to build something new
          and impactful.
        </p>
        <p>
          Beyond coding, I'm committed to continuous learning, always exploring the next wave of
          technology to see how I can incorporate it into my work.
        </p>
      </div>
      <div class="about-photo" style="animation-delay: 200ms">
        <img src="me.jpg" alt="Developer" />
      </div>
    </div>
  </section>

  <section id="education" class="page-section" in:fly={{ y: 20, duration: 500, delay: 200 }}>
    <h2 class="section-title">Educational Background</h2>
    <div class="education-timeline">
      <div class="education-item" style="--delay: 100ms">
        <h4 class="education-degree">Bachelor of Science in Information Technology</h4>
        <p class="education-institution">Passi City College</p>
        <p class="education-date">2021 - 2025</p>
        <p class="education-description">
          Focused on software development, database management, and web technologies. Completed a
          final year project developing a computerized inventory system and management system.
        </p>
      </div>
      <div class="education-item" style="--delay: 200ms">
        <h4 class="education-degree">Certified Full-Stack Web Developer</h4>
        <p class="education-institution">Technovators</p>
        <p class="education-date">2024</p>
        <p class="education-description">
          Intensive training program covering modern development practices, including agile
          methodologies, RESTful APIs, and cloud deployment with a focus on PHP, MySQL, and Svelte.
        </p>
      </div>
    </div>
  </section>
</main>

<style>
  .content-container {
    padding: 6rem 5rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .page-section {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--accent-color);
  }

  /* About Section */
  .about-content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    gap: 3rem;
  }
  .about-text {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideUp 0.5s ease-out forwards;
  }
  .about-photo {
    opacity: 0;
    transform: translateX(20px);
    animation: slideUp 0.5s ease-out forwards;
  }
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .about-text p {
    margin-bottom: 1rem;
    color: var(--secondary-color);
    line-height: 1.6;
  }
  .about-photo {
    position: relative;
    border-radius: 8px;
  }
  .about-photo::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--accent-color, #64ffda);
    border-radius: 8px;
    z-index: -1;
    transition: transform 0.3s ease;
  }
  .about-photo:hover::after {
    transform: translate(-5px, -5px);
  }
  .about-photo img {
    width: 100%;
    border-radius: 8px;
    z-index: 1;
    position: relative;
  }

  /* Education Section */
  .education-timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: 1rem 0;
  }

  .education-item {
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    background-color: #112240;
    border-radius: 6px;
    border-left: 4px solid var(--accent-color);
    transition: all 0.25s ease-in-out;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s ease-out forwards;
    animation-delay: var(--delay);
  }

  .education-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.3);
  }

  .education-degree {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0 0 0.5rem;
  }

  .education-institution {
    font-size: 1rem;
    font-weight: 500;
    color: var(--secondary-color);
    margin: 0 0 0.25rem;
  }

  .education-date {
    font-size: 0.85rem;
    color: var(--accent-color);
    margin: 0 0 1rem;
    font-style: italic;
  }

  .education-description {
    margin: 0;
    font-size: 0.95rem;
    color: var(--secondary-color);
    line-height: 1.6;
  }

  /* Responsive Styles */
  @media (max-width: 992px) {
    .content-container {
      padding: 4rem 3rem 2rem;
    }
    .about-photo {
      order: -1;
      max-width: 300px;
      margin: 0 auto 2rem;
    }
  }
  @media (max-width: 768px) {
    .content-container {
      padding: 4rem 1.5rem 2rem;
    }
    .about-content {
      grid-template-columns: 1fr;
    }
    .about-photo {
      order: -1;
      max-width: 300px;
      margin: 0 auto 2rem;
    }
  }
</style>
