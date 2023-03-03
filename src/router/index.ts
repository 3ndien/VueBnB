import { Express, Request, Response } from 'express';
import { createPostHandler } from '../controllers/postController';
import validate from '../middlewares/validateResource';
import { createRoomSchema } from '../schemas/room.schema';

function routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/createRoom', validate(createRoomSchema), createPostHandler);
}

export default routes;
