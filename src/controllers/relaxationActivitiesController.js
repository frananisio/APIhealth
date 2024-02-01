const getrelaxationActivities = async (req, res) => {
  try {
    const fictitiousActivities = [
      { id: 1, name: 'Meditação Guiada', description: 'Siga uma meditação guiada para acalmar sua mente e reduzir o estresse.' },
      { id: 2, name: 'Pintura Relaxante', description: 'Experimente pintar para liberar a criatividade e relaxar.' },
      // I'll add more activities in the future..
    ];

    res.json(fictitiousActivities);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getrelaxationActivities };