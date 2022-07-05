/* eslint-disable */
import Api from '@/api';
export default {
    async loadArticles({ commit, state }) {
        if (state.articles.length > 0) {
            return;
        }

        const items = await Api.getArticles();
        commit('setArticles', {
            items
        });
    },
    async loadComments({ commit, state }) {
        if (state.comments.length > 0) {
            return;
        }

        const items = await Api.getComments();
        commit('setComments', {
            items
        });
    },
    async loadCategories({ commit, state }) {
        if (state.categoriesArticles.length > 0) {
            return;
        }

        const items = await Api.getCategoriesArticles();
        commit('setCategoriesArticles', {
            items
        });
    },
    async loadActiveCategory(context, id) {
        await context.dispatch('loadArticles');
        await context.dispatch('loadCategories');

        let category = context.state.categoriesArticles.find((item) => {
            return item.id == id;
        });
        context.commit('setActiveCategory', category);
    },
    async loadActiveArticle(context, id) {
        await context.dispatch('loadArticles');

        let model = context.state.articles.find((item) => {
            return item.id == id;
        });
        context.commit('setActiveArticle', model);
    },
    async addComment({ commit }, payload) {
        await Api.addComment(payload);
        commit('addComment', payload);
    },
}
