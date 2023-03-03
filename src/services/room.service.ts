import RoomModel, { IRoom } from '../models/room.model';
import { CreateRoomInput } from '../schemas/room.schema';

export async function CreateRoom(input: CreateRoomInput['body']) {
  try {
    return await RoomModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
