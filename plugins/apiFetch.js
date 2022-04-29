import { defineNuxtPlugin } from '~~/.nuxt/imports';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    nuxtApp.provide('apiFetch', $fetch.create({baseURL: config.BASE_URL}))
})
