export interface IUserRepository {
  id: string
  name: string
  owner: {
    login: string
  }
  url: string
  stargazerCount: number
  defaultBranchRef: {
    target: {
      committedDate: string
    }
  }
}
