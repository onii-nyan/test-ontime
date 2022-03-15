<template>
    <div class="flex justify-center">
        <button class="btn md:border-2 hover:bg-secondary-100 hover:text-white transition ease-out duration-500" @click="changeCat(0)" >Show All</button>
        <button class="btn ml-2  md:border-2 hover:bg-secondary-100 hover:text-white transition ease-out duration-500" v-for="category in categories" :key="category.id" @click="setCatId(category.id)" >{{category.name}}</button>
    </div>
    <div class="grid lg:grid-cols-3 mt-8 gap-8 flex ">
        <Articles v-for="article in filteredArticle" 
            :key="article.id"
            :id="article.id"
            :title="article.title"
            :writer="article.writer"
            :image="article.imageUrl"
            :desc="article.desc"
            :created_at="article.created_at"
        />
    </div>
</template>

<script>
import Articles from './Articles.vue'
import { onMounted, ref, computed } from 'vue'
import {mapState, mapActions} from 'vuex'

export default {
    components: {
        Articles
    },
    computed:{
        ...mapState(['articles', 'categories']),
        filteredArticle(){
            if(this.catId == 0){
                return this.articles
            }else{
                return this.articles.filter(x=>x.category == this.catId)
            }
             
        }
    },
    methods:{
        ...mapActions(['getData'])
    },
    mounted(){
        this.getData()
    },
    setup() {
        const catId = ref(0)
        const setCatId = (id)=>{
            catId.value = id
        }
        return {
            catId,
            setCatId
        }
    },
}
</script>
