import z from 'zod';

const createBedSchema = z.object({
  bedType: z.enum(['Single', 'Double', 'Two Stages']),
  count: z
    .number({
      required_error: 'Must have at least one bed',
      invalid_type_error: 'The beds count must be a number'
    })
    .min(1)
});

const createFacilitiesSchema = z.object({
  label: z.string({
    required_error: 'Facility type name is required'
  }),
  iconUrl: z.string().optional()
});

const createBookingSchema = z.object({
  startDate: z.string({
    required_error: 'Start date is required'
  }),
  endDate: z.string({
    required_error: 'End date is required'
  }),
  isBooked: z.boolean().optional()
});

export const createRoomSchema = z.object({
  body: z.object({
    roomType: z.enum(['Hotel', 'House', 'Bungalow']),
    description: z.string().optional(),
    beds: z.array(createBedSchema),
    facilities: z.array(createFacilitiesSchema),
    booking: z.array(createBookingSchema)
  })
});

export type CreateRoomInput = z.infer<typeof createRoomSchema>;
