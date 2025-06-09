export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  const response = await fetch('https://api.github.com/users/ibrahaik/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  });
  const data = await response.json();
  res.status(200).json(data);
}
