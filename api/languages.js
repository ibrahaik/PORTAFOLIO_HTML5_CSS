export default async function handler(req, res) {
  const { repo } = req.query
  const token = process.env.GITHUB_TOKEN

  try {
    const response = await fetch(`https://api.github.com/repos/ibrahaik/${repo}/languages`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      return res.status(404).json({})
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({})
  }
}
