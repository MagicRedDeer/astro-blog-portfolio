# Modern Portfolio & Blog

A modern, responsive portfolio and blog website built with Astro, React/Preact, and TailwindCSS. This project serves as a professional showcase for developers, featuring a portfolio, blog, and resume sections.

![Portfolio Preview](preview.png)

## 🚀 Features

- **Modern Design**: Clean, responsive interface with smooth animations
- **Portfolio Showcase**: Display your projects with detailed case studies
- **Blog Platform**: Share your technical insights and experiences
- **Interactive Resume**: Professional resume with skills, experience, and education
- **Contact Form**: Easy-to-use contact form for potential clients or employers
<!-- - **Dark/Light Mode**: Comfortable viewing in any lighting condition -->
- **Performance Focused**: Built with Astro for optimal loading speeds
- **SEO Friendly**: Optimized for search engines
- **Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Preact](https://preactjs.com/) - Lightweight React Alternative
- [TailwindCSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Lucide Icons](https://lucide.dev/) - Icons
- [Markdown/MDX](https://mdxjs.com/) - Content Management

## 📂 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # UI components
│   │   ├── atoms/      # Basic UI elements
│   │   ├── molecules/  # Compound components
│   │   └── organisms/  # Complex components
│   ├── content/    # Markdown/MDX content
│   │   ├── blog/       # Blog posts
│   │   ├── projects/   # Project details
│   │   └── ...         # Other content types
│   ├── layouts/    # Page layouts
│   ├── pages/      # Route pages
│   ├── styles/     # Global styles
│   ├── types/      # TypeScript types
│   └── utils/      # Utility functions
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio-blog.git
cd portfolio-blog
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 📝 Content Management

### Blog Posts

Add new blog posts in `src/content/blog/` as Markdown files:

```markdown
---
title: "Your Blog Title"
description: "Brief description"
publishDate: 2024-03-15
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Projects

Add projects in `src/content/projects/`:

```markdown
---
name: "Project Name"
description: "Project description"
year: 2024
repository: "https://github.com/..."
homepage: "https://..."
skills: ["skill1", "skill2"]
---

Project details...
```

## 🎨 Customization

1. **Colors**: Modify `tailwind.config.mjs` to change the color scheme
2. **Typography**: Update font settings in `tailwind.config.mjs`
3. **Content**: Edit files in `src/content/` to update personal information
4. **Components**: Modify or add components in `src/components/`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔧 Configuration

The site can be configured by editing:

- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - TailwindCSS theme
- `src/utils/constants.ts` - Site constants

## 🚀 Deployment

This site can be deployed to any static hosting platform:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

Your Name - [talha.ahmed@gmail.com](mailto:talha.ahmed@gmail.com)

Project Link: [https://github.com/magicreddeer/astro-blog-portfolio](https://github.com/yourusername/portfolio-blog)
