import axios from 'axios';

export default {

    getAllRecipes() {
        return axios.get('/api/recipes/')
    },

    getRecipe(id) {
        return axios.get('/api/recipes/' + id);
    }
}