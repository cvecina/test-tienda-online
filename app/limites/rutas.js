/**
 * Configuración de rutas y roles del sistema
 */

export function comunes() {
  return {
    rutasConRoles: [
      { nombre: "Inicio", ruta: "/", roles: ["public"], icono: "🏠" },
      { nombre: "Acerca de", ruta: "/about", roles: ["public"], icono: "ℹ️" },
      { nombre: "Demo Tablas", ruta: "/tables-demo", roles: ["public"], icono: "📊" },
      { nombre: "Prueba", ruta: "/prueba", roles: ["public"], icono: "🧪" }
    ],
    
    rolesDisponibles: ["public", "empleado", "empresa", "superAdmin"],
    layoutsDisponibles: ["default", "modern", "dark", "dashboard", "minimal"]
  }
}

export function puedeAcceder(ruta, rolActual) {
  const { rutasConRoles } = comunes()
  const rutaConfig = rutasConRoles.find(r => r.ruta === ruta)
  
  if (!rutaConfig) return true
  return rutaConfig.roles.includes(rolActual) || rutaConfig.roles.includes('public')
}

export function getRutasPorRol(rol) {
  const { rutasConRoles } = comunes()
  return rutasConRoles.filter(ruta => 
    ruta.roles.includes(rol) || ruta.roles.includes('public')
  )
}

export function getRutaPorDefecto(rol) {
  const rutasPermitidas = getRutasPorRol(rol)
  
  // Para este template básico, todos van al inicio
  return '/'
}

export function tieneAccesoARuta(ruta, rol) {
  return puedeAcceder(ruta, rol)
}

export function getRutasParaLayout(layout) {
  const { rutasConRoles } = comunes()
  
  // Todas las rutas están disponibles para todos los layouts
  return rutasConRoles
}

export function tienePermiso(rol, permiso) {
  const permisos = {
    'public': ['ver_publico'],
    'empleado': ['ver_publico', 'ver_empleado'],
    'empresa': ['ver_publico', 'ver_empleado', 'ver_dashboard'],
    'superAdmin': ['ver_publico', 'ver_empleado', 'ver_dashboard', 'ver_admin']
  }
  
  return permisos[rol]?.includes(permiso) || false
}

export function getRutasOrganizadas(rol) {
  const rutasPermitidas = getRutasPorRol(rol)
  
  return {
    principales: rutasPermitidas.filter(r => 
      ['/', '/about', '/tables-demo', '/layout-demo'].includes(r.ruta)
    ),
    utilidades: rutasPermitidas.filter(r => 
      ['/diagnostic', '/prueba'].includes(r.ruta)
    )
  }
}
