import AuthenticationRepository from './authenticationRepository'
import UsersRepository from './usersRepository'
import salarysRepository from './salarysRepository'
const repositories = {
    authentication: AuthenticationRepository,
    users: UsersRepository,
    salarys: salarysRepository
}

export const RepositoryFactory = {
    get: name => repositories[name]
}