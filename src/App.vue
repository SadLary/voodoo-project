<template>
  <div id="app">
    <Search
      placeholder="Введите имя автора.."
      label="Поиск по имени автора"
      @input="searchHandle"
    />
    <Articles
      :articles="filteredArticles"
      :users="users"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Articles from './pages/Articles/index.vue';
import Search from './components/SearchInput/SearchInput.vue';

export default {
  name: 'App',
  components: {
    Articles,
    Search,
  },
  data() {
    return {
      search: '',
      articlesList: [],
    };
  },
  computed: {
    ...mapGetters({
      articles: 'articlesStore/articles',
      users: 'articlesStore/users',
    }),
    filteredArticles() {
      /* eslint arrow-body-style: ["error", "always"] */
      /* eslint-env es6 */
      return this.articlesList.filter((item) => {
        return item.author.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.$store.dispatch('articlesStore/getArticles');
    this.$store.dispatch('articlesStore/getUsers');
    this.fetchHandle();
  },
  methods: {
    ...mapActions('articlesStore', ['getArticles', 'getUsers']),
    fetchHandle() {
      if (!this.articles.length && !this.users.length) {
        this.fetchHandle();
      } else {
        this.articlesList = this.articles.map((item) => {
          return {
            ...item,
            author: this.users.find((user) => { return user.id === item.userId; }).name,
          };
        });
      }
    },
    searchHandle(data) {
      this.search = data;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #f1f1f1;
  font-family: sans-serif;
}
#app {
  width: 1200px;
  margin: auto;
  padding: 20px;
}
.hello {
  margin: 0;
  padding: 20px;

  &__message {
    color: red;
  }
}
</style>
