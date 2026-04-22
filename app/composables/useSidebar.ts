import { ref } from 'vue'

// Estado global del sidebar
const sidebarOpen = ref(false)

// Composable para manejar el estado del sidebar
export const useSidebar = () => {
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const closeSidebar = () => {
    sidebarOpen.value = false
  }

  const openSidebar = () => {
    sidebarOpen.value = true
  }

  return {
    sidebarOpen,
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
}
