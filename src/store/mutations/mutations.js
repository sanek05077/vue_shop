export default {
    SET_NEWS_TO_STATE: (state, news) => {
        state.news = news;
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
        state.categories = categories;
    },
    setArticles(state, payload) {
        state.articles = payload.items;
    },
    setComments(state, payload) {
        state.comments = payload.items;
    },
    setCategoriesArticles(state, payload) {
        state.categoriesArticles = payload.items;
    },
    setActiveCategory(state, payload) {
        state.activeCategory = payload;
    },
    setActiveArticle(state, payload) {
        state.activeArticle = payload;
    },
}
