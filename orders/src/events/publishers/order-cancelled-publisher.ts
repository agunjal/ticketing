import { Subjects, Publisher, OrderCancelledEvent } from '@abkgtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}