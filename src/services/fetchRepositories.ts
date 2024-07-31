import { GRAPHQLTOKEN } from "../mockAccessData/tokenAndUserName"

async function fetchRepositories(query: string): Promise<Repository[]> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GRAPHQLTOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query SearchRepositories($query: String!) {
          search(query: $query, type: REPOSITORY, first: 100) {
            repositoryCount
            nodes {
              ... on Repository {
                id
                name
                owner {
                  login
                }
                url
                stargazerCount
                defaultBranchRef {
                  target {
                    ... on Commit {
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { query },
    }),
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    throw new Error(`Error fetching repositories: ${errorResponse.message}`)
  }

  const data = await response.json()
  return data.data.search.nodes
}

export interface Repository {
  id: string
  name: string
  owner: {
    login: string
  }
  url: string
  stargazerCount: number
  defaultBranchRef?: {
    target?: {
      committedDate?: string
    }
  }
}

export default fetchRepositories
