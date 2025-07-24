# 🛍️ ShopEZ – Modern E-commerce Web App

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)

**ShopEZ** is a fast, responsive, and modern e-commerce platform built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This personal project demonstrates clean UI, smooth UX, and scalable architecture, inspired by real-world shopping apps.

---

## 🚀 Live Demo

<!-- Add your deployed link or screenshots here -->

<!-- [View Live Demo](https://your-demo-url.com) -->

---

## 💡 Purpose

ShopEZ was created as a hands-on project to practice modern web development, UI/UX design, and front-end architecture. It includes essential features like category filtering, persistent carts, and product rendering—just like a real store.

---

## 🌟 Features

* **Modern Design** – Minimalist, mobile-first UI with smooth animations
* **Hero Section** – Stats like 50K+ products, 10L+ customers, and 24/7 support
* **Product Catalog** – Listings with images, prices, ratings, and filters
* **Live Search** – Instant client-side search
* **Shopping Cart** – Persistent cart with localStorage sync
* **Categories** – Browse Electronics, Fashion, Jewelry, Home & more
* **Featured Deals** – Highlighted sales and offers
* **Account & Checkout UI** – UI components ready for backend integration
* **Newsletter & Contact** – Form and footer links included
* **404 Page** – Friendly not-found route handler
* **Fully Responsive** – Works seamlessly across all devices

---

## 🛠 Tech Stack

| Feature          | Stack                                     |
| ---------------- | ----------------------------------------- |
| Frontend         | React 18, TypeScript                      |
| Build Tool       | Vite                                      |
| Styling          | Tailwind CSS, shadcn/ui, custom utilities |
| Routing          | React Router DOM                          |
| State Management | React Query (TanStack), Context API       |
| UI Components    | Radix UI, shadcn/ui                       |
| Icons            | Lucide React                              |
| Data             | Mock data, Unsplash API                   |
| Linting          | ESLint                                    |

---

## 🧑‍💻 Getting Started

### Requirements

* Node.js (v16+)
* npm or yarn

### Setup

```bash
git clone <your-repo-url>
cd shopez-swift-find-main
npm install
npm run dev
```

Visit [http://localhost:8082](http://localhost:8082) or the terminal-provided URL.

---

## 📁 Folder Structure

```
src/
├── assets/         # Images & icons
├── components/     # UI components (Hero, ProductGrid, Cart, etc.)
├── contexts/       # React context (e.g., CartContext)
├── data/           # Product mock data
├── hooks/          # Custom React hooks
├── lib/            # API integrations & utilities
├── pages/          # Pages (Home, NotFound)
├── App.tsx         # Main app & routing
├── main.tsx        # Entry point
└── index.css       # Tailwind & global styles
```

---

## 🔑 Environment Variables

Create a `.env` file in your project root:

```env
VITE_API_URL=https://api.example.com
VITE_UNSPLASH_ACCESS_KEY=your-unsplash-key
```

> ⚠️ Replace hardcoded keys before going live.

---

## 📦 Build & Deploy

To generate a production build:

```bash
npm run build
```

The output will be in the `dist/` folder—ready for deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🧩 Highlights

* **Reusable Components** – Built with shadcn/ui and Radix UI
* **Cart System** – Persistent, synced via localStorage
* **Unsplash Integration** – Realistic product images
* **Custom Styling** – Easily editable via Tailwind config

---

## 🧰 Troubleshooting

| Issue               | Solution                               |
| ------------------- | -------------------------------------- |
| Port already in use | Vite will auto-select a new one        |
| Missing packages    | Run `npm install`                      |
| Image issues        | Check Unsplash key or image paths      |
| Network blocks      | Allow localhost in your proxy/firewall |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Make changes
4. Open a pull request

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## 📬 Contact

* **Email:** [support@shopez.com](mailto:support@shopez.com)
* **Phone:** +1 (555) 123-4567
* **Address:** 123 Commerce Street, Shopping City, SC 12345
* **Social:** [Facebook](#) | [Twitter](#) | [Instagram](#)

---

Let me know if you want help generating GitHub Actions CI workflows, live preview deployments, or a more design-focused README version.
