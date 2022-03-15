import Vue from 'vue'
import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'
import data from "../data/data"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

const store = createStore({
    state: {
         categories : [],
         articles : [
            {
              id: 1,
              title: '5 Key Concepts to Level Up Your JavaScript Skills',
              slug: '5-key-concepts-to-level-up-your-javascript-skills',
              writer: 'Viduni Wickramarachchi',
              category: 3,
              imageUrl: 'https://miro.medium.com/max/700/1*mdBG1Egnfr0H0JMqLfKW5Q.jpeg',
              content: '<p>The goal of this article is to give a brief introduction to some essential concepts for aspiring JavaScript developers. It is always a good idea to learn about the core concepts of a language or a framework to write code effectively and efficiently. However, if you want to learn something quickly, reading lengthy descriptions would be a hassle. Therefore, this article will explain some core concepts as simply as possible with the following.</p>' +
                '<ul><li>A short description of the concept</li><li>Why it is relevant</li><li>A practical application (Code example)</li></ul>' +
                '<p>Grab a coffee and sit tight! These concepts will change the way you code and help you become an efficient developer with quality code.</p>' +
                '<h1>The concepts that we will explore</h1>' +
                '<ol><li>Destructuring</li><li>Spread Syntax</li><li>Rest Syntax</li><li>Array methods</li><li>Value vs. Reference Variable Assignment</li></ol>' +
                '<h1>Conclusion</h1><p>Mastering these concepts will help you write better and clean code. I hope you gained some knowledge about the concepts discussed and how important they are. Stay tuned for more articles about important JavaScript concepts and how to use them in the future. Let us know in the comments section if you need to learn about any specific concept or technique that would improve your coding and engineering skills.</p>',
              desc: 'The goal of this article is to give a brief introduction to some essential concepts for aspiring JavaScript developers. It is always a good idea to learn about the core concepts of a language or a framework to write code effectively and efficiently. However, if you want to learn something quickly, reading lengthy descriptions would be a hassle. Therefore, this article will explain some core concepts as simply as possible with the following.',
              source: 'https://blog.bitsrc.io/5-key-concepts-to-level-up-your-javascript-skills-6682a65cbf3d',
              created_at: 'Sep 4, 2020'
            }
        ]
    },
    mutations: {
        setDataCategories(state, categories){
            state.categories = categories
        },
        setDataArticles(state, articles){
            state.articles = articles
        }
    },
    actions: {
        async getData(ctx){
            try {
                const res = await data;
                
                const articles = await res.articles
                const categories = await res.categories
                
                ctx.commit("setDataCategories", categories)
                ctx.commit("setDataArticles", articles)

            } catch (error) {
                console.log(error);
            }
        }
    },
    plugins: [vuexLocal.plugin]
  })

  export default store
  