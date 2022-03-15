<template>
  <div class="card hover:shadow-lg" v-if="detailArticle">
    <div class="m-4 ">
        <span class="font-bold">{{detailArticle.title}}</span>
        <span class="block text-gray-500 text-sm">{{detailArticle.writer}}</span>
    </div>
    <img class="w-25 " :src="detailArticle.imageUrl"/>
    <div class="m-4">
        <span class="font-light mb-8" v-html="detailArticle.content" ></span>
        <a :href="detailArticle.source">Source</a>
        <span block text-gray-500 text-sm>{{detailArticle.created_at}}</span>
    </div>
  </div>
  <div v-else>Loading...</div>

</template>

<script>
import { onMounted, ref } from 'vue'
import {mapState, mapActions} from 'vuex'

export default {
    props:["id"],
    computed:{
        ...mapState(['articles', 'categories']),
        detailArticle(){
            return this.articles.find(x=>{
                return x.id.toString() === this.id})
        }
    },
    methods:{
        ...mapActions(['getData'])
    },
    mounted(){
        this.getData()
    }
}
</script>

<style>

</style>