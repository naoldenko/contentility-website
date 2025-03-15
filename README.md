# ContentilityAI Landing Page

A modern landing page for ContentilityAI, featuring a sleek and professional design with a minimalistic layout, bold headings, and ample white space.

## Features

- Responsive design that works on all devices
- Modern UI with clean lines and a professional look
- Waitlist signup form with animation effects
- Built with Next.js and Tailwind CSS for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/contentility-website.git
cd contentility-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app/page.tsx` - Main landing page component
- `src/components/WaitlistForm.tsx` - Waitlist signup form component
- `public/contentility-logo.svg` - Logo file
- `src/app/globals.css` - Global CSS styles
- `tailwind.config.ts` - Tailwind CSS configuration

## Customization

### Colors

The primary color scheme uses electric blue (#3066be) and white. You can modify the colors in:

- `src/app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind theme configuration

### Logo

Replace the placeholder logo in `public/contentility-logo.svg` with your actual logo.

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel:

```bash
npx vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
