const query = `
    query($username: String!) {
      user(login: $username) {
        repositories(first: 20) {
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
    }
  `

async function fetchUserRepositories() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: { username: "YuriyEG" },
    }),
  })

  const data = await response.json()
  return data.data.user.repositories.nodes
}

export default fetchUserRepositories
