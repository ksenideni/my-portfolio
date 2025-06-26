<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/about">Обо мне</router-link> |
    <router-link to="/portfolio">Портфолио</router-link> |
    <router-link to="/contacts">Контакты</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>