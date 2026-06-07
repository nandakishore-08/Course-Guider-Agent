🤖 Course Guider Agent

An AI-powered learning assistant that helps users explore technology trends, structured learning paths, and career guidance in the software development field.

🌐 Live Demo: https://course-guider-agent.vercel.app/

✨ What this project does

Course Guider Agent is an intelligent system that helps users:

Understand latest technology trends
Generate personalized learning roadmaps
Get career guidance based on skills
Explore software development paths in a structured way
🧠 How it works
User asks a question (career / tech / learning)
Request is sent to N8N workflow
AI model processes and generates response
Data is stored in Supabase database
Frontend displays structured output
🛠️ Tech Stack
Frontend: React + Vite
Backend Automation: N8N Workflows
Database: Supabase (PostgreSQL)
AI Model: DeepSeek-1 via GROQ
Deployment: Vercel
⚙️ Setup Instructions
1. Clone repo
git clone <your-repo-url>
cd course-guider-agent
2. Install frontend dependencies
cd frontend
npm install
3. Environment setup (IMPORTANT)

Create .env file (NOT pushed to GitHub):

VITE_API_ENDPOINT=
VITE_N8N_END_POINT=
4. Run project
npm run dev
💡 Example use cases
“How do I become a full stack developer?”
“What are the latest tech trends in AI?”
“Give me a roadmap for blockchain development”
🔐 Security note

Sensitive keys are stored in environment variables and are not included in this repository.

🎯 Purpose

This project is built to:

Simplify tech learning journeys
Help students choose career paths
Provide AI-powered guidance for developers
🤝 Future improvements
Personalized user accounts
Skill tracking system
Better UI/UX improvements
More advanced AI recommendations
❤️ Built to help developers learn smarter