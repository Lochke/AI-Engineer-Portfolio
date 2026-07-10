# 🌟 Loc Nguyen - AI Engineer Portfolio

An elegant, modern, dark-themed interactive portfolio built to showcase the professional works, projects, and skills of **Nguyen Minh Loc**, an **AI Engineer** studying at **UIT VNU-HCM** (University of Information Technology, VNU-HCM).

This application features a futuristic cyber-dark aesthetic, seamless animations via `framer-motion`, and beautifully responsive designs built with React, Vite, and Tailwind CSS.

---

## 🚀 Key Highlights & Sections

### 1. **Futuristic Hero Section**
- **Dynamic Profile Card**: Styled like an interactive "Dev Pass" issued by **UIT VNU-HCM**, secured and showcasing a premium workspace image.
- **Micro-interactions**: Elegant scroll indicator, subtle glowing ambient vectors, and smooth magnetic-feel CTA buttons to guide visitors.

### 2. **Interactive Recent Works (Project Showcase)**
Features an avant-garde **interactive stacked card carousel** showcasing real-world AI projects:
*   **Vietnamese License Plate Detection**:
    *   *Domain*: Computer Vision
    *   *Stack*: YOLOv5m, OpenCV, Flask, Python
    *   *Metrics*: 99.4% mAP@0.5, 94.06% character accuracy
    *   *Implementation*: A two-stage detection + OCR pipeline deployed via Flask with real-time frame buffering and asynchronous queue-based image processing.
*   **RAG PDF Chatbot**:
    *   *Domain*: Large Language Models (LLMs) & Retrieval-Augmented Generation (RAG)
    *   *Stack*: LangChain, ChromaDB, FastAPI, Streamlit, Google Gemini API
    *   *Metrics*: 91.7% QA accuracy
    *   *Implementation*: A complete server-client architecture featuring custom document splitters and semantic routing.

### 3. **Services & Core Competencies**
Highlighting specialized domains of expertise with interactive visual metrics:
- **Computer Vision**: Object Detection, OCR Pipelines, Image Processing.
- **Natural Language Processing**: RAG pipelines, LLM fine-tuning, Semantic Search.
- **MLOps & Deployment**: API Development (FastAPI, Flask), Cloud Platforms (Render, Streamlit), Containerization, and performance benchmarking.

### 4. **About Me & Education**
- Full-screen interactive biography outlining technical goals, active academic endeavors at **UIT VNU-HCM**, and a timeline of engineering research.

---

## 🛠️ Technology Stack

| Category | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite, TypeScript |
| **Styling & Theme** | Tailwind CSS (Futuristic Cyber-Dark & Slate Emerald theme) |
| **Animations** | `motion` (Framer Motion) |
| **Icons** | `lucide-react` |
| **Core AI Tools (Showcased)** | PyTorch, YOLOv5, OpenCV, LangChain, ChromaDB, Google Gemini API |
| **Backend / Web API** | FastAPI, Flask, Python |

---

## 📂 Project Structure

```bash
├── src/
│   ├── assets/
│   │   └── images/          # Image assets including "Minh Loc.png" and project mockups
│   ├── components/
│   │   ├── Navbar.tsx       # Dynamic, floating navigation bar with active section indicator
│   │   ├── Hero.tsx         # Immersive intro with the "UIT VNU-HCM Dev Pass"
│   │   ├── RecentWorks.tsx  # Dynamic stacked carousel showcase of AI projects
│   │   ├── Services.tsx     # Domain expertise & skill meter cards
│   │   ├── About.tsx        # Education details & professional bio
│   │   └── Footer.tsx       # Minimalist, clean footer with social linkages
│   ├── App.tsx              # Main orchestrator mounting portfolio layout
│   ├── types.ts             # Strongly typed interfaces for Projects, Services, etc.
│   └── index.css            # Tailwind directives, Google Font imports (Space Grotesk, JetBrains Mono)
├── package.json             # App configurations, dependencies, and scripts
└── metadata.json            # Frame configuration and major capabilities info
```

---

## ⚙️ Local Development

Follow these simple steps to run the portfolio website locally on your system:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Installation
Install the project dependencies using your terminal:
```bash
npm install
```

### 3. Start Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser to view the application.

### 4. Production Build
To build a highly optimized version of the static assets for production:
```bash
npm run build
```
The compiled files will be created in the `dist/` directory, ready to be deployed.

---

## 📬 Connect with Loc
Feel free to check out the links in the footer of the portfolio to browse my GitHub repositories or connect with me directly!
