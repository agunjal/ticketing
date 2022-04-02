import { Publisher, Subjects, TicketUpdatedEvent } from '@abkgtickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}