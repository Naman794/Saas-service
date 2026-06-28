const bucket = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 60_000;

export function checkRateLimit(key: string) {
  const now = Date.now();
  const current = bucket.get(key);
  if (!current || current.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }
  if (current.count >= LIMIT) {
    return { allowed: false };
  }
  current.count += 1;
  return { allowed: true };
}
