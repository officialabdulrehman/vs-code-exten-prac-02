// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vs-code-extension-prac-02" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const cmdHelloWorld = vscode.commands.registerCommand('weeb.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.createTerminal("Weeb");
    vscode.window.onDidOpenTerminal((w) => {
      // w.sendText("google-chrome --new-window https://www.youtube.com/watch?v=uKxyLmbOc0Q -d");
      w.sendText("google-chrome --new-window https://www.youtube.com/watch?v=JB3INq8n9is -d");
      w.show(true);
    });
    // vscode.window.showInformationMessage('Hey there Weebs!');
  });

  context.subscriptions.push(cmdHelloWorld);
}

// This method is called when your extension is deactivated
export function deactivate() { }
