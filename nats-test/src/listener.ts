import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

// Connect to nats streaming server
// nats.connect(clusterID, clientID, options )
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
});

// Emit event on the connect of the nats streaming server
stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());