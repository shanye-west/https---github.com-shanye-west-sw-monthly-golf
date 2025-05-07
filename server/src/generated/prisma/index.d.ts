
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Hole
 * 
 */
export type Hole = $Result.DefaultSelection<Prisma.$HolePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.hole`: Exposes CRUD operations for the **Hole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holes
    * const holes = await prisma.hole.findMany()
    * ```
    */
  get hole(): Prisma.HoleDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Hole: 'Hole',
    Event: 'Event',
    Group: 'Group',
    Score: 'Score'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "course" | "hole" | "event" | "group" | "score"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Hole: {
        payload: Prisma.$HolePayload<ExtArgs>
        fields: Prisma.HoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          findFirst: {
            args: Prisma.HoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          findMany: {
            args: Prisma.HoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>[]
          }
          create: {
            args: Prisma.HoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          createMany: {
            args: Prisma.HoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>[]
          }
          delete: {
            args: Prisma.HoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          update: {
            args: Prisma.HoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          deleteMany: {
            args: Prisma.HoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolePayload>
          }
          aggregate: {
            args: Prisma.HoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHole>
          }
          groupBy: {
            args: Prisma.HoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoleCountArgs<ExtArgs>
            result: $Utils.Optional<HoleCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    events: number
    scores: number
    groups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    scores?: boolean | UserCountOutputTypeCountScoresArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    events: number
    holes: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CourseCountOutputTypeCountEventsArgs
    holes?: boolean | CourseCountOutputTypeCountHolesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountHolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleWhereInput
  }


  /**
   * Count Type HoleCountOutputType
   */

  export type HoleCountOutputType = {
    scores: number
  }

  export type HoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | HoleCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * HoleCountOutputType without action
   */
  export type HoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleCountOutputType
     */
    select?: HoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HoleCountOutputType without action
   */
  export type HoleCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    participants: number
    groups: number
    scores: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs
    groups?: boolean | EventCountOutputTypeCountGroupsArgs
    scores?: boolean | EventCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    handicap: number | null
  }

  export type UserSumAggregateOutputType = {
    handicap: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    handicap: number | null
    phoneNumber: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    handicap: number | null
    phoneNumber: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    handicap: number
    phoneNumber: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    handicap?: true
  }

  export type UserSumAggregateInputType = {
    handicap?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    handicap?: true
    phoneNumber?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    handicap?: true
    phoneNumber?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    handicap?: true
    phoneNumber?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    handicap: number | null
    phoneNumber: string | null
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    handicap?: boolean
    phoneNumber?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    handicap?: boolean
    phoneNumber?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    handicap?: boolean
    phoneNumber?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      handicap: number | null
      phoneNumber: string | null
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    scores<T extends User$scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany"> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly handicap: FieldRef<"User", 'Float'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.scores
   */
  export type User$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phoneNumber: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    address: string
    phoneNumber: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Course$eventsArgs<ExtArgs>
    holes?: boolean | Course$holesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Course$eventsArgs<ExtArgs>
    holes?: boolean | Course$holesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      holes: Prisma.$HolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phoneNumber: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Course$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Course$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    holes<T extends Course$holesArgs<ExtArgs> = {}>(args?: Subset<T, Course$holesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly address: FieldRef<"Course", 'String'>
    readonly phoneNumber: FieldRef<"Course", 'String'>
    readonly website: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }

  /**
   * Course.events
   */
  export type Course$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Course.holes
   */
  export type Course$holesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    where?: HoleWhereInput
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    cursor?: HoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Hole
   */

  export type AggregateHole = {
    _count: HoleCountAggregateOutputType | null
    _avg: HoleAvgAggregateOutputType | null
    _sum: HoleSumAggregateOutputType | null
    _min: HoleMinAggregateOutputType | null
    _max: HoleMaxAggregateOutputType | null
  }

  export type HoleAvgAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    handicap: number | null
  }

  export type HoleSumAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    handicap: number | null
  }

  export type HoleMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    holeNumber: number | null
    par: number | null
    handicap: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoleMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    holeNumber: number | null
    par: number | null
    handicap: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoleCountAggregateOutputType = {
    id: number
    courseId: number
    holeNumber: number
    par: number
    handicap: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HoleAvgAggregateInputType = {
    holeNumber?: true
    par?: true
    handicap?: true
  }

  export type HoleSumAggregateInputType = {
    holeNumber?: true
    par?: true
    handicap?: true
  }

  export type HoleMinAggregateInputType = {
    id?: true
    courseId?: true
    holeNumber?: true
    par?: true
    handicap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoleMaxAggregateInputType = {
    id?: true
    courseId?: true
    holeNumber?: true
    par?: true
    handicap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoleCountAggregateInputType = {
    id?: true
    courseId?: true
    holeNumber?: true
    par?: true
    handicap?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hole to aggregate.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holes
    **/
    _count?: true | HoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoleMaxAggregateInputType
  }

  export type GetHoleAggregateType<T extends HoleAggregateArgs> = {
        [P in keyof T & keyof AggregateHole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHole[P]>
      : GetScalarType<T[P], AggregateHole[P]>
  }




  export type HoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleWhereInput
    orderBy?: HoleOrderByWithAggregationInput | HoleOrderByWithAggregationInput[]
    by: HoleScalarFieldEnum[] | HoleScalarFieldEnum
    having?: HoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoleCountAggregateInputType | true
    _avg?: HoleAvgAggregateInputType
    _sum?: HoleSumAggregateInputType
    _min?: HoleMinAggregateInputType
    _max?: HoleMaxAggregateInputType
  }

  export type HoleGroupByOutputType = {
    id: string
    courseId: string
    holeNumber: number
    par: number
    handicap: number
    createdAt: Date
    updatedAt: Date
    _count: HoleCountAggregateOutputType | null
    _avg: HoleAvgAggregateOutputType | null
    _sum: HoleSumAggregateOutputType | null
    _min: HoleMinAggregateOutputType | null
    _max: HoleMaxAggregateOutputType | null
  }

  type GetHoleGroupByPayload<T extends HoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoleGroupByOutputType[P]>
            : GetScalarType<T[P], HoleGroupByOutputType[P]>
        }
      >
    >


  export type HoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    holeNumber?: boolean
    par?: boolean
    handicap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    scores?: boolean | Hole$scoresArgs<ExtArgs>
    _count?: boolean | HoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hole"]>

  export type HoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    holeNumber?: boolean
    par?: boolean
    handicap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hole"]>

  export type HoleSelectScalar = {
    id?: boolean
    courseId?: boolean
    holeNumber?: boolean
    par?: boolean
    handicap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    scores?: boolean | Hole$scoresArgs<ExtArgs>
    _count?: boolean | HoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $HolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hole"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      holeNumber: number
      par: number
      handicap: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hole"]>
    composites: {}
  }

  type HoleGetPayload<S extends boolean | null | undefined | HoleDefaultArgs> = $Result.GetResult<Prisma.$HolePayload, S>

  type HoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HoleCountAggregateInputType | true
    }

  export interface HoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hole'], meta: { name: 'Hole' } }
    /**
     * Find zero or one Hole that matches the filter.
     * @param {HoleFindUniqueArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoleFindUniqueArgs>(args: SelectSubset<T, HoleFindUniqueArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HoleFindUniqueOrThrowArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoleFindUniqueOrThrowArgs>(args: SelectSubset<T, HoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindFirstArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoleFindFirstArgs>(args?: SelectSubset<T, HoleFindFirstArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindFirstOrThrowArgs} args - Arguments to find a Hole
     * @example
     * // Get one Hole
     * const hole = await prisma.hole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoleFindFirstOrThrowArgs>(args?: SelectSubset<T, HoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Holes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holes
     * const holes = await prisma.hole.findMany()
     * 
     * // Get first 10 Holes
     * const holes = await prisma.hole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holeWithIdOnly = await prisma.hole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoleFindManyArgs>(args?: SelectSubset<T, HoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hole.
     * @param {HoleCreateArgs} args - Arguments to create a Hole.
     * @example
     * // Create one Hole
     * const Hole = await prisma.hole.create({
     *   data: {
     *     // ... data to create a Hole
     *   }
     * })
     * 
     */
    create<T extends HoleCreateArgs>(args: SelectSubset<T, HoleCreateArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Holes.
     * @param {HoleCreateManyArgs} args - Arguments to create many Holes.
     * @example
     * // Create many Holes
     * const hole = await prisma.hole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoleCreateManyArgs>(args?: SelectSubset<T, HoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holes and returns the data saved in the database.
     * @param {HoleCreateManyAndReturnArgs} args - Arguments to create many Holes.
     * @example
     * // Create many Holes
     * const hole = await prisma.hole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holes and only return the `id`
     * const holeWithIdOnly = await prisma.hole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoleCreateManyAndReturnArgs>(args?: SelectSubset<T, HoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hole.
     * @param {HoleDeleteArgs} args - Arguments to delete one Hole.
     * @example
     * // Delete one Hole
     * const Hole = await prisma.hole.delete({
     *   where: {
     *     // ... filter to delete one Hole
     *   }
     * })
     * 
     */
    delete<T extends HoleDeleteArgs>(args: SelectSubset<T, HoleDeleteArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hole.
     * @param {HoleUpdateArgs} args - Arguments to update one Hole.
     * @example
     * // Update one Hole
     * const hole = await prisma.hole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoleUpdateArgs>(args: SelectSubset<T, HoleUpdateArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Holes.
     * @param {HoleDeleteManyArgs} args - Arguments to filter Holes to delete.
     * @example
     * // Delete a few Holes
     * const { count } = await prisma.hole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoleDeleteManyArgs>(args?: SelectSubset<T, HoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holes
     * const hole = await prisma.hole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoleUpdateManyArgs>(args: SelectSubset<T, HoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hole.
     * @param {HoleUpsertArgs} args - Arguments to update or create a Hole.
     * @example
     * // Update or create a Hole
     * const hole = await prisma.hole.upsert({
     *   create: {
     *     // ... data to create a Hole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hole we want to update
     *   }
     * })
     */
    upsert<T extends HoleUpsertArgs>(args: SelectSubset<T, HoleUpsertArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Holes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleCountArgs} args - Arguments to filter Holes to count.
     * @example
     * // Count the number of Holes
     * const count = await prisma.hole.count({
     *   where: {
     *     // ... the filter for the Holes we want to count
     *   }
     * })
    **/
    count<T extends HoleCountArgs>(
      args?: Subset<T, HoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HoleAggregateArgs>(args: Subset<T, HoleAggregateArgs>): Prisma.PrismaPromise<GetHoleAggregateType<T>>

    /**
     * Group by Hole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoleGroupByArgs['orderBy'] }
        : { orderBy?: HoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hole model
   */
  readonly fields: HoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    scores<T extends Hole$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Hole$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hole model
   */ 
  interface HoleFieldRefs {
    readonly id: FieldRef<"Hole", 'String'>
    readonly courseId: FieldRef<"Hole", 'String'>
    readonly holeNumber: FieldRef<"Hole", 'Int'>
    readonly par: FieldRef<"Hole", 'Int'>
    readonly handicap: FieldRef<"Hole", 'Int'>
    readonly createdAt: FieldRef<"Hole", 'DateTime'>
    readonly updatedAt: FieldRef<"Hole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hole findUnique
   */
  export type HoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole findUniqueOrThrow
   */
  export type HoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole findFirst
   */
  export type HoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holes.
     */
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole findFirstOrThrow
   */
  export type HoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Hole to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holes.
     */
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole findMany
   */
  export type HoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter, which Holes to fetch.
     */
    where?: HoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holes to fetch.
     */
    orderBy?: HoleOrderByWithRelationInput | HoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holes.
     */
    cursor?: HoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holes.
     */
    skip?: number
    distinct?: HoleScalarFieldEnum | HoleScalarFieldEnum[]
  }

  /**
   * Hole create
   */
  export type HoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Hole.
     */
    data: XOR<HoleCreateInput, HoleUncheckedCreateInput>
  }

  /**
   * Hole createMany
   */
  export type HoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holes.
     */
    data: HoleCreateManyInput | HoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hole createManyAndReturn
   */
  export type HoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Holes.
     */
    data: HoleCreateManyInput | HoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hole update
   */
  export type HoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Hole.
     */
    data: XOR<HoleUpdateInput, HoleUncheckedUpdateInput>
    /**
     * Choose, which Hole to update.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole updateMany
   */
  export type HoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holes.
     */
    data: XOR<HoleUpdateManyMutationInput, HoleUncheckedUpdateManyInput>
    /**
     * Filter which Holes to update
     */
    where?: HoleWhereInput
  }

  /**
   * Hole upsert
   */
  export type HoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Hole to update in case it exists.
     */
    where: HoleWhereUniqueInput
    /**
     * In case the Hole found by the `where` argument doesn't exist, create a new Hole with this data.
     */
    create: XOR<HoleCreateInput, HoleUncheckedCreateInput>
    /**
     * In case the Hole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoleUpdateInput, HoleUncheckedUpdateInput>
  }

  /**
   * Hole delete
   */
  export type HoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
    /**
     * Filter which Hole to delete.
     */
    where: HoleWhereUniqueInput
  }

  /**
   * Hole deleteMany
   */
  export type HoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holes to delete
     */
    where?: HoleWhereInput
  }

  /**
   * Hole.scores
   */
  export type Hole$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Hole without action
   */
  export type HoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hole
     */
    select?: HoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    maxPlayers: number | null
    entryFee: number | null
  }

  export type EventSumAggregateOutputType = {
    maxPlayers: number | null
    entryFee: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    courseId: string | null
    description: string | null
    maxPlayers: number | null
    entryFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    courseId: string | null
    description: string | null
    maxPlayers: number | null
    entryFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    date: number
    courseId: number
    description: number
    maxPlayers: number
    entryFee: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    maxPlayers?: true
    entryFee?: true
  }

  export type EventSumAggregateInputType = {
    maxPlayers?: true
    entryFee?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    courseId?: true
    description?: true
    maxPlayers?: true
    entryFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    courseId?: true
    description?: true
    maxPlayers?: true
    entryFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    courseId?: true
    description?: true
    maxPlayers?: true
    entryFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    date: Date
    courseId: string
    description: string | null
    maxPlayers: number | null
    entryFee: number | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    courseId?: boolean
    description?: boolean
    maxPlayers?: boolean
    entryFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    groups?: boolean | Event$groupsArgs<ExtArgs>
    scores?: boolean | Event$scoresArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    courseId?: boolean
    description?: boolean
    maxPlayers?: boolean
    entryFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    courseId?: boolean
    description?: boolean
    maxPlayers?: boolean
    entryFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    groups?: boolean | Event$groupsArgs<ExtArgs>
    scores?: boolean | Event$scoresArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      participants: Prisma.$UserPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      courseId: string
      description: string | null
      maxPlayers: number | null
      entryFee: number | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    participants<T extends Event$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    groups<T extends Event$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Event$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany"> | Null>
    scores<T extends Event$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Event$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly courseId: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly maxPlayers: FieldRef<"Event", 'Int'>
    readonly entryFee: FieldRef<"Event", 'Float'>
    readonly status: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.participants
   */
  export type Event$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event.groups
   */
  export type Event$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Event.scores
   */
  export type Event$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    groupNumber: number | null
  }

  export type GroupSumAggregateOutputType = {
    groupNumber: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    groupNumber: number | null
    teeTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    groupNumber: number | null
    teeTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    eventId: number
    groupNumber: number
    teeTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    groupNumber?: true
  }

  export type GroupSumAggregateInputType = {
    groupNumber?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    eventId?: true
    groupNumber?: true
    teeTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    eventId?: true
    groupNumber?: true
    teeTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    eventId?: true
    groupNumber?: true
    teeTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    eventId: string
    groupNumber: number
    teeTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    groupNumber?: boolean
    teeTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    groupNumber?: boolean
    teeTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    eventId?: boolean
    groupNumber?: boolean
    teeTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      groupNumber: number
      teeTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly eventId: FieldRef<"Group", 'String'>
    readonly groupNumber: FieldRef<"Group", 'Int'>
    readonly teeTime: FieldRef<"Group", 'DateTime'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    grossScore: number | null
    netScore: number | null
  }

  export type ScoreSumAggregateOutputType = {
    grossScore: number | null
    netScore: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    holeId: string | null
    grossScore: number | null
    netScore: number | null
    skinWon: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    holeId: string | null
    grossScore: number | null
    netScore: number | null
    skinWon: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    holeId: number
    grossScore: number
    netScore: number
    skinWon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    grossScore?: true
    netScore?: true
  }

  export type ScoreSumAggregateInputType = {
    grossScore?: true
    netScore?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    holeId?: true
    grossScore?: true
    netScore?: true
    skinWon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    holeId?: true
    grossScore?: true
    netScore?: true
    skinWon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    holeId?: true
    grossScore?: true
    netScore?: true
    skinWon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    holeId: string
    grossScore: number
    netScore: number | null
    skinWon: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    holeId?: boolean
    grossScore?: boolean
    netScore?: boolean
    skinWon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    holeId?: boolean
    grossScore?: boolean
    netScore?: boolean
    skinWon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    holeId?: boolean
    grossScore?: boolean
    netScore?: boolean
    skinWon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    hole?: boolean | HoleDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      hole: Prisma.$HolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      holeId: string
      grossScore: number
      netScore: number | null
      skinWon: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hole<T extends HoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HoleDefaultArgs<ExtArgs>>): Prisma__HoleClient<$Result.GetResult<Prisma.$HolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Score model
   */ 
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'String'>
    readonly eventId: FieldRef<"Score", 'String'>
    readonly userId: FieldRef<"Score", 'String'>
    readonly holeId: FieldRef<"Score", 'String'>
    readonly grossScore: FieldRef<"Score", 'Int'>
    readonly netScore: FieldRef<"Score", 'Int'>
    readonly skinWon: FieldRef<"Score", 'Boolean'>
    readonly createdAt: FieldRef<"Score", 'DateTime'>
    readonly updatedAt: FieldRef<"Score", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    handicap: 'handicap',
    phoneNumber: 'phoneNumber',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const HoleScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    holeNumber: 'holeNumber',
    par: 'par',
    handicap: 'handicap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HoleScalarFieldEnum = (typeof HoleScalarFieldEnum)[keyof typeof HoleScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    courseId: 'courseId',
    description: 'description',
    maxPlayers: 'maxPlayers',
    entryFee: 'entryFee',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    groupNumber: 'groupNumber',
    teeTime: 'teeTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    holeId: 'holeId',
    grossScore: 'grossScore',
    netScore: 'netScore',
    skinWon: 'skinWon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    handicap?: FloatNullableFilter<"User"> | number | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    scores?: ScoreListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    handicap?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    handicap?: FloatNullableFilter<"User"> | number | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    scores?: ScoreListRelationFilter
    groups?: GroupListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    handicap?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    handicap?: FloatNullableWithAggregatesFilter<"User"> | number | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    address?: StringFilter<"Course"> | string
    phoneNumber?: StringNullableFilter<"Course"> | string | null
    website?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    events?: EventListRelationFilter
    holes?: HoleListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    holes?: HoleOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    address?: StringFilter<"Course"> | string
    phoneNumber?: StringNullableFilter<"Course"> | string | null
    website?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    events?: EventListRelationFilter
    holes?: HoleListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    address?: StringWithAggregatesFilter<"Course"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Course"> | string | null
    website?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type HoleWhereInput = {
    AND?: HoleWhereInput | HoleWhereInput[]
    OR?: HoleWhereInput[]
    NOT?: HoleWhereInput | HoleWhereInput[]
    id?: StringFilter<"Hole"> | string
    courseId?: StringFilter<"Hole"> | string
    holeNumber?: IntFilter<"Hole"> | number
    par?: IntFilter<"Hole"> | number
    handicap?: IntFilter<"Hole"> | number
    createdAt?: DateTimeFilter<"Hole"> | Date | string
    updatedAt?: DateTimeFilter<"Hole"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    scores?: ScoreListRelationFilter
  }

  export type HoleOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type HoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_holeNumber?: HoleCourseIdHoleNumberCompoundUniqueInput
    AND?: HoleWhereInput | HoleWhereInput[]
    OR?: HoleWhereInput[]
    NOT?: HoleWhereInput | HoleWhereInput[]
    courseId?: StringFilter<"Hole"> | string
    holeNumber?: IntFilter<"Hole"> | number
    par?: IntFilter<"Hole"> | number
    handicap?: IntFilter<"Hole"> | number
    createdAt?: DateTimeFilter<"Hole"> | Date | string
    updatedAt?: DateTimeFilter<"Hole"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    scores?: ScoreListRelationFilter
  }, "id" | "courseId_holeNumber">

  export type HoleOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HoleCountOrderByAggregateInput
    _avg?: HoleAvgOrderByAggregateInput
    _max?: HoleMaxOrderByAggregateInput
    _min?: HoleMinOrderByAggregateInput
    _sum?: HoleSumOrderByAggregateInput
  }

  export type HoleScalarWhereWithAggregatesInput = {
    AND?: HoleScalarWhereWithAggregatesInput | HoleScalarWhereWithAggregatesInput[]
    OR?: HoleScalarWhereWithAggregatesInput[]
    NOT?: HoleScalarWhereWithAggregatesInput | HoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hole"> | string
    courseId?: StringWithAggregatesFilter<"Hole"> | string
    holeNumber?: IntWithAggregatesFilter<"Hole"> | number
    par?: IntWithAggregatesFilter<"Hole"> | number
    handicap?: IntWithAggregatesFilter<"Hole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hole"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    courseId?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    maxPlayers?: IntNullableFilter<"Event"> | number | null
    entryFee?: FloatNullableFilter<"Event"> | number | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    participants?: UserListRelationFilter
    groups?: GroupListRelationFilter
    scores?: ScoreListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
    description?: SortOrderInput | SortOrder
    maxPlayers?: SortOrderInput | SortOrder
    entryFee?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    courseId?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    maxPlayers?: IntNullableFilter<"Event"> | number | null
    entryFee?: FloatNullableFilter<"Event"> | number | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    participants?: UserListRelationFilter
    groups?: GroupListRelationFilter
    scores?: ScoreListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
    description?: SortOrderInput | SortOrder
    maxPlayers?: SortOrderInput | SortOrder
    entryFee?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    courseId?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    maxPlayers?: IntNullableWithAggregatesFilter<"Event"> | number | null
    entryFee?: FloatNullableWithAggregatesFilter<"Event"> | number | null
    status?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    eventId?: StringFilter<"Group"> | string
    groupNumber?: IntFilter<"Group"> | number
    teeTime?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    members?: UserListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    groupNumber?: SortOrder
    teeTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_groupNumber?: GroupEventIdGroupNumberCompoundUniqueInput
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    eventId?: StringFilter<"Group"> | string
    groupNumber?: IntFilter<"Group"> | number
    teeTime?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    members?: UserListRelationFilter
  }, "id" | "eventId_groupNumber">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    groupNumber?: SortOrder
    teeTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    eventId?: StringWithAggregatesFilter<"Group"> | string
    groupNumber?: IntWithAggregatesFilter<"Group"> | number
    teeTime?: DateTimeNullableWithAggregatesFilter<"Group"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: StringFilter<"Score"> | string
    eventId?: StringFilter<"Score"> | string
    userId?: StringFilter<"Score"> | string
    holeId?: StringFilter<"Score"> | string
    grossScore?: IntFilter<"Score"> | number
    netScore?: IntNullableFilter<"Score"> | number | null
    skinWon?: BoolFilter<"Score"> | boolean
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    hole?: XOR<HoleRelationFilter, HoleWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    holeId?: SortOrder
    grossScore?: SortOrder
    netScore?: SortOrderInput | SortOrder
    skinWon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    hole?: HoleOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId_holeId?: ScoreEventIdUserIdHoleIdCompoundUniqueInput
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    eventId?: StringFilter<"Score"> | string
    userId?: StringFilter<"Score"> | string
    holeId?: StringFilter<"Score"> | string
    grossScore?: IntFilter<"Score"> | number
    netScore?: IntNullableFilter<"Score"> | number | null
    skinWon?: BoolFilter<"Score"> | boolean
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    hole?: XOR<HoleRelationFilter, HoleWhereInput>
  }, "id" | "eventId_userId_holeId">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    holeId?: SortOrder
    grossScore?: SortOrder
    netScore?: SortOrderInput | SortOrder
    skinWon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Score"> | string
    eventId?: StringWithAggregatesFilter<"Score"> | string
    userId?: StringWithAggregatesFilter<"Score"> | string
    holeId?: StringWithAggregatesFilter<"Score"> | string
    grossScore?: IntWithAggregatesFilter<"Score"> | number
    netScore?: IntNullableWithAggregatesFilter<"Score"> | number | null
    skinWon?: BoolWithAggregatesFilter<"Score"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutParticipantsInput
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutParticipantsNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutCourseInput
    holes?: HoleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCourseInput
    holes?: HoleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCourseNestedInput
    holes?: HoleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCourseNestedInput
    holes?: HoleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleCreateInput = {
    id?: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutHolesInput
    scores?: ScoreCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateInput = {
    id?: string
    courseId: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutHolesNestedInput
    scores?: ScoreUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type HoleCreateManyInput = {
    id?: string
    courseId: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEventsInput
    participants?: UserCreateNestedManyWithoutEventsInput
    groups?: GroupCreateNestedManyWithoutEventInput
    scores?: ScoreCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    courseId: string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutEventsInput
    groups?: GroupUncheckedCreateNestedManyWithoutEventInput
    scores?: ScoreUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEventsNestedInput
    participants?: UserUpdateManyWithoutEventsNestedInput
    groups?: GroupUpdateManyWithoutEventNestedInput
    scores?: ScoreUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutEventsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutEventNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    courseId: string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutGroupsInput
    members?: UserCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    eventId: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGroupsNestedInput
    members?: UserUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    eventId: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateInput = {
    id?: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutScoresInput
    user: UserCreateNestedOneWithoutScoresInput
    hole: HoleCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutScoresNestedInput
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
    hole?: HoleUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    handicap?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    handicap?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    handicap?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    handicap?: SortOrder
    phoneNumber?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    handicap?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HoleListRelationFilter = {
    every?: HoleWhereInput
    some?: HoleWhereInput
    none?: HoleWhereInput
  }

  export type HoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type HoleCourseIdHoleNumberCompoundUniqueInput = {
    courseId: string
    holeNumber: number
  }

  export type HoleCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoleAvgOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
  }

  export type HoleMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoleMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoleSumOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    handicap?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
    description?: SortOrder
    maxPlayers?: SortOrder
    entryFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    maxPlayers?: SortOrder
    entryFee?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
    description?: SortOrder
    maxPlayers?: SortOrder
    entryFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    courseId?: SortOrder
    description?: SortOrder
    maxPlayers?: SortOrder
    entryFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    maxPlayers?: SortOrder
    entryFee?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type GroupEventIdGroupNumberCompoundUniqueInput = {
    eventId: string
    groupNumber: number
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    groupNumber?: SortOrder
    teeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    groupNumber?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    groupNumber?: SortOrder
    teeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    groupNumber?: SortOrder
    teeTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    groupNumber?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HoleRelationFilter = {
    is?: HoleWhereInput
    isNot?: HoleWhereInput
  }

  export type ScoreEventIdUserIdHoleIdCompoundUniqueInput = {
    eventId: string
    userId: string
    holeId: string
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    holeId?: SortOrder
    grossScore?: SortOrder
    netScore?: SortOrder
    skinWon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    grossScore?: SortOrder
    netScore?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    holeId?: SortOrder
    grossScore?: SortOrder
    netScore?: SortOrder
    skinWon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    holeId?: SortOrder
    grossScore?: SortOrder
    netScore?: SortOrder
    skinWon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    grossScore?: SortOrder
    netScore?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput> | EventCreateWithoutParticipantsInput[] | EventUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput | EventCreateOrConnectWithoutParticipantsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput> | EventCreateWithoutParticipantsInput[] | EventUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput | EventCreateOrConnectWithoutParticipantsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput> | EventCreateWithoutParticipantsInput[] | EventUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput | EventCreateOrConnectWithoutParticipantsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutParticipantsInput | EventUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutParticipantsInput | EventUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutParticipantsInput | EventUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutUserInput | ScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutUserInput | ScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutUserInput | ScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput | GroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutMembersInput | GroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutMembersInput | GroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput> | EventCreateWithoutParticipantsInput[] | EventUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput | EventCreateOrConnectWithoutParticipantsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutParticipantsInput | EventUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutParticipantsInput | EventUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutParticipantsInput | EventUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutUserInput | ScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutUserInput | ScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutUserInput | ScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput | GroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutMembersInput | GroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutMembersInput | GroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutCourseInput = {
    create?: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput> | EventCreateWithoutCourseInput[] | EventUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCourseInput | EventCreateOrConnectWithoutCourseInput[]
    createMany?: EventCreateManyCourseInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type HoleCreateNestedManyWithoutCourseInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput> | EventCreateWithoutCourseInput[] | EventUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCourseInput | EventCreateOrConnectWithoutCourseInput[]
    createMany?: EventCreateManyCourseInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type HoleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput> | EventCreateWithoutCourseInput[] | EventUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCourseInput | EventCreateOrConnectWithoutCourseInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCourseInput | EventUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EventCreateManyCourseInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCourseInput | EventUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCourseInput | EventUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type HoleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    upsert?: HoleUpsertWithWhereUniqueWithoutCourseInput | HoleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    set?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    disconnect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    delete?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    update?: HoleUpdateWithWhereUniqueWithoutCourseInput | HoleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: HoleUpdateManyWithWhereWithoutCourseInput | HoleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: HoleScalarWhereInput | HoleScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput> | EventCreateWithoutCourseInput[] | EventUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCourseInput | EventCreateOrConnectWithoutCourseInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCourseInput | EventUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EventCreateManyCourseInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCourseInput | EventUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCourseInput | EventUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type HoleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput> | HoleCreateWithoutCourseInput[] | HoleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: HoleCreateOrConnectWithoutCourseInput | HoleCreateOrConnectWithoutCourseInput[]
    upsert?: HoleUpsertWithWhereUniqueWithoutCourseInput | HoleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: HoleCreateManyCourseInputEnvelope
    set?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    disconnect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    delete?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    connect?: HoleWhereUniqueInput | HoleWhereUniqueInput[]
    update?: HoleUpdateWithWhereUniqueWithoutCourseInput | HoleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: HoleUpdateManyWithWhereWithoutCourseInput | HoleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: HoleScalarWhereInput | HoleScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutHolesInput = {
    create?: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutHolesInput
    connect?: CourseWhereUniqueInput
  }

  export type ScoreCreateNestedManyWithoutHoleInput = {
    create?: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput> | ScoreCreateWithoutHoleInput[] | ScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutHoleInput | ScoreCreateOrConnectWithoutHoleInput[]
    createMany?: ScoreCreateManyHoleInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutHoleInput = {
    create?: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput> | ScoreCreateWithoutHoleInput[] | ScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutHoleInput | ScoreCreateOrConnectWithoutHoleInput[]
    createMany?: ScoreCreateManyHoleInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutHolesNestedInput = {
    create?: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutHolesInput
    upsert?: CourseUpsertWithoutHolesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutHolesInput, CourseUpdateWithoutHolesInput>, CourseUncheckedUpdateWithoutHolesInput>
  }

  export type ScoreUpdateManyWithoutHoleNestedInput = {
    create?: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput> | ScoreCreateWithoutHoleInput[] | ScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutHoleInput | ScoreCreateOrConnectWithoutHoleInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutHoleInput | ScoreUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: ScoreCreateManyHoleInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutHoleInput | ScoreUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutHoleInput | ScoreUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutHoleNestedInput = {
    create?: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput> | ScoreCreateWithoutHoleInput[] | ScoreUncheckedCreateWithoutHoleInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutHoleInput | ScoreCreateOrConnectWithoutHoleInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutHoleInput | ScoreUpsertWithWhereUniqueWithoutHoleInput[]
    createMany?: ScoreCreateManyHoleInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutHoleInput | ScoreUpdateWithWhereUniqueWithoutHoleInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutHoleInput | ScoreUpdateManyWithWhereWithoutHoleInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutEventsInput = {
    create?: XOR<CourseCreateWithoutEventsInput, CourseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEventsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutEventInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput> | GroupCreateWithoutEventInput[] | GroupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput | GroupCreateOrConnectWithoutEventInput[]
    createMany?: GroupCreateManyEventInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutEventInput = {
    create?: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput> | ScoreCreateWithoutEventInput[] | ScoreUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutEventInput | ScoreCreateOrConnectWithoutEventInput[]
    createMany?: ScoreCreateManyEventInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput> | GroupCreateWithoutEventInput[] | GroupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput | GroupCreateOrConnectWithoutEventInput[]
    createMany?: GroupCreateManyEventInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput> | ScoreCreateWithoutEventInput[] | ScoreUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutEventInput | ScoreCreateOrConnectWithoutEventInput[]
    createMany?: ScoreCreateManyEventInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CourseCreateWithoutEventsInput, CourseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEventsInput
    upsert?: CourseUpsertWithoutEventsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEventsInput, CourseUpdateWithoutEventsInput>, CourseUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateManyWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEventsInput | UserUpsertWithWhereUniqueWithoutEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEventsInput | UserUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEventsInput | UserUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutEventNestedInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput> | GroupCreateWithoutEventInput[] | GroupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput | GroupCreateOrConnectWithoutEventInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutEventInput | GroupUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GroupCreateManyEventInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutEventInput | GroupUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutEventInput | GroupUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutEventNestedInput = {
    create?: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput> | ScoreCreateWithoutEventInput[] | ScoreUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutEventInput | ScoreCreateOrConnectWithoutEventInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutEventInput | ScoreUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ScoreCreateManyEventInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutEventInput | ScoreUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutEventInput | ScoreUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEventsInput | UserUpsertWithWhereUniqueWithoutEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEventsInput | UserUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEventsInput | UserUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput> | GroupCreateWithoutEventInput[] | GroupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutEventInput | GroupCreateOrConnectWithoutEventInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutEventInput | GroupUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GroupCreateManyEventInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutEventInput | GroupUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutEventInput | GroupUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput> | ScoreCreateWithoutEventInput[] | ScoreUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutEventInput | ScoreCreateOrConnectWithoutEventInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutEventInput | ScoreUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ScoreCreateManyEventInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutEventInput | ScoreUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutEventInput | ScoreUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutGroupsInput = {
    create?: XOR<EventCreateWithoutGroupsInput, EventUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<EventCreateWithoutGroupsInput, EventUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutGroupsInput
    upsert?: EventUpsertWithoutGroupsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGroupsInput, EventUpdateWithoutGroupsInput>, EventUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutScoresInput = {
    create?: XOR<EventCreateWithoutScoresInput, EventUncheckedCreateWithoutScoresInput>
    connectOrCreate?: EventCreateOrConnectWithoutScoresInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScoresInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    connect?: UserWhereUniqueInput
  }

  export type HoleCreateNestedOneWithoutScoresInput = {
    create?: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HoleCreateOrConnectWithoutScoresInput
    connect?: HoleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<EventCreateWithoutScoresInput, EventUncheckedCreateWithoutScoresInput>
    connectOrCreate?: EventCreateOrConnectWithoutScoresInput
    upsert?: EventUpsertWithoutScoresInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutScoresInput, EventUpdateWithoutScoresInput>, EventUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    upsert?: UserUpsertWithoutScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoresInput, UserUpdateWithoutScoresInput>, UserUncheckedUpdateWithoutScoresInput>
  }

  export type HoleUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HoleCreateOrConnectWithoutScoresInput
    upsert?: HoleUpsertWithoutScoresInput
    connect?: HoleWhereUniqueInput
    update?: XOR<XOR<HoleUpdateToOneWithWhereWithoutScoresInput, HoleUpdateWithoutScoresInput>, HoleUncheckedUpdateWithoutScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventCreateWithoutParticipantsInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEventsInput
    groups?: GroupCreateNestedManyWithoutEventInput
    scores?: ScoreCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    date: Date | string
    courseId: string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutEventInput
    scores?: ScoreUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type ScoreCreateWithoutUserInput = {
    id?: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutScoresInput
    hole: HoleCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutUserInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput>
  }

  export type ScoreCreateManyUserInputEnvelope = {
    data: ScoreCreateManyUserInput | ScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    eventId: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type EventUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type EventUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventUpdateManyWithWhereWithoutParticipantsInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    courseId?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    maxPlayers?: IntNullableFilter<"Event"> | number | null
    entryFee?: FloatNullableFilter<"Event"> | number | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type ScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutUserInput, ScoreUncheckedUpdateWithoutUserInput>
    create: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutUserInput, ScoreUncheckedUpdateWithoutUserInput>
  }

  export type ScoreUpdateManyWithWhereWithoutUserInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: StringFilter<"Score"> | string
    eventId?: StringFilter<"Score"> | string
    userId?: StringFilter<"Score"> | string
    holeId?: StringFilter<"Score"> | string
    grossScore?: IntFilter<"Score"> | number
    netScore?: IntNullableFilter<"Score"> | number | null
    skinWon?: BoolFilter<"Score"> | boolean
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutMembersInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutMembersInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateManyWithWhereWithoutMembersInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutMembersInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    eventId?: StringFilter<"Group"> | string
    groupNumber?: IntFilter<"Group"> | number
    teeTime?: DateTimeNullableFilter<"Group"> | Date | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type EventCreateWithoutCourseInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserCreateNestedManyWithoutEventsInput
    groups?: GroupCreateNestedManyWithoutEventInput
    scores?: ScoreCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutEventsInput
    groups?: GroupUncheckedCreateNestedManyWithoutEventInput
    scores?: ScoreUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCourseInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput>
  }

  export type EventCreateManyCourseInputEnvelope = {
    data: EventCreateManyCourseInput | EventCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type HoleCreateWithoutCourseInput = {
    id?: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreCreateNestedManyWithoutHoleInput
  }

  export type HoleUncheckedCreateWithoutCourseInput = {
    id?: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutHoleInput
  }

  export type HoleCreateOrConnectWithoutCourseInput = {
    where: HoleWhereUniqueInput
    create: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput>
  }

  export type HoleCreateManyCourseInputEnvelope = {
    data: HoleCreateManyCourseInput | HoleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCourseInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCourseInput, EventUncheckedUpdateWithoutCourseInput>
    create: XOR<EventCreateWithoutCourseInput, EventUncheckedCreateWithoutCourseInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCourseInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCourseInput, EventUncheckedUpdateWithoutCourseInput>
  }

  export type EventUpdateManyWithWhereWithoutCourseInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCourseInput>
  }

  export type HoleUpsertWithWhereUniqueWithoutCourseInput = {
    where: HoleWhereUniqueInput
    update: XOR<HoleUpdateWithoutCourseInput, HoleUncheckedUpdateWithoutCourseInput>
    create: XOR<HoleCreateWithoutCourseInput, HoleUncheckedCreateWithoutCourseInput>
  }

  export type HoleUpdateWithWhereUniqueWithoutCourseInput = {
    where: HoleWhereUniqueInput
    data: XOR<HoleUpdateWithoutCourseInput, HoleUncheckedUpdateWithoutCourseInput>
  }

  export type HoleUpdateManyWithWhereWithoutCourseInput = {
    where: HoleScalarWhereInput
    data: XOR<HoleUpdateManyMutationInput, HoleUncheckedUpdateManyWithoutCourseInput>
  }

  export type HoleScalarWhereInput = {
    AND?: HoleScalarWhereInput | HoleScalarWhereInput[]
    OR?: HoleScalarWhereInput[]
    NOT?: HoleScalarWhereInput | HoleScalarWhereInput[]
    id?: StringFilter<"Hole"> | string
    courseId?: StringFilter<"Hole"> | string
    holeNumber?: IntFilter<"Hole"> | number
    par?: IntFilter<"Hole"> | number
    handicap?: IntFilter<"Hole"> | number
    createdAt?: DateTimeFilter<"Hole"> | Date | string
    updatedAt?: DateTimeFilter<"Hole"> | Date | string
  }

  export type CourseCreateWithoutHolesInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutHolesInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutHolesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
  }

  export type ScoreCreateWithoutHoleInput = {
    id?: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutScoresInput
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutHoleInput = {
    id?: string
    eventId: string
    userId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutHoleInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput>
  }

  export type ScoreCreateManyHoleInputEnvelope = {
    data: ScoreCreateManyHoleInput | ScoreCreateManyHoleInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutHolesInput = {
    update: XOR<CourseUpdateWithoutHolesInput, CourseUncheckedUpdateWithoutHolesInput>
    create: XOR<CourseCreateWithoutHolesInput, CourseUncheckedCreateWithoutHolesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutHolesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutHolesInput, CourseUncheckedUpdateWithoutHolesInput>
  }

  export type CourseUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ScoreUpsertWithWhereUniqueWithoutHoleInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutHoleInput, ScoreUncheckedUpdateWithoutHoleInput>
    create: XOR<ScoreCreateWithoutHoleInput, ScoreUncheckedCreateWithoutHoleInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutHoleInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutHoleInput, ScoreUncheckedUpdateWithoutHoleInput>
  }

  export type ScoreUpdateManyWithWhereWithoutHoleInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutHoleInput>
  }

  export type CourseCreateWithoutEventsInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: HoleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: HoleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEventsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEventsInput, CourseUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreCreateNestedManyWithoutUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type GroupCreateWithoutEventInput = {
    id?: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutEventInput = {
    id?: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutEventInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
  }

  export type GroupCreateManyEventInputEnvelope = {
    data: GroupCreateManyEventInput | GroupCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ScoreCreateWithoutEventInput = {
    id?: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScoresInput
    hole: HoleCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateOrConnectWithoutEventInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput>
  }

  export type ScoreCreateManyEventInputEnvelope = {
    data: ScoreCreateManyEventInput | ScoreCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutEventsInput = {
    update: XOR<CourseUpdateWithoutEventsInput, CourseUncheckedUpdateWithoutEventsInput>
    create: XOR<CourseCreateWithoutEventsInput, CourseUncheckedCreateWithoutEventsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEventsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEventsInput, CourseUncheckedUpdateWithoutEventsInput>
  }

  export type CourseUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: HoleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: HoleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEventsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    handicap?: FloatNullableFilter<"User"> | number | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutEventInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutEventInput, GroupUncheckedUpdateWithoutEventInput>
    create: XOR<GroupCreateWithoutEventInput, GroupUncheckedCreateWithoutEventInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutEventInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutEventInput, GroupUncheckedUpdateWithoutEventInput>
  }

  export type GroupUpdateManyWithWhereWithoutEventInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutEventInput>
  }

  export type ScoreUpsertWithWhereUniqueWithoutEventInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutEventInput, ScoreUncheckedUpdateWithoutEventInput>
    create: XOR<ScoreCreateWithoutEventInput, ScoreUncheckedCreateWithoutEventInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutEventInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutEventInput, ScoreUncheckedUpdateWithoutEventInput>
  }

  export type ScoreUpdateManyWithWhereWithoutEventInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutGroupsInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEventsInput
    participants?: UserCreateNestedManyWithoutEventsInput
    scores?: ScoreCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    date: Date | string
    courseId: string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutEventsInput
    scores?: ScoreUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGroupsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGroupsInput, EventUncheckedCreateWithoutGroupsInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutParticipantsInput
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type EventUpsertWithoutGroupsInput = {
    update: XOR<EventUpdateWithoutGroupsInput, EventUncheckedUpdateWithoutGroupsInput>
    create: XOR<EventCreateWithoutGroupsInput, EventUncheckedCreateWithoutGroupsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGroupsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGroupsInput, EventUncheckedUpdateWithoutGroupsInput>
  }

  export type EventUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEventsNestedInput
    participants?: UserUpdateManyWithoutEventsNestedInput
    scores?: ScoreUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutEventsNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupsInput>
  }

  export type EventCreateWithoutScoresInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEventsInput
    participants?: UserCreateNestedManyWithoutEventsInput
    groups?: GroupCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    date: Date | string
    courseId: string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutEventsInput
    groups?: GroupUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutScoresInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutScoresInput, EventUncheckedCreateWithoutScoresInput>
  }

  export type UserCreateWithoutScoresInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutParticipantsInput
    groups?: GroupCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutScoresInput = {
    id?: string
    email: string
    name: string
    handicap?: number | null
    phoneNumber?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutParticipantsInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
  }

  export type HoleCreateWithoutScoresInput = {
    id?: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutHolesInput
  }

  export type HoleUncheckedCreateWithoutScoresInput = {
    id?: string
    courseId: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoleCreateOrConnectWithoutScoresInput = {
    where: HoleWhereUniqueInput
    create: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
  }

  export type EventUpsertWithoutScoresInput = {
    update: XOR<EventUpdateWithoutScoresInput, EventUncheckedUpdateWithoutScoresInput>
    create: XOR<EventCreateWithoutScoresInput, EventUncheckedCreateWithoutScoresInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutScoresInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutScoresInput, EventUncheckedUpdateWithoutScoresInput>
  }

  export type EventUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEventsNestedInput
    participants?: UserUpdateManyWithoutEventsNestedInput
    groups?: GroupUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutEventsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutScoresInput = {
    update: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutParticipantsNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutParticipantsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type HoleUpsertWithoutScoresInput = {
    update: XOR<HoleUpdateWithoutScoresInput, HoleUncheckedUpdateWithoutScoresInput>
    create: XOR<HoleCreateWithoutScoresInput, HoleUncheckedCreateWithoutScoresInput>
    where?: HoleWhereInput
  }

  export type HoleUpdateToOneWithWhereWithoutScoresInput = {
    where?: HoleWhereInput
    data: XOR<HoleUpdateWithoutScoresInput, HoleUncheckedUpdateWithoutScoresInput>
  }

  export type HoleUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutHolesNestedInput
  }

  export type HoleUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyUserInput = {
    id?: string
    eventId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEventsNestedInput
    groups?: GroupUpdateManyWithoutEventNestedInput
    scores?: ScoreUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutEventNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutScoresNestedInput
    hole?: HoleUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyCourseInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    maxPlayers?: number | null
    entryFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoleCreateManyCourseInput = {
    id?: string
    holeNumber: number
    par: number
    handicap: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutEventsNestedInput
    groups?: GroupUpdateManyWithoutEventNestedInput
    scores?: ScoreUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutEventsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutEventNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: NullableIntFieldUpdateOperationsInput | number | null
    entryFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutHoleNestedInput
  }

  export type HoleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    handicap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateManyHoleInput = {
    id?: string
    eventId: string
    userId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutScoresNestedInput
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutHoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyEventInput = {
    id?: string
    groupNumber: number
    teeTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreCreateManyEventInput = {
    id?: string
    userId: string
    holeId: string
    grossScore: number
    netScore?: number | null
    skinWon?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUpdateManyWithoutUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupNumber?: IntFieldUpdateOperationsInput | number
    teeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
    hole?: HoleUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    holeId?: StringFieldUpdateOperationsInput | string
    grossScore?: IntFieldUpdateOperationsInput | number
    netScore?: NullableIntFieldUpdateOperationsInput | number | null
    skinWon?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutParticipantsNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    handicap?: NullableFloatFieldUpdateOperationsInput | number | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HoleCountOutputTypeDefaultArgs instead
     */
    export type HoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HoleDefaultArgs instead
     */
    export type HoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoreDefaultArgs instead
     */
    export type ScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoreDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}