# 📝 AI Notetaker

**AI Notetaker** is an AI-powered application that generates **structured, clean, and visually clear notes** from user prompts and uploaded files.  
The system is designed with **simplicity, clarity, and productivity** in mind.

---

## 🚀 Project Overview

AI Notetaker allows users to:

- 📂 **Upload files** and provide prompts  
- 🤖 **Process content with AI** to generate structured notes  
- 📝 **Output formatted content** with:
  - ✅ Bullet points  
  - **Bold terms**  
  - ✨ Highlights  
  - 📑 Clear separation of sections  

This tool ensures notes are **easy to read, professional, and visually appealing**.

---

## 🎯 Features

- 📁 File upload support (using **Multer**)  
- 🤖 AI-driven content processing  
- 📌 Automatic note structuring with sections:
  - Prompt Summary  
  - File Content Summary  
  - Key Highlights  
  - Next Steps  
- ✨ Clean output with emojis, highlights, and bullet points  
- 🔧 Easy-to-extend **backend and frontend**

---

## 🛠 Tech Stack

**Frontend**: React, TailwindCSS, Framer Motion, shadcn/ui  
**Backend**: Node.js, Express.js, Multer  
**AI Layer**: Custom AI Processing Controller (`aiController.js`)  
**Deployment**:  
- 🌐 Frontend → Vercel / Netlify  
- 🔗 Backend → Render / Railway  

---

## 🧩 Approach & Process

### 1. Understanding Requirement
- Capture **user prompt** and **file input**  
- Ensure outputs are **structured and formatted**

### 2. Backend Setup
- Built using **Express**  
- **Multer** handles file uploads → `/api/ai/upload`  
- AI controller processes `prompt + file` and stores response  
- Latest response fetched by → `/api/ai/latest/:userId`

### 3. Frontend Setup
- File uploader + prompt input  
- Send data to backend  
- Display **AI-generated notes** in structured format

### 4. Note Formatting Rules
- ➡️ Use `•` for bullet points  
- ➡️ Use `**...**` for bold terms  
- ➡️ Use `✨` / `⚡` for highlights  
- ➡️ Use `✅` / `🔲` for emphasis  

### 5. Deployment
- Frontend deployed on **Vercel/Netlify**  
- Backend deployed on **Render/Railway**  

---

## 📄 Deliverables

- 📘 **Documentation** (This README) including:
  - Approach  
  - Process  
  - Tech Stack  
  - Features  
  - File Structure  
  - Deployed Links  

- 🌍 **Working Deployed Link**  
  - Frontend: *[Add link here]*  
  - Backend: *[Add link here]*  

## 📂 File Structure

---

## ⚡ Sample Output (Generated Notes)

**📝 Project Notes**

- **Prompt Entered by User**  
  👉 Explain AI Note Taking System  

- **File Content Summary**  
  👉 Describes backend routes and file handling  

- **Key Highlights**  
  ✅ Clear explanation in simple words  
  ✅ Well-structured with bullet points  
  ✅ Important terms in **bold**  
  ✨ Highlights where needed  

- **Next Steps (if applicable)**  
  🔲 Suggested improvements  
  🔲 Errors to fix  
  🔲 Features to add  

---

## 👨‍💻 Author

**Dharamraj Pd Yadav**  

🌐 GitHub: [Dharamraj82](https://github.com/Dharamraj82)  
💼 Passionate about **MERN, Java, and AI-powered applications**  
📧 Contact: *[Add Email Here]*  

---


## 📂 File Structure

