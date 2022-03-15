<template>
    <div class="card hover:shadow-lg">
        <router-link :to="{name: 'ArticleDetails', params: {id:id}}">
            <div class="m-4">
                <span class="font-bold">{{title}}</span>
                <span class="block text-gray-500 text-sm">Write by {{writer}}</span>
            </div>
            <img :src="image" class="h-32 sm:h-48 w-full object-cover"/>
            <div class="m-4">
            <span class="font-light mb-8 desc truncate text-ellipsis">{{desc}}</span>
            <span class="block text-gray-500 text-sm">{{created_at}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import data from "../../data/data"
import { onMounted, ref } from 'vue'
export default {
    props:["image", "title", "writer", "image", "desc", "created_at", "category", "id"]}
</script>

