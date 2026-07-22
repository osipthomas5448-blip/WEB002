<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ProfitTheory — Finance, Side Hustles & Passive Income</title>
  <meta name="description" content="ProfitTheory is your go-to source for actionable finance tips, side hustle ideas, freelancing guides, and passive income strategies to build real wealth." />
  <meta name="keywords" content="side hustle, passive income, freelancing, budgeting, online earning, business ideas, personal finance" />
  <meta property="og:title" content="ProfitTheory — Finance, Side Hustles & Passive Income" />
  <meta property="og:description" content="Actionable money guides for real people. Side hustles, passive income, freelancing, budgeting, and business ideas." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.profittheory.com/" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://www.profittheory.com/" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
</head>
<body class="home-page">

<!-- ══ HEADER ══════════════════════════════════════════════ -->
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="site-logo">
        <div class="logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <div class="logo-text">Profit<span>Theory</span></div>
      </a>
      <nav class="main-nav">
        <a href="index.html" class="active">Home</a>
        <a href="blog.html">Blog</a>
        <a href="blog.html?category=online-earning">Online Earning</a>
        <a href="blog.html?category=freelancing">Freelancing</a>
        <a href="blog.html?category=passive-income">Passive Income</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="header-actions">
        <button class="btn btn-primary btn-sm" data-modal-open>Subscribe Free</button>
        <button class="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Nav -->
<div class="mobile-nav">
  <div class="mobile-nav-inner">
    <a href="index.html">Home</a>
    <a href="blog.html">Blog</a>
    <a href="blog.html?category=online-earning">Online Earning</a>
    <a href="blog.html?category=freelancing">Freelancing</a>
    <a href="blog.html?category=passive-income">Passive Income</a>
    <a href="blog.html?category=budgeting">Budgeting</a>
    <a href="blog.html?category=business-ideas">Business Ideas</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="#" class="btn btn-primary mobile-cta" data-modal-open>Subscribe Free</a>
  </div>
</div>

<!-- ══ TICKER BAR ══════════════════════════════════════════ -->
<div class="ticker-bar">
  <div class="container">
    <div class="ticker-inner">
      <span class="ticker-label">Trending</span>
      <div class="ticker-track"></div>
    </div>
  </div>
</div>

<!-- ══ HERO ════════════════════════════════════════════════ -->
<section class="hero-featured">
  <div class="hero-grid">
    <!-- Full-screen hero image -->
    <div class="hero-main-card">
      <img class="hero-main-img" src="https://cdn.shopify.com/s/files/1/0070/7032/articles/What_20is_20money_1848x970_6c6d2d91-8bea-45d7-9a93-3456cf2d8db3.png?v=1729517013" alt="Hero image" loading="lazy" />
      <div class="hero-main-overlay"></div>
    </div>
  </div>
</section>

<!-- ══ CATEGORY STRIP ══════════════════════════════════════ -->
<div class="category-strip">
  <div class="category-strip-inner">
    <a href="blog.html" class="cat-strip-item active">All Topics</a>
    <a href="blog.html?category=online-earning" class="cat-strip-item">Online Earning</a>
    <a href="blog.html?category=freelancing" class="cat-strip-item">Freelancing</a>
    <a href="blog.html?category=passive-income" class="cat-strip-item">Passive Income</a>
    <a href="blog.html?category=budgeting" class="cat-strip-item">Budgeting</a>
    <a href="blog.html?category=business-ideas" class="cat-strip-item">Business Ideas</a>
  </div>
</div>

