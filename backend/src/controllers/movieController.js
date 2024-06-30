const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMovies = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMovies };
