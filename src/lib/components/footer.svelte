<!-- Footer -->

<script>
  import Icon from '@iconify/svelte';

  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/EdDev2001' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/ednel-l-padernal-b954302a0' },
    { name: 'Facebook', icon: 'mdi:facebook', url: 'https://facebook.com/inuu2001' },
    { name: 'Telegram', icon: 'mdi:telegram', url: 'https://t.me/ednel2001' }
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="footer-content">
    <div class="social-links">
      {#each socialLinks as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
          <Icon icon={link.icon} />
        </a>
      {/each}
    </div>
    <div class="copyright">
      &copy; {currentYear} EdDev2001. All Rights Reserved.
    </div>
  </div>
</footer>

<style>
  .site-footer {
    padding: 2rem 5rem;
    background-color: #0a192f;
    color: var(--secondary-color);
    font-size: 0.9rem;
    text-align: center;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    color: var(--secondary-color);
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  .social-links a:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }

  .copyright {
    font-family: 'Fira Code', monospace;
  }

  @media (max-width: 768px) {
    .site-footer {
      padding: 2rem 1.5rem;
    }
  }
</style>

