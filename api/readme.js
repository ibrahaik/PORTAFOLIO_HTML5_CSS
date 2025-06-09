export default async function handler(req, res) {
  const { repo } = req.query
  const token = process.env.GITHUB_TOKEN

  try {
    const response = await fetch(`https://api.github.com/repos/ibrahaik/${repo}/readme`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      return res.status(404).json({ error: "README not found" })
    }

    const data = await response.json()

    // Decodificar el contenido base64
    const binary = atob(data.content)
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
    const decoder = new TextDecoder("utf-8")
    const content = decoder.decode(bytes)

    res.status(200).json({ content })
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch README" })
  }
}
