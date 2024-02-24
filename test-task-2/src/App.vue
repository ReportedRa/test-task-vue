<script>
import PopupForm from './components/PopupForm.vue'
import RouterMenu from './components/RouterMenu.vue'
export default {
  components: {
    PopupForm,
    RouterMenu,
  }
}
</script>

<template>
  <router-menu></router-menu>
  <router-view></router-view>
</template>

<style></style>
