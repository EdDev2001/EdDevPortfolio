<script>
  import { fly } from 'svelte/transition';

  const codeString = `<span class="keyword">const</span> <span class="variable">developer</span> <span class="operator">=</span> {
  <span class="property">name</span>: <span class="string">'Ednel Padernal'</span>,
  <span class="property">title</span>: <span class="string">'Fullstack Developer'</span>,
  <span class="property">skills</span>: [<span class="string">'PHP'</span>, <span class="string">'Flutter'</span>, <span class="string">'Python'</span>, <span class="string">'MySQL'</span>, <span class="string">'SQL'</span>, <span class="string">'Web Development'</span>, <span class="string">'IoT'</span>, <span class="string">'Svelte'</span>],
  <span class="property">experience</span>: <span class="string">'3+ years'</span>,
  <span class="property">passion</span>: <span class="string">'Building seamless digital experiences that bridge imagination and reality'</span>,
  <span class="property">learning</span>: <span class="string">'Always'</span>
};

<span class="keyword">function</span> <span class="function-name">getAboutMe</span>() {
  <span class="keyword">return</span> <span class="string">\`Passionate full-stack developer crafting innovative digital solutions with modern technologies.\`</span>;
}`;
</script>

<main class="content-container">
  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="hero-content">
      <h1 class="hero-name" in:fly={{ y: 20, duration: 800, delay: 300 }}>
        Ednel Padernal
      </h1>
      <h2 class="hero-title" in:fly={{ y: 20, duration: 800, delay: 500 }}>
        Fullstack Developer
      </h2>
      <p class="hero-tagline" in:fly={{ y: 20, duration: 800, delay: 700 }}>
        Crafting web solutions from frontend to backend.
      </p>
      <div class="hero-buttons">
        <a href="/projects" class="cta-button" in:fly={{ y: 20, duration: 800, delay: 900 }}>
          View My Work
        </a>
        <a href="/Ednel cv.pdf" target="_blank" rel="noopener noreferrer" class="cta-button" in:fly={{ y: 20, duration: 800, delay: 1100 }}>
          View CV
        </a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section">
    <h2 class="section-title">Tech Stack</h2>
    <div class="about-content">
        <div class="code-window">
            <div class="code-window-header">
                <div class="dots">
                    <span class="dot" style="background: #ff5f56;"></span>
                    <span class="dot" style="background: #ffbd2e;"></span>
                    <span class="dot" style="background: #27c93f;"></span>
                </div>
            </div>
            <div class="code-window-body">
<pre><code>{@html codeString}</code></pre>
            </div>
        </div>
    </div>
  </section>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

  .content-container {
    padding: 0 5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 80px; /* Offset for fixed header */
  }
  .hero-content {
    max-width: 700px;
  }
  .hero-name {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
  }
  .hero-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    color: #a8b2d1;
    margin: 0.5rem 0;
  }
  .hero-tagline {
    font-size: 1.1rem;
    color: #8892b0;
    margin: 1rem 0 2.5rem;
  }
  .hero-buttons {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .cta-button {
    display: inline-block;
    background-color: transparent;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    padding: 0.8rem 1.8rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.25s ease;
  }
  .cta-button:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }

  /* About Section */
  .about-section {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-color);
    margin: 0.5rem auto 0;
  }

  .about-content {
    max-width: 800px;
    width: 100%;
  }

  .code-window {
    background-color: #282c34;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .code-window-header {
    background: #21252b;
    padding: 10px 15px;
    display: flex;
    align-items: center;
  }

  .dots {
    display: flex;
  }

  .dot {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .code-window-body {
    padding: 20px;
    font-family: 'Fira Code', monospace; /* Or another coding font */
    font-size: 0.95rem;
    line-height: 1.6;
    overflow-x: auto;
    color: #abb2bf;
  }

  .code-window-body pre {
    margin: 0;
  }

  .code-window-body :global(.keyword) {
    color: #c678dd;
  }
  .code-window-body :global(.variable) {
    color: #61afef;
  }
  .code-window-body :global(.operator) {
    color: #56b6c2;
  }
  .code-window-body :global(.property) {
    color: #e06c75;
  }
  .code-window-body :global(.string) {
    color: #98c379;
  }
  .code-window-body :global(.number) {
    color: #d19a66;
  }
  .code-window-body :global(.function-name) {
    color: #61afef;
  }
  .code-window-body :global(.comment) {
    color: #5c6370;
    font-style: italic;
  }

  /* Responsive Styles */
  @media (max-width: 992px) {
    .content-container {
      padding: 0 3rem;
    }
  }
  @media (max-width: 768px) {
    .content-container {
      padding: 0 1.5rem;
    }
    .about-section {
      padding: 4rem 0;
    }
    .section-title {
      font-size: 2rem;
    }
    .code-window-body {
      font-size: 0.85rem;
    }
  }
</style>
