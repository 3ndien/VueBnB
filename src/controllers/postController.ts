import { Request, Response } from 'express';
import { CreateRoomInput } from '../schemas/room.schema';
import { CreateRoom } from '../services/room.service';
import logger from '../utils/logger';

export async function createPostHandler(
  req: Request<object, object, CreateRoomInput['body']>,
  res: Response
) {
  try {
    const room = await CreateRoom(req.body);
    return res.send(room);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
