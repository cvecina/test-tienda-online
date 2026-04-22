/**
 * Composable para manejar la autenticación y roles del usuario
 */

import { getRutasPorRol, getRutaPorDefecto, tieneAccesoARuta, getRutasParaLayout, tienePermiso, getRutasOrganizadas } from '~/limites/rutas.js'

export const useAuth = () => {
  // Estado reactivo del usuario
  const user = ref({
    id: null,
    nombre: '',
    email: '',
    rol: 'public', // Rol por defecto
    isAuthenticated: false
  })

  // Simular diferentes tipos de usuarios para testing
  const mockUsers = {
    admin: { id: 1, nombre: 'Admin', email: 'admin@test.com', rol: 'superAdmin', isAuthenticated: true },
    empresa: { id: 2, nombre: 'Empresa Test', email: 'empresa@test.com', rol: 'empresa', isAuthenticated: true },
    empleado: { id: 3, nombre: 'Empleado Test', email: 'empleado@test.com', rol: 'empleado', isAuthenticated: true },
    public: { id: null, nombre: '', email: '', rol: 'public', isAuthenticated: false }
  }

  // Funciones de autenticación
  const login = (userType = 'public') => {
    user.value = { ...mockUsers[userType] }
  }

  const logout = () => {
    user.value = { ...mockUsers.public }
  }

  const changeRole = (newRole) => {
    if (mockUsers[newRole]) {
      user.value = { ...mockUsers[newRole] }
    }
  }

  // Funciones para obtener rutas según el rol actual
  const getNavigationRoutes = (section = 'rutasConRoles') => {
    return getRutasPorRol(user.value.rol, section)
  }

  const getDefaultRoute = () => {
    return getRutaPorDefecto(user.value.rol)
  }

  const canAccessRoute = (routePath) => {
    return tieneAccesoARuta(routePath, user.value.rol)
  }

  const getLayoutRoutes = (layout) => {
    return getRutasParaLayout(layout, user.value.rol)
  }

  const hasPermission = (permission) => {
    return tienePermiso(permission, user.value.rol)
  }

  const getOrganizedRoutes = () => {
    return getRutasOrganizadas(user.value.rol)
  }

  // Función para navegar a la ruta por defecto
  const goToDefaultRoute = () => {
    const defaultRoute = getDefaultRoute()
    if (defaultRoute) {
      return navigateTo(defaultRoute.ruta)
    }
  }

  return {
    // Estado
    user: readonly(user),
    
    // Funciones de autenticación
    login,
    logout,
    changeRole,
    
    // Funciones de rutas y permisos
    getNavigationRoutes,
    getDefaultRoute,
    canAccessRoute,
    getLayoutRoutes,
    hasPermission,
    getOrganizedRoutes,
    goToDefaultRoute
  }
}
