import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = ({ totalResults }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  if (!searchQuery) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Search Results for "{searchQuery}"
        </h2>
        {totalResults !== undefined && (
          <p className="text-gray-600 mt-1">
            Found {totalResults} {totalResults === 1 ? 'result' : 'results'}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;