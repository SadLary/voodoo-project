const articlesStore = {
  namespaced: true,
  state: {
    articles: [],
    users: [],
  },
  getters: {
    articles: ({ articles }) => articles,
    users: ({ users }) => users,
  },
  mutations: {
    setArticles(state, value) {
      state.articles = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
  },
  actions: {
    getArticles({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => commit('setArticles', json));
    },
    getUsers({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => commit('setUsers', json));
    },
  },
};

export default articlesStore;
