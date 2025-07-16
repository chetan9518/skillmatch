# 🚀 SkillMatch – Developer Profile & Skill-Based Matching Platform

**SkillMatch** is a full-stack platform designed for developers to:

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
|-------------|--------------------------------------------|
| Frontend    | React, TypeScript, Tailwind CSS            |
| Backend     | Node.js, Express.js, Zod                   |
| Database    | PostgreSQL (via Prisma ORM)                |
| Caching     | Redis (for OTPs and fast access)           |
| File Upload | AWS S3 (Resume & Profile Pic Storage)      |
| Email OTP   | Resend (Email provider for login/signup)   |
| Auth        | JWT (token-based, secure routes)           |
| Deployment  | Vercel, Render, S3 Hosting (coming soon)   |

---

## 🔑 Core Features

- ✅ Full Auth System (OTP + JWT secured login/signup)
- ✅ Dev Profile: Skills, Bio, Resume Upload, GitHub, Portfolio
- ✅ Resume upload to AWS S3 (with public URL)
- ✅ Profile picture & dark mode support
- ✅ Skill-based matchmaking between developers
- ✅ Redis + Resend OTP integration (fast, secure)
- ✅ Strong backend validation using Zod
- ✅ PostgreSQL for relational, production-grade storage
- 🔜 Job posting & apply/bookmark system
- 🔜 Public profile sharing with username

---

## 📦 Resume Upload Logic

1. User uploads resume via dashboard form
2. Backend receives file and uploads to S3
3. File URL is saved in PostgreSQL (via Prisma)
4. URL is used in public profile and resume view

---

## 🔐 OTP + JWT Authentication Flow

1. User enters email on signup
2. OTP sent via Resend (email service)
3. OTP stored temporarily in Redis with expiry
4. After OTP verification, JWT token issued
5. Token used in all secure API requests

---

## 🧪 Matching Logic

- User skills are stored in the database
- Backend compares logged-in user's skills with others using SQL array matching
- Returns a ranked list of best-matching developers

---

## 🖼️ Screenshots



---

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install
# Add your .env file with:
# DATABASE_URL=...
# AWS credentials
# RESEND_API_KEY=...
# REDIS_URL=...
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` (or your configured Vite port).

---

## 🧠 Learnings & Intent

This project was built to:

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
> GitHub: [github.com/chetan9518/](#)

---



---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📣 Acknowledgements

- Built with inspiration from real-world developer needs
- Thanks to open-source contributors and the developer community
