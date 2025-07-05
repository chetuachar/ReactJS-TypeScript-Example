export function isAuthenticated(): boolean {
  const username: string | null = localStorage.getItem('auth');
  if (!!username) return true;
  return false;
}

export function useLogin(username: string): void {
  localStorage.setItem('auth', username);
}

export function useLogout(): void {
  localStorage.removeItem('auth');
}
