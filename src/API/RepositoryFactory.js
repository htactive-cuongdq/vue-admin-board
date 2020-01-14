import AuthenticationRepository from './authenticationRepository'
import UsersRepository from './usersRepository'
import salarysRepository from './salarysRepository'
import internRepository from './internRepository'

const repositories = {
    authentication: AuthenticationRepository,
    users: UsersRepository,
    salarys: salarysRepository,
    intern: internRepository,
}

export const RepositoryFactory = {
    get: name => repositories[name]
}