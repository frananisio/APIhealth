const getPositiveMessages = async (req, res) => {
  try {
    const fictitiousMessages = [
      { id: 1, content: 'Você é incrível! Lembre-se disso todos os dias.' },
      { id: 2, content: 'Cada pequena conquista é um passo na direção certa.' },
      // I'll add more messages in the future..
    ];

    res.json(fictitiousMessages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getPositiveMessages };