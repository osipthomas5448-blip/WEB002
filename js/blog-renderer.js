/* ============================================================
   ProfitTheory — Blog Renderer
   Auto-renders blog cards from blogs-data.js
   ============================================================ */

// ── Helpers ────────────────────────────────────────────────
function avatarInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function slugToParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

function categoryFromParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category');
}

// ── Card HTML builders ─────────────────────────────────────
function buildBlogCard(blog) {
  return `
    <article class="blog-card">
      <a href="blog-post.html?slug=${blog.slug}" class="blog-card-img-wrap" aria-label="Read ${blog.title}">
        <img class="blog-card-img" src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'">
      </a>
      <div class="blog-card-body">
        <a href="blog.html?category=${blog.categorySlug}" class="category-badge blog-card-category">${blog.category}</a>
        <div class="blog-card-meta">
          <span>📅 ${blog.date}</span>
          <span>⏱ ${blog.readTime}</span>
        </div>
        <h3><a href="blog-post.html?slug=${blog.slug}">${blog.title}</a></h3>
        <p>${blog.excerpt}</p>
        <div class="blog-card-footer">
          <div class="blog-card-author">
            <div class="blog-card-author-avatar">${avatarInitials(blog.author)}</div>
            ${blog.author}
          </div>
          <a href="blog-post.html?slug=${blog.slug}" class="read-more-link">Read →</a>
        </div>
      </div>
    </article>`;
}

function buildHorizontalCard(blog) {
  return `
    <article class="blog-card-horizontal">
      <a href="blog-post.html?slug=${blog.slug}" class="blog-card-img-wrap" aria-label="Read ${blog.title}">
        <img class="blog-card-img" src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'">
      </a>
      <div class="blog-card-body">
        <a href="blog.html?category=${blog.categorySlug}" class="category-badge">${blog.category}</a>
        <div class="blog-card-meta mt-8">
          <span>📅 ${blog.date}</span>
          <span>⏱ ${blog.readTime}</span>
        </div>
        <h3><a href="blog-post.html?slug=${blog.slug}">${blog.title}</a></h3>
        <a href="blog-post.html?slug=${blog.slug}" class="read-more-link mt-8" style="display:inline-flex;">Read more →</a>
      </div>
    </article>`;
}

function buildRecentPostItem(blog) {
  return `
    <a href="blog-post.html?slug=${blog.slug}" class="recent-post-item">
      <img class="recent-post-thumb" src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'">
      <div class="recent-post-body">
        <div class="recent-post-cat">${blog.category}</div>
        <h4>${blog.title}</h4>
        <div class="recent-post-date">${blog.date}</div>
      </div>
    </a>`;
}

// ── Render: Homepage ───────────────────────────────────────
function renderHomepage() {
  // Hero main card (first featured)
  const heroMain = document.querySelector('.hero-main-card-link');
  const featured = getFeaturedBlogs();
  if (heroMain && featured.length > 0) {
    const f = featured[0];
    heroMain.href = `blog-post.html?slug=${f.slug}`;
    const img = heroMain.querySelector('.hero-main-img');
    const cat = heroMain.querySelector('.hero-cat');
    const title = heroMain.querySelector('.hero-title');
    const author = heroMain.querySelector('.hero-author');
    const date = heroMain.querySelector('.hero-date');
    const read = heroMain.querySelector('.hero-read');
    if (img) img.src = f.imageFull || f.image;
    if (cat) { cat.textContent = f.category; cat.href = `blog.html?category=${f.categorySlug}`; }
    if (title) title.textContent = f.title;
    if (author) author.textContent = f.author;
    if (date) date.textContent = f.date;
    if (read) read.textContent = f.readTime;
  }

  // Hero side cards
  const heroSideCards = document.querySelector('.hero-side-cards');
  const heroGrid = document.querySelector('.hero-grid');
  if (heroSideCards && featured.length > 1) {
    heroSideCards.innerHTML = featured.slice(1, 3).map(blog => `
      <a href="blog-post.html?slug=${blog.slug}" class="hero-side-card">
        <img class="hero-side-img" src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'">
        <div class="hero-side-body">
          <span class="category-badge">${blog.category}</span>
          <h3>${blog.title}</h3>
          <div class="hero-side-meta">
            <span>📅 ${blog.date}</span>
            <span>⏱ ${blog.readTime}</span>
          </div>
        </div>
      </a>`).join('');
  } else if (heroSideCards) {
    heroSideCards.innerHTML = '';
  }

  if (heroSideCards) {
    heroSideCards.style.display = heroSideCards.children.length ? '' : 'none';
  }

  // Latest articles grid
  const latestGrid = document.querySelector('#latest-grid');
  if (latestGrid) {
    const recent = getRecentBlogs(6);
    latestGrid.innerHTML = recent.map(buildBlogCard).join('');
  }

  // Sidebar recent posts
  const sidebarRecent = document.querySelector('#sidebar-recent');
  if (sidebarRecent) {
    const recent = getRecentBlogs(5);
    sidebarRecent.innerHTML = recent.map(buildRecentPostItem).join('');
  }

  // Sidebar categories
  renderSidebarCategories();

  // Ticker
  renderTicker();
}

