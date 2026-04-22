#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'

/**
 * Configurador rápido usando project-config.json
 * Para uso cuando ya tienes la configuración definida
 */

try {
  console.log('🚀 Configurando proyecto desde project-config.json...')
  
  // Leer configuración
  const config = JSON.parse(readFileSync('./project-config.json', 'utf8'))
  
  // Actualizar package.json
  const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
  pkg.name = config.projectName.toLowerCase().replace(/\s+/g, '-')
  pkg.description = config.description
  pkg.author = config.author
  writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
  
  // Generar rutas
  const routesContent = `/**
 * Configuración de rutas para ${config.projectName}
 * Generado desde project-config.json
 */

export function comunes() {
  return {
    rutasConRoles: [
      { nombre: "Inicio", ruta: "/", roles: ["public"], icono: "🏠" },
      { nombre: "Acerca de", ruta: "/about", roles: ["public"], icono: "ℹ️" },
      ${config.features.includes('tables') ? '{ nombre: "Demo Tablas", ruta: "/tables-demo", roles: ["public"], icono: "📊" },' : ''}
      ${config.roles.includes('empresa') ? '{ nombre: "Dashboard", ruta: "/dashboard", roles: ["empresa"], icono: "📊" }' : ''}
    ].filter(ruta => ruta.nombre),
    
    rolesDisponibles: ${JSON.stringify(config.roles)},
    layoutsDisponibles: ${JSON.stringify(config.layouts)},
    temaActual: "${config.theme}"
  }
}

export function puedeAcceder(ruta, rolActual) {
  const { rutasConRoles } = comunes()
  const rutaConfig = rutasConRoles.find(r => r.ruta === ruta)
  
  if (!rutaConfig) return true
  return rutaConfig.roles.includes(rolActual) || rutaConfig.roles.includes('public')
}
`
  
  writeFileSync('./app/limites/rutas.js', routesContent)
  
  // Generar README
  const readme = `# ${config.projectName}

${config.description}

**Empresa:** ${config.companyName}
**Autor:** ${config.author}

## 🚀 Inicio rápido

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

## ⚙️ Configuración

- **Layouts:** ${config.layouts.join(', ')}
- **Features:** ${config.features.join(', ')}  
- **Roles:** ${config.roles.join(', ')}
- **Tema:** ${config.theme}

---
*Configurado automáticamente desde project-config.json*
`
  
  writeFileSync('./README.md', readme)
  
  console.log('✅ ¡Proyecto configurado exitosamente!')
  console.log(`📦 Nombre: ${pkg.name}`)
  console.log(`🎨 Tema: ${config.theme}`)
  console.log(`👥 Roles: ${config.roles.join(', ')}`)
  console.log('\n🚀 Para comenzar: pnpm dev')
  
} catch (error) {
  console.error('❌ Error:', error.message)
  console.log('💡 Asegúrate de que project-config.json existe y es válido')
}
