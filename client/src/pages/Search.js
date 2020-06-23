import React, { useState, useEffect } from 'react';
import API from '../utils/recipeApi'

function Search() {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => getRecipes(), [search])

    const getRecipes = () => {
        API.getAllRecipes()
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    }

}