export const natsWrapper = {
  client: {
    publish: jest.fn().getMockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
    )
  }
};