<template>
  <div class="home">
    <ArticlesList />
  </div>
</template>

<script>
import ArticlesList from './articles/ArticlesList.vue'

export default {
  name: 'Home',
  components: {
    ArticlesList
  }
}
</script>
