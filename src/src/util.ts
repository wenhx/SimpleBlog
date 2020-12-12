import * as crypto from "crypto";

export function getDateTime(): string {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString().slice(0, 8)}`;
}

export function sha1(input: string): string {
  return crypto.createHash("sha1").update(input).digest("hex");
}

export function log(input: string): void {
  console.log(getDateTime() + ": " + input);
}