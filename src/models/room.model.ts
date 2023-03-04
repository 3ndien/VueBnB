import { Document, Schema, model, Types, Model } from 'mongoose';

export interface IBed extends Document {
  bedType: string;
  count: number;
}

export interface IFacility extends Document {
  label: string;
  iconUrl: string;
}

export interface IBooking extends Document {
  startDate: string;
  endDate: string;
  days: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRoom extends Document {
  roomType: string;
  beds: Array<IBed>;
  facilities: Array<IFacility>;
  description: string;
  booking: Array<IBooking>;
  createdAt: Date;
  updatedAt: Date;
}

type RoomDocumentsBeds = {
  beds: Types.DocumentArray<IBed>;
};

type RoomDocumentsFacilities = {
  facilities: Types.DocumentArray<IFacility>;
};

type RoomDocumentsBooking = {
  booking: Types.DocumentArray<IBooking>;
};

type RoomModelType = Model<
  IRoom,
  object,
  [RoomDocumentsBeds, RoomDocumentsFacilities, RoomDocumentsBooking]
>;

const RoomModel = model<IRoom, RoomModelType>(
  'Rooms',
  new Schema<IRoom, RoomModelType>(
    {
      roomType: {
        type: String,
        enum: ['Hotel', 'House', 'Bungalow'],
        required: true
      },
      beds: [
        new Schema<IBed>({
          bedType: {
            type: String,
            enum: ['Single', 'Double', 'Two Stages'],
            required: true
          },
          count: {
            type: Number,
            min: 1,
            required: [true, 'Must have at least one bed']
          }
        })
      ],
      facilities: [
        new Schema<IFacility>({
          label: {
            type: String,
            required: [true, 'Facility type name is required']
          },
          iconUrl: String
        })
      ],
      description: String,
      booking: [
        new Schema<IBooking>(
          {
            startDate: {
              type: String,
              required: true
            },
            endDate: {
              type: String,
              required: true
            },
            days: {
              type: Number,
              required: [true, 'Number of days for booking is required']
            }
          },
          {
            timestamps: true
          }
        )
      ]
    },
    {
      timestamps: true
    }
  )
);

export default RoomModel;
