✨ Code Editor with Auto-Fix, Run & Help Assistant

A modern, browser-based JavaScript code editor built using Next.js, Monaco Editor, Prettier, and Heroicons.
It supports auto-fixing code, running JS instantly, and a built-in AI-style Help Panel using simple keyword-based responses.

🚀 Features
🧠 Smart Code Editor

Built on Monaco Editor (VS Code's editor)

Clean UI with dark theme support

Real-time updates

🔧 Auto-Fix Button

Formats code using Prettier

Removes syntax issues

Adds missing semicolons safely

Handles indentation

Prevents unnecessary semicolons (const func = () =>; is fixed)

▶️ Run Code Button

Executes JavaScript safely using an iframe sandbox

Captures console output

Displays results instantly

❓ Help Panel

A slide-out / modal-based help system

Keyword-based responses (e.g., “format”, “error”, “semicolon”, “prettier”)

Users can type a question and instantly get guidance

📦 Libraries Used

Next.js 16

React (use client)

Monaco Editor (@monaco-editor/react)

Prettier (standalone)

Prettier plugins

prettier/plugins/babel

prettier/plugins/estree

Heroicons

📁 Project Structure
/app
 └── editor/
      └── page.tsx   → Main editor page UI + logic
/components
 └── HelpPanel.tsx   → Help assistant panel component

🛠️ Installation
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
npm run dev

📘 Usage
1. Edit Code

Type any JavaScript code inside the Monaco Editor.

2. Auto-Fix

Click Auto Fix 🔧
→ Prettier formats & fixes your code automatically.

3. Run Code

Click Run ▶️
→ Output appears in the Results Window.

4. Ask for Help

Click Help ❓
→ A panel opens where you can type questions like:

What language does the code editor support
What does auto-fix do?
What does run button do?


🧩 Technologies
Technology	Purpose
Next.js	App framework
React	Component logic
Monaco Editor	VS Code editor engine
Prettier	Code formatting
Heroicons	UI icons
CSS Modules / Tailwind (optional)	Styling
🤝 Contributing

Contributions are welcome!
Feel free to fork and submit PRs.

📜 License

MIT License © 2025 Vertika Bajpai
