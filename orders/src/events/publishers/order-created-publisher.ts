import { Publisher, OrderCreatedEvent, Subjects } from '@abkgtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}