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

# 📘 Learning Progress

## ✅ Basic CI Setup

### 🔹 What I Learned
*   **Building a simple Express API**
*   **Writing API tests** using [Jest](https://jestjs.io) + [Supertest](https://www.npmjs.com)
*   **Creating a GitHub Actions workflow**
*   **Running automated tests** on push & pull request
*   **Understanding core CI concepts**

### 🔹 CI Behavior
*   **Runs on push** to `main`
*   **Runs on pull requests**
*   **Fails if tests fail**

This was my first automated CI pipeline.

---

## ✅ Advanced CI Automation
Improved the CI pipeline to follow real-world DevOps practices.

### 🔹 Topics Covered
*   Multi-job workflows
*   Matrix builds
*   Linting in CI
*   Environment variables in CI
*   Node.js version compatibility handling
*   Debugging CI failures

### 🔹 CI Improvements

#### 1️⃣ Separate Jobs
*   **lint job** → checks code quality
*   **test job** → runs Jest tests
*   `test` depends on `lint` using `needs`

This ensures structured and reliable pipelines.

#### 2️⃣ Matrix Testing
Tests run on multiple Node versions to prevent “works on my machine” problems:
```yaml
strategy:
  matrix:
    node-version: ['20.x', '22.x']
```

#### 3️⃣ CI Workflow Logic
Pipeline flow:
`Push` → `Lint` → `Test (20.x & 22.x)` → `Success/Fail`
If any job fails, the entire pipeline fails.


# 🎯 Current CI Capabilities
- Automated lint checks
- Automated API testing
- Multi-version Node testing
- Structured multi-job workflow
- Dependency installation inside CI
- Version-aligned Node setup
- CI failure debugging experience
