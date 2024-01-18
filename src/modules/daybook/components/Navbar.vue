<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white" href="daybook">
        <img src="@/assets/logo.png" 
             alt="Vue Logo"
             height="24"
             class="d-inline-block align-text-top mx-2">
        Daybook: {{ username }}
    </a>

    <div class="d-flex">
        <button @click="onLogout" class="btn btn-outline-info mx-2">
            <i class="fa fa-sign-out-alt"></i>
        </button>
    </div>
  </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {
    // eslint-disable-next-line
    name: 'Navbar',
    setup() {

      const router = useRouter()
      const { username, logout } = useAuth()

      return {
        username, 
        onLogout: () => {
          router.push({name: 'login'})
          logout()
        }
      }

    }
}
</script>
