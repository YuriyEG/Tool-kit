import type { FC } from "react"
import styled from "styled-components"

import getDistance from "../helper/getDistance"

const mock = {
  id: 17665288,
  node_id: "MDEwOlJlcG9zaXRvcnkxNzY2NTI4OA==",
  name: "sails.io.js",
  full_name: "balderdashy/sails.io.js",
  private: false,
  owner: {
    login: "balderdashy",
    id: 1445252,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjE0NDUyNTI=",
    avatar_url: "https://avatars.githubusercontent.com/u/1445252?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/balderdashy",
    html_url: "https://github.com/balderdashy",
    followers_url: "https://api.github.com/users/balderdashy/followers",
    following_url:
      "https://api.github.com/users/balderdashy/following{/other_user}",
    gists_url: "https://api.github.com/users/balderdashy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/balderdashy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/balderdashy/subscriptions",
    organizations_url: "https://api.github.com/users/balderdashy/orgs",
    repos_url: "https://api.github.com/users/balderdashy/repos",
    events_url: "https://api.github.com/users/balderdashy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/balderdashy/received_events",
    type: "Organization",
    site_admin: false,
  },
  html_url: "https://github.com/balderdashy/sails.io.js",
  description: "Browser SDK for communicating w/ Sails via sockets",
  fork: false,
  url: "https://api.github.com/repos/balderdashy/sails.io.js",
  forks_url: "https://api.github.com/repos/balderdashy/sails.io.js/forks",
  keys_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/balderdashy/sails.io.js/teams",
  hooks_url: "https://api.github.com/repos/balderdashy/sails.io.js/hooks",
  issue_events_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/issues/events{/number}",
  events_url: "https://api.github.com/repos/balderdashy/sails.io.js/events",
  assignees_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/branches{/branch}",
  tags_url: "https://api.github.com/repos/balderdashy/sails.io.js/tags",
  blobs_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/languages",
  stargazers_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/stargazers",
  contributors_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/contributors",
  subscribers_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/subscribers",
  subscription_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/subscription",
  commits_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/balderdashy/sails.io.js/merges",
  archive_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/downloads",
  issues_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/labels{/name}",
  releases_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/balderdashy/sails.io.js/deployments",
  created_at: "2014-03-12T11:52:44Z",
  updated_at: "2023-09-28T15:31:55Z",
  pushed_at: "2024-06-16T12:17:12Z",
  git_url: "git://github.com/balderdashy/sails.io.js.git",
  ssh_url: "git@github.com:balderdashy/sails.io.js.git",
  clone_url: "https://github.com/balderdashy/sails.io.js.git",
  svn_url: "https://github.com/balderdashy/sails.io.js",
  homepage:
    "https://sailsjs.com/documentation/reference/web-sockets/socket-client",
  size: 1057,
  stargazers_count: 182,
  watchers_count: 182,
  language: "JavaScript",
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  has_discussions: false,
  forks_count: 118,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 9,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: "public",
  forks: 118,
  open_issues: 9,
  watchers: 182,
  default_branch: "master",
  score: 1,
}

const Container = styled.article`
  width: 500px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 12px 1px black;
  font-family: "Regular", Arial;
  border-radius: 4px;
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .stars {
    font-size: 18px;
    font-weight: bold;
    opacity: 60%;
    margin-left: auto;
    margin-right: 18px;
  }
  .distance {
    font-size: 12px;
    font-weight: bold;
    opacity: 60%;
  }
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .photo {
    width: 250px;
    border-radius: 50%;
  }
  .link {
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto;
    text-decoration: none;
    &:hover {
      opacity: 70%;
    }
  }
  margin-bottom: 20px;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .language {
    margin-bottom: 8px;
  }
  .description {
  }
`
interface IRepository {
  name: string
  updated_at: Date
  stargazers_count: number
  owner: { avatar_url: string; html_url: string; login: string }
  full_name: string
  language: string
  description: string
}

const RepositoryCard: FC<{ card: IRepository }> = ({ card = mock }) => {
  const {
    name,
    updated_at,
    stargazers_count,
    owner,
    full_name,
    language,
    description,
  } = card

  return (
    <Container>
      <CardHeader>
        <span className="title">{name}</span>
        <span className="stars">&#9733;{stargazers_count}</span>
        <span className="distance">{getDistance(updated_at)}</span>
      </CardHeader>
      <CardBody>
        <span className="span">
          <img src={owner.avatar_url} className="photo" alt={full_name} />
        </span>
        <a href={owner.html_url} className="link">
          {owner.login}
        </a>
      </CardBody>
      <About>
        <span className="language">Language: {language}</span>
        <span className="description">About: {description}</span>
      </About>
    </Container>
  )
}

export default RepositoryCard
