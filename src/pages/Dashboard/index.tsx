import Converge from 'components/Converge';
import Scrollbar from 'components/Scrollbar';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from 'services/api';
import logo from 'static/logo.svg';
import { ThemeContext } from 'styled-components';
import {
  Avatar,
  Error,
  Form,
  Informations,
  MaximumWidth,
  Repositories,
  Repository,
  Title,
  InputGroup,
  Wrapper
} from './styles';

interface IRepository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const {
    colors: {
      scrollbar: { primary, secondary }
    }
  } = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storage = localStorage.getItem('@GithubExplorer:repositories');

    if (storage) return JSON.parse(storage);
    return [];
  });
  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    try {
      event.preventDefault();

      if (!text) return setInputError('Digite autor/nome do repositório.');

      const response = await api.get<IRepository>(`/repos/${text}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputError('');
      return setText('');
    } catch {
      return setInputError('Este repositório não existe :(');
    }
  }
  return (
    <Scrollbar
      colors={{
        primary,
        secondary
      }}
    >
      <Converge>
        <MaximumWidth>
          <img src={logo} alt="Github Explorer" />
          <Title>
            <h1>Explore repositórios no GitHub</h1>
          </Title>
          <Form onSubmit={handleAddRepository}>
            <InputGroup hasError={!!inputError}>
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Digite o nome do repositório"
              />
              {inputError ? <Error>{inputError}</Error> : null}
            </InputGroup>
            <button type="submit">Pesquisar</button>
          </Form>
          <Repositories>
            {repositories.map(repository => (
              <Repository key={repository.id}>
                <Link to={`/repositories/${repository.full_name}`}>
                  <Wrapper>
                    <Avatar>
                      <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                      />
                    </Avatar>
                    <Informations>
                      <strong>{repository.full_name}</strong>
                      <span>{repository.description}</span>
                    </Informations>
                  </Wrapper>
                  <FiChevronRight size={25} />
                </Link>
              </Repository>
            ))}
          </Repositories>
        </MaximumWidth>
      </Converge>
    </Scrollbar>
  );
};
export default Dashboard;
