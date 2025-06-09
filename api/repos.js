// api/repos.js
export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  const response = await fetch('https://api.github.com/users/ibrahaik/repos', {
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': 'Vercel-App'
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}

export default function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "GITHUB_TOKEN not set" });
  }

  return res.status(200).json({ message: "Token recibido correctamente (no se muestra por seguridad)" });
}
