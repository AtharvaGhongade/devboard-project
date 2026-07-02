// Used only when serving the built app with `vite preview`
// image. It forwards /api to the backend — the same job ng...
export default {
  preview: {
    allowedHosts: ['devboard.atharva-dev.xyz'],
    proxy: {
      '/api': {
        target: 'http://backend:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "default-src 'self'",
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    },
  },
};