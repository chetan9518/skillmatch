
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model codeforce
 * 
 */
export type codeforce = $Result.DefaultSelection<Prisma.$codeforcePayload>
/**
 * Model leetcode
 * 
 */
export type leetcode = $Result.DefaultSelection<Prisma.$leetcodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeforce`: Exposes CRUD operations for the **codeforce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codeforces
    * const codeforces = await prisma.codeforce.findMany()
    * ```
    */
  get codeforce(): Prisma.codeforceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leetcode`: Exposes CRUD operations for the **leetcode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leetcodes
    * const leetcodes = await prisma.leetcode.findMany()
    * ```
    */
  get leetcode(): Prisma.leetcodeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    users: 'users',
    jobs: 'jobs',
    messages: 'messages',
    codeforce: 'codeforce',
    leetcode: 'leetcode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "jobs" | "messages" | "codeforce" | "leetcode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      codeforce: {
        payload: Prisma.$codeforcePayload<ExtArgs>
        fields: Prisma.codeforceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.codeforceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.codeforceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          findFirst: {
            args: Prisma.codeforceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.codeforceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          findMany: {
            args: Prisma.codeforceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>[]
          }
          create: {
            args: Prisma.codeforceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          createMany: {
            args: Prisma.codeforceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.codeforceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>[]
          }
          delete: {
            args: Prisma.codeforceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          update: {
            args: Prisma.codeforceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          deleteMany: {
            args: Prisma.codeforceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.codeforceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.codeforceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>[]
          }
          upsert: {
            args: Prisma.codeforceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codeforcePayload>
          }
          aggregate: {
            args: Prisma.CodeforceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeforce>
          }
          groupBy: {
            args: Prisma.codeforceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeforceGroupByOutputType>[]
          }
          count: {
            args: Prisma.codeforceCountArgs<ExtArgs>
            result: $Utils.Optional<CodeforceCountAggregateOutputType> | number
          }
        }
      }
      leetcode: {
        payload: Prisma.$leetcodePayload<ExtArgs>
        fields: Prisma.leetcodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leetcodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leetcodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          findFirst: {
            args: Prisma.leetcodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leetcodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          findMany: {
            args: Prisma.leetcodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>[]
          }
          create: {
            args: Prisma.leetcodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          createMany: {
            args: Prisma.leetcodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leetcodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>[]
          }
          delete: {
            args: Prisma.leetcodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          update: {
            args: Prisma.leetcodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          deleteMany: {
            args: Prisma.leetcodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leetcodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leetcodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>[]
          }
          upsert: {
            args: Prisma.leetcodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leetcodePayload>
          }
          aggregate: {
            args: Prisma.LeetcodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeetcode>
          }
          groupBy: {
            args: Prisma.leetcodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeetcodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.leetcodeCountArgs<ExtArgs>
            result: $Utils.Optional<LeetcodeCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    jobs?: jobsOmit
    messages?: messagesOmit
    codeforce?: codeforceOmit
    leetcode?: leetcodeOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    googleid: string | null
    authprovider: string | null
    bio: string | null
    skills: string | null
    github: string | null
    portfolio: string | null
    resumelink: string | null
    profilelink: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    googleid: string | null
    authprovider: string | null
    bio: string | null
    skills: string | null
    github: string | null
    portfolio: string | null
    resumelink: string | null
    profilelink: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    googleid: number
    authprovider: number
    bio: number
    skills: number
    github: number
    portfolio: number
    resumelink: number
    profilelink: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    googleid?: true
    authprovider?: true
    bio?: true
    skills?: true
    github?: true
    portfolio?: true
    resumelink?: true
    profilelink?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    googleid?: true
    authprovider?: true
    bio?: true
    skills?: true
    github?: true
    portfolio?: true
    resumelink?: true
    profilelink?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    googleid?: true
    authprovider?: true
    bio?: true
    skills?: true
    github?: true
    portfolio?: true
    resumelink?: true
    profilelink?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstname: string
    lastname: string | null
    email: string
    password: string | null
    googleid: string | null
    authprovider: string
    bio: string | null
    skills: string | null
    github: string | null
    portfolio: string | null
    resumelink: string | null
    profilelink: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    googleid?: boolean
    authprovider?: boolean
    bio?: boolean
    skills?: boolean
    github?: boolean
    portfolio?: boolean
    resumelink?: boolean
    profilelink?: boolean
    created_at?: boolean
    codeforce?: boolean | users$codeforceArgs<ExtArgs>
    leetcode?: boolean | users$leetcodeArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    googleid?: boolean
    authprovider?: boolean
    bio?: boolean
    skills?: boolean
    github?: boolean
    portfolio?: boolean
    resumelink?: boolean
    profilelink?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    googleid?: boolean
    authprovider?: boolean
    bio?: boolean
    skills?: boolean
    github?: boolean
    portfolio?: boolean
    resumelink?: boolean
    profilelink?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    googleid?: boolean
    authprovider?: boolean
    bio?: boolean
    skills?: boolean
    github?: boolean
    portfolio?: boolean
    resumelink?: boolean
    profilelink?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "googleid" | "authprovider" | "bio" | "skills" | "github" | "portfolio" | "resumelink" | "profilelink" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codeforce?: boolean | users$codeforceArgs<ExtArgs>
    leetcode?: boolean | users$leetcodeArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      codeforce: Prisma.$codeforcePayload<ExtArgs> | null
      leetcode: Prisma.$leetcodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string | null
      email: string
      password: string | null
      googleid: string | null
      authprovider: string
      bio: string | null
      skills: string | null
      github: string | null
      portfolio: string | null
      resumelink: string | null
      profilelink: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codeforce<T extends users$codeforceArgs<ExtArgs> = {}>(args?: Subset<T, users$codeforceArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leetcode<T extends users$leetcodeArgs<ExtArgs> = {}>(args?: Subset<T, users$leetcodeArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly googleid: FieldRef<"users", 'String'>
    readonly authprovider: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly skills: FieldRef<"users", 'String'>
    readonly github: FieldRef<"users", 'String'>
    readonly portfolio: FieldRef<"users", 'String'>
    readonly resumelink: FieldRef<"users", 'String'>
    readonly profilelink: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.codeforce
   */
  export type users$codeforceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    where?: codeforceWhereInput
  }

  /**
   * users.leetcode
   */
  export type users$leetcodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    where?: leetcodeWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    jobtitle: string | null
    companyname: string | null
    jobtype: string | null
    location: string | null
    salary: number | null
    eligibility: string | null
    duration: string | null
    deadline: Date | null
    skills: string | null
    aboutjob: string | null
    link: string | null
    email: string | null
    created_at: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    jobtitle: string | null
    companyname: string | null
    jobtype: string | null
    location: string | null
    salary: number | null
    eligibility: string | null
    duration: string | null
    deadline: Date | null
    skills: string | null
    aboutjob: string | null
    link: string | null
    email: string | null
    created_at: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    jobtitle: number
    companyname: number
    jobtype: number
    location: number
    salary: number
    eligibility: number
    duration: number
    deadline: number
    skills: number
    aboutjob: number
    link: number
    email: number
    created_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    salary?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    salary?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    jobtitle?: true
    companyname?: true
    jobtype?: true
    location?: true
    salary?: true
    eligibility?: true
    duration?: true
    deadline?: true
    skills?: true
    aboutjob?: true
    link?: true
    email?: true
    created_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    jobtitle?: true
    companyname?: true
    jobtype?: true
    location?: true
    salary?: true
    eligibility?: true
    duration?: true
    deadline?: true
    skills?: true
    aboutjob?: true
    link?: true
    email?: true
    created_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    jobtitle?: true
    companyname?: true
    jobtype?: true
    location?: true
    salary?: true
    eligibility?: true
    duration?: true
    deadline?: true
    skills?: true
    aboutjob?: true
    link?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    jobtitle: string
    companyname: string
    jobtype: string
    location: string
    salary: number
    eligibility: string
    duration: string
    deadline: Date
    skills: string
    aboutjob: string
    link: string
    email: string
    created_at: Date | null
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobtitle?: boolean
    companyname?: boolean
    jobtype?: boolean
    location?: boolean
    salary?: boolean
    eligibility?: boolean
    duration?: boolean
    deadline?: boolean
    skills?: boolean
    aboutjob?: boolean
    link?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobtitle?: boolean
    companyname?: boolean
    jobtype?: boolean
    location?: boolean
    salary?: boolean
    eligibility?: boolean
    duration?: boolean
    deadline?: boolean
    skills?: boolean
    aboutjob?: boolean
    link?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobtitle?: boolean
    companyname?: boolean
    jobtype?: boolean
    location?: boolean
    salary?: boolean
    eligibility?: boolean
    duration?: boolean
    deadline?: boolean
    skills?: boolean
    aboutjob?: boolean
    link?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectScalar = {
    id?: boolean
    jobtitle?: boolean
    companyname?: boolean
    jobtype?: boolean
    location?: boolean
    salary?: boolean
    eligibility?: boolean
    duration?: boolean
    deadline?: boolean
    skills?: boolean
    aboutjob?: boolean
    link?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobtitle" | "companyname" | "jobtype" | "location" | "salary" | "eligibility" | "duration" | "deadline" | "skills" | "aboutjob" | "link" | "email" | "created_at", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobtitle: string
      companyname: string
      jobtype: string
      location: string
      salary: number
      eligibility: string
      duration: string
      deadline: Date
      skills: string
      aboutjob: string
      link: string
      email: string
      created_at: Date | null
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobsCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobsCreateManyAndReturnArgs>(args?: SelectSubset<T, jobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {jobsUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jobsUpdateManyAndReturnArgs>(args: SelectSubset<T, jobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly jobtitle: FieldRef<"jobs", 'String'>
    readonly companyname: FieldRef<"jobs", 'String'>
    readonly jobtype: FieldRef<"jobs", 'String'>
    readonly location: FieldRef<"jobs", 'String'>
    readonly salary: FieldRef<"jobs", 'Int'>
    readonly eligibility: FieldRef<"jobs", 'String'>
    readonly duration: FieldRef<"jobs", 'String'>
    readonly deadline: FieldRef<"jobs", 'DateTime'>
    readonly skills: FieldRef<"jobs", 'String'>
    readonly aboutjob: FieldRef<"jobs", 'String'>
    readonly link: FieldRef<"jobs", 'String'>
    readonly email: FieldRef<"jobs", 'String'>
    readonly created_at: FieldRef<"jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs createManyAndReturn
   */
  export type jobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs updateManyAndReturn
   */
  export type jobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    created_at: Date | null
    isread: boolean | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    created_at: Date | null
    isread: boolean | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    sender: number
    receiver: number
    content: number
    created_at: number
    isread: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    created_at?: true
    isread?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    created_at?: true
    isread?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    created_at?: true
    isread?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    sender: string
    receiver: string
    content: string
    created_at: Date | null
    isread: boolean
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    created_at?: boolean
    isread?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    created_at?: boolean
    isread?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    created_at?: boolean
    isread?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    created_at?: boolean
    isread?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender" | "receiver" | "content" | "created_at" | "isread", ExtArgs["result"]["messages"]>

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender: string
      receiver: string
      content: string
      created_at: Date | null
      isread: boolean
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly sender: FieldRef<"messages", 'String'>
    readonly receiver: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
    readonly isread: FieldRef<"messages", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
  }


  /**
   * Model codeforce
   */

  export type AggregateCodeforce = {
    _count: CodeforceCountAggregateOutputType | null
    _avg: CodeforceAvgAggregateOutputType | null
    _sum: CodeforceSumAggregateOutputType | null
    _min: CodeforceMinAggregateOutputType | null
    _max: CodeforceMaxAggregateOutputType | null
  }

  export type CodeforceAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    maxRating: number | null
    contests: number | null
    userid: number | null
  }

  export type CodeforceSumAggregateOutputType = {
    id: number | null
    rating: number | null
    maxRating: number | null
    contests: number | null
    userid: number | null
  }

  export type CodeforceMinAggregateOutputType = {
    id: number | null
    handle: string | null
    rating: number | null
    maxRating: number | null
    rank: string | null
    contests: number | null
    lastSynced: Date | null
    userid: number | null
  }

  export type CodeforceMaxAggregateOutputType = {
    id: number | null
    handle: string | null
    rating: number | null
    maxRating: number | null
    rank: string | null
    contests: number | null
    lastSynced: Date | null
    userid: number | null
  }

  export type CodeforceCountAggregateOutputType = {
    id: number
    handle: number
    rating: number
    maxRating: number
    rank: number
    contests: number
    lastSynced: number
    userid: number
    _all: number
  }


  export type CodeforceAvgAggregateInputType = {
    id?: true
    rating?: true
    maxRating?: true
    contests?: true
    userid?: true
  }

  export type CodeforceSumAggregateInputType = {
    id?: true
    rating?: true
    maxRating?: true
    contests?: true
    userid?: true
  }

  export type CodeforceMinAggregateInputType = {
    id?: true
    handle?: true
    rating?: true
    maxRating?: true
    rank?: true
    contests?: true
    lastSynced?: true
    userid?: true
  }

  export type CodeforceMaxAggregateInputType = {
    id?: true
    handle?: true
    rating?: true
    maxRating?: true
    rank?: true
    contests?: true
    lastSynced?: true
    userid?: true
  }

  export type CodeforceCountAggregateInputType = {
    id?: true
    handle?: true
    rating?: true
    maxRating?: true
    rank?: true
    contests?: true
    lastSynced?: true
    userid?: true
    _all?: true
  }

  export type CodeforceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which codeforce to aggregate.
     */
    where?: codeforceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codeforces to fetch.
     */
    orderBy?: codeforceOrderByWithRelationInput | codeforceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: codeforceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned codeforces
    **/
    _count?: true | CodeforceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeforceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeforceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeforceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeforceMaxAggregateInputType
  }

  export type GetCodeforceAggregateType<T extends CodeforceAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeforce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeforce[P]>
      : GetScalarType<T[P], AggregateCodeforce[P]>
  }




  export type codeforceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: codeforceWhereInput
    orderBy?: codeforceOrderByWithAggregationInput | codeforceOrderByWithAggregationInput[]
    by: CodeforceScalarFieldEnum[] | CodeforceScalarFieldEnum
    having?: codeforceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeforceCountAggregateInputType | true
    _avg?: CodeforceAvgAggregateInputType
    _sum?: CodeforceSumAggregateInputType
    _min?: CodeforceMinAggregateInputType
    _max?: CodeforceMaxAggregateInputType
  }

  export type CodeforceGroupByOutputType = {
    id: number
    handle: string
    rating: number | null
    maxRating: number | null
    rank: string | null
    contests: number | null
    lastSynced: Date
    userid: number
    _count: CodeforceCountAggregateOutputType | null
    _avg: CodeforceAvgAggregateOutputType | null
    _sum: CodeforceSumAggregateOutputType | null
    _min: CodeforceMinAggregateOutputType | null
    _max: CodeforceMaxAggregateOutputType | null
  }

  type GetCodeforceGroupByPayload<T extends codeforceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeforceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeforceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeforceGroupByOutputType[P]>
            : GetScalarType<T[P], CodeforceGroupByOutputType[P]>
        }
      >
    >


  export type codeforceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    rating?: boolean
    maxRating?: boolean
    rank?: boolean
    contests?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeforce"]>

  export type codeforceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    rating?: boolean
    maxRating?: boolean
    rank?: boolean
    contests?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeforce"]>

  export type codeforceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    rating?: boolean
    maxRating?: boolean
    rank?: boolean
    contests?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeforce"]>

  export type codeforceSelectScalar = {
    id?: boolean
    handle?: boolean
    rating?: boolean
    maxRating?: boolean
    rank?: boolean
    contests?: boolean
    lastSynced?: boolean
    userid?: boolean
  }

  export type codeforceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "handle" | "rating" | "maxRating" | "rank" | "contests" | "lastSynced" | "userid", ExtArgs["result"]["codeforce"]>
  export type codeforceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type codeforceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type codeforceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $codeforcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "codeforce"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      handle: string
      rating: number | null
      maxRating: number | null
      rank: string | null
      contests: number | null
      lastSynced: Date
      userid: number
    }, ExtArgs["result"]["codeforce"]>
    composites: {}
  }

  type codeforceGetPayload<S extends boolean | null | undefined | codeforceDefaultArgs> = $Result.GetResult<Prisma.$codeforcePayload, S>

  type codeforceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<codeforceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeforceCountAggregateInputType | true
    }

  export interface codeforceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['codeforce'], meta: { name: 'codeforce' } }
    /**
     * Find zero or one Codeforce that matches the filter.
     * @param {codeforceFindUniqueArgs} args - Arguments to find a Codeforce
     * @example
     * // Get one Codeforce
     * const codeforce = await prisma.codeforce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends codeforceFindUniqueArgs>(args: SelectSubset<T, codeforceFindUniqueArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Codeforce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {codeforceFindUniqueOrThrowArgs} args - Arguments to find a Codeforce
     * @example
     * // Get one Codeforce
     * const codeforce = await prisma.codeforce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends codeforceFindUniqueOrThrowArgs>(args: SelectSubset<T, codeforceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codeforce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceFindFirstArgs} args - Arguments to find a Codeforce
     * @example
     * // Get one Codeforce
     * const codeforce = await prisma.codeforce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends codeforceFindFirstArgs>(args?: SelectSubset<T, codeforceFindFirstArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codeforce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceFindFirstOrThrowArgs} args - Arguments to find a Codeforce
     * @example
     * // Get one Codeforce
     * const codeforce = await prisma.codeforce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends codeforceFindFirstOrThrowArgs>(args?: SelectSubset<T, codeforceFindFirstOrThrowArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codeforces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codeforces
     * const codeforces = await prisma.codeforce.findMany()
     * 
     * // Get first 10 Codeforces
     * const codeforces = await prisma.codeforce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeforceWithIdOnly = await prisma.codeforce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends codeforceFindManyArgs>(args?: SelectSubset<T, codeforceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Codeforce.
     * @param {codeforceCreateArgs} args - Arguments to create a Codeforce.
     * @example
     * // Create one Codeforce
     * const Codeforce = await prisma.codeforce.create({
     *   data: {
     *     // ... data to create a Codeforce
     *   }
     * })
     * 
     */
    create<T extends codeforceCreateArgs>(args: SelectSubset<T, codeforceCreateArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codeforces.
     * @param {codeforceCreateManyArgs} args - Arguments to create many Codeforces.
     * @example
     * // Create many Codeforces
     * const codeforce = await prisma.codeforce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends codeforceCreateManyArgs>(args?: SelectSubset<T, codeforceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codeforces and returns the data saved in the database.
     * @param {codeforceCreateManyAndReturnArgs} args - Arguments to create many Codeforces.
     * @example
     * // Create many Codeforces
     * const codeforce = await prisma.codeforce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codeforces and only return the `id`
     * const codeforceWithIdOnly = await prisma.codeforce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends codeforceCreateManyAndReturnArgs>(args?: SelectSubset<T, codeforceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Codeforce.
     * @param {codeforceDeleteArgs} args - Arguments to delete one Codeforce.
     * @example
     * // Delete one Codeforce
     * const Codeforce = await prisma.codeforce.delete({
     *   where: {
     *     // ... filter to delete one Codeforce
     *   }
     * })
     * 
     */
    delete<T extends codeforceDeleteArgs>(args: SelectSubset<T, codeforceDeleteArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Codeforce.
     * @param {codeforceUpdateArgs} args - Arguments to update one Codeforce.
     * @example
     * // Update one Codeforce
     * const codeforce = await prisma.codeforce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends codeforceUpdateArgs>(args: SelectSubset<T, codeforceUpdateArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codeforces.
     * @param {codeforceDeleteManyArgs} args - Arguments to filter Codeforces to delete.
     * @example
     * // Delete a few Codeforces
     * const { count } = await prisma.codeforce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends codeforceDeleteManyArgs>(args?: SelectSubset<T, codeforceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codeforces
     * const codeforce = await prisma.codeforce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends codeforceUpdateManyArgs>(args: SelectSubset<T, codeforceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codeforces and returns the data updated in the database.
     * @param {codeforceUpdateManyAndReturnArgs} args - Arguments to update many Codeforces.
     * @example
     * // Update many Codeforces
     * const codeforce = await prisma.codeforce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codeforces and only return the `id`
     * const codeforceWithIdOnly = await prisma.codeforce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends codeforceUpdateManyAndReturnArgs>(args: SelectSubset<T, codeforceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Codeforce.
     * @param {codeforceUpsertArgs} args - Arguments to update or create a Codeforce.
     * @example
     * // Update or create a Codeforce
     * const codeforce = await prisma.codeforce.upsert({
     *   create: {
     *     // ... data to create a Codeforce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Codeforce we want to update
     *   }
     * })
     */
    upsert<T extends codeforceUpsertArgs>(args: SelectSubset<T, codeforceUpsertArgs<ExtArgs>>): Prisma__codeforceClient<$Result.GetResult<Prisma.$codeforcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codeforces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceCountArgs} args - Arguments to filter Codeforces to count.
     * @example
     * // Count the number of Codeforces
     * const count = await prisma.codeforce.count({
     *   where: {
     *     // ... the filter for the Codeforces we want to count
     *   }
     * })
    **/
    count<T extends codeforceCountArgs>(
      args?: Subset<T, codeforceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeforceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Codeforce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeforceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeforceAggregateArgs>(args: Subset<T, CodeforceAggregateArgs>): Prisma.PrismaPromise<GetCodeforceAggregateType<T>>

    /**
     * Group by Codeforce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codeforceGroupByArgs} args - Group by arguments.
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
      T extends codeforceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: codeforceGroupByArgs['orderBy'] }
        : { orderBy?: codeforceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, codeforceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeforceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the codeforce model
   */
  readonly fields: codeforceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for codeforce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__codeforceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the codeforce model
   */
  interface codeforceFieldRefs {
    readonly id: FieldRef<"codeforce", 'Int'>
    readonly handle: FieldRef<"codeforce", 'String'>
    readonly rating: FieldRef<"codeforce", 'Int'>
    readonly maxRating: FieldRef<"codeforce", 'Int'>
    readonly rank: FieldRef<"codeforce", 'String'>
    readonly contests: FieldRef<"codeforce", 'Int'>
    readonly lastSynced: FieldRef<"codeforce", 'DateTime'>
    readonly userid: FieldRef<"codeforce", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * codeforce findUnique
   */
  export type codeforceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter, which codeforce to fetch.
     */
    where: codeforceWhereUniqueInput
  }

  /**
   * codeforce findUniqueOrThrow
   */
  export type codeforceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter, which codeforce to fetch.
     */
    where: codeforceWhereUniqueInput
  }

  /**
   * codeforce findFirst
   */
  export type codeforceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter, which codeforce to fetch.
     */
    where?: codeforceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codeforces to fetch.
     */
    orderBy?: codeforceOrderByWithRelationInput | codeforceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codeforces.
     */
    cursor?: codeforceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codeforces.
     */
    distinct?: CodeforceScalarFieldEnum | CodeforceScalarFieldEnum[]
  }

  /**
   * codeforce findFirstOrThrow
   */
  export type codeforceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter, which codeforce to fetch.
     */
    where?: codeforceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codeforces to fetch.
     */
    orderBy?: codeforceOrderByWithRelationInput | codeforceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codeforces.
     */
    cursor?: codeforceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codeforces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codeforces.
     */
    distinct?: CodeforceScalarFieldEnum | CodeforceScalarFieldEnum[]
  }

  /**
   * codeforce findMany
   */
  export type codeforceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter, which codeforces to fetch.
     */
    where?: codeforceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codeforces to fetch.
     */
    orderBy?: codeforceOrderByWithRelationInput | codeforceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing codeforces.
     */
    cursor?: codeforceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codeforces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codeforces.
     */
    skip?: number
    distinct?: CodeforceScalarFieldEnum | CodeforceScalarFieldEnum[]
  }

  /**
   * codeforce create
   */
  export type codeforceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * The data needed to create a codeforce.
     */
    data: XOR<codeforceCreateInput, codeforceUncheckedCreateInput>
  }

  /**
   * codeforce createMany
   */
  export type codeforceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many codeforces.
     */
    data: codeforceCreateManyInput | codeforceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * codeforce createManyAndReturn
   */
  export type codeforceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * The data used to create many codeforces.
     */
    data: codeforceCreateManyInput | codeforceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * codeforce update
   */
  export type codeforceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * The data needed to update a codeforce.
     */
    data: XOR<codeforceUpdateInput, codeforceUncheckedUpdateInput>
    /**
     * Choose, which codeforce to update.
     */
    where: codeforceWhereUniqueInput
  }

  /**
   * codeforce updateMany
   */
  export type codeforceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update codeforces.
     */
    data: XOR<codeforceUpdateManyMutationInput, codeforceUncheckedUpdateManyInput>
    /**
     * Filter which codeforces to update
     */
    where?: codeforceWhereInput
    /**
     * Limit how many codeforces to update.
     */
    limit?: number
  }

  /**
   * codeforce updateManyAndReturn
   */
  export type codeforceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * The data used to update codeforces.
     */
    data: XOR<codeforceUpdateManyMutationInput, codeforceUncheckedUpdateManyInput>
    /**
     * Filter which codeforces to update
     */
    where?: codeforceWhereInput
    /**
     * Limit how many codeforces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * codeforce upsert
   */
  export type codeforceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * The filter to search for the codeforce to update in case it exists.
     */
    where: codeforceWhereUniqueInput
    /**
     * In case the codeforce found by the `where` argument doesn't exist, create a new codeforce with this data.
     */
    create: XOR<codeforceCreateInput, codeforceUncheckedCreateInput>
    /**
     * In case the codeforce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<codeforceUpdateInput, codeforceUncheckedUpdateInput>
  }

  /**
   * codeforce delete
   */
  export type codeforceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
    /**
     * Filter which codeforce to delete.
     */
    where: codeforceWhereUniqueInput
  }

  /**
   * codeforce deleteMany
   */
  export type codeforceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which codeforces to delete
     */
    where?: codeforceWhereInput
    /**
     * Limit how many codeforces to delete.
     */
    limit?: number
  }

  /**
   * codeforce without action
   */
  export type codeforceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codeforce
     */
    select?: codeforceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codeforce
     */
    omit?: codeforceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: codeforceInclude<ExtArgs> | null
  }


  /**
   * Model leetcode
   */

  export type AggregateLeetcode = {
    _count: LeetcodeCountAggregateOutputType | null
    _avg: LeetcodeAvgAggregateOutputType | null
    _sum: LeetcodeSumAggregateOutputType | null
    _min: LeetcodeMinAggregateOutputType | null
    _max: LeetcodeMaxAggregateOutputType | null
  }

  export type LeetcodeAvgAggregateOutputType = {
    id: number | null
    easy: number | null
    medium: number | null
    hard: number | null
    total: number | null
    userid: number | null
  }

  export type LeetcodeSumAggregateOutputType = {
    id: number | null
    easy: number | null
    medium: number | null
    hard: number | null
    total: number | null
    userid: number | null
  }

  export type LeetcodeMinAggregateOutputType = {
    id: number | null
    handle: string | null
    easy: number | null
    medium: number | null
    hard: number | null
    total: number | null
    lastSynced: Date | null
    userid: number | null
  }

  export type LeetcodeMaxAggregateOutputType = {
    id: number | null
    handle: string | null
    easy: number | null
    medium: number | null
    hard: number | null
    total: number | null
    lastSynced: Date | null
    userid: number | null
  }

  export type LeetcodeCountAggregateOutputType = {
    id: number
    handle: number
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced: number
    userid: number
    _all: number
  }


  export type LeetcodeAvgAggregateInputType = {
    id?: true
    easy?: true
    medium?: true
    hard?: true
    total?: true
    userid?: true
  }

  export type LeetcodeSumAggregateInputType = {
    id?: true
    easy?: true
    medium?: true
    hard?: true
    total?: true
    userid?: true
  }

  export type LeetcodeMinAggregateInputType = {
    id?: true
    handle?: true
    easy?: true
    medium?: true
    hard?: true
    total?: true
    lastSynced?: true
    userid?: true
  }

  export type LeetcodeMaxAggregateInputType = {
    id?: true
    handle?: true
    easy?: true
    medium?: true
    hard?: true
    total?: true
    lastSynced?: true
    userid?: true
  }

  export type LeetcodeCountAggregateInputType = {
    id?: true
    handle?: true
    easy?: true
    medium?: true
    hard?: true
    total?: true
    lastSynced?: true
    userid?: true
    _all?: true
  }

  export type LeetcodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leetcode to aggregate.
     */
    where?: leetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leetcodes to fetch.
     */
    orderBy?: leetcodeOrderByWithRelationInput | leetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leetcodes
    **/
    _count?: true | LeetcodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeetcodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeetcodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeetcodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeetcodeMaxAggregateInputType
  }

  export type GetLeetcodeAggregateType<T extends LeetcodeAggregateArgs> = {
        [P in keyof T & keyof AggregateLeetcode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeetcode[P]>
      : GetScalarType<T[P], AggregateLeetcode[P]>
  }




  export type leetcodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leetcodeWhereInput
    orderBy?: leetcodeOrderByWithAggregationInput | leetcodeOrderByWithAggregationInput[]
    by: LeetcodeScalarFieldEnum[] | LeetcodeScalarFieldEnum
    having?: leetcodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeetcodeCountAggregateInputType | true
    _avg?: LeetcodeAvgAggregateInputType
    _sum?: LeetcodeSumAggregateInputType
    _min?: LeetcodeMinAggregateInputType
    _max?: LeetcodeMaxAggregateInputType
  }

  export type LeetcodeGroupByOutputType = {
    id: number
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced: Date
    userid: number
    _count: LeetcodeCountAggregateOutputType | null
    _avg: LeetcodeAvgAggregateOutputType | null
    _sum: LeetcodeSumAggregateOutputType | null
    _min: LeetcodeMinAggregateOutputType | null
    _max: LeetcodeMaxAggregateOutputType | null
  }

  type GetLeetcodeGroupByPayload<T extends leetcodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeetcodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeetcodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeetcodeGroupByOutputType[P]>
            : GetScalarType<T[P], LeetcodeGroupByOutputType[P]>
        }
      >
    >


  export type leetcodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    easy?: boolean
    medium?: boolean
    hard?: boolean
    total?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leetcode"]>

  export type leetcodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    easy?: boolean
    medium?: boolean
    hard?: boolean
    total?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leetcode"]>

  export type leetcodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    easy?: boolean
    medium?: boolean
    hard?: boolean
    total?: boolean
    lastSynced?: boolean
    userid?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leetcode"]>

  export type leetcodeSelectScalar = {
    id?: boolean
    handle?: boolean
    easy?: boolean
    medium?: boolean
    hard?: boolean
    total?: boolean
    lastSynced?: boolean
    userid?: boolean
  }

  export type leetcodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "handle" | "easy" | "medium" | "hard" | "total" | "lastSynced" | "userid", ExtArgs["result"]["leetcode"]>
  export type leetcodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type leetcodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type leetcodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $leetcodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leetcode"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      handle: string
      easy: number
      medium: number
      hard: number
      total: number
      lastSynced: Date
      userid: number
    }, ExtArgs["result"]["leetcode"]>
    composites: {}
  }

  type leetcodeGetPayload<S extends boolean | null | undefined | leetcodeDefaultArgs> = $Result.GetResult<Prisma.$leetcodePayload, S>

  type leetcodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leetcodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeetcodeCountAggregateInputType | true
    }

  export interface leetcodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leetcode'], meta: { name: 'leetcode' } }
    /**
     * Find zero or one Leetcode that matches the filter.
     * @param {leetcodeFindUniqueArgs} args - Arguments to find a Leetcode
     * @example
     * // Get one Leetcode
     * const leetcode = await prisma.leetcode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leetcodeFindUniqueArgs>(args: SelectSubset<T, leetcodeFindUniqueArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leetcode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leetcodeFindUniqueOrThrowArgs} args - Arguments to find a Leetcode
     * @example
     * // Get one Leetcode
     * const leetcode = await prisma.leetcode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leetcodeFindUniqueOrThrowArgs>(args: SelectSubset<T, leetcodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leetcode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeFindFirstArgs} args - Arguments to find a Leetcode
     * @example
     * // Get one Leetcode
     * const leetcode = await prisma.leetcode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leetcodeFindFirstArgs>(args?: SelectSubset<T, leetcodeFindFirstArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leetcode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeFindFirstOrThrowArgs} args - Arguments to find a Leetcode
     * @example
     * // Get one Leetcode
     * const leetcode = await prisma.leetcode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leetcodeFindFirstOrThrowArgs>(args?: SelectSubset<T, leetcodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leetcodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leetcodes
     * const leetcodes = await prisma.leetcode.findMany()
     * 
     * // Get first 10 Leetcodes
     * const leetcodes = await prisma.leetcode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leetcodeWithIdOnly = await prisma.leetcode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leetcodeFindManyArgs>(args?: SelectSubset<T, leetcodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leetcode.
     * @param {leetcodeCreateArgs} args - Arguments to create a Leetcode.
     * @example
     * // Create one Leetcode
     * const Leetcode = await prisma.leetcode.create({
     *   data: {
     *     // ... data to create a Leetcode
     *   }
     * })
     * 
     */
    create<T extends leetcodeCreateArgs>(args: SelectSubset<T, leetcodeCreateArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leetcodes.
     * @param {leetcodeCreateManyArgs} args - Arguments to create many Leetcodes.
     * @example
     * // Create many Leetcodes
     * const leetcode = await prisma.leetcode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leetcodeCreateManyArgs>(args?: SelectSubset<T, leetcodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leetcodes and returns the data saved in the database.
     * @param {leetcodeCreateManyAndReturnArgs} args - Arguments to create many Leetcodes.
     * @example
     * // Create many Leetcodes
     * const leetcode = await prisma.leetcode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leetcodes and only return the `id`
     * const leetcodeWithIdOnly = await prisma.leetcode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leetcodeCreateManyAndReturnArgs>(args?: SelectSubset<T, leetcodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leetcode.
     * @param {leetcodeDeleteArgs} args - Arguments to delete one Leetcode.
     * @example
     * // Delete one Leetcode
     * const Leetcode = await prisma.leetcode.delete({
     *   where: {
     *     // ... filter to delete one Leetcode
     *   }
     * })
     * 
     */
    delete<T extends leetcodeDeleteArgs>(args: SelectSubset<T, leetcodeDeleteArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leetcode.
     * @param {leetcodeUpdateArgs} args - Arguments to update one Leetcode.
     * @example
     * // Update one Leetcode
     * const leetcode = await prisma.leetcode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leetcodeUpdateArgs>(args: SelectSubset<T, leetcodeUpdateArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leetcodes.
     * @param {leetcodeDeleteManyArgs} args - Arguments to filter Leetcodes to delete.
     * @example
     * // Delete a few Leetcodes
     * const { count } = await prisma.leetcode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leetcodeDeleteManyArgs>(args?: SelectSubset<T, leetcodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leetcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leetcodes
     * const leetcode = await prisma.leetcode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leetcodeUpdateManyArgs>(args: SelectSubset<T, leetcodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leetcodes and returns the data updated in the database.
     * @param {leetcodeUpdateManyAndReturnArgs} args - Arguments to update many Leetcodes.
     * @example
     * // Update many Leetcodes
     * const leetcode = await prisma.leetcode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leetcodes and only return the `id`
     * const leetcodeWithIdOnly = await prisma.leetcode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leetcodeUpdateManyAndReturnArgs>(args: SelectSubset<T, leetcodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leetcode.
     * @param {leetcodeUpsertArgs} args - Arguments to update or create a Leetcode.
     * @example
     * // Update or create a Leetcode
     * const leetcode = await prisma.leetcode.upsert({
     *   create: {
     *     // ... data to create a Leetcode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leetcode we want to update
     *   }
     * })
     */
    upsert<T extends leetcodeUpsertArgs>(args: SelectSubset<T, leetcodeUpsertArgs<ExtArgs>>): Prisma__leetcodeClient<$Result.GetResult<Prisma.$leetcodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leetcodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeCountArgs} args - Arguments to filter Leetcodes to count.
     * @example
     * // Count the number of Leetcodes
     * const count = await prisma.leetcode.count({
     *   where: {
     *     // ... the filter for the Leetcodes we want to count
     *   }
     * })
    **/
    count<T extends leetcodeCountArgs>(
      args?: Subset<T, leetcodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeetcodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leetcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeetcodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeetcodeAggregateArgs>(args: Subset<T, LeetcodeAggregateArgs>): Prisma.PrismaPromise<GetLeetcodeAggregateType<T>>

    /**
     * Group by Leetcode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leetcodeGroupByArgs} args - Group by arguments.
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
      T extends leetcodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leetcodeGroupByArgs['orderBy'] }
        : { orderBy?: leetcodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, leetcodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeetcodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leetcode model
   */
  readonly fields: leetcodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leetcode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leetcodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the leetcode model
   */
  interface leetcodeFieldRefs {
    readonly id: FieldRef<"leetcode", 'Int'>
    readonly handle: FieldRef<"leetcode", 'String'>
    readonly easy: FieldRef<"leetcode", 'Int'>
    readonly medium: FieldRef<"leetcode", 'Int'>
    readonly hard: FieldRef<"leetcode", 'Int'>
    readonly total: FieldRef<"leetcode", 'Int'>
    readonly lastSynced: FieldRef<"leetcode", 'DateTime'>
    readonly userid: FieldRef<"leetcode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * leetcode findUnique
   */
  export type leetcodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter, which leetcode to fetch.
     */
    where: leetcodeWhereUniqueInput
  }

  /**
   * leetcode findUniqueOrThrow
   */
  export type leetcodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter, which leetcode to fetch.
     */
    where: leetcodeWhereUniqueInput
  }

  /**
   * leetcode findFirst
   */
  export type leetcodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter, which leetcode to fetch.
     */
    where?: leetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leetcodes to fetch.
     */
    orderBy?: leetcodeOrderByWithRelationInput | leetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leetcodes.
     */
    cursor?: leetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leetcodes.
     */
    distinct?: LeetcodeScalarFieldEnum | LeetcodeScalarFieldEnum[]
  }

  /**
   * leetcode findFirstOrThrow
   */
  export type leetcodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter, which leetcode to fetch.
     */
    where?: leetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leetcodes to fetch.
     */
    orderBy?: leetcodeOrderByWithRelationInput | leetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leetcodes.
     */
    cursor?: leetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leetcodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leetcodes.
     */
    distinct?: LeetcodeScalarFieldEnum | LeetcodeScalarFieldEnum[]
  }

  /**
   * leetcode findMany
   */
  export type leetcodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter, which leetcodes to fetch.
     */
    where?: leetcodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leetcodes to fetch.
     */
    orderBy?: leetcodeOrderByWithRelationInput | leetcodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leetcodes.
     */
    cursor?: leetcodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leetcodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leetcodes.
     */
    skip?: number
    distinct?: LeetcodeScalarFieldEnum | LeetcodeScalarFieldEnum[]
  }

  /**
   * leetcode create
   */
  export type leetcodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * The data needed to create a leetcode.
     */
    data: XOR<leetcodeCreateInput, leetcodeUncheckedCreateInput>
  }

  /**
   * leetcode createMany
   */
  export type leetcodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leetcodes.
     */
    data: leetcodeCreateManyInput | leetcodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leetcode createManyAndReturn
   */
  export type leetcodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * The data used to create many leetcodes.
     */
    data: leetcodeCreateManyInput | leetcodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leetcode update
   */
  export type leetcodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * The data needed to update a leetcode.
     */
    data: XOR<leetcodeUpdateInput, leetcodeUncheckedUpdateInput>
    /**
     * Choose, which leetcode to update.
     */
    where: leetcodeWhereUniqueInput
  }

  /**
   * leetcode updateMany
   */
  export type leetcodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leetcodes.
     */
    data: XOR<leetcodeUpdateManyMutationInput, leetcodeUncheckedUpdateManyInput>
    /**
     * Filter which leetcodes to update
     */
    where?: leetcodeWhereInput
    /**
     * Limit how many leetcodes to update.
     */
    limit?: number
  }

  /**
   * leetcode updateManyAndReturn
   */
  export type leetcodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * The data used to update leetcodes.
     */
    data: XOR<leetcodeUpdateManyMutationInput, leetcodeUncheckedUpdateManyInput>
    /**
     * Filter which leetcodes to update
     */
    where?: leetcodeWhereInput
    /**
     * Limit how many leetcodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leetcode upsert
   */
  export type leetcodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * The filter to search for the leetcode to update in case it exists.
     */
    where: leetcodeWhereUniqueInput
    /**
     * In case the leetcode found by the `where` argument doesn't exist, create a new leetcode with this data.
     */
    create: XOR<leetcodeCreateInput, leetcodeUncheckedCreateInput>
    /**
     * In case the leetcode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leetcodeUpdateInput, leetcodeUncheckedUpdateInput>
  }

  /**
   * leetcode delete
   */
  export type leetcodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
    /**
     * Filter which leetcode to delete.
     */
    where: leetcodeWhereUniqueInput
  }

  /**
   * leetcode deleteMany
   */
  export type leetcodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leetcodes to delete
     */
    where?: leetcodeWhereInput
    /**
     * Limit how many leetcodes to delete.
     */
    limit?: number
  }

  /**
   * leetcode without action
   */
  export type leetcodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leetcode
     */
    select?: leetcodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leetcode
     */
    omit?: leetcodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leetcodeInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    googleid: 'googleid',
    authprovider: 'authprovider',
    bio: 'bio',
    skills: 'skills',
    github: 'github',
    portfolio: 'portfolio',
    resumelink: 'resumelink',
    profilelink: 'profilelink',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    jobtitle: 'jobtitle',
    companyname: 'companyname',
    jobtype: 'jobtype',
    location: 'location',
    salary: 'salary',
    eligibility: 'eligibility',
    duration: 'duration',
    deadline: 'deadline',
    skills: 'skills',
    aboutjob: 'aboutjob',
    link: 'link',
    email: 'email',
    created_at: 'created_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    sender: 'sender',
    receiver: 'receiver',
    content: 'content',
    created_at: 'created_at',
    isread: 'isread'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const CodeforceScalarFieldEnum: {
    id: 'id',
    handle: 'handle',
    rating: 'rating',
    maxRating: 'maxRating',
    rank: 'rank',
    contests: 'contests',
    lastSynced: 'lastSynced',
    userid: 'userid'
  };

  export type CodeforceScalarFieldEnum = (typeof CodeforceScalarFieldEnum)[keyof typeof CodeforceScalarFieldEnum]


  export const LeetcodeScalarFieldEnum: {
    id: 'id',
    handle: 'handle',
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
    total: 'total',
    lastSynced: 'lastSynced',
    userid: 'userid'
  };

  export type LeetcodeScalarFieldEnum = (typeof LeetcodeScalarFieldEnum)[keyof typeof LeetcodeScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    firstname?: StringFilter<"users"> | string
    lastname?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    googleid?: StringNullableFilter<"users"> | string | null
    authprovider?: StringFilter<"users"> | string
    bio?: StringNullableFilter<"users"> | string | null
    skills?: StringNullableFilter<"users"> | string | null
    github?: StringNullableFilter<"users"> | string | null
    portfolio?: StringNullableFilter<"users"> | string | null
    resumelink?: StringNullableFilter<"users"> | string | null
    profilelink?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    codeforce?: XOR<CodeforceNullableScalarRelationFilter, codeforceWhereInput> | null
    leetcode?: XOR<LeetcodeNullableScalarRelationFilter, leetcodeWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleid?: SortOrderInput | SortOrder
    authprovider?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    resumelink?: SortOrderInput | SortOrder
    profilelink?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    codeforce?: codeforceOrderByWithRelationInput
    leetcode?: leetcodeOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    googleid?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstname?: StringFilter<"users"> | string
    lastname?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    authprovider?: StringFilter<"users"> | string
    bio?: StringNullableFilter<"users"> | string | null
    skills?: StringNullableFilter<"users"> | string | null
    github?: StringNullableFilter<"users"> | string | null
    portfolio?: StringNullableFilter<"users"> | string | null
    resumelink?: StringNullableFilter<"users"> | string | null
    profilelink?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    codeforce?: XOR<CodeforceNullableScalarRelationFilter, codeforceWhereInput> | null
    leetcode?: XOR<LeetcodeNullableScalarRelationFilter, leetcodeWhereInput> | null
  }, "id" | "email" | "googleid">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleid?: SortOrderInput | SortOrder
    authprovider?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    resumelink?: SortOrderInput | SortOrder
    profilelink?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    firstname?: StringWithAggregatesFilter<"users"> | string
    lastname?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    googleid?: StringNullableWithAggregatesFilter<"users"> | string | null
    authprovider?: StringWithAggregatesFilter<"users"> | string
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    skills?: StringNullableWithAggregatesFilter<"users"> | string | null
    github?: StringNullableWithAggregatesFilter<"users"> | string | null
    portfolio?: StringNullableWithAggregatesFilter<"users"> | string | null
    resumelink?: StringNullableWithAggregatesFilter<"users"> | string | null
    profilelink?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    jobtitle?: StringFilter<"jobs"> | string
    companyname?: StringFilter<"jobs"> | string
    jobtype?: StringFilter<"jobs"> | string
    location?: StringFilter<"jobs"> | string
    salary?: IntFilter<"jobs"> | number
    eligibility?: StringFilter<"jobs"> | string
    duration?: StringFilter<"jobs"> | string
    deadline?: DateTimeFilter<"jobs"> | Date | string
    skills?: StringFilter<"jobs"> | string
    aboutjob?: StringFilter<"jobs"> | string
    link?: StringFilter<"jobs"> | string
    email?: StringFilter<"jobs"> | string
    created_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    jobtitle?: SortOrder
    companyname?: SortOrder
    jobtype?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    eligibility?: SortOrder
    duration?: SortOrder
    deadline?: SortOrder
    skills?: SortOrder
    aboutjob?: SortOrder
    link?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    jobtitle?: StringFilter<"jobs"> | string
    companyname?: StringFilter<"jobs"> | string
    jobtype?: StringFilter<"jobs"> | string
    location?: StringFilter<"jobs"> | string
    salary?: IntFilter<"jobs"> | number
    eligibility?: StringFilter<"jobs"> | string
    duration?: StringFilter<"jobs"> | string
    deadline?: DateTimeFilter<"jobs"> | Date | string
    skills?: StringFilter<"jobs"> | string
    aboutjob?: StringFilter<"jobs"> | string
    link?: StringFilter<"jobs"> | string
    email?: StringFilter<"jobs"> | string
    created_at?: DateTimeNullableFilter<"jobs"> | Date | string | null
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    jobtitle?: SortOrder
    companyname?: SortOrder
    jobtype?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    eligibility?: SortOrder
    duration?: SortOrder
    deadline?: SortOrder
    skills?: SortOrder
    aboutjob?: SortOrder
    link?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    jobtitle?: StringWithAggregatesFilter<"jobs"> | string
    companyname?: StringWithAggregatesFilter<"jobs"> | string
    jobtype?: StringWithAggregatesFilter<"jobs"> | string
    location?: StringWithAggregatesFilter<"jobs"> | string
    salary?: IntWithAggregatesFilter<"jobs"> | number
    eligibility?: StringWithAggregatesFilter<"jobs"> | string
    duration?: StringWithAggregatesFilter<"jobs"> | string
    deadline?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
    skills?: StringWithAggregatesFilter<"jobs"> | string
    aboutjob?: StringWithAggregatesFilter<"jobs"> | string
    link?: StringWithAggregatesFilter<"jobs"> | string
    email?: StringWithAggregatesFilter<"jobs"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"jobs"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    sender?: StringFilter<"messages"> | string
    receiver?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    isread?: BoolFilter<"messages"> | boolean
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    isread?: SortOrder
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    sender?: StringFilter<"messages"> | string
    receiver?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    isread?: BoolFilter<"messages"> | boolean
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    isread?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    sender?: StringWithAggregatesFilter<"messages"> | string
    receiver?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
    isread?: BoolWithAggregatesFilter<"messages"> | boolean
  }

  export type codeforceWhereInput = {
    AND?: codeforceWhereInput | codeforceWhereInput[]
    OR?: codeforceWhereInput[]
    NOT?: codeforceWhereInput | codeforceWhereInput[]
    id?: IntFilter<"codeforce"> | number
    handle?: StringFilter<"codeforce"> | string
    rating?: IntNullableFilter<"codeforce"> | number | null
    maxRating?: IntNullableFilter<"codeforce"> | number | null
    rank?: StringNullableFilter<"codeforce"> | string | null
    contests?: IntNullableFilter<"codeforce"> | number | null
    lastSynced?: DateTimeFilter<"codeforce"> | Date | string
    userid?: IntFilter<"codeforce"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type codeforceOrderByWithRelationInput = {
    id?: SortOrder
    handle?: SortOrder
    rating?: SortOrderInput | SortOrder
    maxRating?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    contests?: SortOrderInput | SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type codeforceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    handle?: string
    userid?: number
    AND?: codeforceWhereInput | codeforceWhereInput[]
    OR?: codeforceWhereInput[]
    NOT?: codeforceWhereInput | codeforceWhereInput[]
    rating?: IntNullableFilter<"codeforce"> | number | null
    maxRating?: IntNullableFilter<"codeforce"> | number | null
    rank?: StringNullableFilter<"codeforce"> | string | null
    contests?: IntNullableFilter<"codeforce"> | number | null
    lastSynced?: DateTimeFilter<"codeforce"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "handle" | "userid">

  export type codeforceOrderByWithAggregationInput = {
    id?: SortOrder
    handle?: SortOrder
    rating?: SortOrderInput | SortOrder
    maxRating?: SortOrderInput | SortOrder
    rank?: SortOrderInput | SortOrder
    contests?: SortOrderInput | SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
    _count?: codeforceCountOrderByAggregateInput
    _avg?: codeforceAvgOrderByAggregateInput
    _max?: codeforceMaxOrderByAggregateInput
    _min?: codeforceMinOrderByAggregateInput
    _sum?: codeforceSumOrderByAggregateInput
  }

  export type codeforceScalarWhereWithAggregatesInput = {
    AND?: codeforceScalarWhereWithAggregatesInput | codeforceScalarWhereWithAggregatesInput[]
    OR?: codeforceScalarWhereWithAggregatesInput[]
    NOT?: codeforceScalarWhereWithAggregatesInput | codeforceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"codeforce"> | number
    handle?: StringWithAggregatesFilter<"codeforce"> | string
    rating?: IntNullableWithAggregatesFilter<"codeforce"> | number | null
    maxRating?: IntNullableWithAggregatesFilter<"codeforce"> | number | null
    rank?: StringNullableWithAggregatesFilter<"codeforce"> | string | null
    contests?: IntNullableWithAggregatesFilter<"codeforce"> | number | null
    lastSynced?: DateTimeWithAggregatesFilter<"codeforce"> | Date | string
    userid?: IntWithAggregatesFilter<"codeforce"> | number
  }

  export type leetcodeWhereInput = {
    AND?: leetcodeWhereInput | leetcodeWhereInput[]
    OR?: leetcodeWhereInput[]
    NOT?: leetcodeWhereInput | leetcodeWhereInput[]
    id?: IntFilter<"leetcode"> | number
    handle?: StringFilter<"leetcode"> | string
    easy?: IntFilter<"leetcode"> | number
    medium?: IntFilter<"leetcode"> | number
    hard?: IntFilter<"leetcode"> | number
    total?: IntFilter<"leetcode"> | number
    lastSynced?: DateTimeFilter<"leetcode"> | Date | string
    userid?: IntFilter<"leetcode"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type leetcodeOrderByWithRelationInput = {
    id?: SortOrder
    handle?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type leetcodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    handle?: string
    userid?: number
    AND?: leetcodeWhereInput | leetcodeWhereInput[]
    OR?: leetcodeWhereInput[]
    NOT?: leetcodeWhereInput | leetcodeWhereInput[]
    easy?: IntFilter<"leetcode"> | number
    medium?: IntFilter<"leetcode"> | number
    hard?: IntFilter<"leetcode"> | number
    total?: IntFilter<"leetcode"> | number
    lastSynced?: DateTimeFilter<"leetcode"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "handle" | "userid">

  export type leetcodeOrderByWithAggregationInput = {
    id?: SortOrder
    handle?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
    _count?: leetcodeCountOrderByAggregateInput
    _avg?: leetcodeAvgOrderByAggregateInput
    _max?: leetcodeMaxOrderByAggregateInput
    _min?: leetcodeMinOrderByAggregateInput
    _sum?: leetcodeSumOrderByAggregateInput
  }

  export type leetcodeScalarWhereWithAggregatesInput = {
    AND?: leetcodeScalarWhereWithAggregatesInput | leetcodeScalarWhereWithAggregatesInput[]
    OR?: leetcodeScalarWhereWithAggregatesInput[]
    NOT?: leetcodeScalarWhereWithAggregatesInput | leetcodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leetcode"> | number
    handle?: StringWithAggregatesFilter<"leetcode"> | string
    easy?: IntWithAggregatesFilter<"leetcode"> | number
    medium?: IntWithAggregatesFilter<"leetcode"> | number
    hard?: IntWithAggregatesFilter<"leetcode"> | number
    total?: IntWithAggregatesFilter<"leetcode"> | number
    lastSynced?: DateTimeWithAggregatesFilter<"leetcode"> | Date | string
    userid?: IntWithAggregatesFilter<"leetcode"> | number
  }

  export type usersCreateInput = {
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    codeforce?: codeforceCreateNestedOneWithoutUserInput
    leetcode?: leetcodeCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    codeforce?: codeforceUncheckedCreateNestedOneWithoutUserInput
    leetcode?: leetcodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforce?: codeforceUpdateOneWithoutUserNestedInput
    leetcode?: leetcodeUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforce?: codeforceUncheckedUpdateOneWithoutUserNestedInput
    leetcode?: leetcodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsCreateInput = {
    jobtitle: string
    companyname: string
    jobtype: string
    location: string
    salary: number
    eligibility: string
    duration: string
    deadline: Date | string
    skills: string
    aboutjob: string
    link: string
    email: string
    created_at?: Date | string | null
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    jobtitle: string
    companyname: string
    jobtype: string
    location: string
    salary: number
    eligibility: string
    duration: string
    deadline: Date | string
    skills: string
    aboutjob: string
    link: string
    email: string
    created_at?: Date | string | null
  }

  export type jobsUpdateInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    companyname?: StringFieldUpdateOperationsInput | string
    jobtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StringFieldUpdateOperationsInput | string
    aboutjob?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    companyname?: StringFieldUpdateOperationsInput | string
    jobtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StringFieldUpdateOperationsInput | string
    aboutjob?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsCreateManyInput = {
    id?: number
    jobtitle: string
    companyname: string
    jobtype: string
    location: string
    salary: number
    eligibility: string
    duration: string
    deadline: Date | string
    skills: string
    aboutjob: string
    link: string
    email: string
    created_at?: Date | string | null
  }

  export type jobsUpdateManyMutationInput = {
    jobtitle?: StringFieldUpdateOperationsInput | string
    companyname?: StringFieldUpdateOperationsInput | string
    jobtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StringFieldUpdateOperationsInput | string
    aboutjob?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobtitle?: StringFieldUpdateOperationsInput | string
    companyname?: StringFieldUpdateOperationsInput | string
    jobtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: StringFieldUpdateOperationsInput | string
    aboutjob?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    sender: string
    receiver: string
    content: string
    created_at?: Date | string | null
    isread?: boolean
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    sender: string
    receiver: string
    content: string
    created_at?: Date | string | null
    isread?: boolean
  }

  export type messagesUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesCreateManyInput = {
    id?: number
    sender: string
    receiver: string
    content: string
    created_at?: Date | string | null
    isread?: boolean
  }

  export type messagesUpdateManyMutationInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: BoolFieldUpdateOperationsInput | boolean
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isread?: BoolFieldUpdateOperationsInput | boolean
  }

  export type codeforceCreateInput = {
    handle: string
    rating?: number | null
    maxRating?: number | null
    rank?: string | null
    contests?: number | null
    lastSynced?: Date | string
    user: usersCreateNestedOneWithoutCodeforceInput
  }

  export type codeforceUncheckedCreateInput = {
    id?: number
    handle: string
    rating?: number | null
    maxRating?: number | null
    rank?: string | null
    contests?: number | null
    lastSynced?: Date | string
    userid: number
  }

  export type codeforceUpdateInput = {
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCodeforceNestedInput
  }

  export type codeforceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type codeforceCreateManyInput = {
    id?: number
    handle: string
    rating?: number | null
    maxRating?: number | null
    rank?: string | null
    contests?: number | null
    lastSynced?: Date | string
    userid: number
  }

  export type codeforceUpdateManyMutationInput = {
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeforceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type leetcodeCreateInput = {
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced?: Date | string
    user: usersCreateNestedOneWithoutLeetcodeInput
  }

  export type leetcodeUncheckedCreateInput = {
    id?: number
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced?: Date | string
    userid: number
  }

  export type leetcodeUpdateInput = {
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLeetcodeNestedInput
  }

  export type leetcodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type leetcodeCreateManyInput = {
    id?: number
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced?: Date | string
    userid: number
  }

  export type leetcodeUpdateManyMutationInput = {
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leetcodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
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

  export type CodeforceNullableScalarRelationFilter = {
    is?: codeforceWhereInput | null
    isNot?: codeforceWhereInput | null
  }

  export type LeetcodeNullableScalarRelationFilter = {
    is?: leetcodeWhereInput | null
    isNot?: leetcodeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    authprovider?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumelink?: SortOrder
    profilelink?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    authprovider?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumelink?: SortOrder
    profilelink?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleid?: SortOrder
    authprovider?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    github?: SortOrder
    portfolio?: SortOrder
    resumelink?: SortOrder
    profilelink?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    jobtitle?: SortOrder
    companyname?: SortOrder
    jobtype?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    eligibility?: SortOrder
    duration?: SortOrder
    deadline?: SortOrder
    skills?: SortOrder
    aboutjob?: SortOrder
    link?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobtitle?: SortOrder
    companyname?: SortOrder
    jobtype?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    eligibility?: SortOrder
    duration?: SortOrder
    deadline?: SortOrder
    skills?: SortOrder
    aboutjob?: SortOrder
    link?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    jobtitle?: SortOrder
    companyname?: SortOrder
    jobtype?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    eligibility?: SortOrder
    duration?: SortOrder
    deadline?: SortOrder
    skills?: SortOrder
    aboutjob?: SortOrder
    link?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    isread?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    isread?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    isread?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type codeforceCountOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    rating?: SortOrder
    maxRating?: SortOrder
    rank?: SortOrder
    contests?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type codeforceAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    maxRating?: SortOrder
    contests?: SortOrder
    userid?: SortOrder
  }

  export type codeforceMaxOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    rating?: SortOrder
    maxRating?: SortOrder
    rank?: SortOrder
    contests?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type codeforceMinOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    rating?: SortOrder
    maxRating?: SortOrder
    rank?: SortOrder
    contests?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type codeforceSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    maxRating?: SortOrder
    contests?: SortOrder
    userid?: SortOrder
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

  export type leetcodeCountOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type leetcodeAvgOrderByAggregateInput = {
    id?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    userid?: SortOrder
  }

  export type leetcodeMaxOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type leetcodeMinOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    lastSynced?: SortOrder
    userid?: SortOrder
  }

  export type leetcodeSumOrderByAggregateInput = {
    id?: SortOrder
    easy?: SortOrder
    medium?: SortOrder
    hard?: SortOrder
    total?: SortOrder
    userid?: SortOrder
  }

  export type codeforceCreateNestedOneWithoutUserInput = {
    create?: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
    connectOrCreate?: codeforceCreateOrConnectWithoutUserInput
    connect?: codeforceWhereUniqueInput
  }

  export type leetcodeCreateNestedOneWithoutUserInput = {
    create?: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: leetcodeCreateOrConnectWithoutUserInput
    connect?: leetcodeWhereUniqueInput
  }

  export type codeforceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
    connectOrCreate?: codeforceCreateOrConnectWithoutUserInput
    connect?: codeforceWhereUniqueInput
  }

  export type leetcodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: leetcodeCreateOrConnectWithoutUserInput
    connect?: leetcodeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type codeforceUpdateOneWithoutUserNestedInput = {
    create?: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
    connectOrCreate?: codeforceCreateOrConnectWithoutUserInput
    upsert?: codeforceUpsertWithoutUserInput
    disconnect?: codeforceWhereInput | boolean
    delete?: codeforceWhereInput | boolean
    connect?: codeforceWhereUniqueInput
    update?: XOR<XOR<codeforceUpdateToOneWithWhereWithoutUserInput, codeforceUpdateWithoutUserInput>, codeforceUncheckedUpdateWithoutUserInput>
  }

  export type leetcodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: leetcodeCreateOrConnectWithoutUserInput
    upsert?: leetcodeUpsertWithoutUserInput
    disconnect?: leetcodeWhereInput | boolean
    delete?: leetcodeWhereInput | boolean
    connect?: leetcodeWhereUniqueInput
    update?: XOR<XOR<leetcodeUpdateToOneWithWhereWithoutUserInput, leetcodeUpdateWithoutUserInput>, leetcodeUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type codeforceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
    connectOrCreate?: codeforceCreateOrConnectWithoutUserInput
    upsert?: codeforceUpsertWithoutUserInput
    disconnect?: codeforceWhereInput | boolean
    delete?: codeforceWhereInput | boolean
    connect?: codeforceWhereUniqueInput
    update?: XOR<XOR<codeforceUpdateToOneWithWhereWithoutUserInput, codeforceUpdateWithoutUserInput>, codeforceUncheckedUpdateWithoutUserInput>
  }

  export type leetcodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: leetcodeCreateOrConnectWithoutUserInput
    upsert?: leetcodeUpsertWithoutUserInput
    disconnect?: leetcodeWhereInput | boolean
    delete?: leetcodeWhereInput | boolean
    connect?: leetcodeWhereUniqueInput
    update?: XOR<XOR<leetcodeUpdateToOneWithWhereWithoutUserInput, leetcodeUpdateWithoutUserInput>, leetcodeUncheckedUpdateWithoutUserInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersCreateNestedOneWithoutCodeforceInput = {
    create?: XOR<usersCreateWithoutCodeforceInput, usersUncheckedCreateWithoutCodeforceInput>
    connectOrCreate?: usersCreateOrConnectWithoutCodeforceInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutCodeforceNestedInput = {
    create?: XOR<usersCreateWithoutCodeforceInput, usersUncheckedCreateWithoutCodeforceInput>
    connectOrCreate?: usersCreateOrConnectWithoutCodeforceInput
    upsert?: usersUpsertWithoutCodeforceInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCodeforceInput, usersUpdateWithoutCodeforceInput>, usersUncheckedUpdateWithoutCodeforceInput>
  }

  export type usersCreateNestedOneWithoutLeetcodeInput = {
    create?: XOR<usersCreateWithoutLeetcodeInput, usersUncheckedCreateWithoutLeetcodeInput>
    connectOrCreate?: usersCreateOrConnectWithoutLeetcodeInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLeetcodeNestedInput = {
    create?: XOR<usersCreateWithoutLeetcodeInput, usersUncheckedCreateWithoutLeetcodeInput>
    connectOrCreate?: usersCreateOrConnectWithoutLeetcodeInput
    upsert?: usersUpsertWithoutLeetcodeInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLeetcodeInput, usersUpdateWithoutLeetcodeInput>, usersUncheckedUpdateWithoutLeetcodeInput>
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

  export type codeforceCreateWithoutUserInput = {
    handle: string
    rating?: number | null
    maxRating?: number | null
    rank?: string | null
    contests?: number | null
    lastSynced?: Date | string
  }

  export type codeforceUncheckedCreateWithoutUserInput = {
    id?: number
    handle: string
    rating?: number | null
    maxRating?: number | null
    rank?: string | null
    contests?: number | null
    lastSynced?: Date | string
  }

  export type codeforceCreateOrConnectWithoutUserInput = {
    where: codeforceWhereUniqueInput
    create: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
  }

  export type leetcodeCreateWithoutUserInput = {
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced?: Date | string
  }

  export type leetcodeUncheckedCreateWithoutUserInput = {
    id?: number
    handle: string
    easy: number
    medium: number
    hard: number
    total: number
    lastSynced?: Date | string
  }

  export type leetcodeCreateOrConnectWithoutUserInput = {
    where: leetcodeWhereUniqueInput
    create: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
  }

  export type codeforceUpsertWithoutUserInput = {
    update: XOR<codeforceUpdateWithoutUserInput, codeforceUncheckedUpdateWithoutUserInput>
    create: XOR<codeforceCreateWithoutUserInput, codeforceUncheckedCreateWithoutUserInput>
    where?: codeforceWhereInput
  }

  export type codeforceUpdateToOneWithWhereWithoutUserInput = {
    where?: codeforceWhereInput
    data: XOR<codeforceUpdateWithoutUserInput, codeforceUncheckedUpdateWithoutUserInput>
  }

  export type codeforceUpdateWithoutUserInput = {
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type codeforceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    maxRating?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableStringFieldUpdateOperationsInput | string | null
    contests?: NullableIntFieldUpdateOperationsInput | number | null
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leetcodeUpsertWithoutUserInput = {
    update: XOR<leetcodeUpdateWithoutUserInput, leetcodeUncheckedUpdateWithoutUserInput>
    create: XOR<leetcodeCreateWithoutUserInput, leetcodeUncheckedCreateWithoutUserInput>
    where?: leetcodeWhereInput
  }

  export type leetcodeUpdateToOneWithWhereWithoutUserInput = {
    where?: leetcodeWhereInput
    data: XOR<leetcodeUpdateWithoutUserInput, leetcodeUncheckedUpdateWithoutUserInput>
  }

  export type leetcodeUpdateWithoutUserInput = {
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leetcodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    easy?: IntFieldUpdateOperationsInput | number
    medium?: IntFieldUpdateOperationsInput | number
    hard?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lastSynced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutCodeforceInput = {
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    leetcode?: leetcodeCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCodeforceInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    leetcode?: leetcodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCodeforceInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCodeforceInput, usersUncheckedCreateWithoutCodeforceInput>
  }

  export type usersUpsertWithoutCodeforceInput = {
    update: XOR<usersUpdateWithoutCodeforceInput, usersUncheckedUpdateWithoutCodeforceInput>
    create: XOR<usersCreateWithoutCodeforceInput, usersUncheckedCreateWithoutCodeforceInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCodeforceInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCodeforceInput, usersUncheckedUpdateWithoutCodeforceInput>
  }

  export type usersUpdateWithoutCodeforceInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leetcode?: leetcodeUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCodeforceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leetcode?: leetcodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type usersCreateWithoutLeetcodeInput = {
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    codeforce?: codeforceCreateNestedOneWithoutUserInput
  }

  export type usersUncheckedCreateWithoutLeetcodeInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    password?: string | null
    googleid?: string | null
    authprovider?: string
    bio?: string | null
    skills?: string | null
    github?: string | null
    portfolio?: string | null
    resumelink?: string | null
    profilelink?: string | null
    created_at?: Date | string | null
    codeforce?: codeforceUncheckedCreateNestedOneWithoutUserInput
  }

  export type usersCreateOrConnectWithoutLeetcodeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLeetcodeInput, usersUncheckedCreateWithoutLeetcodeInput>
  }

  export type usersUpsertWithoutLeetcodeInput = {
    update: XOR<usersUpdateWithoutLeetcodeInput, usersUncheckedUpdateWithoutLeetcodeInput>
    create: XOR<usersCreateWithoutLeetcodeInput, usersUncheckedCreateWithoutLeetcodeInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLeetcodeInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLeetcodeInput, usersUncheckedUpdateWithoutLeetcodeInput>
  }

  export type usersUpdateWithoutLeetcodeInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforce?: codeforceUpdateOneWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLeetcodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleid?: NullableStringFieldUpdateOperationsInput | string | null
    authprovider?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    resumelink?: NullableStringFieldUpdateOperationsInput | string | null
    profilelink?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codeforce?: codeforceUncheckedUpdateOneWithoutUserNestedInput
  }



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