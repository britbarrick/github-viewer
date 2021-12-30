import React, { useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const {getUser, getUserRepos, user, repos, loading} = useContext(GithubContext);

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])
    
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        company,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className='round-img' alt='User Avatar' style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    <p>Hireable: {' '}
                        {hireable ? (
                            <i className='fas fa-check text-success' />
                        ) : (
                            <i className='fas fa-times-circle text-danger' />
                        )}
                    </p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            <br />
                        </Fragment>
                    )}
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                    <br />
                    <Link to='/' className='btn btn-primary'>
                        Back to Search
                    </Link>
                    <a href={html_url} className='btn btn-light my-1'>
                        Visit Github Profile
                    </a>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers: {followers}
                </div>
                <div className="badge badge-light">
                    Following: {following}
                </div>
                <div className="badge badge-danger">
                    Public Repositories: {public_repos}
                </div>
                <div className="badge badge-dark">
                    Public Gists: {public_gists}
                </div>

            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User