<!-- ══ MAIN CONTENT ════════════════════════════════════════ -->
<section class="section section-primary-news">
  <div class="container">
    <div class="content-layout home-page-layout">

      <main class="content-main">
        <div class="section-heading">
          <h2>Latest stories</h2>
          <a href="blog.html" class="view-all">Browse all topics →</a>
        </div>

        <div class="blog-grid" id="latest-grid">
          <!-- Injected by blog-renderer.js -->
          <div class="blog-card skeleton" style="height:340px;border:none;"></div>
          <div class="blog-card skeleton" style="height:340px;border:none;"></div>
          <div class="blog-card skeleton" style="height:340px;border:none;"></div>
        </div>
      </main>

      <aside class="content-sidebar">
        <div class="sidebar-widget newsletter-widget">
          <div class="sidebar-widget-header"><h3>Newsletter</h3></div>
          <div class="sidebar-widget-body">
            <p>Get premium finance stories, action plans, and side hustle updates delivered weekly.</p>
            <form class="newsletter-widget-form">
              <label for="newsletter-name-sidebar">First Name</label>
              <input id="newsletter-name-sidebar" type="text" placeholder="Your first name" />
              <label for="newsletter-email-sidebar">Email Address</label>
              <input id="newsletter-email-sidebar" type="email" placeholder="Your email address" required />
              <button type="submit">Join 12,000+ readers →</button>
            </form>
          </div>
        </div>

        <div class="sidebar-widget">
          <div class="sidebar-widget-header"><h3>Trending topics</h3></div>
          <div class="sidebar-widget-body" style="padding:0 20px;">
            <div id="sidebar-categories"></div>
          </div>
        </div>

        <div class="sidebar-widget">
          <div class="sidebar-widget-header"><h3>Top reads</h3></div>
          <div class="sidebar-widget-body" style="padding:12px 20px;">
            <div id="sidebar-recent"></div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="section section-category-highlights">
  <div class="container">
    <div class="section-heading">
      <h2>Explore categories</h2>
      <a href="blog.html" class="view-all">Browse all categories →</a>
    </div>
    <div class="category-card-grid">
      <article class="category-card category-card-large" style="background-image:url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80');">
        <div class="category-card-content">
          <span class="category-label">Freelancing</span>
          <h3>How to land your first client</h3>
          <p>Step-by-step guidance for beginners ready to earn faster.</p>
          <a href="blog.html?category=freelancing" class="read-more-link">Explore category →</a>
        </div>
      </article>
      <article class="category-card" style="background-image:url('https://images.unsplash.com/photo-1516245834210-c4c142787335?w=900&q=80');">
        <div class="category-card-content">
          <span class="category-label">Online earning</span>
          <h3>Build a side income portfolio</h3>
          <p>High-impact paths for creators, consultants, and remote earners.</p>
          <a href="blog.html?category=online-earning" class="read-more-link">Explore category →</a>
        </div>
      </article>
      <article class="category-card" style="background-image:url('https://gujarat.efyexpo.com/wp-content/uploads/2025/11/high.png');">
        <div class="category-card-content">
          <span class="category-label">Passive income</span>
          <h3>Earn smarter with systems</h3>
          <p>Discover passive approaches that free up your time while cash flow grows.</p>
          <a href="blog.html?category=passive-income" class="read-more-link">Explore category →</a>
        </div>
      </article>
      <article class="category-card" style="background-image:url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80');">
        <div class="category-card-content">
          <span class="category-label">Business ideas</span>
          <h3>Launch fast with low risk</h3>
          <p>Fresh concepts and execution plans for ambitious readers.</p>
          <a href="blog.html?category=business-ideas" class="read-more-link">Explore category →</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section section-feature-cta">
  <div class="container">
    <div class="feature-cta-grid">
      <article class="feature-card feature-card-support">
        <span class="eyebrow accent">Insights</span>
        <h3>Weekly newsletter for smart earners</h3>
        <p>Designed for readers who want high-impact ideas, clear next steps, and new revenue strategies.</p>
        <a href="#" class="btn btn-outline btn-lg" data-modal-open>Subscribe for free</a>
      </article>
    </div>
  </div>
</section>

<section class="section section-sponsored">
  <div class="container">
    <div class="section-heading">
      <h2>Sponsored content</h2>
      <a href="blog.html" class="view-all">See partner stories →</a>
    </div>
    <div class="sponsor-grid">
      <article class="sponsor-card">
        <span class="sponsor-tag">Entrepreneur</span>
        <h3>How modern freelancers are scaling to $10K months</h3>
        <p>Sponsored by Workwise—real tactics from real operators.</p>
      </article>
      <article class="sponsor-card">
        <span class="sponsor-tag">Finance</span>
        <h3>Unlock student-friendly savings strategies</h3>
        <p>Premium content built to protect earnings and grow financial confidence.</p>
      </article>
      <article class="sponsor-card">
        <span class="sponsor-tag">Tools</span>
        <h3>Best apps for tracking earnings and budgets</h3>
        <p>Trusted partners who help you stay profitable with less effort.</p>
      </article>
      <article class="sponsor-card">
        <span class="sponsor-tag">Career</span>
        <h3>Build a portfolio that lands clients faster</h3>
        <p>Sponsored guide for service providers and freelance professionals.</p>
      </article>
    </div>
  </div>
