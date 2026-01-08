
# Baithak Pakistani Restaurant

Baithak is a modern, fully responsive web application for a premium Pakistani restaurant. The name "Baithak" reflects the traditional lounging area in Pakistani homes where guests are welcomed and stories are shared over tea and snacks.

## Features List

- **Fully Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
- **Dynamic Menu:** A filterable menu showcasing various categories including Biryani, BBQ, Curries, Snacks, and more.
- **Reservation System:** A functional booking form with validation and simulated storage (using `localStorage`).
- **Modern UI/UX:** High-quality visuals with a Pakistani cultural theme (Deep greens, Gold accents, and authentic patterns).
- **Navigation:** Single Page Application (SPA) feel using React HashRouter.
- **Call-to-Action:** Direct links from the home page to the menu and reservations.

## Technologies Used

- **React 18+:** For building the component-based UI.
- **TypeScript:** For type-safe development.
- **Tailwind CSS:** For styling and responsive layouts.
- **React Router:** For internal navigation.
- **Google Fonts:** Cinzel (Headings) and Montserrat (Body text).

## Deployment Instructions

### Local Development
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.

### GitHub Pages / Netlify
This project is ready for deployment.
- **Netlify:** Simply drag the `dist` folder after building, or connect your repository.
- **GitHub Pages:** Use the `gh-pages` branch or configure GitHub Actions to deploy.

## Project Structure

- `/components`: Reusable UI elements like Header, Footer, and Layout.
- `/pages`: Main page components (Home, Menu, Reservations, Contact).
- `/types.ts`: TypeScript interfaces and enums.
- `/constants.tsx`: Hardcoded data for the menu and static content.
- `App.tsx`: Main routing configuration.
- `index.tsx`: Application entry point.
