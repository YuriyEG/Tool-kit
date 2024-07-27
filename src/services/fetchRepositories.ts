async function fetchRepositories(query) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query SearchRepositories($query: String!) {
            search(query: $query, type: REPOSITORY, first: 10) {
              repositoryCount
              nodes {
                ... on Repository {
                  id
                  name
                  owner {
                    login
                  }
                  url
                }
              }
            }
          }
        `,
      variables: { query: query },
    }),
  })

  const data = await response.json()
  return data.data.search.nodes
}

export default fetchRepositories
