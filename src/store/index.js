import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from "./actions/actions"
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters"

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    news: [],
    categories: [],
    articles: [],
    comments: [],
    categoriesArticles: [],
    activeArticle: null,
    activeCategory: null,
  },
  mutations,
  actions,
  getters,
});

export default store;
