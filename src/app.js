import express from 'express';

const createApp = () => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Backend is running');
  });

  return app;
};

export default createApp;