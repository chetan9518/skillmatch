
# 🚀 SkillMatch – Dev Profile + Skill-Based Matching + Resume Upload Platform

**SkillMatch** is a full-stack platform built for developers to:

- Create and manage professional profiles (bio, skills, resume)
- Upload resumes securely to AWS S3
- Match with other developers based on overlapping skills
- Share a public profile with GitHub/portfolio/resume
- Post & browse collaboration or internship opportunities (upcoming)
- Use secure OTP verification via Resend + Redis

> 🧑‍💻 Built from scratch to gain real-world backend, database, cloud & authentication skills — not just for showcase.

---

## 🛠️ Tech Stack

| Layer       | Tech Used                                  |
|------------|----------------------------------------------|
| Frontend   | React, TypeScript, Tailwind CSS              |
| Backend    | Node.js, Express.js, Zod                     |
| Database   | PostgreSQL (via Prisma ORM)                  |
| Caching    | Redis (for OTPs and fast access)             |
| File Upload| AWS S3 (Resume & Profile Pic Storage)        |
| Email OTP  | Resend (Email provider for login/signup)     |
| Auth       | JWT (token-based, secure routes)             |
| Deployment | 🔧 Coming soon (Vercel, Render, S3 Hosting)   |

---

## 🔑 Core Features

✅ Full Auth System (OTP + JWT secured login/signup)  
✅ Dev Profile: Skills, Bio, Resume Upload, GitHub, Portfolio  
✅ Resume upload to AWS S3 (with public URL)  
✅ Profile picture & dark mode support  
✅ Skill-based matchmaking between developers  
✅ Redis + Resend OTP integration (fast, secure)  
✅ Strong backend validation using Zod  
✅ PostgreSQL for relational, production-grade storage  
🔜 Job posting & apply/bookmark system  
🔜 Public profile sharing with username

---

## 📦 Resume Upload Logic

- User uploads resume via dashboard form
- Backend receives file and uploads to S3
- File URL is saved in PostgreSQL (via Prisma)
- URL is used in public profile and resume view

---

## 🔐 OTP + JWT Authentication Flow

1. User enters email on signup
2. OTP sent via Resend (email service)
3. OTP stored temporarily in Redis with expiry
4. After OTP verification, JWT token issued
5. Token used in all secure API requests

---

## 🧪 Matching Logic

- When user adds skills, they're stored in DB
- Backend compares logged-in user's skills with others using SQL `&&` operator (array match)
- Returns a ranked list of best-matching developers

---

## 🖼️ Screenshots

> (Add clean screenshots from your dashboard, profile view, match list, etc.)

---

## 🚧 Deployment Plan (Coming Soon)

- Frontend → **Vercel**
- Backend → **Render or Railway**
- Database → **Neon.tech (hosted PostgreSQL)**
- File Hosting → **AWS S3 (Public Resume URLs)**

---

## 🧠 Learnings & Intent

This project was built during Summer 2025 not as a clone or tutorial-following app, but to:

- Understand real-world full-stack dev workflows  
- Work with production-level tools like Redis, AWS, PostgreSQL  
- Create something useful and scalable for developers  
- Demonstrate actual backend + infra + frontend skills

---

## ✨ Author

**Chetan**  
CSE Undergrad @ IIIT Agartala  
Learning deeply by building from scratch — full-stack, cloud-native, and industry-aligned.

> LinkedIn: [https://www.linkedin.com/in/chetan-bb87bb31a/](#)  
> GitHub Repo: [github.com/chetan9518/skillmatch](#)

---

## 🧪 Running the Project Locally

```bash
# Backend Setup
cd backend
npm install
# Add your .env with:
# DATABASE_URL=...
# AWS credentials
# RESEND_API_KEY=
# REDIS_URL=
npm run dev

# Frontend Setup
cd frontend
npm install
npm run dev
