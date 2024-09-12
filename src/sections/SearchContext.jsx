// import React, { createContext, useState } from 'react';
// import { searchApiKey } from '../constants';

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     let currentKeyIndex = 0;

//     const getApiKey = () => {
//         const key = searchApiKey[currentKeyIndex];
//         currentKeyIndex = (currentKeyIndex + 1) % searchApiKey.length;
//         return key;
//     };

//     const performSearch = async (query) => {
//         setSearchQuery(query);
//         setLoading(true);
//         const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false`;
//         let apiKey = getApiKey();
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': apiKey,
//                 'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//             }
//         };

//         let response;
//         try {
//             response = await fetch(url, options);

//             if (response.status === 429) {
//                 console.warn('API limit reached, retrying with a new key...', apiKey);
//                 apiKey = getApiKey();
//                 options.headers['x-rapidapi-key'] = apiKey;
//                 response = await fetch(url, options);
//             }

//             const result = await response.json();
//             const data = result.data || {};
//             const products = data.products || [];
//             const filteredResults = products.filter((item) =>
//                 item.product_title.toLowerCase().includes(query.toLowerCase())
//             );
//             setSearchResults(filteredResults);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//             setSearchResults([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <SearchContext.Provider value={{ searchQuery, searchResults, performSearch, loading }}>
//             {children}
//         </SearchContext.Provider>
//     );
// };
