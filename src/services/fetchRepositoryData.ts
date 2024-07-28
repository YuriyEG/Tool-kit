const fetchRepositoryData = async repoId => {
  const query = `
  query ($repoId: ID!) {
    node(id: $repoId) {
      ... on Repository {
        name
        stargazerCount
        pushedAt
        owner {
          login
          avatarUrl
        }
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
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`, // Замените на ваш GitHub токен
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { repoId } }),
  })
    .then(res => res.json())
    .then(res => res.data.node)
}

export default fetchRepositoryData
