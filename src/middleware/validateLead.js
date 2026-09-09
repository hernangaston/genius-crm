function validateLead(req, res, next) {
  const { name, email, phone } = req.body

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: 'Nombre es requerido'
    })
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      error: 'Email es requerido'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Formato de email inválido'
    })
  }

  if (!phone || !phone.trim()) {
    return res.status(400).json({
      error: 'Teléfono es requerido'
    })
  }

  next()
}

module.exports = validateLead