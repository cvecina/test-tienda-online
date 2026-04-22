# 🎨 Template Nuxt 4 - Múltiples Layouts y Navegaciones

Este template de Nuxt 4 incluye 5 diferentes tipos de navegación y layouts que puedes usar para diferentes tipos de aplicaciones.

## 🚀 Características

- ✅ **Nuxt 4** - La última versión del framework
- ✅ **Tailwind CSS 4** - Estilos modernos y responsive
- ✅ **TypeScript** - Tipado estático
- ✅ **5 Layouts diferentes** - Para diferentes tipos de apps
- ✅ **Componentes reutilizables** - Navegaciones modulares
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Pinia Store** - Gestión de estado

## 📱 Layouts Disponibles

### 1. **Default Layout** (`layouts/default.vue`)
- **Uso**: Sitios web corporativos, landing pages
- **Características**: Navbar clásico, footer completo
- **Navegación**: `NavbarClassic.vue`

```vue
<script setup>
definePageMeta({
  layout: 'default'
})
</script>
```

### 2. **Dark Layout** (`layouts/dark.vue`)
- **Uso**: Aplicaciones modernas, herramientas developer
- **Características**: Tema oscuro, navbar con iconos
- **Navegación**: `NavbarDark.vue`

```vue
<script setup>
definePageMeta({
  layout: 'dark'
})
</script>
```

### 3. **Modern Layout** (`layouts/modern.vue`)
- **Uso**: Startups, productos SaaS
- **Características**: Gradientes, buscador integrado, menú de perfil
- **Navegación**: `NavbarModern.vue`

```vue
<script setup>
definePageMeta({
  layout: 'modern'
})
</script>
```

### 4. **Dashboard Layout** (`layouts/dashboard.vue`)
- **Uso**: Paneles de administración, dashboards
- **Características**: Sidebar de navegación, área de contenido amplia
- **Navegación**: `SidebarNav.vue`

```vue
<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
```

### 5. **Minimal Layout** (`layouts/minimal.vue`)
- **Uso**: Blogs, documentación, portfolios
- **Características**: Diseño limpio, enfoque en contenido
- **Navegación**: Header simple sin componente separado

```vue
<script setup>
definePageMeta({
  layout: 'minimal'
})
</script>
```

## 🧩 Componentes de Navegación

### `NavbarClassic.vue`
Navegación horizontal tradicional con:
- Logo personalizable
- Links de navegación
- Botón CTA
- Menú móvil responsive

### `NavbarDark.vue`
Navegación moderna oscura con:
- Tema dark
- Iconos de acción (búsqueda, notificaciones)
- Avatar de usuario
- Menú móvil

### `NavbarModern.vue`
Navegación con efectos visuales:
- Gradientes CSS
- Barra de búsqueda integrada
- Menú de perfil con dropdown
- Notificaciones con badge
- Backdrop blur effect

### `SidebarNav.vue`
Navegación lateral para dashboards:
- Navegación por secciones
- Iconos con emojis
- Perfil de usuario en la parte inferior
- Responsive (se oculta en móvil)

## 🎯 Cómo Usar

1. **Instalar dependencias**:
```bash
pnpm install
```

2. **Ejecutar en desarrollo**:
```bash
pnpm dev
```

3. **Crear una nueva página con layout específico**:
```vue
<!-- pages/mi-pagina.vue -->
<template>
  <div>
    <h1>Mi página con layout moderno</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'modern'  // Cambia por el layout que necesites
})
</script>
```

## 🎨 Personalización

### Cambiar colores del tema
Los layouts usan Tailwind CSS, puedes personalizar los colores editando las clases:

```vue
<!-- Cambiar color primario de azul a verde -->
class="bg-blue-600" → class="bg-green-600"
class="text-blue-600" → class="text-green-600"
```

### Modificar navegación
Cada componente de navegación tiene un array `navigation` que puedes personalizar:

```typescript
const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Contacto', href: '/contacto' },
]
```

### Agregar nuevos layouts
1. Crea un nuevo archivo en `layouts/`
2. Define la estructura del layout
3. Importa el componente de navegación que necesites
4. Usa `definePageMeta({ layout: 'tu-layout' })` en tus páginas

## 📁 Estructura del Proyecto

```
app/
├── layouts/
│   ├── default.vue      # Layout por defecto
│   ├── dark.vue         # Layout oscuro
│   ├── modern.vue       # Layout moderno
│   ├── dashboard.vue    # Layout con sidebar
│   └── minimal.vue      # Layout minimalista
├── components/
│   └── navigation/
│       ├── NavbarClassic.vue
│       ├── NavbarDark.vue
│       ├── NavbarModern.vue
│       └── SidebarNav.vue
├── pages/
│   ├── index.vue        # Página principal
│   └── layout-demo/     # Páginas de demostración
└── composables/
    └── index.ts         # Auto-imports de Vue
```

## 🚀 Demo

Visita las siguientes rutas para ver cada layout en acción:

- `/` - Layout default
- `/layout-demo/default` - Demo del layout clásico
- `/layout-demo/dark` - Demo del layout oscuro
- `/layout-demo/modern` - Demo del layout moderno
- `/layout-demo/dashboard` - Demo del layout dashboard
- `/layout-demo/minimal` - Demo del layout minimalista

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Puedes:
- Agregar nuevos layouts
- Mejorar los componentes existentes
- Optimizar el CSS
- Agregar nuevas funcionalidades

## 📝 Licencia

Este template es de uso libre. ¡Úsalo en tus proyectos!

---

**¡Feliz desarrollo! 🎉**
