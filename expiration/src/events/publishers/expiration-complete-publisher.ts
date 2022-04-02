import { Subjects, Publisher, ExpirationCompleteEvent } from "@abkgtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}