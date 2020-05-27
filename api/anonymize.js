const sha1 = require('sha1')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { query: { text } } = req

  if (!text) return res.status(400).json({ message: 'No text parameter found in the query' })

  const anonymized = sha1(text)

  return res.status(200).json({ text: anonymized })
}
