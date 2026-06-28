export function isSpamSubmission(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}
