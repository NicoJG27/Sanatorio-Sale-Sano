import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // 'base' es importante para que los enlaces funcionen bien en subcarpetas de GitHub Pages
  base: './', 
  
  build: {
    rollupOptions: {
      input: {
        // Aquí listamos TODAS las páginas HTML de tu módulo de enfermería
        // Nombre: resolve(__dirname, 'nombre-del-archivo.html')
        
        index: resolve(__dirname, 'index.html'),     // Tu menú principal

      },
    },
  },
})