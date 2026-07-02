# Adelani Portfolio Website

A modern personal portfolio website for Adelani Adelaja, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents professional experience, selected projects, skills, testimonials, contact details, and SEO-ready metadata routes.

## Overview

This project is a one-page portfolio website with responsive layouts for desktop, tablet, and mobile screens. It includes dark and light theme support, mobile navigation, project filtering, testimonial interactions, contact form validation, sitemap generation, and robots.txt support.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Formik
- Yup
- React Icons

## Main Features

- Responsive portfolio homepage
- Dark mode and light mode
- Mobile hamburger menu
- Project filtering by category
- Experience, education, awards, and fellowship sections
- Testimonials with rating stars
- Contact form with validation
- Social links
- SEO metadata support
- Dynamic `sitemap.xml`
- Dynamic `robots.txt`

## Project Structure

```txt
src/
  app/
    globals.css     Global styles and responsive design
    layout.tsx      Root layout, fonts, and metadata
    page.tsx        Main portfolio page
    robots.ts       robots.txt generator
    sitemap.ts      sitemap.xml generator

public/
  images/           Site images, logos, project screenshots, testimonials
  Adelani_Adelaja_CV.pdf
```

## Requirements

Install Node.js and pnpm before running the project.

Recommended:

```bash
node --version
pnpm --version
```

## Installation

Clone the repository, then install dependencies:

```bash
pnpm install
```

## Environment Variables

Create a local environment file:

```txt
.env.local
```

Add the live website URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

Use the final production domain, without a trailing slash.


This value is used by:

- `src/app/sitemap.ts`
- `src/app/robots.ts`

The `.env.local` file is ignored by Git, so also add the same variable in your deployment platform dashboard.

## Development

Start the development server:

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

Run the local development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Start the production server after building:

```bash
pnpm start
```

Run lint checks:

```bash
pnpm lint
```

Run TypeScript checks:

```bash
npx tsc --noEmit
```

## SEO Notes

The project includes dynamic SEO routes:

```txt
/sitemap.xml
/robots.txt
```

After deployment, verify these URLs in the browser:

```txt
https://your-real-domain.com/sitemap.xml
https://your-real-domain.com/robots.txt
```

For Google Search Console, submit:

```txt
https://your-real-domain.com/sitemap.xml
```

Do not submit localhost URLs.

## Contact Form

The contact form uses Formik and Yup for validation. The form submission is handled in `src/app/page.tsx`.

Current validation includes:

- Required name
- Valid email address
- Required subject
- Message length rules

## Images and Assets

Project screenshots, logos, testimonial images, and other media live in:

```txt
public/images
```

When adding images:

- Prefer optimized WebP or compressed JPEG/PNG files.
- Keep image file sizes as small as possible.
- Use descriptive `alt` text for meaningful images.
- Use empty `alt=""` only for decorative images.

## Deployment

The easiest deployment option is Vercel.

Before deploying:

1. Push your latest changes to GitHub.
2. Connect the repository to Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel environment variables.
4. Deploy the project.
5. Verify `/`, `/sitemap.xml`, and `/robots.txt`.

## Pre-Deploy Checklist

Before requesting indexing or sharing the site publicly:

- Confirm the production domain is correct.
- Set `NEXT_PUBLIC_SITE_URL`.
- Run `pnpm build`.
- Run `npx tsc --noEmit`.
- Check mobile layout.
- Test all external project links.
- Test social links.
- Test the contact form.
- Verify `sitemap.xml`.
- Verify `robots.txt`.

## Repository Notes

This is a public portfolio project. Keep sensitive values out of Git and use environment variables for deployment-specific configuration.
