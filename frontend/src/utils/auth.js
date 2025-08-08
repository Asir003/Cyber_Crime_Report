// JWT is no longer used. You can remove this file or leave empty stubs if needed.
export function getToken() { return null; }
export function getUserRole() { return null; }
export async function fetchWithAuth(url, options = {}, navigate) {
  return fetch(url, options);
} 