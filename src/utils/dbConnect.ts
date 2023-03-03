import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

export async function connect(): Promise<void> {
  try {
    await mongoose.connect(config.get<string>('dbUri'));
    logger.info('DB Connected');
  } catch (error) {
    logger.error('Could not connect to DB!');
    process.exit(1);
  }
}
