<template>
    <div
        class="container w-1/2 py-8 mx-auto space-y-8 divide-y divide-gray-300"
    >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        quae labore quibusdam veritatis. Adipisci in et cumque reprehenderit,
        delectus repellendus natus omnis, autem a, quidem soluta? Quis quos sint
        deserunt iste itaque, commodi cumque at odio error similique saepe minus
        deleniti, consequatur quidem quam porro voluptas doloremque culpa
        labore! Quisquam.
        <PostItem v-for="n in 10" :key="n"></PostItem>
    </div>
</template>
