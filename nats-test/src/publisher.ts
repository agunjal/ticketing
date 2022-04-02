import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

// Connect to nats streaming server
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222'
});

// Emit event on the connect of the nats streaming server
stan.on('connect', async () => {

  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);

  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20
  });
});