import { GRAPHQLTOKEN } from "../mockAccessData/tokenAndUserName"

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

async function fetchUserRepositories(username) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GRAPHQLTOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    throw new Error(
      `Error fetching user repositories: ${errorResponse.message}`,
    )
  }

  const data = await response.json()
  console.log(data)
  return data.data.user.repositories.nodes
}

export default fetchUserRepositories
