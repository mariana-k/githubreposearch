import React from 'react';
import Repo from '../Repo';
import NoRepos from '../NoRepos';
import { StyledRepoList } from './RepoList.styles';

const RepoList = ({ data }) => {
  console.log(data)
  const repos = data.length
    ? data.map(repo => (
        <Repo
          key={repo.id}
          data={repo}
        />
      ))
    : <NoRepos />;

  return (
    <StyledRepoList>
      {repos}
    </StyledRepoList>
  );
};

export default RepoList;