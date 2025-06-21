<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  export let data;

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
  <title>Skills | EdDev2001</title>
</svelte:head>

<main class="content-container">
  <section id="skills" class="page-section" in:fly={{ y: 20, duration: 500 }}>
    <h1 class="section-title">My Technical Skills</h1>
    <div class="skills-grid">
      {#each skills as skill, i}
        <div class="skill-card" style="animation-delay: {200 + i * 75}ms;">
          <div class="skill-icon">
            <Icon icon={skill.icon} />
          </div>
          <h3 class="skill-name">{skill.name}</h3>
          <p class="skill-description">{skill.description}</p>
        </div>
      {/each}
    </div>
  </section>

  {#if data.repos && data.repos.length > 0}
    <section id="github-repos" class="page-section">
      <h2 class="section-title">My GitHub Repositories</h2>
      <div class="repos-grid">
        {#each data.repos as repo (repo.id)}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            class="repo-card"
            in:fly={{ y: 20, duration: 400, delay: 200 }}
          >
            <div class="repo-header">
              <Icon icon="mdi:github" class="repo-icon" />
              <h4 class="repo-name">{repo.name}</h4>
            </div>
            <p class="repo-description">{repo.description || 'No description available.'}</p>
            <div class="repo-footer">
              <span class="repo-stat">
                <Icon icon="mdi:star" />
                {repo.stargazers_count}
              </span>
              <span class="repo-stat">
                <Icon icon="mdi:source-fork" />
                {repo.forks_count}
              </span>
              <span class="repo-language">{repo.language || 'N/A'}</span>
            </div>
          </a>
        {/each}
      </div>
    </section>
  {/if}
</main>

<style>
  .content-container {
    padding: 6rem 5rem 4rem;
    max-width: 1200px;
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

  @keyframes slideDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 4rem;
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideDown 0.6s ease-out forwards;
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

  /* Skills Section */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }
  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 1.5rem;
    background-color: #112240;
    border-radius: 8px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    animation: slideUp 0.5s ease-out forwards;
    text-align: center;
    border: 1px solid transparent;
  }
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .skill-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.3);
  }
  .skill-card:hover .skill-icon {
    transform: scale(1.15) rotate(-5deg);
  }
  .skill-icon {
    font-size: 3rem; /* Control icon size via font-size */
    color: var(--accent-color);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .skill-icon :global(svg) {
    height: 1em;
    width: 1em;
  }
  .skill-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0.5rem 0 0;
  }
  .skill-description {
    font-size: 0.9rem;
    color: var(--secondary-color);
    line-height: 1.6;
    margin: 0;
  }

  /* GitHub Repos Section */
  .repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .repo-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    background-color: #112240;
    border-radius: 8px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    text-decoration: none;
    color: inherit;
  }

  .repo-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.3);
  }

  .repo-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .repo-icon {
    font-size: 1.5rem;
    color: var(--text-color);
  }

  .repo-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
  }

  .repo-description {
    font-size: 0.9rem;
    color: var(--secondary-color);
    line-height: 1.6;
    margin: 0 0 1rem;
    flex-grow: 1;
  }

  .repo-footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.85rem;
    color: var(--secondary-color);
  }

  .repo-stat {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .repo-language {
    margin-left: auto;
    padding: 0.2rem 0.5rem;
    background-color: #0a192f;
    border-radius: 4px;
    font-size: 0.8rem;
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
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
