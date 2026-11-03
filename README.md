# Smart Loop Generator (VS Code Extension)

**Author:** Islam Mirajul  
**Course:** Laboratory Work No. 3 (Plugin Development)

## 📌 Description
**Smart Loop Generator** is a custom Visual Studio Code extension designed to speed up coding by automatically generating `for` and `while` loops around any selected code block. 

The plugin analyzes the selected text. If the variable `i` is present, it generates a `for` loop. Otherwise, it generates a `while` loop.

## ✨ Features
- Wrap selected code in a `for` or `while` loop automatically.
- Intelligent logic to choose the correct loop type based on the selected text.
- Seamless integration with the VS Code Command Palette.

## 🚀 How to Use
1. Select any block of code in your editor (e.g., `console.log(i);`).
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
3. Type **`Smart Loop`** and select **`Smart Loop: Wrap with Loop`**.
4. The selected code will be instantly wrapped in the appropriate loop!

## 🛠️ Technologies Used
- **Language:** JavaScript / Node.js
- **IDE:** Visual Studio Code
- **API:** VS Code Extension API

## 📂 Project Structure
- `extension.js`: The main logic and command registration.
- `package.json`: Extension metadata and command declaration.