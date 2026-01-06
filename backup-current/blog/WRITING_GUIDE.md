# Vijenex™ Blog Writing Guide

## How to Write & Submit Blogs

### Step 1: Write in Markdown

Use **Markdown** - it's simple and supports everything:

#### **Bold & Italic**
```markdown
**This is bold text**
*This is italic text*
***This is bold and italic***
```

#### **Headings**
```markdown
# Main Title (H1)
## Section Heading (H2)
### Subsection (H3)
#### Small Heading (H4)
```

#### **Links**
```markdown
[Link Text](https://example.com)
[My GitHub Profile](https://github.com/username)
```

#### **Images**
```markdown
![Alt text](https://example.com/image.png)
![Security Diagram](../assets/blog/my-diagram.png)
```

#### **GIFs**
```markdown
![Demo GIF](https://media.giphy.com/media/example.gif)
```

#### **Code Blocks**
````markdown
```python
def hello_world():
    print("Hello, Vijenex!")
```

```bash
kubectl get pods
```
````

#### **Inline Code**
```markdown
Use `kubectl` command to deploy
```

#### **Lists**
```markdown
- Bullet point 1
- Bullet point 2
  - Nested point

1. Numbered item
2. Another item
```

#### **Quotes**
```markdown
> This is a quote or important note
```

#### **Emojis**
```markdown
Just type emojis directly: 🚀 🔒 ⚡ 🎯
```

---

## Step 2: Choose Category

Pick ONE category for your blog:

- **Cloud Security** - AWS, Azure, GCP, OCI security
- **DevSecOps** - CI/CD security, automation
- **Compliance** - CIS benchmarks, standards
- **Vulnerability Management** - CVE, scanning, patching
- **Container Security** - Docker, Kubernetes security
- **Infrastructure as Code** - Terraform, Ansible security
- **Best Practices** - Security tips, guides
- **Tool Reviews** - Security tool comparisons
- **Case Studies** - Real-world implementations
- **Announcements** - Vijenex™ news

---

## Step 3: Submit Your Blog

### Option A: GitHub Issue (Recommended)
1. Click "Write for Us" button on website
2. Fill in the template:
   - Title
   - Category
   - Your GitHub username
   - Markdown content
3. Submit issue
4. We'll review and publish

### Option B: Pull Request
1. Fork the repository
2. Create file: `blog/posts/your-blog-title.md`
3. Add frontmatter (see template below)
4. Submit PR

---

## Blog Post Template

Create a `.md` file with this structure:

```markdown
---
title: "Your Blog Title Here"
date: "2025-01-15"
author: "Your Name"
github: "your-github-username"
category: "Cloud Security"
tags: ["AWS", "Security", "IAM"]
excerpt: "Short description of your blog post (150 chars max)"
image: "https://example.com/cover-image.jpg"
---

# Your Blog Title

![Cover Image](https://example.com/image.png)

## Introduction

Your introduction paragraph here...

## Main Section

**Bold text** and *italic text* example.

### Subsection

Here's some code:

```python
def secure_function():
    return "Secure!"
```

### Adding Images

![Security Diagram](../assets/blog/diagram.png)

### Adding GIFs

![Demo](https://media.giphy.com/media/example.gif)

## Code Examples

```bash
# Install tool
pip install vijenex-scanner

# Run scan
vijenex-scan --target server.com
```

## Links

Check out [Vijenex Tools](https://github.com/vijenex) for more.

## Conclusion

Your conclusion here...

---

**About the Author:** Brief bio about yourself.
```

---

## Image Guidelines

### Where to Store Images

1. **External hosting (Recommended):**
   - Imgur: https://imgur.com
   - GitHub: Upload to your own repo
   - Giphy: For GIFs

2. **In repository:**
   - Place in: `assets/blog/your-post-name/`
   - Reference: `../assets/blog/your-post-name/image.png`

### Image Requirements
- Max size: 2MB per image
- Formats: PNG, JPG, GIF, WebP
- Dimensions: Max 1200px width

---

## Markdown Cheat Sheet

| Syntax | Result |
|--------|--------|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `[link](url)` | [link](url) |
| `![img](url)` | Image |
| `` `code` `` | `code` |
| `> quote` | Quote block |
| `- item` | Bullet list |
| `1. item` | Numbered list |
| `# heading` | H1 heading |
| `## heading` | H2 heading |

---

## Review Process

1. **Submit** - Via GitHub Issue or PR
2. **Review** - We check content quality & security
3. **Feedback** - We may suggest edits
4. **Publish** - We convert to HTML and publish
5. **Credit** - Your name + GitHub link included

---

## Tips for Great Blogs

✅ **DO:**
- Use clear headings
- Add code examples
- Include images/diagrams
- Link to sources
- Proofread before submitting
- Use emojis sparingly 🎯

❌ **DON'T:**
- Copy content from others
- Include sensitive data
- Use offensive language
- Spam links
- Submit promotional content

---

## Need Help?

- Questions: Open GitHub Issue
- Examples: Check existing blogs
- Markdown help: https://www.markdownguide.org

---

© 2025 Vijenex™ - Happy Writing! 🚀
