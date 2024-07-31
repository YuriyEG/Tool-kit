import { GRAPHQLTOKEN } from "../mockAccessData/tokenAndUserName"

import type { IRepository } from "../types/Repository.types"

async function fetchRepositories(query: string): Promise<IRepository[]> {
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

export default fetchRepositories
