import axios from 'axios';

export const getHomePageMealAPI = async(searchTerm) => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    return res.data
}

export const getCategoriesAPI = async() => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    return res.data
}

export const getRandomMealAPI = async() => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
    return res.data
}
