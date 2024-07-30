async function fetchRepositoryData(repoId: string): Promise<Repository> {
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

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
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

export interface Repository {
  id: string
  name: string
  owner: {
    login: string
    avatarUrl: string
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

export default fetchRepositoryData
