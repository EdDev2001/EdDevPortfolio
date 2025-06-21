<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';

</script>

<svelte:head>
  <title>Contact | EdDev2001</title>
</svelte:head>

<main class="content-container">
  <section id="contact" class="page-section" in:fly={{ y: 20, duration: 500 }}>
    <div class="contact-content">
      <h1 class="section-title" style="--delay: 100ms">Get In Touch</h1>
      <p class="contact-text" style="--delay: 200ms">
        I'm currently open to new opportunities and collaborations. Whether you have a question or
        just want to say hi, I'll get back to you!
      </p>

      <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="bc9d8c28-ce3a-4796-9246-60aa1112bcf7" />
        <input type="hidden" name="subject" value="New Email Recieve from website" />
        <input type="hidden" name="from_name" value="EdDev2001" />

        <div class="form-group" style="--delay: 300ms">
          <input type="text" id="name" name="name" required placeholder="Name" />
          <label for="name">Name</label>
        </div>
        <div class="form-group" style="--delay: 400ms">
          <input type="email" id="email" name="email" required placeholder="Your Email" />
          <label for="email">Email</label>
        </div>
        <div class="form-group" style="--delay: 500ms">
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Message"
          ></textarea>
          <label for="message">Message</label>
        </div>
        <button type="submit" class="cta-button" style="--delay: 600ms">Send Message</button>
      </form>

    </div>
  </section>
</main>

<style>
  .content-container {
    padding: 6rem 5rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px); /* Full viewport height minus header */
  }
  .page-section {
    width: 100%;
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards, cta-pulse 2.5s 1.3s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  .contact-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards;
  }
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes cta-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.3);
    }
    70% {
      box-shadow: 0 0 0 12px rgba(100, 255, 218, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
    }
  }

  .contact-text {
    font-size: 1.1rem;
    color: var(--secondary-color);
    margin: 2rem 0 3rem;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards;
    animation-delay: var(--delay);
  }

  /* Contact Form */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin: 0 auto;
  }

  .form-group {
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards;
    animation-delay: var(--delay);
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 1rem;
    background-color: #0a192f;
    border: 1px solid #233554;
    border-radius: 4px;
    color: var(--text-color);
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: transparent;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
  }

  .contact-form label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: var(--secondary-color);
    pointer-events: none;
    transition: all 0.2s ease;
  }

  .contact-form input:focus + label,
  .contact-form input:not(:placeholder-shown) + label,
  .contact-form textarea:focus + label,
  .contact-form textarea:not(:placeholder-shown) + label {
    top: -0.75rem;
    left: 0.75rem;
    font-size: 0.8rem;
    color: var(--accent-color);
    background-color: #0a192f; /* To cut through the input border */
    padding: 0 0.25rem;
  }

  .cta-button {
    display: inline-block;
    background-color: transparent;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    padding: 1rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.25s ease;
    align-self: center;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards;
    animation-delay: var(--delay);
  }
  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(100, 255, 218, 0.15),
      transparent
    );
    transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
  }
  .cta-button:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px) scale(1.02);
  }
  .cta-button:hover::before {
    left: 100%;
  }

  /* Social Links */
  .social-links {
    margin-top: 4rem;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s 0.2s ease-out forwards;
    animation-delay: var(--delay);
  }

  .social-links p {
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
  }

  .links-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .links-container a {
    color: var(--secondary-color);
    font-size: 1.75rem;
    transition: all 0.3s ease;
  }

  .links-container a:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
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
