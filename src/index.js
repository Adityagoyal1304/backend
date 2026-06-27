import dotenv from 'dotenv';
import createApp from './app.js';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

const app = createApp();
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('Database connection failed:', error);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();