<template>
  <ul class="articles">
    <li
      v-for="article in articles"
      :key="article.id"
      class="articles__item"
    >
      <h3 class="articles__heading">{{ article.title }}</h3>
      <p class="artices__body">{{ article.body }}</p>
      <span class="articles__author">{{ article.author }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.articles {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  padding: 0;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    max-width: 570px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 7px;
  }
  &__heading {
    margin: 0;
    text-align: left;
  }
  &__body {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  &__author {
    color: darkgray;
  }
}
</style>
