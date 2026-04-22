# Template Nuxt 4 con Múltiples Layouts

Este template de Nuxt 4 incluye varios tipos de navegación y layouts que puedes usar para diferentes tipos de aplicaciones.

## 🎨 Layouts Disponibles

### 1. Default Layout (`layouts/default.vue`)
- **Uso**: Layout estándar para sitios web corporativos
- **Navegación**: `NavbarClassic.vue` - Navbar horizontal clásico
- **Características**:
  - Navbar responsive con menú hamburguesa
  - Footer con información corporativa
  - Diseño limpio y profesional
  - Colores neutros

### 2. Dark Layout (`layouts/dark.vue`)
- **Uso**: Aplicaciones modernas, dashboards nocturnos
- **Navegación**: `NavbarDark.vue` - Navbar oscuro con iconos
- **Características**:
  - Tema oscuro completo
  - Iconos de usuario y notificaciones
  - Perfecto para reducir fatiga visual
  - Diseño moderno

### 3. Modern Layout (`layouts/modern.vue`)
- **Uso**: Apps modernas, startups, productos tech
- **Navegación**: `NavbarModern.vue` - Navbar con gradientes
- **Características**:
  - Gradientes y efectos modernos
  - Barra de búsqueda integrada
  - Menú de perfil con dropdown
  - Sistema de notificaciones
  - Footer expandido

### 4. Dashboard Layout (`layouts/dashboard.vue`)
- **Uso**: Paneles de administración, backoffice
- **Navegación**: `SidebarNav.vue` - Sidebar lateral
- **Características**:
  - Sidebar fijo con navegación por secciones
  - Perfil de usuario en sidebar
  - Responsive (sidebar se oculta en móvil)
  - Ideal para aplicaciones de gestión

### 5. Minimal Layout (`layouts/minimal.vue`)
- **Uso**: Blogs, portfolios, sitios de contenido
- **Navegación**: Header simple integrado
- **Características**:
  - Diseño minimalista
  - Enfocado en contenido
  - Tipografía elegante
  - Navegación discreta

## 🚀 Cómo Usar los Layouts

### Opción 1: Definir layout por página
```vue
<template>
  <div>
    <!-- Tu contenido aquí -->
  </div>
</template>

<script setup>
// Especifica el layout que quieres usar
definePageMeta({
  layout: 'dashboard' // 'default', 'dark', 'modern', 'dashboard', 'minimal'
})
</script>
```

### Opción 2: Layout dinámico
```vue
<script setup>
// Cambiar layout basado en condiciones
const route = useRoute()
const isAdmin = computed(() => route.path.startsWith('/admin'))

definePageMeta({
  layout: computed(() => isAdmin.value ? 'dashboard' : 'default')
})
</script>
```

### Opción 3: Cambiar layout programáticamente
```vue
<script setup>
const switchLayout = (layoutName) => {
  setPageLayout(layoutName)
}
</script>
```

## 📁 Estructura de Archivos

```
app/
├── components/
│   └── navigation/
│       ├── NavbarClassic.vue    # Navbar horizontal clásico
│       ├── NavbarDark.vue       # Navbar oscuro moderno
│       ├── NavbarModern.vue     # Navbar con gradientes
│       └── SidebarNav.vue       # Sidebar para dashboard
├── layouts/
│   ├── default.vue              # Layout por defecto
│   ├── dark.vue                 # Layout tema oscuro
│   ├── modern.vue               # Layout moderno
│   ├── dashboard.vue            # Layout con sidebar
│   └── minimal.vue              # Layout minimalista
└── pages/
    ├── index.vue                # Página principal
    └── layout-demo/             # Demos de cada layout
        ├── default.vue
        ├── dark.vue
        ├── modern.vue
        ├── dashboard.vue
        └── minimal.vue
```

## 🎯 Recomendaciones de Uso

| Tipo de App | Layout Recomendado | Por qué |
|-------------|-------------------|---------|
| Sitio corporativo | `default` | Profesional y confiable |
| E-commerce | `modern` | Atractivo y funcional |
| SaaS/Producto | `modern` o `dark` | Moderno y tecnológico |
| Panel admin | `dashboard` | Navegación eficiente |
| Blog/Portfolio | `minimal` | Enfoque en contenido |
| App móvil | `dark` | Mejor para pantallas pequeñas |

## ⚙️ Personalización

### Cambiar colores
Los layouts usan Tailwind CSS. Para personalizar colores:

1. Modifica las clases de Tailwind en cada componente
2. O actualiza el archivo `tailwind.config.js` con tu paleta de colores

### Modificar navegación
Cada componente de navegación tiene su propio array de links:

```vue
<script setup>
const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  // Añade más links aquí
]
</script>
```

### Añadir funcionalidades
- **Autenticación**: Modifica los componentes para mostrar/ocultar elementos según el usuario
- **Notificaciones**: El `NavbarModern` ya incluye un sistema básico
- **Búsqueda**: Implementa la funcionalidad de búsqueda en `NavbarModern`

## 🔧 Tecnologías

- **Nuxt 4**: Framework de Vue.js
- **Tailwind CSS**: Framework de CSS
- **Vue 3**: Framework JavaScript
- **TypeScript**: Tipado estático

## 📱 Responsive Design

Todos los layouts son completamente responsive e incluyen:
- Menús hamburguesa para móvil
- Breakpoints optimizados
- Sidebar colapsable en dashboard
- Navegación touch-friendly

## 🚀 Próximos Pasos

1. Elige el layout que mejor se adapte a tu proyecto
2. Personaliza los colores y elementos según tu marca
3. Añade tus propias páginas y rutas
4. Implementa funcionalidades específicas (autenticación, etc.)
5. ¡Despliega tu aplicación!

---

¡Esperamos que este template te ahorre tiempo y te ayude a crear aplicaciones increíbles! 🎉
