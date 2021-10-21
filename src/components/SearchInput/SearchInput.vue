<template>
  <div class="search">
    <label class="search__label">
      <span
        v-if="label.length"
        class="search__label__text"
      >
        {{ label }}
      </span>
      <input
        v-model="search"
        type="search"
        class="search__input"
        :placeholder="placeholder"
        @input="searchHandle"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    placeholder: {
      type: String,
      default: 'Поиск...',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchHandle() {
      this.$emit('input', this.search);
    },
  },
};
</script>

<style lang="scss">
  .search {
    background-color: #fff;
    padding: 10px;
    &__label {
      display: flex;
      flex-direction: column;
      &__text {
        display: block;
        margin-bottom: 10px;
      }
    }
    &__input {
      border: 1px solid darkgrey;
      border-radius: 5px;
      padding: 5px;
      outline: transparent;
      &::placeholder {
        transition: 0.3s;
      }
      &:focus::placeholder {
        opacity: 0;
      }
    }
  }
</style>
