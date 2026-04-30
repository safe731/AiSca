import { tools } from "./tools.js";

export function runTool(name, input) {
  if (!tools[name]) return "Tool not found!";
  return tools[name](input);
}
