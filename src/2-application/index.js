class Application {
  constructor({ server, /* database, */logger }) {
    this.server = server;
    // this.database = database;
    this.logger = logger;
  }

  async start() {
    // await this.database;
    // await this.redis;
    await this.server.start();
  }
}

export default Application;
