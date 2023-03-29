import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState('web');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const performSearch = (query, page) => {
    const perPage = 20;
    axios
      .get(`https://api.github.com/search/repositories?q=${query}`, {
        params: {
          per_page: perPage,
          page: page,
        },
      })
      .then((response) => {
        setQuery(query);
        setRepos(response.data.items);
        setLoading(false);
        setTotalPages(Math.ceil(response.data.total_count / perPage));
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  useEffect(() => {
    performSearch(query, currentPage);
  }, [currentPage]);

  const handlePrevPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">RepoSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>{query}</h2>
            <RepoList data={repos} />
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={handlePrevPageClick}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="page-number">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPageClick}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;