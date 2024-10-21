import react from '@vitejs/plugin-react';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/{config/
const env = { ...process.env,...process.cwd() };

export default defineConfig({
        plugins:[
            react(),
            mkcert(),
            fixReactVirtualized,
        ],

        server: {
            port: 4000,
            //strictPort: true,
            watch: {
                usePolling: true,
                interval: 100
            },
            ws: true,
            proxy: {
                '/api': {
                    //target: 'http://localhost:12382/api/',
                    target: 'https://localhost:8080/api/v1/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/local': {
                    target: 'https://localhost:8080/api/v1/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/local/, '')
                },
                '/paleo/api': {
                    target: 'https://paleobiodb.org/data1.2/',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        define: {
            __APP_ENV__: JSON.stringify(env)
        },
    })
