<template>
  <div class="min-h-screen text-gray-900 bg-gray-100">
    <Title>{{ title }}</Title>
    <nav class="px-6 py-6 text-lg bg-white shadow">
      <div class="container flex items-center justify-between px-6 mx-auto">
        <div>
          <NuxtLink to="/">Logo</NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li><NuxtLink to="/" append>Home</NuxtLink></li>
            <li><NuxtLink to="/create" append>Create</NuxtLink></li>
            <li><NuxtLink to="/about" append>About</NuxtLink></li>
            <li><NuxtLink to="/contact" append>Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt 3 Blog')
</script>

<style>
.router-link-active {
  font-weight: bold;
}
</style>
