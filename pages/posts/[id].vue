<template>
    <div class="container w-1/2 py-8 mx-auto">
        <Title>{{ $route.params.id }} | {{ title }}</Title>
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">Title of Post</NuxtLink>
        </h3>
        <div class="flex items-center space-x-2 text-gray-700 post-meta">
            <div>Feb 2, 2022</div>
            <div>&middot;</div>
            <div>Dave Lister</div>
        </div>
        <div class="mt-4 leading-relaxed post-conten">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            temporibus ipsum nobis dolorum libero optio amet et repellat esse
            corrupti, non voluptatum ab assumenda vero maxime hic, itaque,
            voluptas ullam ad necessitatibus illo illum velit debitis culpa?
            Aperiam, provident itaque. Sequi tempora sunt ex temporibus. Aperiam
            reprehenderit repellendus deserunt nihil.
        </div>
    </div>
</template>

<script setup>
    const title = useState('title')
</script>
