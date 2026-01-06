# How to Add New Blog Posts

## Quick Steps:

### 1. Create New Blog Post
```bash
cd blog/
cp BLOG_TEMPLATE.html my-new-post.html
```

### 2. Edit the New File
Replace these placeholders:
- `BLOG_TITLE` - Your blog title
- `BLOG_DESCRIPTION` - Short description for SEO
- `PUBLISH_DATE` - e.g., "Jan 15, 2025"
- `AUTHOR_NAME` - Your name or contributor name
- `READ_TIME` - Estimated reading time (e.g., "5")
- `AUTHOR_BIO` - Short bio about the author

### 3. Write Your Content
Between the `<!-- START WRITING -->` and `<!-- END BLOG CONTENT -->` comments, add your blog content using:
- `<h2>` for main sections
- `<h3>` for subsections
- `<p>` for paragraphs
- `<pre><code>` for code blocks
- `<ul><li>` for bullet lists
- `<ol><li>` for numbered lists

### 4. Add to Blog Index
Edit `blog/index.html` and add your new post:

```html
<article class="blog-card">
  <div class="blog-card-content">
    <div class="blog-meta">
      <span class="blog-tag">Category</span>
      <span>Jan 15, 2025</span>
    </div>
    <h3><a href="my-new-post.html">Your Blog Title</a></h3>
    <p class="blog-excerpt">Short description of your blog post...</p>
    <a href="my-new-post.html" class="read-more">Read more →</a>
  </div>
</article>
```

### 5. Commit and Push
```bash
git add blog/my-new-post.html blog/index.html
git commit -m "Add new blog post: Your Title"
git push origin main
```

## Blog Categories (Tags):
- `Announcement` - Company news
- `Technical` - Technical deep dives
- `Security` - Security best practices
- `Tutorial` - How-to guides
- `Research` - Security research

## For Community Contributions:

When someone submits a blog via GitHub Issues:

1. Review the submission
2. Create HTML file from template
3. Copy their content
4. Add author credit
5. Publish and notify them

## File Naming Convention:
- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Example: `securing-kubernetes-clusters.html`

## Tips:
- Keep posts between 800-2000 words
- Use code examples where relevant
- Add images to `assets/blog/` folder
- Test locally before pushing
- Check all links work
