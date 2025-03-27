// src/utils/api.js
import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.post(
            'https://api.hyperteknoloji.com.tr/products/list',
            {},
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                }
            }
        );
        console.log('Fetched products:', response.data);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error.response?.data || error.message);
        throw error;
    }
};