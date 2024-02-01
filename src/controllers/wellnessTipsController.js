const getwellnessTips = async (req, res) => {
  try {
    const fictitiousTips = [
      { id: 1, title: 'Respire profundamente', description: 'Pratique respirações profundas para acalmar a mente e relaxar o corpo.' },
      { id: 2, title: 'Passe um tempo ao ar livre', description: 'Aproveite o ar fresco e a natureza para melhorar seu humor.' },
      // I'll add more tips in the future..
    ];

    res.json(fictitiousTips);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getwellnessTips };