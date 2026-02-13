# Basic CI/CD Workflow

This is a learning project for understanding **Continuous Integration (CI)** using **Node.js**, **Express**, and **GitHub Actions**.

---

## 🚀 Project Overview

This is a simple Express API with one endpoint:

`GET /add?a=2&b=3`

It returns the sum of two numbers:

```json
{ "result": 5 }
```

# 🛠 Prerequisites
- Node.js installed (v18+ recommended)
- npm installed
- Git installed
- GitHub account

# 📂 Project Structure

```text
ci-cd-learning/
│
├── basic_workflow/           # project folder
│     ├── app.js              # Express app
│     ├── package.json
│     └── tests/
│          └── app.test.js   # API test using Jest + Supertest
└── .github/
      └── workflows/
           └── ci.yml        # GitHub Actions workflow (runs from basic_workflow folder)
```

# 🔧 Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/rupeshpatil27/ci-cd-learning
cd ci-cd-learning/basic_workflow
```

2. Install dependencies:
```bash
npm install
```

3. Run tests locally:
```bash
npm test
```

You should see PASS for the API test.