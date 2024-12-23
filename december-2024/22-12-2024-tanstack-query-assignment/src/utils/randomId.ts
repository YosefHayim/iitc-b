export function randomId(): number {
  // Generates a random number between 1 and 1,000,000
  return Math.floor(Math.random() * 1_000_000) + 1;
}
