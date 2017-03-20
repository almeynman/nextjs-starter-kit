import next from 'next';
import app from './app';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const runServer = async () => {
  await nextApp.prepare();

  app.get('*', (req, res) => handle(req, res));

  app.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
};

runServer();
