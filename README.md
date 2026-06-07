# 🤖 Course Guider Agent

An AI-powered learning assistant that helps users explore technology trends, structured learning paths, and career guidance in the software development field.

🌐 **Live Demo:** [course-guider-agent.vercel.app](https://course-guider-agent.vercel.app/)

---

## 📌 About the Project

**Course Guider Agent** is designed to act as a personal tech mentor. By understanding user queries, it dynamically generates highly relevant insights, structured learning roadmaps, career guidance based on current skills, and simplified explanations for complex technical topics.

### ✨ Key Features

* **📊 Tech Trend Insights**
    * Stay updated with the latest trends in AI, Web3, Cloud, and Cybersecurity.
    * Access easy-to-understand summaries of complex industry shifts.
* **🧭 Learning Roadmaps**
    * Step-by-step learning paths tailored for developers.
    * Structured progressive flow from Beginner $\rightarrow$ Advanced.
    * Practical, project-based learning suggestions.
* **💼 Career Guidance**
    * Role-based career suggestions aligned with industry standards.
    * Precise skill-to-job mapping.
    * Actionable, industry-focused recommendations.

---

## 🧠 How It Works

```text
[ User Query ] ──> [ N8N Workflow ] ──> [ DeepSeek via GROQ ]
                                                  │
[ Frontend Display ] <── [ Supabase DB ] <────────┘
