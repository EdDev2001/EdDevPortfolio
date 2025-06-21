import { Octokit } from 'octokit';

export async function load() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  try {
    const repos = await octokit.request('GET /users/{username}/repos', {
      username: 'EdDev2001', // <-- Replace with your GitHub username
      type: 'owner',
      sort: 'updated',
      per_page: 6
    });

    return {
      repos: repos.data
    };
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return {
      repos: []
    };
  }
} 