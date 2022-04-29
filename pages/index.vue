<template>
    <div
        class="container w-1/2 py-8 mx-auto space-y-8 divide-y divide-gray-300"
    >
        <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </div>
</template>


<script setup>
const {data: posts} = await useFetch('http://127.0.0.1:8000/api/posts');
</script>
