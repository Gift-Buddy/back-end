import { Attendee, Prisma } from '@prisma/client'

export interface AttendeesRepository {
  create(attendee: Prisma.AttendeeCreateInput): Promise<Attendee>
  fetchByEventId(eventId: string): Promise<Attendee[]>
  remove(attendee: Attendee): Promise<void>
  save(attendee: Attendee): Promise<void>
}
