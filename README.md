# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# China Vibes Shipping Web App

A full-stack shipping management platform with customer dashboard, shipment tracking, and analytics.

## 🔧 Tech Stack
- Frontend: React + TypeScript + Tailwind + Chart.js
- Backend: Hono.js + SQL Server + Prisma
- Auth: JWT + Role-based access
- Deployment: Azure Static Web Apps + Azure App Service

## 🚀 Features
- Public website with service info
- Customer login and dashboard
- Shipment tracking by ID
- Real-time analytics and charts
- Offline support via PWA
- Push notifications for delivery updates

## 📦 Setup
```bash
pnpm install
pnpm dev


---
🔐 Auth Roles
- Admin: full access
- Customer: dashboard + tracking
📁 Folder Structure
See /frontend and /backend for modular architecture.
📞 Support
Contact: support@chinavibes.com

## 🧭 Onboarding Guide (Client-Facing)

---this is the website name use it--
	Red Crane Trading Co.
Inspired by the elegant Chinese crane — a symbol of long life and reliability.
**Welcome to China Vibes Shipping!**  
Here’s how to get started:

1. **Login/Register**  
   - Visit `/login` to access your dashboard  
   - Use your email and password to sign in

2. **Track Shipments**  
   - Enter your tracking ID on the dashboard  
   - View status, origin, and delivery ETA

3. **Dashboard Insights**  
   - See your shipment history  
   - View charts of delivery performance

4. **Mobile Access**  
   - Install the app as a PWA  
   - Works offline and syncs when online

5. **Support**  
   - Email: support@chinavibes.com  
   - Phone: +254-xxx-xxx-xxx

--- use these as the services--
🛠 Our Services
📦 Product sourcing
✅ Supplier checks
💬 Price negotiation
📋 Order follow-up
🔍 Quality control
🚢 Shipping (air & sea)
🛍 Market tours
🗣 Translation
🧳 China trip support

💱 Additional Services
💰 Money exchange for Kenya, Ghana & Nigeria
🏨 Hotel bookings
🪪 Visa assistance for Kenya, Namibia, Ghana & Nigeria
🎫 Flight ticket bookings
🚖 Airport pick-ups

⸻

📩 For sourcing, send:
🖼 Product photo or link • 🔢 Quantity • 📐 Specs • 🎁 Branding/packaging details

✈ Visiting China?
Share your 📅 travel dates & 🛒 product interests to plan your trip smoothly!

⸻

💼 Fees:
🔹 Sourcing: $60–$100/day
🔹 Market tours: $60/day (or $100/day during peak seasons
 

 for the colors use 
 Poster colors
 :Red and blue is play