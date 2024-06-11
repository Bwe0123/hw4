'use client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SearchResultsPage: React.FC = () => {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const { title } = router.query;

    useEffect(() => {
        if (title) {
            fetch(`https://fakestoreapi.com/products/category/${title}`)
                .then(response => response.json())
                .then(data => setSearchResults(data))
                .catch(error => console.error('Error fetching search results:', error));
        }
    }, [title]);

    return (
        <div>
            <h1>Search Results for {title}</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {searchResults.map(product => (
                    <div key={product.id} className="w-52 h-60 bg-white m-2 flex flex-col items-center rounded-lg overflow-hidden">
                        <div className="w-full h-32 bg-white rounded-t-lg overflow-hidden">
                            <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
                        </div>
                        <div className="text-xl text-center overflow-hidden break-all mb-2 px-2">
                            {product.title}
                        </div>
                        <div className="text-xl text-center text-gray-600">
                            ${product.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultsPage;
