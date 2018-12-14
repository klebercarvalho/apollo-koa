import Koa from 'koa';

import { ApolloServer } from 'apollo-server-koa';

export default class Server {
  constructor({
    config,
    resolvers,
    typeDefs,
  }) {
    this.config = config;
    this.server = new ApolloServer({ typeDefs, resolvers });
    this.service = new Koa();
    this.server.applyMiddleware({ app: this.service });
  }

  start() {
    return new Promise((resolve) => {
      const port = this.config.PORT;

      this.service.listen({ port }, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/${this.server.graphqlPath}`);
        resolve();
      });
    });
  }
}
