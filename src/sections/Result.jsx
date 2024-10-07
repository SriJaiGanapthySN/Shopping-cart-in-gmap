import React from "react";
import { useLoaderData, useNavigation, useNavigate, Link } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import { searchApiKey } from "../constants";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  if (!query) return { searchResults: [] };

  const apiUrl = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false`;

  let currentKeyIndex = 0;
  const getApiKey = () => {
    const key = searchApiKey[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % searchApiKey.length;
    return key;
  };

  const makeRequest = async (url, options) => {
    const response = await fetch(url, options);
    if (response.status === 429) {
      throw new Error("Rate limit exceeded");

    }
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return response;
  };

  let apiKey = getApiKey();
  let retries = 0;
  const maxRetries = searchApiKey.length;

  while (retries < maxRetries) {
    try {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        },
      };

      const response = await makeRequest(apiUrl, options);
      const result = await response.json();
      const data = result.data || {};
      const products = data.products || [];
      const filteredResults = products.filter((item) =>
        item.product_title.toLowerCase().includes(query.toLowerCase())
      );
      return { searchResults: filteredResults };
    } catch (error) {
      if (error.message === "Rate limit exceeded" && retries < maxRetries - 1) {
        apiKey = getApiKey();
        retries++;
      } else {
        throw error;
      }
    }
  }

};

const Result = () => {
  const { searchResults } = useLoaderData();
  const navigation = useNavigation();


  if (navigation.state === "loading") {
    return <LoadingScreen message="Searching for products..." />;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Search Results
      </h2>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((result) => (
            <div
              key={result.asin}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
            >
              <img
                src={result.product_photo}
                alt={result.product_title}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {result.product_title}
                </p>
                <p className="text-blue-500 font-medium text-md mb-1">
                  {result.product_price}
                </p>
                <p className="text-yellow-500 text-sm">
                  Rating: {result.product_star_rating}⭐
                </p>
                <Link
                  to={`/product/${result.asin}`}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 inline-block"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No results found. Try a different search term.
        </p>
      )}
    </div>
  );
};

export default Result;
