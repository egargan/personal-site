import { Collection, Db, MongoError } from 'mongodb';
import { matchErrOrThrow } from '$lib/error';
import { DbError } from '$lib/mongo';

export interface Post {
  content: string,
  created: string,
  header: string,
  readTimeMins: number,
  slug: string,
  tags: string[],
  title: string,
}

const collection = 'posts';

export class PostsDao {
  private readonly posts: Collection<Post>;

  constructor(db: Db) {
    this.posts = db.collection<Post>(collection);
  }

  async getAllPosts(): Promise<Post[]> {
    try {
      return this.posts.find({}).toArray();
    } catch (err) {
      // TODO: fix this error properly, 'Argument of type 'typeof MongoError'
      // is not assignable to parameter of type 'ErrorConstructor''
      // @ts-ignore
      if (matchErrOrThrow(err, MongoError)) {
        throw new DbError('failed to get all posts', err);
      }
    }
  }

  async getPost(slug: string): Promise<Post> {
    try {
      return this.posts.findOne({ slug });
    } catch (err) {
      // @ts-ignore
      if (matchErrOrThrow(err, MongoError)) {
        throw new DbError(`failed to get post '${slug}'`, err);
      }
    }
  }
}
