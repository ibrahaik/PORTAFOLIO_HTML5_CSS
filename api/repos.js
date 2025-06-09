// api/repos.js

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "GITHUB_TOKEN not set" });
  }

  try {
    const response = await fetch('https://api.github.com/users/ibrahaik/repos', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'Vercel-App'
      }
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json(error);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: 'Error interno al obtener los repositorios', detalle: err.message });
  }
}
