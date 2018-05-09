const { parse } = require('url')
const { send } = require('micro')
const sha1 = require('sha1')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { query: { text } } = parse(req.url, true)
  
  if (!text) return send(res, 400, { message: 'No text parameter found in the query' })

  const anonymized = sha1(text)

  send(res, 200, { text: anonymized })
}
