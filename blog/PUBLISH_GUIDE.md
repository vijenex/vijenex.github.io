# Blog Publishing Guide for Maintainers

## Quick Publish Process

When someone submits a blog via GitHub Issue:

### Step 1: Review Submission
1. Go to GitHub Issues
2. Find issue with `blog-submission` label
3. Review content quality and accuracy

### Step 2: Use Converter Tool
1. Open: `https://vijenex.github.io/tools/markdown-to-html.html`
2. Copy Markdown content from issue
3. Paste into converter
4. Click "Download HTML"

### Step 3: Customize HTML
1. Open downloaded file
2. Update metadata:
   - Title (from issue)
   - Date (today's date)
   - Author name (from issue)
   - Category tag (from issue)
   - GitHub username (if they checked "show username")

### Step 4: Save & Publish
1. Save file as: `blog/blog-title-slug.html`
2. Update `blog/index.html` - add new blog card
3. Commit and push:
```bash
git add blog/
git commit -m "Publish blog: Title"
git push origin main
```

### Step 5: Close Issue Automatically
1. In commit message, add: `Closes #ISSUE_NUMBER`
2. Example: `git commit -m "Publish blog: Title\n\nCloses #1"`
3. When pushed, GitHub auto-closes issue with link to commit

**OR manually:**
1. Comment: "✅ Published at https://vijenex.github.io/blog/your-post.html"
2. Close issue

---

## Template for Author Box

### With GitHub Username:
```html
<div class="author-box">
  <h3>About the Author</h3>
  <p><strong>Author Name</strong> (@github-username) - Short bio here.</p>
</div>
```

### Without GitHub Username:
```html
<div class="author-box">
  <h3>About the Author</h3>
  <p><strong>Author Name</strong> - Short bio here.</p>
</div>
```

---

## Blog Index Card Template

Add to `blog/index.html`:

```html
<article class="blog-card">
  <div class="blog-card-content">
    <div class="blog-meta">
      <span class="blog-tag">Category Name</span>
      <span>Month DD, YYYY</span>
    </div>
    <h3><a href="blog-file-name.html">Blog Title</a></h3>
    <p class="blog-excerpt">Short excerpt (150 chars max)...</p>
    <a href="blog-file-name.html" class="read-more">Read more →</a>
  </div>
</article>
```

---

## File Naming Convention

Convert title to slug:
- Lowercase
- Replace spaces with hyphens
- Remove special characters
- Example: "Securing Kubernetes Clusters" → `securing-kubernetes-clusters.html`

---

## Category Tags

Use these exact category names:
- Cloud Security
- DevSecOps
- Compliance
- Vulnerability Management
- Container Security
- Infrastructure as Code
- Best Practices
- Tool Reviews
- Case Studies
- Announcements

---

## Quality Checklist

Before publishing:
- [ ] Content is technically accurate
- [ ] No sensitive information
- [ ] Code blocks are properly formatted
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Author attribution is correct
- [ ] Category is appropriate
- [ ] File name follows convention
- [ ] Added to blog index
- [ ] Tested on mobile

---

## Time Estimate

- Review: 5-10 minutes
- Convert & customize: 5 minutes
- Publish: 2 minutes
- **Total: ~15 minutes per blog**

---

© 2025 Vijenex™
