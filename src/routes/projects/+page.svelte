<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  const projects = [
    {
      title: 'Inventory & Management System',
      image: '/inventory.jpg',
      description: 'A comprehensive inventory and management system for small businesses, built as a final year project. Features include real-time stock tracking, order management, and sales reporting.',
      tech: ['PHP', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Smart Home Controller',
      image: '/iot.png',
      description: 'A mobile application built with Flutter to control various IoT devices in a smart home environment. The system uses a Python backend for device communication.',
      tech: ['Flutter', 'Firebase', 'IoT'],
      link: '#',
      github: '#'
    },
    {
      title: 'Developer Portfolio Website',
      image: '/Portfolio.png',
      description: 'The website you are currently viewing. A personal portfolio built to showcase my skills, projects, and professional background. Fully responsive and designed with a modern aesthetic.',
      tech: ['SvelteKit', 'Iconify', 'Vite', 'Firebase'],
      link: '/',
      github: '#'
    },
    {
      title: 'Data Analysis Web App',
      image: '/data.jpg',
      description: 'A web-based tool for uploading, analyzing, and visualizing data sets. Built with Python and Flask on the backend, with a dynamic Svelte frontend.',
      tech: ['Python', 'Flask', 'Svelte', 'Firebase'],
      link: '#',
      github: '#'
    },
    {
      title: 'Full-Featured Blog Platform',
      image: '/blog.jpg',
      description: 'A complete blogging platform with user authentication, post creation and management, and an admin dashboard. Built with a PHP backend and a reactive Web frontend.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Live Weather Forecast App',
      image: '/weather.jpg',
      description: 'A web application that provides real-time weather forecasts using the OpenWeatherMap API. Features include geolocation to find the user\'s current weather and a search function for other cities.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Geolocation'],
      link: '#',
      github: '#'
    }
  ];
</script>

<svelte:head>
  <title>Projects | EdDev2001</title>
</svelte:head>

<main class="content-container">
  <section id="projects" class="page-section" in:fly={{ y: 20, duration: 500 }}>
    <h1 class="section-title">My Projects</h1>
    <div class="projects-grid">
      {#each projects as project, i}
        <div class="project-card" style="animation-delay: {100 + i * 100}ms;">
          <div class="project-image-container">
            <img src={project.image} alt={project.title} class="project-image" />
          </div>
          <div class="project-info">
            <div class="project-header">
              <h3 class="project-title">{project.title}</h3>
              <div class="project-links">
                {#if project.github && project.github !== '#'}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <Icon icon="mdi:github" />
                  </a>
                {/if}
                {#if project.link && project.link !== '#'}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live preview">
                    <Icon icon="mdi:open-in-new" />
                  </a>
                {/if}
              </div>
            </div>
            <p class="project-description">{project.description}</p>
            <div class="project-tech">
              {#each project.tech as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  .content-container {
    padding: 6rem 5rem 2rem;
    max-width: 1400px;
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

  /* Projects Section */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  .project-card {
    background-color: #112240;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s ease-out forwards;
    border: 1px solid transparent;
  }
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    border-color: var(--accent-color);
  }

  .project-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-image {
    transform: scale(1.05);
  }

  .project-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    margin-right: 1rem;
  }

  .project-links {
    display: flex;
    gap: 0.75rem;
  }

  .project-links a {
    color: var(--secondary-color);
    font-size: 1.25rem;
    transition: color 0.3s ease;
  }

  .project-links a:hover {
    color: var(--accent-color);
  }

  .project-description {
    font-size: 0.95rem;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-family: 'Fira Code', monospace;
    margin-top: auto;
  }
  .tech-tag {
    background-color: rgba(100, 255, 218, 0.1);
    color: var(--accent-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  /* Responsive Styles */
  @media (max-width: 992px) {
    .content-container {
      padding: 4rem 3rem 2rem;
    }
  }
  @media (max-width: 768px) {
    .content-container {
      padding: 4rem 1.5rem 2rem;
    }
  }
</style>
