import nc from 'next-connect'

const handler = nc()

handler.get(async (req, res) => {
  const categories = ['Sneackers', 'Casual']
  res.send(categories)
})

export default handler