// ── Render: Blog Listing ───────────────────────────────────
function renderBlogListing() {
  const grid = document.querySelector('#blog-listing-grid');
  if (!grid) return;

  const activeCat = categoryFromParam();
  let blogs = activeCat ? getBlogsByCategory(activeCat) : [...BLOGS_DATA].sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));

  // Category filter tabs
  const filterContainer = document.querySelector('#category-filters');
  if (filterContainer) {
    const cats = [{ name: 'All Topics', slug: '' }, ...CATEGORIES];
    filterContainer.innerHTML = cats.map(c => `
      <a href="blog.html${c.slug ? '?category=' + c.slug : ''}"
         class="cat-strip-item ${activeCat === c.slug || (!activeCat && !c.slug) ? 'active' : ''}">
        ${c.name}${c.count ? ` (${c.count})` : ''}
      </a>`).join('');
  }

  // Page title update
  if (activeCat) {
    const cat = CATEGORIES.find(c => c.slug === activeCat);
    const heading = document.querySelector('#blog-page-title');
    if (heading && cat) heading.textContent = cat.name;
  }

  grid.innerHTML = blogs.length
    ? blogs.map(buildBlogCard).join('')
    : `<div class="text-center" style="grid-column:1/-1;padding:48px"><p>No articles found in this category.</p></div>`;

  const sidebar = document.querySelector('.content-sidebar');
  const contentLayout = document.querySelector('.content-layout');
  const hideSidebarCategories = ['online-earning', 'freelancing', 'passive-income'];
  if (sidebar && contentLayout) {
    if (activeCat && hideSidebarCategories.includes(activeCat)) {
      sidebar.style.display = 'none';
      contentLayout.style.gridTemplateColumns = '1fr';
    } else {
      sidebar.style.display = '';
      contentLayout.style.gridTemplateColumns = '';
    }
  }

  renderSidebarCategories();
  const sideRecent = document.querySelector('#sidebar-recent');
  if (sideRecent) sideRecent.innerHTML = getRecentBlogs(5).map(buildRecentPostItem).join('');
}

// ── Render: Blog Post Detail ───────────────────────────────
function renderBlogPost() {
  const slug = slugToParam();
  const blog = slug ? getBlogBySlug(slug) : null;
  const notFound = document.querySelector('#post-not-found');
  const postWrap = document.querySelector('#post-wrapper');

  if (!blog) {
    if (notFound) notFound.style.display = 'block';
    if (postWrap) postWrap.style.display = 'none';
    return;
  }

  // SEO
  document.title = `${blog.title} | ProfitTheory`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', blog.excerpt);

  // Hero
  const heroImg = document.querySelector('#post-hero-img');
  const heroTitle = document.querySelector('#post-hero-title');
  const heroCat = document.querySelector('#post-hero-cat');
  const heroAuthor = document.querySelector('#post-hero-author');
  const heroDate = document.querySelector('#post-hero-date');
  const heroRead = document.querySelector('#post-hero-read');
  if (heroImg) heroImg.src = blog.imageFull || blog.image;
  if (heroTitle) heroTitle.textContent = blog.title;
  if (heroCat) { heroCat.textContent = blog.category; heroCat.href = `blog.html?category=${blog.categorySlug}`; }
  if (heroAuthor) heroAuthor.textContent = blog.author;
  if (heroDate) heroDate.textContent = blog.date;
  if (heroRead) heroRead.textContent = blog.readTime;

  // Breadcrumb
  const bcCat = document.querySelector('#bc-category');
  const bcTitle = document.querySelector('#bc-title');
  if (bcCat) { bcCat.textContent = blog.category; bcCat.href = `blog.html?category=${blog.categorySlug}`; }
  if (bcTitle) bcTitle.textContent = blog.title;

  // Content
  const content = document.querySelector('#post-content');
  if (content) content.innerHTML = blog.content;

  // Tags
  const tagsWrap = document.querySelector('#post-tags');
  if (tagsWrap && blog.tags) {
    tagsWrap.innerHTML = blog.tags.map(t => `<span class="tag-item">${t}</span>`).join('');
  }

  // Author box
  const authorAvatar = document.querySelector('#author-avatar');
  const authorName = document.querySelector('#author-name');
  const authorBio = document.querySelector('#author-bio');
  if (authorAvatar) authorAvatar.textContent = avatarInitials(blog.author);
  if (authorName) authorName.textContent = blog.author;
  if (authorBio) authorBio.textContent = blog.authorBio;

  // Related posts
  const relatedGrid = document.querySelector('#related-grid');
  if (relatedGrid) {
    const related = getRelatedBlogs(blog.slug, blog.categorySlug, 3);
    if (related.length) {
      relatedGrid.innerHTML = related.map(buildBlogCard).join('');
      relatedGrid.closest('.related-section').style.display = '';
    } else {
      relatedGrid.closest('.related-section').style.display = 'none';
    }
  }

  // Sidebar recent
  const sideRecent = document.querySelector('#sidebar-recent');
  if (sideRecent) sideRecent.innerHTML = getRecentBlogs(5).map(buildRecentPostItem).join('');
  renderSidebarCategories();
}

// ── Shared: Sidebar Categories ─────────────────────────────
function renderSidebarCategories() {
  const catWidget = document.querySelector('#sidebar-categories');
  if (!catWidget) return;
  catWidget.innerHTML = CATEGORIES.map(c => `
    <a href="blog.html?category=${c.slug}" class="category-list-item">
      <span>${c.name}</span>
      <span class="category-count">${c.count}</span>
    </a>`).join('');
}

// ── Ticker ─────────────────────────────────────────────────
function renderTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const recent = getRecentBlogs(8);
  const items = recent.map(b => `
    <a href="blog-post.html?slug=${b.slug}">${b.title}</a>
    <span>•</span>`).join('');
  track.innerHTML = items + items; // duplicate for seamless loop
}

// ── Auto-init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') renderHomepage();
  else if (page === 'blog.html') renderBlogListing();
  else if (page === 'blog-post.html') renderBlogPost();
});
