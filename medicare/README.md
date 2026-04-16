# Medicare 🏥

**India's Healthcare Price Comparison Platform**

A full React web application for comparing hospital prices across India's top 5 hospitals — built as a college project.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

App opens at **http://localhost:3000**

---

## 📁 Project Structure

```
medicare/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── PriceTable.jsx / .css
│   ├── context/
│   │   └── AuthContext.jsx       ← Array-based auth (no backend)
│   ├── data/
│   │   └── mockData.js           ← All hospital data (arrays)
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Pricing.jsx / .css    ← Surgery, Medication, Lab comparison
│   │   ├── LabRecords.jsx / .css
│   │   ├── Dashboard.jsx / .css  ← Protected, requires login
│   │   ├── Plans.jsx / .css      ← Pro plan pricing
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Auth.css
│   ├── App.jsx                   ← Routes
│   ├── index.js
│   └── index.css                 ← Global design system
└── package.json
```

---

## 🏥 Hospitals Covered

| Hospital | City | Type |
|----------|------|------|
| AIIMS New Delhi | New Delhi | Government |
| Medanta – The Medicity | Gurugram | Private |
| Apollo Hospitals | Delhi | Private |
| Fortis Healthcare | Delhi | Private |
| Kokilaben Dhirubhai Ambani | Mumbai | Private |

---

## ✨ Features

### Pages
- **Home** — Hero, hospital preview, stats, CTA
- **Pricing** — Compare surgeries, medications & lab tests (tabs + filters)
- **Lab Records** — Full lab test catalogue with prices & details
- **Dashboard** — Health records, appointments, saved searches, bar charts
- **Plans** — Free / Pro / Family pricing tiers
- **Login / Signup** — Array-based auth, no backend

### Tech
- React 18 + React Router v6
- Recharts for bar charts in Dashboard
- Google Fonts: Outfit + Manrope
- Pure CSS (no Tailwind, no component library)
- All data stored in `src/data/mockData.js` arrays

---

## 🔑 Demo Account

```
Email:    arjun@example.com
Password: password123
```

Or use the **"Use demo account"** button on the Login page.

---

## 📊 Data Overview

- **10 surgeries** with prices across 5 hospitals
- **8 medications** (generic & branded)
- **12 lab tests** across multiple categories
- **3 pricing plans** (Basic, Pro, Family)

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0a6e6e` (Teal 600) |
| Font Display | Outfit |
| Font Body | Manrope |
| Radius MD | 14px |
| Theme | Light, Organic & Earthy |

---

*Built for educational purposes. Prices are indicative — always verify with hospitals.*
