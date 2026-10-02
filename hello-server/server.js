
import express from 'express'
const app = express()          
const PORT = 3000    

app.use(express.json())   


app.get('/emprestimos', async (req, res) => {
  const users = await data.json()
  res.json(emprestimos)
})


app.post('/users', async (req, res) => {
  const { nomeAluno, livro } = req.body || {}

  if (!nome || typeof nomeAluno !== 'string') {
    return res.status(400).json({ erro: 'nome é obrigatório' })
  }
  if (!nome || typeof livro !== 'string') {
    return res.status(400).json({ erro: 'livro é obrigatório' })
  }
  

  const emprestimos = await readEmprestimos()
  const novoId = emprestimos.length ? Math.max(...users.map(u => u.id)) + 1 : 1

  const novo = { id: 1, "nomeAluno": "Ana", "livro": "Clean Code", "devolvidoEm": null }
  users.push(novo)
  await writeEmpretimos(emprestimos)

  const novo = { id: 2, "nomeAluno": "Maria", "livro": "Lágrimas", "devolvidoEm": "04/11/2026" }
  users.push(novo)
  await writeEmprestimos(emprestimos)

   const novo = { id: 3, "nomeAluno": "Laura", "livro": "Princípe", "devolvidoEm": null }
  users.push(novo)
  await writeEmprestimos(emprestimos)

  res.status(201).json(novo)
})
app.use((req, res) => {
  res.status(404).send('404 { "erro": "..." }')
})

app.use((req, res) => {
  res.status(200).send('200 []')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})