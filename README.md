# 🌍 Earth Insights Project Guide

## ✍️ Project Aim

The aim of this project is to build a full-stack web application called Earth Insights that visualises scientific Earth data in a clear and interactive way. This application will simulate satellite imagery and global environmental metrics using a mocked dataset, laying the foundation for integrating real NASA or NOAA datasets in the future. The frontend will be built with Next.js 15 (App Router) and styled using Tailwind CSS with shadcn components. The backend will utilise FastAPI, with a focus on maintainability and modularity, all running in a Python virtual environment on a MacBook Pro with an M4 processor.

---

## 🌐 Expected Outcome

By the end of this guide, you will:

- Have a functioning full-stack app that fetches mocked climate data from a FastAPI backend and visualises it on a Next.js frontend.

- Understand how to structure and organise your folders, run your servers independently, and expand the project in the future with real scientific datasets.

- Learn how to install and use tools like skops (used for serialising scikit-learn models) and potentially use it to represent predictive modelling data in the future.

- Be familiar with the basics of Next.js 15, Tailwind CSS, and shadcn components, and how to use them to build a modern, responsive, and user-friendly web application.

---

## 📖 How the Application is Used

1. A user opens the Earth Insights website.

2. They are greeted with an interactive dashboard showing temperature and CO2 concentration by country/region over time.

3. Users can interact with a map or chart components to visualise changes.

4. Data is served from a FastAPI backend, returning JSON from a mocked dataset.

5. Eventually, this can be swapped for real-time NASA/NOAA data.

---

## 📂 Folder & File Structure

/earth-insights
├── backend
│ ├── app
│ │ ├── main.py
│ │ ├── routes.py
│ │ ├── mock_data.py
│ │ └── utils.py
│ └── requirements.txt
├── frontend
│ ├── app
│ │ ├── page.tsx
│ │ └── components
│ │ └── Chart.tsx
│ ├── public
│ ├── styles
│ │ └── globals.css
│ └── tailwind.config.ts
└── README.md

---
