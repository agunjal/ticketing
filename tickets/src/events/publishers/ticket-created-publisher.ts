import { Publisher, Subjects, TicketCreatedEvent } from '@abkgtickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}