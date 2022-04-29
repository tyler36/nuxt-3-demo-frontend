<template>
    <div class="post^container py-8">
        <h3 class="text-3xl font-bold">
            <NuxtLink
                :to="`/posts/${post.id}`"
                >{{ post.title }}</NuxtLink>
        </h3>
        <div class="flex items-center space-x-2 text-gray-700 post-meta">
            <div>{{ format(new Date(post.created_at), 'MMMM dd, yyyy') }}</div>
            <div>&middot;</div>
            <div>{{ post.user.name }}</div>
        </div>
        <div class="mt-4 leading-relaxed post-preview line-clamp-3">
            {{ post.body }}
        </div>

        <div class="mt-4">
            <NuxtLink
                :to="`/posts/${post.id}`"
                class="inline-block px-4 py-4 text-white bg-blue-700 rounded hover:bg-blue-800"
                >Read More</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import {format} from 'date-fns'

const props = defineProps({
    post: Object,
})
</script>
