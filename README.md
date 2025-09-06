# 🏦 Prospera

**Safe & Simple. Invest Smart. Grow Steady.**

Prospera is a banking-like investment platform designed for stability, trust, and growth.  
It allows users to invest using **USDT (TRC-20 on Tron network)**, track balances, and earn through referral rewards.

---

## 📌 Overview

- Focused on **stablecoin (USDT Tron)** to minimize volatility.
- Provides **4 investment packages** tailored for different user needs.
- Supports **crypto deposits & withdrawals** through the Heleket API.
- Includes a **referral system** to reward community growth.

---

## 🔑 Core Features

1. **User Registration & Authentication**

   - Email verification
   - Secure login system

2. **Investor Profile Management**

   - View and update personal details

3. **Investment Packages**

   - 4 packages: Basic, Standard, Premium, Enterprise
   - Default for new investors = Basic package

4. **Crypto Payments (USDT - Tron)**

   - Deposit via blockchain wallet (Heleket API)
   - Withdraw to registered USDT wallet

5. **Transaction Management**

   - Deposit history
   - Withdrawal history
   - Balance overview

6. **Referral System**
   - Each investor has a unique referral code/link
   - Referral bonuses credited in USDT balance

---

## 🏗️ System Workflow

### 🔹 Onboarding

1. Investor signs up → verifies email
2. Default package = Basic
3. Investor receives referral code

### 🔹 Deposits

1. Investor selects **Deposit**
2. System generates a **unique Tron address** (via Heleket API)
3. Investor sends USDT → system confirms via blockchain
4. Balance updated → transaction recorded

### 🔹 Investments

1. Investor selects a package
2. Funds allocated from balance
3. System tracks investment and returns

### 🔹 Withdrawals

1. Investor requests withdrawal to USDT wallet
2. Balance & approvals checked
3. Withdrawal processed via Heleket API
4. Transaction logged

### 🔹 Referrals

1. New investor registers via referral code/link
2. Referrer earns bonus after first deposit
3. Bonus credited in USDT balance

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Next.js Server Actions (Node.js)
- **Database**: PostgreSQL (Prisma ORM)
- **Payments**: USDT (TRC-20) via Heleket API
- **Auth & Security**: JWT / NextAuth, bcrypt
- **Hosting**: Vercel (Frontend + Serverless), Railway/Neon/PlanetScale (DB)

---

## 🗂️ Database Schema (Core Tables)

### **Investor**

- `id` (PK)
- `email` (unique)
- `password`
- `referralCode`
- `referredById` (FK → Investor.id)

### **InvestmentPackage**

- `id` (PK)
- `name`
- `rate` (ROI %)
- `duration` (in days)

### **Investment**

- `id` (PK)
- `investorId` (FK → Investor.id)
- `packageId` (FK → InvestmentPackage.id)
- `amount`
- `status`

### **Transaction**

- `id` (PK)
- `investorId` (FK → Investor.id)
- `type` (`deposit`, `withdraw`, `referral`)
- `amount`
- `status`

### **ReferralReward**

- `id` (PK)
- `referrerId` (FK → Investor.id)
- `referredInvestorId` (FK → Investor.id)
- `amount`
- `status`

---

## 🚀 Future Enhancements

- Mobile app (React Native)
- Support for additional stablecoins (USDC, BUSD)
- AI-powered investment insights
- Advanced analytics & reporting

---
