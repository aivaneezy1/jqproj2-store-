import path from "path";
export function filePath(args1, args2) {
  return path.join(process.cwd(), args1, args2);
}

console.log(filePath("boh", "a"));
