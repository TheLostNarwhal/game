import {defineConfig} from "vite"

export default defineConfig({
    server:{
        port: 3000
    },
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx' ],
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
})