</section>

<!-- ══ NEWSLETTER SECTION ══════════════════════════════════ -->
<section class="newsletter-section">
  <div class="container">
    <div class="newsletter-content">
      <div class="eyebrow">Free Weekly Newsletter</div>
      <h2>Level Up Your Income Every Week</h2>
      <p>Join 12,000+ readers getting actionable money strategies, side hustle breakdowns, and passive income ideas delivered every Thursday.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email address…" required />
        <button type="submit">Subscribe Free →</button>
      </form>
      <p class="newsletter-disclaimer">No spam. Unsubscribe anytime. We respect your privacy.</p>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══════════════════════════════════════════════ -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="site-logo" style="margin-bottom:0;">
          <div class="logo-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
          <div class="logo-text" style="color:#fff;">Profit<span>Theory</span></div>
        </a>
        <p>Practical, research-backed guides to help you earn more, spend smarter, and build lasting wealth — no fluff, no jargon.</p>
      </div>
      <div class="footer-col">
        <h4>Categories</h4>
        <div class="footer-links">
          <a href="blog.html?category=online-earning">Online Earning</a>
          <a href="blog.html?category=freelancing">Freelancing</a>
          <a href="blog.html?category=passive-income">Passive Income</a>
          <a href="blog.html?category=budgeting">Budgeting</a>
          <a href="blog.html?category=business-ideas">Business Ideas</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <div class="footer-links">
          <a href="about.html">About Us</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
          <a href="mailto:info@profittheory.com">info@profittheory.com</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <div class="footer-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms.html">Terms & Conditions</a>
          <a href="disclaimer.html">Disclaimer</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 ProfitTheory. All rights reserved. Based in Austin, TX, USA.</span>
      <div class="footer-bottom-links">
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="disclaimer.html">Disclaimer</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </div>
</footer>

<!-- ══ COOKIE BANNER ═══════════════════════════════════════ -->
<div class="cookie-banner">
  <div class="container">
    <div class="cookie-banner-inner">
      <div class="cookie-text">
        <p>🍪 We use cookies to enhance your experience. By continuing to visit this site you agree to our <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.</p>
      </div>
      <div class="cookie-actions">
        <button class="btn btn-outline btn-sm cookie-decline">Decline</button>
        <button class="btn btn-primary btn-sm cookie-accept">Accept All</button>
      </div>
    </div>
  </div>
</div>

<!-- ══ POPUP MODAL CTA ════════════════════════════════════ -->
<div class="modal-overlay">
  <div class="modal-box">
    <div class="modal-header">
      <button class="modal-close" aria-label="Close">✕</button>
      <h3>Get Your Free Side Hustle Starter Guide</h3>
      <p>Join 12,000+ readers and get our most popular guide delivered instantly to your inbox.</p>
    </div>
    <div class="modal-body">
      <form class="modal-form">
        <div class="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Your first name" required />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your@email.com" required />
        </div>
        <label class="form-checkbox">
          <input type="checkbox" class="consent-check" required />
          <span>I agree to the <a href="privacy-policy.html" target="_blank">Privacy Policy</a> and <a href="terms.html" target="_blank">Terms & Conditions</a>.</span>
        </label>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Me The Free Guide →</button>
      </form>
    </div>
  </div>
</div>

<!-- ══ SCROLL TO TOP ══════════════════════════════════════ -->
<button class="scroll-top" aria-label="Scroll to top">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
</button>

<script src="data/blogs-data.js"></script>
<script src="js/blog-renderer.js"></script>
<script src="js/main.js"></script>
</body>
</html>
