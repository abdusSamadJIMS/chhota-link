import crypto from 'crypto';

export function generateUniqueAlphabeticString(input: string): string {
    // Create a hash of the input string
    const hash = crypto.createHash('sha256').update(input).digest('base64url');

    // Ensure the result is between 4 to 7 characters long
    return hash.slice(0, Math.floor(Math.random() * (7 - 4 + 1)) + 4);
}
