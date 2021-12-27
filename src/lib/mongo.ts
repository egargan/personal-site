import type { Db } from 'mongodb';
import { MongoClient, MongoError } from 'mongodb';
import { AppError } from '$lib/error';

export interface MongoOptions {
  url: string,
  db?: string,
}

const defaults = {
  db: 'blog',
}

// Thinly wraps MongoClient, mainly abstracting away its weird connection
// process.
//
// Mongo wraps a single connection, which should be used throughout a
// deployment's lifetime. The MongoDB driver itself keeps a connection pool and
// will create/re-use connections as needed - there's no need to do anything
// else on top of this.
export class Mongo {
  private readonly client: MongoClient;
  private connectedClient: MongoClient;
  private readonly dbName: string;

  constructor(options: MongoOptions) {
    const url = new URL(options.url);
    this.dbName = options.db || defaults.db;
    this.client = new MongoClient(url.toString());
  }

  async connect(): Promise<Mongo> {
    if (this.connectedClient) {
      return;
    }

    try {
      this.connectedClient = await this.client.connect();
    } catch (err) {
      if (err instanceof MongoError) {
        throw new ConnectionError(err);
      } else {
        throw err;
      }
    }

    return this;
  }

  getConnectedClient(): MongoClient {
    this.throwIfNotConnected();
    return this.connectedClient;
  }

  getDb(): Db {
    this.throwIfNotConnected();
    return this.connectedClient.db(this.dbName);
  }

  private throwIfNotConnected() {
    if (!this.connectedClient) {
      throw new NotConnectedError();
    }
  }
}

export class DbError extends AppError {
  constructor(message: string, err?: MongoError) {
    super(message, { err });
  }
}

export class ConnectionError extends AppError {
  constructor(error: MongoError) {
    super(`failed to connect to MongoDB`, { cause: error });
  }
}

export class NotConnectedError extends AppError {
  constructor() {
    super('MongoDB client is not connected');
  }
}
