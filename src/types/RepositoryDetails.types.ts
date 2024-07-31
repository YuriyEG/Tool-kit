export interface IRepositoryDetails {
  id: string
  name: string
  owner: {
    login: string
    avatarUrl: string
    url: string
  }
  stargazerCount: number
  pushedAt: string
  languages: {
    nodes: {
      name: string
    }[]
  }
  description: string
}
