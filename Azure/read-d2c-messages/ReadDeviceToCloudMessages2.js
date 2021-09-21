// THIS USES THE OBSOLETE, BUT STILL SUPPORTED AZURE_IOT_SDK_C VERSION 1.8

// https://docs.microsoft.com/en-us/javascript/api/@azure/event-hubs/?view=azure-node-latest
// https://www.npmjs.com/package/@azure/event-hubs#consume-events-in-a-single-process

const {
  EventHubConsumerClient,
  earliestEventPosition,
  latestEventPosition,
} = require("@azure/event-hubs");

async function main() {
  console.log(process.env.IOT_HUB_ENDPOINT_GROUP);
  // Endpoint connection string (NOT device connection string)
  console.log(process.env.IOT_HUB_ENDPOINT_CONNECTION);
  // Event Hub-Compatible Name
  console.log(process.env.IOT_HUB_ENDPOINT_NAME);

  // get the following from iot-hub name : Built-in-Endpoints
  const client = new EventHubConsumerClient(
    // default consumer group
    process.env.IOT_HUB_ENDPOINT_GROUP,
    // Endpoint connection string (NOT device connection string)
    process.env.IOT_HUB_ENDPOINT_CONNECTION,
    // Event Hub-Compatible Name
    process.env.IOT_HUB_ENDPOINT_NAME
  );

  // In this sample, we use the position of earliest available event to start from
  // Other common options to configure would be `maxBatchSize` and `maxWaitTimeInSeconds`
  const subscriptionOptions = {
    startPosition: latestEventPosition,
  };

  const subscription = client.subscribe(
    {
      processEvents: async (events, context) => {
        // event processing code goes here
        // event.body is a Buffer
        console.log("event:", events[0].body);
      },
      processError: async (err, context) => {
        // error reporting/handling code here
        console.log(err);
      },
    },
    subscriptionOptions
  );

  // Wait for a few seconds to receive events before closing
  setTimeout(async () => {
    await subscription.close();
    await client.close();
    console.log(`Exiting sample`);
  }, 60 * 30 * 1000);
}

main();
