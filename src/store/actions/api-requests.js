import axios from "axios";

export default {
    GET_NEWS_FROM_API({commit}) {
        return axios ('http://localhost:3000/news', {
            method: "GET"
        })
            .then((news) => {
                commit('SET_NEWS_TO_STATE', news.data)
                return news;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    GET_CATEGORIES_FROM_API({commit}) {
        return axios ('http://localhost:3000/categories', {
            method: "GET"
        })
            .then((categories) => {
                commit('SET_CATEGORIES_TO_STATE', categories.data)
                return categories;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
}
