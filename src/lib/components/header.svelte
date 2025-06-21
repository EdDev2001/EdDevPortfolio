<!-- Header component -->
<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';
  
  let isMenuOpen = false;
  let isScrolled = false;
  let theme = 'dark';
  
  $: activePath = $page.url.pathname;
  
  onMount(() => {
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    document.documentElement.setAttribute('data-theme', theme);

    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  };
  
  const closeMenu = () => {
    if (isMenuOpen) {
      isMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  };

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };
  
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];
</script>

<header class="header {isScrolled ? 'scrolled' : ''}" class:nav-open={isMenuOpen}>
  <div class="container">
    <a href="/" class="logo" in:fly={{ y: -20, duration: 400, delay: 300 }}>
      &lt;EdDev2001/&gt;
    </a>

    <div class="controls-wrapper">
      <nav class="nav">
        <ul class="nav-list">
          {#each navItems as item, i}
            <li class="nav-item" in:fly={{ y: -20, duration: 400, delay: 400 + i * 100 }}>
              <a 
                href={item.path} 
                class="nav-link"
                class:active={activePath === item.path}
                on:click={closeMenu}
              >
                <span class="nav-icon">{item.icon}</span>
                <span class="nav-label">{item.label}</span>
                <span class="nav-underline"></span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <div class="theme-toggle" in:fly={{ y: -20, duration: 400, delay: 400 + navItems.length * 100 }}>
        <button on:click={toggleTheme} class="theme-btn" aria-label="Toggle theme" class:light={theme === 'light'}>
          <div class="toggle-switch">
            <div class="toggle-circle"></div>
          </div>
          <span class="theme-icon">
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </div>

    <button class="mobile-menu-btn {isMenuOpen ? 'active' : ''}" on:click={toggleMenu} aria-label="Toggle menu" in:fly={{ y: -20, duration: 400, delay: 300 }}>
      <div class="hamburger-container">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
    </button>
  </div>
</header>

<style>
  /* You may want to add a monospace font to your project for the logo, e.g., in your app.css:
     @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap');
  */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    padding: 1rem 0;
    background-color: var(--dark-bg);
  }

  .header.scrolled {
    background-color: var(--header-bg);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    padding: 0.75rem 0;
  }

  [data-theme="light"] .header.scrolled {
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ccd6f6;
    text-decoration: none;
    font-family: 'Fira Code', 'Roboto Mono', monospace;
    transition: color 0.3s ease;
    z-index: 1001;
  }

  .logo:hover {
    color: #64ffda;
  }

  .controls-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ccd6f6;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.5rem 0;
    transition: color 0.3s ease, transform 0.2s ease-out;
    position: relative;
  }

  .nav-link:hover {
    color: #64ffda;
    transform: scale(0.95);
  }
  
  .nav-link.active {
    color: #64ffda;
    transform: scale(0.95);
  }

  .nav-list:hover .nav-link.active:not(:hover) {
    transform: scale(1);
    color: #ccd6f6;
  }

  .nav-underline {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #64ffda;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-link:hover .nav-underline,
  .nav-link.active .nav-underline {
    transform: scaleX(1);
  }

  .nav-list:hover .nav-link.active:not(:hover) .nav-underline {
    transform: scaleX(0);
  }

  .nav-icon {
    font-size: 1rem;
    color: #64ffda;
  }
  
  .theme-toggle {
    display: flex;
    align-items: center;
  }

  .theme-btn {
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 20px;
    cursor: pointer;
    width: 50px;
    height: 26px;
    padding: 3px;
    position: relative;
    display: flex;
    align-items: center;
    transition: border-color 0.3s ease;
  }

  .theme-btn:hover {
    border-color: #a3fce8;
  }
  
  .toggle-circle {
    background: #64ffda;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    position: absolute;
    transition: transform 0.3s ease;
    transform: translateX(0);
  }

  .theme-btn.light .toggle-circle {
    transform: translateX(24px);
  }

  .theme-icon {
    font-size: 0.8rem;
    position: absolute;
    right: 6px;
    color: #64ffda;
  }

  .theme-btn.light .theme-icon {
    left: 6px;
    right: auto;
  }

  .mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .controls-wrapper {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      width: min(75vw, 400px);
      height: 100vh;
      background: #112240;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }

    .header.nav-open .controls-wrapper {
      display: flex;
      transform: translateX(0);
    }
    
    .nav-list {
      flex-direction: column;
      gap: 2.5rem;
    }

    .mobile-menu-btn {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }
  }

  /* Hamburger Styles */
  .hamburger-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 24px;
    height: 18px;
    position: relative;
    transition: transform 0.3s ease;
  }
  .mobile-menu-btn:hover .hamburger-container {
    transform: scale(1.1);
  }
  .hamburger-line {
    width: 100%;
    height: 2px;
    background: #ccd6f6;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
    transform-origin: center;
  }
  .mobile-menu-btn.active .hamburger-line {
    background: #64ffda;
  }
  .mobile-menu-btn.active .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
</style>

