import { Event, Prisma } from '@prisma/client'

export interface EventsRepository {
  create(event: Prisma.EventCreateInput): Promise<Event>
  fetchByUserId(userId: string): Promise<Event[]>
  delete(event: Event): Promise<void>
}
