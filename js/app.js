import { runTool as coreRunTool } from "./core.js";

window.runTool = function (toolName) {
  const input = document.getElementById("inputText").value;
  const result = coreRunTool(toolName, input);
  document.getElementById("output").textContent = result;
};

console.log("AiScan Loaded ✅");
