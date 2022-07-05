export default {
    NEWS(state) {
        return state.news;
    },
    CATEGORIES(state) {
        return state.categories;
    },
    Articles(state) {
        return state.articles;
    },
    lastArticles(state) {
        return state.articles.slice(0, 10);
    },
    lastComments(state) {
        return state.comments.slice(0, 10);
    },
    popularCategoriesArticles(state) {
        return state.categoriesArticles.slice(0, 1);
    },
    categoriesArticles(state) {
        return state.categoriesArticles;
    },
    activeCategoryArticles(state) {
        if (!state.activeCategory) {
            return [];
        }
        return state.articles.filter((item) => state.activeCategory.articles.indexOf(item.id) >= 0);
    },
    prevArticle(state) {
        let prevItem = null;
        if (state.activeArticle) {
            state.articles.forEach((item, index) => {
                if (item.id == state.activeArticle.id) {
                    prevItem = state.articles[index-1] || null;
                }
            });
        }
        return prevItem;
    },
    nextArticle(state) {
        let nextItem = null;
        if (state.activeArticle) {
            state.articles.forEach((item, index) => {
                if (item.id == state.activeArticle.id) {
                    nextItem = state.articles[index+1] || null;
                }
            });
        }
        return nextItem;
    },
}
