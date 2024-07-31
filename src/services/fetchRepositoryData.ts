import type { IRepositoryDetails } from "../types/RepositoryDetails.types"

import { GRAPHQLTOKEN } from "../mockAccessData/tokenAndUserName"

const query = `
query ($repoId: ID!) {
  node(id: $repoId) {
    ... on Repository {
      id
      name
      owner {
        login
        avatarUrl
        url
      }
      stargazerCount
      pushedAt
      languages(first: 10) {
        nodes {
          name
        }
      }
      description
    }
  }
}
`

async function fetchRepositoryData(
  repoId: string,
): Promise<IRepositoryDetails> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GRAPHQLTOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { repoId },
    }),
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    throw new Error(`Error fetching repository data: ${errorResponse.message}`)
  }

  const data = await response.json()
  return data.data.node
}

export default fetchRepositoryData
