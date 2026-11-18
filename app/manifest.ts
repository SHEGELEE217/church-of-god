// app/manifest.ts
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Church of God',
    short_name: 'COG',
    description: 'A modern family of faith where every soul finds home.',
    start_url: '/',
    display: 'standalone', // This makes it look like a native app (hides the browser URL bar)
    background_color: '#FBF7EF', // cream-100
    theme_color: '#1F6647', // forest-600
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}