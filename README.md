# 🏨 Hotel KPI Calculator

A lightweight, interactive dashboard for calculating **key hotel performance indicators (KPIs)** using only **HTML**, **CSS**, and **vanilla JavaScript** — no external libraries or frameworks required.

This project was created as part of a coding challenge to demonstrate front-end development skills, clean UI design, and logical implementation of real-time calculations.

---

## 📊 Features

### Core Inputs
Users can enter:
- **Total Rooms Available**
- **Rooms Sold**
- **Total Room Revenue ($)**

### Real-Time Outputs
The app automatically calculates and displays:
- **Occupancy (%)** = (Rooms Sold / Total Rooms Available) × 100  
- **Average Daily Rate (ADR)** = Total Room Revenue / Rooms Sold  
- **Revenue Per Available Room (RevPAR)** = Total Room Revenue / Total Rooms Available  

### Auto-Formatting & Edge Cases
- Occupancy values are shown as percentages with **two decimal places** (e.g., `82.25%`).
- ADR and RevPAR are shown as **formatted currency** (e.g., `$125.50`).
- Handles division by zero gracefully — returns `$0.00` or `N/A` when inputs are invalid.

---

## 🧮 Example Presets

To make demonstration easier, the calculator includes three pre-configured examples:
- **Small Hotel Example** → (50 rooms, 35 sold, $4200 revenue)  
- **Busy Night Example** → (200 rooms, 190 sold, $28,500 revenue)  
- **Reset Button** → clears all fields and resets KPIs  

---

## 🧠 How It Works

The logic resides in `main.js`:
- All inputs are bound to an event listener that triggers recalculations on every change.
- Each formula is computed dynamically using the industry-standard definitions.
- The results update the DOM in real-time without refreshing the page.

Edge cases (like division by zero or blank fields) are handled cleanly by returning `0.00` or `N/A`.

---

## 🧩 Project Structure
