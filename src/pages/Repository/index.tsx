import Centralize from 'components/Converge';
import Scrollbar from 'components/Scrollbar';
import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import api from 'services/api';
import logo from 'static/logo.svg';
import { Header, Issue, Issues, RepositoryInfo } from './styles';

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface IIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
interface IParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<IParams>();
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
    // async function load(): Promise<void> {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`/repos/${params.repository}`),
    //     api.get(`/repos/${params.repository}/issues`)
    //   ]);
    // }
    // load();
  }, [params.repository]);
  return (
    <Scrollbar
      colors={{
        primary: '#eee',
        secondary: '#c9c9c9'
      }}
    >
      <Centralize>
        <Header>
          <img src={logo} alt="Github Explorer" />
          <Link to="/">
            <FiChevronLeft size={16} />
            <span>Voltar</span>
          </Link>
        </Header>
        {repository && (
          <RepositoryInfo>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <section>
              <ul>
                <li>
                  <strong>{repository.stargazers_count}</strong>
                  <span>Stars</span>
                </li>
                <li>
                  <strong>{repository.forks_count}</strong>
                  <span>Forks</span>
                </li>
                <li>
                  <strong>{repository.open_issues_count}</strong>
                  <span>Issues</span>
                </li>
              </ul>
            </section>
          </RepositoryInfo>
        )}
        <Issues>
          {issues.map(issue => (
            <Issue key={issue.id} target="_blank" href={issue.html_url}>
              <strong>{issue.title}</strong>
              <span>{issue.user.login}</span>
            </Issue>
          ))}
        </Issues>
      </Centralize>
    </Scrollbar>
  );
};
export default Repository;
