import nc from 'next-connect'

const handler = nc()

handler.get(async (req, res) => {
  const categories = ['Ring', 'Pulseira', 'Chain', 'Tornozeleira']
  res.send(categories)
})

export default handler
