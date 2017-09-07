"use strict";
import * as vscode from "vscode";
import { Executor } from "./common/executor";
import { EdgeManager } from "./edge/edgeManager";
import { InputModuleManager } from "./module/inputModuleManager";

export function activate(context: vscode.ExtensionContext) {
    const inputModuleManager = new InputModuleManager();
    const edgeManager = new EdgeManager(context);

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.editTemplate", () => {
        inputModuleManager.editTemplate();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.deployTemplate", () => {
        inputModuleManager.deployTemplate();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.updateInterval", () => {
        inputModuleManager.updateInterval();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.generateDeploymentJsonForVerification", () => {
        edgeManager.generateDeploymentJsonForVerification();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.generateRoutesJsonForVerification", () => {
        edgeManager.generateRoutesJsonForVerification();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.verifyModule", () => {
        edgeManager.verifyModule();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.viewModuleInput", () => {
        edgeManager.viewModuleInput();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.viewModuleOutput", () => {
        edgeManager.viewModuleOutput();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.login", () => {
        edgeManager.login();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.deploy", () => {
        edgeManager.deploy();
    }));

    context.subscriptions.push(vscode.commands.registerCommand("azure-iot-edge.launch", () => {
        edgeManager.launch();
    }));

    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal: vscode.Terminal) => {
        Executor.onDidCloseTerminal(closedTerminal);
    }));
}

export function deactivate() {
}