# Background Image Fix & Medium Blog Redirect - Change Report

**Date:** January 6, 2025  
**Branch:** `main`  
**Commit:** `2023635`

---

## ✅ Issue 1: Hero Background Image Visibility - FIXED

**Problem:** Background image was not showing behind the hero section text ("Advancing Practical Security Engineering").

**Root Cause:** Hero section had `background: var(--bg-primary)` which was covering the global background image.

**Fix Applied:**

**File:** `assets/css/main.css`

**Before:**
```css
.hero {
  padding: 100px 24px;
  text-align: center;
  background: var(--bg-primary); /* This was covering the background image */
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}
```

**After:**
```css
.hero {
  padding: 100px 24px;
  text-align: center;
  background: transparent; /* Allow global background image to show through */
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}
```

**Result:** Global background image now visible behind all hero content, including:
- "Open Cybersecurity Initiative" badge
- "Advancing Practical Security Engineering" headline
- Subtext paragraph
- CTA buttons

---

## ✅ Issue 2: Medium Blog Redirect Model - IMPLEMENTED

**Decision:** Host full blog content on Medium. Website acts as index only.

### Changes Made:

#### 1. Updated Blog Data Structure

**File:** `blog/_data/posts.json`

**Before:**
```json
{
  "url": "posts/2025/11/announce-launch/index.html"
}
```

**After:**
```json
{
  "mediumUrl": "https://medium.com/@vijenex/launching-vijenex-our-mission-roadmap"
}
```

**Why:** Changed from local HTML file path to Medium URL.

---

#### 2. Updated Blog Page Header

**File:** `blog/index.html`

**Added:**
```html
<p style="margin-top: 16px; font-size: 14px; color: var(--text-secondary);">
  All blog content is hosted on <a href="https://medium.com/@vijenex" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary);">Medium</a>. 
  Click any post to read the full article.
</p>
```

**Why:** Clearly explains that content is hosted on Medium.

---

#### 3. Updated Blog Card JavaScript

**File:** `blog/index.html`

**Before:**
```javascript
function createBlogCard(post) {
  return `
    <h3><a href="${post.url}">${post.title}</a></h3>
    <a href="${post.url}" class="read-more">Read more →</a>
  `;
}
```

**After:**
```javascript
function createBlogCard(post) {
  const mediumUrl = post.mediumUrl || post.url || '#';
  return `
    <h3><a href="${mediumUrl}" target="_blank" rel="noopener noreferrer">${post.title}</a></h3>
    <a href="${mediumUrl}" target="_blank" rel="noopener noreferrer" class="read-more">Read on Medium →</a>
  `;
}
```

**Changes:**
- Uses `mediumUrl` field (falls back to `url` if not present)
- Opens in new tab (`target="_blank"`)
- Includes security attributes (`rel="noopener noreferrer"`)
- Button text changed to "Read on Medium →"

---

## How Blog Links Redirect

### Example Blog Post Card:

```html
<article class="blog-card">
  <div class="blog-card-content">
    <div class="blog-meta">
      <span class="blog-tag">Announcement</span>
      <span>Nov 28, 2025</span>
    </div>
    <h3>
      <a href="https://medium.com/@vijenex/launching-vijenex-our-mission-roadmap" 
         target="_blank" 
         rel="noopener noreferrer">
        Launching Vijenex™ — Our Mission & Roadmap
      </a>
    </h3>
    <p class="blog-excerpt">Introducing Vijenex™, our mission to build...</p>
    <a href="https://medium.com/@vijenex/launching-vijenex-our-mission-roadmap" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="read-more">
      Read on Medium →
    </a>
  </div>
</article>
```

### Redirect Behavior:

1. **User clicks blog post title or "Read on Medium" button**
2. **Opens Medium article in new tab** (doesn't navigate away from website)
3. **User can return to website** by closing Medium tab
4. **Security:** `rel="noopener noreferrer"` prevents security vulnerabilities

---

## Files Modified

1. **`assets/css/main.css`**
   - Changed `.hero` background from `var(--bg-primary)` to `transparent`

2. **`blog/_data/posts.json`**
   - Changed `url` field to `mediumUrl`
   - Updated example Medium URL

3. **`blog/index.html`**
   - Added Medium explanation text in header
   - Updated `createBlogCard()` function to use `mediumUrl`
   - Added `target="_blank"` and `rel="noopener noreferrer"` to all links
   - Changed button text to "Read on Medium →"

---

## What Was NOT Changed

- ✅ Static HTML blog post files remain (not deleted, just not linked)
- ✅ Blog templates remain (for reference, not used for new posts)
- ✅ No CMS features added
- ✅ No editors added
- ✅ Blog page still uses same theme and styling

---

## Testing Checklist

- [x] Hero section shows background image behind all text
- [x] Blog page displays Medium explanation
- [x] Blog post cards link to Medium URLs
- [x] Links open in new tab
- [x] "Read on Medium" button text is correct
- [x] Fallback works if `mediumUrl` is missing (uses `url` field)
- [x] Security attributes present on all external links

---

## Status

✅ **Both Issues Fixed**

- Hero background image now visible behind all content
- Medium blog redirect model fully implemented
- All blog links redirect to Medium articles in new tabs

**Next Steps:** 
- Update `posts.json` with actual Medium URLs when articles are published
- Remove or archive old static HTML blog post files if desired

