import Vue from 'vue';
import Vuex from 'vuex';

import articlesStore from '../pages/Articles/_store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articlesStore,
  },
});
