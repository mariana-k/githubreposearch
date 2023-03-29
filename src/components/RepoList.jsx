import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';

const RepoList = ({ data }) => {
  const repos = data.length
    ? data.map(repo => (
        <Repo
          key={repo.id}
          name={repo.name}
          url={repo.html_url}
          description={repo.description}
        />
      ))
    : <NoRepos />;

  return (
    <ul className="repo-list">
      {repos}
    </ul>
  );
};

export default RepoList;