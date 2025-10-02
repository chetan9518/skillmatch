🚀 SkillMatch – Developer Profile & Skill-Based Matching Platform
SkillMatch is a full-stack platform designed for developers to create professional profiles, showcase their skills, and connect with peers based on shared expertise. This project was built from the ground up to demonstrate a deep understanding of modern backend systems, cloud infrastructure, and secure authentication workflows.

🧑‍💻 Mission: To move beyond simple portfolio projects and build something scalable, secure, and useful for the developer community.

📸 Screenshots & Features
Here are the key features of SkillMatch in action.
<img width="1919" height="1079" alt="Screenshot 2025-10-02 205449" src="https://github.com/user-attachments/assets/efa7a4bc-2780-4add-b736-a321a34dd0d2" />
<img width="1919" height="1079" alt="Screenshot 2025-10-02 205528" src="https://github.com/user-attachments/assets/d0289744-0860-41d4-89e2-86fd6b5f9493" />
<img width="1919" height="1077" alt="Screenshot 2025-10-02 205732" src="https://github.com/user-attachments/assets/ce3e6376-7835-4b9b-a9e9-e58388e10769" />
<img width="1906" height="1069" alt="Screenshot 2025-10-02 205749" src="https://github.com/user-attachments/assets/15ed6c10-052b-42f4-945b-b4da3c94a869" />
<img width="1915" height="1078" alt="Screenshot 2025-10-02 205813" src="https://github.com/user-attachments/assets/6bcf481b-f4fb-42e0-b66e-c571118b80ca" />
<img width="1856" height="1071" alt="Screenshot 2025-10-02 205822" src="https://github.com/user-attachments/assets/aa0ff46e-fae2-4806-bb7e-edc5a52bdb3d" />
<img width="1916" height="1078" alt="Screenshot 2025-10-02 205907" src="https://github.com/user-attachments/assets/e9301d1e-0922-401c-9ea1-12f01af598d3" />
<img width="1839" height="1079" alt="Screenshot 2025-10-02 210001" src="https://github.com/user-attachments/assets/14a11980-2db0-4ea1-8f5c-801883dfba8b" />

<img width="1915" height="1077" alt="Screenshot 2025-10-02 210008" src="https://github.com/user-attachments/assets/6aca9eae-8a54-46ae-96de-84d42b6a351f" />


🔑 Core Features
✅ Full Authentication System: Secure, passwordless login using Email OTPs (via Resend & Redis) and JWT for session management.

✅ Complete Developer Profile: Manage your bio, skills, profile picture, and links to GitHub/Portfolio.

✅ Secure Resume Upload to AWS S3: Seamlessly upload and store your resume, making it accessible via a public URL.

✅ Skill-Based Developer Matching: Find and connect with other developers based on a ranked matching of your shared technical skills.

✅ Competitive Programming Tracker: Integrate your LeetCode and Codeforces handles to automatically track and showcase your problem-solving progress.

✅ Direct Messaging: A built-in chat system to communicate with other developers you've matched with.

✅ Job & Collaboration Board: A dedicated section to post and browse job opportunities, internships, and project collaborations.

✅ Robust Backend: Built with Node.js and Express, featuring strong, type-safe data validation with Zod.

✅ Public profile sharing via username and a dedicated job board for internships and collaborations.

🛠️ Tech Stack
Layer	Technology	Purpose
Frontend	React, TypeScript, Tailwind CSS	A modern, responsive, and type-safe user interface.
Backend	Node.js, Express.js	A robust and scalable server-side foundation.
Database	PostgreSQL + Prisma ORM	Reliable, relational data storage with type-safe queries.
Caching	Redis	In-memory data store for fast OTP verification and caching.
File Storage	AWS S3	Secure, scalable cloud storage for user resumes and profile pictures.
Authentication	JWT & Resend	Token-based authorization and reliable email OTP delivery.
Validation	Zod	Schema declaration and validation for backend requests.
Deployment	Vercel (Frontend), Render (Backend)	Modern, CI/CD-friendly hosting platforms.

Export to Sheets
⚙️ System Architecture & Logic
🔐 OTP + JWT Authentication Flow
Initiation: User enters their email to sign up or log in.

OTP Generation: The backend generates a secure OTP and sends it to the user's email via Resend.

Temporary Storage: The OTP is stored in Redis with a short expiration time (e.g., 5 minutes) for quick verification.

Verification: The user submits the received OTP. The backend validates it against the value in Redis.

Token Issuance: Upon successful verification, a JWT (JSON Web Token) is generated and sent to the client.

Authenticated Access: The client includes the JWT in the header of all subsequent requests to access protected routes.

📦 Resume Upload Logic
Client-Side: A user selects and submits their resume file through a form on their dashboard.

Backend Reception: The Express server receives the file as multipart/form-data.

Cloud Upload: The backend uploads the file directly to a designated AWS S3 bucket.

URL Persistence: The public URL returned by S3 is saved in the user's record in the PostgreSQL database via Prisma.

Access: This URL is then used to display a link on the user's public profile, allowing anyone to view or download the resume.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   PostgreSQL database
-   Redis instance
-   AWS S3 Bucket and IAM credentials
-   Resend API Key

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/skillmatch.git
    cd skillmatch/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your credentials.

4.  **Run database migrations:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The backend will be running at `http://localhost:3000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

    
✨ Author
Chetan
CSE Undergrad @ IIIT Agartala

Learning deeply by building from scratch — full-stack, cloud-native, and industry-aligned.

LinkedIn: https://www.linkedin.com/in/chetan-bb87bb31a/
GitHub: https://github.com/chetan9518/

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

📣 Acknowledgements
Built with inspiration from real-world developer needs.

Thanks to the open-source community for providing the amazing tools that made this project possible.
