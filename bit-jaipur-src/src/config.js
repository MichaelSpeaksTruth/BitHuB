/**
 * BitHub Configuration File
 *
 * Dynamically resolves the API base URL depending on whether the app is running
 * locally (development with Vite proxy) or in production on GitHub Pages / Vercel.
 */

export const API_BASE = import.meta.env.DEV
  ? ''
  : 'https://bithub-jaipur.onrender.com';
