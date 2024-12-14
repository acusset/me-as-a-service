type GitHubProfile = {
  avatar_url: string;
  bio: string;
  name: string;
  // Add other fields you might want to use
  blog?: string;
  location?: string;
  twitter_username?: string;
  company?: string;
}

export async function getGitHubProfile(username: string): Promise<GitHubProfile> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization if you need higher rate limits
      ...(process.env.GITHUB_TOKEN && {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      })
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub profile');
  }

  return response.json();
} 