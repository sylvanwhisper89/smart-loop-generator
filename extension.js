const vscode = require('vscode');

/**
 * এই মেথডটি তখন কল হয় যখন প্লাগিনটি অ্যাক্টিভেট হয়।
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    let disposable = vscode.commands.registerCommand('smart-loop-generator.wrapWithLoop', function () {
        
        // ১. অ্যাক্টিভ এডিটর বের করা
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('কোনো এডিটর ওপেন নেই!');
            return;
        }

        // ২. ইউজার যে টেক্সট সিলেক্ট করেছে তা নেওয়া
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (!selectedText) {
            vscode.window.showInformationMessage('অনুগ্রহ করে একটি কোড সিলেক্ট করুন।');
            return;
        }

        // ৩. লজিক: চেক করা হবে সিলেক্ট করা কোডে 'i' আছে কিনা
        let loopCode;
        
        if (selectedText.includes('i')) {
            // যদি 'i' থাকে, তবে for লুপ তৈরি হবে
            loopCode = `for (let i = 0; i < 10; i++) {\n` +
                       `    ${selectedText}\n` +
                       `}`;
        } 
        else {
            // যদি 'i' না থাকে, তবে while লুপ তৈরি হবে
            loopCode = `let count = 0;\n` +
                       `while (count < 10) {\n` +
                       `    ${selectedText}\n` +
                       `    count++;\n` +
                       `}`;
        }

        // ৪. সিলেক্ট করা টেক্সটকে নতুন লুপ কোড দিয়ে রিপ্লেস করা
        editor.edit(editBuilder => {
            editBuilder.replace(selection, loopCode);
        });
    });

    context.subscriptions.push(disposable);
}

/**
 * প্লাগিন বন্ধ হলে এই মেথডটি কল হয়।
 */
function deactivate() {}

// ফাংশনগুলো এক্সপোর্ট করা হচ্ছে যাতে VS Code এগুলো চিনতে পারে
module.exports = {
    activate,
    deactivate
}