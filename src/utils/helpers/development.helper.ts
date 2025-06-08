export function isDevelopmentMode(): boolean {
  return import.meta.env['VITE_APP_NODE_ENV'] === 'development';
}
