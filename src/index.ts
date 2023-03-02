import express from 'express';
import { connect } from './utils/dbConnect';
import config from 'config';
import logger from './utils/logger';
import routes from './router';

const app = express();
const port = config.get<number>('port');

app.use(express.json());

app.listen(port, async () => {
  logger.info(`app is running on http://localhost:${port}`);

  await connect();
  routes(app);
});
