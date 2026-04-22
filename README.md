# Template Nuxt 4

Template base de Nuxt 4 con múltiples layouts y componentes reutilizables.

## 🚀 Inicio rápido

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build
```

## 📂 Estructura

```
app/
├── components/          # Componentes reutilizables
│   ├── TableClassic.vue
│   ├── TableModern.vue
│   ├── TableDark.vue
│   ├── TableCards.vue
│   ├── TableMinimal.vue
│   ├── NavbarClassic.vue
│   ├── NavbarDark.vue
│   ├── NavbarModern.vue
│   └── SidebarNav.vue
├── layouts/            # Layouts disponibles
│   ├── default.vue
│   ├── modern.vue
│   ├── dark.vue
│   ├── dashboard.vue
│   └── minimal.vue
├── pages/              # Páginas de la aplicación
└── limites/            # Configuración de permisos y rutas
```

## 🎨 Características

- **5 Layouts** diferentes para distintos tipos de aplicación
- **4 Navegaciones** adaptables con sistema de roles
- **5 Tablas** responsive con diferentes estilos
- **Sistema de roles** dinámico (público, empleado, empresa, admin)
- **Tailwind CSS 4** para estilos
- **TypeScript** incluido
- **Auto-import** de componentes

## 🛠️ Tecnologías

- Nuxt 4.1.1
- Vue 3.5.21
- Tailwind CSS 4.1.13
- TypeScript
- Pinia (state management)

## 📱 Páginas de demo

- `/` - Página principal
- `/tables-demo` - Demostración de tablas
- `/layout-demo` - Demostración de layouts
- `/about` - Página de información

---

Template creado para desarrollo rápido de aplicaciones Nuxt 4
