
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model icons
 * 
 */
export type icons = $Result.DefaultSelection<Prisma.$iconsPayload>
/**
 * Model aset_kategori
 * 
 */
export type aset_kategori = $Result.DefaultSelection<Prisma.$aset_kategoriPayload>
/**
 * Model aset
 * 
 */
export type aset = $Result.DefaultSelection<Prisma.$asetPayload>
/**
 * Model aset_akun
 * 
 */
export type aset_akun = $Result.DefaultSelection<Prisma.$aset_akunPayload>
/**
 * Model aset_user
 * 
 */
export type aset_user = $Result.DefaultSelection<Prisma.$aset_userPayload>
/**
 * Model transaksi_jenis
 * 
 */
export type transaksi_jenis = $Result.DefaultSelection<Prisma.$transaksi_jenisPayload>
/**
 * Model transaksi_kategori
 * 
 */
export type transaksi_kategori = $Result.DefaultSelection<Prisma.$transaksi_kategoriPayload>
/**
 * Model transasksi_subkategori
 * 
 */
export type transasksi_subkategori = $Result.DefaultSelection<Prisma.$transasksi_subkategoriPayload>
/**
 * Model transasksi
 * 
 */
export type transasksi = $Result.DefaultSelection<Prisma.$transasksiPayload>
/**
 * Model hutang
 * 
 */
export type hutang = $Result.DefaultSelection<Prisma.$hutangPayload>
/**
 * Model piutang
 * 
 */
export type piutang = $Result.DefaultSelection<Prisma.$piutangPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.icons`: Exposes CRUD operations for the **icons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Icons
    * const icons = await prisma.icons.findMany()
    * ```
    */
  get icons(): Prisma.iconsDelegate<ExtArgs>;

  /**
   * `prisma.aset_kategori`: Exposes CRUD operations for the **aset_kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aset_kategoris
    * const aset_kategoris = await prisma.aset_kategori.findMany()
    * ```
    */
  get aset_kategori(): Prisma.aset_kategoriDelegate<ExtArgs>;

  /**
   * `prisma.aset`: Exposes CRUD operations for the **aset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asets
    * const asets = await prisma.aset.findMany()
    * ```
    */
  get aset(): Prisma.asetDelegate<ExtArgs>;

  /**
   * `prisma.aset_akun`: Exposes CRUD operations for the **aset_akun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aset_akuns
    * const aset_akuns = await prisma.aset_akun.findMany()
    * ```
    */
  get aset_akun(): Prisma.aset_akunDelegate<ExtArgs>;

  /**
   * `prisma.aset_user`: Exposes CRUD operations for the **aset_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aset_users
    * const aset_users = await prisma.aset_user.findMany()
    * ```
    */
  get aset_user(): Prisma.aset_userDelegate<ExtArgs>;

  /**
   * `prisma.transaksi_jenis`: Exposes CRUD operations for the **transaksi_jenis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksi_jenis
    * const transaksi_jenis = await prisma.transaksi_jenis.findMany()
    * ```
    */
  get transaksi_jenis(): Prisma.transaksi_jenisDelegate<ExtArgs>;

  /**
   * `prisma.transaksi_kategori`: Exposes CRUD operations for the **transaksi_kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksi_kategoris
    * const transaksi_kategoris = await prisma.transaksi_kategori.findMany()
    * ```
    */
  get transaksi_kategori(): Prisma.transaksi_kategoriDelegate<ExtArgs>;

  /**
   * `prisma.transasksi_subkategori`: Exposes CRUD operations for the **transasksi_subkategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transasksi_subkategoris
    * const transasksi_subkategoris = await prisma.transasksi_subkategori.findMany()
    * ```
    */
  get transasksi_subkategori(): Prisma.transasksi_subkategoriDelegate<ExtArgs>;

  /**
   * `prisma.transasksi`: Exposes CRUD operations for the **transasksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transasksis
    * const transasksis = await prisma.transasksi.findMany()
    * ```
    */
  get transasksi(): Prisma.transasksiDelegate<ExtArgs>;

  /**
   * `prisma.hutang`: Exposes CRUD operations for the **hutang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hutangs
    * const hutangs = await prisma.hutang.findMany()
    * ```
    */
  get hutang(): Prisma.hutangDelegate<ExtArgs>;

  /**
   * `prisma.piutang`: Exposes CRUD operations for the **piutang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Piutangs
    * const piutangs = await prisma.piutang.findMany()
    * ```
    */
  get piutang(): Prisma.piutangDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    user: 'user',
    icons: 'icons',
    aset_kategori: 'aset_kategori',
    aset: 'aset',
    aset_akun: 'aset_akun',
    aset_user: 'aset_user',
    transaksi_jenis: 'transaksi_jenis',
    transaksi_kategori: 'transaksi_kategori',
    transasksi_subkategori: 'transasksi_subkategori',
    transasksi: 'transasksi',
    hutang: 'hutang',
    piutang: 'piutang',
    admin: 'admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'icons' | 'aset_kategori' | 'aset' | 'aset_akun' | 'aset_user' | 'transaksi_jenis' | 'transaksi_kategori' | 'transasksi_subkategori' | 'transasksi' | 'hutang' | 'piutang' | 'admin'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      icons: {
        payload: Prisma.$iconsPayload<ExtArgs>
        fields: Prisma.iconsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.iconsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.iconsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          findFirst: {
            args: Prisma.iconsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.iconsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          findMany: {
            args: Prisma.iconsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>[]
          }
          create: {
            args: Prisma.iconsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          createMany: {
            args: Prisma.iconsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.iconsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          update: {
            args: Prisma.iconsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          deleteMany: {
            args: Prisma.iconsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.iconsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.iconsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$iconsPayload>
          }
          aggregate: {
            args: Prisma.IconsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIcons>
          }
          groupBy: {
            args: Prisma.iconsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IconsGroupByOutputType>[]
          }
          count: {
            args: Prisma.iconsCountArgs<ExtArgs>,
            result: $Utils.Optional<IconsCountAggregateOutputType> | number
          }
        }
      }
      aset_kategori: {
        payload: Prisma.$aset_kategoriPayload<ExtArgs>
        fields: Prisma.aset_kategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aset_kategoriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aset_kategoriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          findFirst: {
            args: Prisma.aset_kategoriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aset_kategoriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          findMany: {
            args: Prisma.aset_kategoriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>[]
          }
          create: {
            args: Prisma.aset_kategoriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          createMany: {
            args: Prisma.aset_kategoriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aset_kategoriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          update: {
            args: Prisma.aset_kategoriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          deleteMany: {
            args: Prisma.aset_kategoriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aset_kategoriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aset_kategoriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_kategoriPayload>
          }
          aggregate: {
            args: Prisma.Aset_kategoriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAset_kategori>
          }
          groupBy: {
            args: Prisma.aset_kategoriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Aset_kategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.aset_kategoriCountArgs<ExtArgs>,
            result: $Utils.Optional<Aset_kategoriCountAggregateOutputType> | number
          }
        }
      }
      aset: {
        payload: Prisma.$asetPayload<ExtArgs>
        fields: Prisma.asetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          findFirst: {
            args: Prisma.asetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          findMany: {
            args: Prisma.asetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>[]
          }
          create: {
            args: Prisma.asetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          createMany: {
            args: Prisma.asetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.asetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          update: {
            args: Prisma.asetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          deleteMany: {
            args: Prisma.asetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.asetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.asetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asetPayload>
          }
          aggregate: {
            args: Prisma.AsetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAset>
          }
          groupBy: {
            args: Prisma.asetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AsetGroupByOutputType>[]
          }
          count: {
            args: Prisma.asetCountArgs<ExtArgs>,
            result: $Utils.Optional<AsetCountAggregateOutputType> | number
          }
        }
      }
      aset_akun: {
        payload: Prisma.$aset_akunPayload<ExtArgs>
        fields: Prisma.aset_akunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aset_akunFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aset_akunFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          findFirst: {
            args: Prisma.aset_akunFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aset_akunFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          findMany: {
            args: Prisma.aset_akunFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>[]
          }
          create: {
            args: Prisma.aset_akunCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          createMany: {
            args: Prisma.aset_akunCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aset_akunDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          update: {
            args: Prisma.aset_akunUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          deleteMany: {
            args: Prisma.aset_akunDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aset_akunUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aset_akunUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_akunPayload>
          }
          aggregate: {
            args: Prisma.Aset_akunAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAset_akun>
          }
          groupBy: {
            args: Prisma.aset_akunGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Aset_akunGroupByOutputType>[]
          }
          count: {
            args: Prisma.aset_akunCountArgs<ExtArgs>,
            result: $Utils.Optional<Aset_akunCountAggregateOutputType> | number
          }
        }
      }
      aset_user: {
        payload: Prisma.$aset_userPayload<ExtArgs>
        fields: Prisma.aset_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aset_userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aset_userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          findFirst: {
            args: Prisma.aset_userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aset_userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          findMany: {
            args: Prisma.aset_userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>[]
          }
          create: {
            args: Prisma.aset_userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          createMany: {
            args: Prisma.aset_userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aset_userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          update: {
            args: Prisma.aset_userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          deleteMany: {
            args: Prisma.aset_userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aset_userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aset_userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aset_userPayload>
          }
          aggregate: {
            args: Prisma.Aset_userAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAset_user>
          }
          groupBy: {
            args: Prisma.aset_userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Aset_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.aset_userCountArgs<ExtArgs>,
            result: $Utils.Optional<Aset_userCountAggregateOutputType> | number
          }
        }
      }
      transaksi_jenis: {
        payload: Prisma.$transaksi_jenisPayload<ExtArgs>
        fields: Prisma.transaksi_jenisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksi_jenisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksi_jenisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          findFirst: {
            args: Prisma.transaksi_jenisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksi_jenisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          findMany: {
            args: Prisma.transaksi_jenisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>[]
          }
          create: {
            args: Prisma.transaksi_jenisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          createMany: {
            args: Prisma.transaksi_jenisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transaksi_jenisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          update: {
            args: Prisma.transaksi_jenisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          deleteMany: {
            args: Prisma.transaksi_jenisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transaksi_jenisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transaksi_jenisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_jenisPayload>
          }
          aggregate: {
            args: Prisma.Transaksi_jenisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaksi_jenis>
          }
          groupBy: {
            args: Prisma.transaksi_jenisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Transaksi_jenisGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksi_jenisCountArgs<ExtArgs>,
            result: $Utils.Optional<Transaksi_jenisCountAggregateOutputType> | number
          }
        }
      }
      transaksi_kategori: {
        payload: Prisma.$transaksi_kategoriPayload<ExtArgs>
        fields: Prisma.transaksi_kategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksi_kategoriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksi_kategoriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          findFirst: {
            args: Prisma.transaksi_kategoriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksi_kategoriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          findMany: {
            args: Prisma.transaksi_kategoriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>[]
          }
          create: {
            args: Prisma.transaksi_kategoriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          createMany: {
            args: Prisma.transaksi_kategoriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transaksi_kategoriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          update: {
            args: Prisma.transaksi_kategoriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          deleteMany: {
            args: Prisma.transaksi_kategoriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transaksi_kategoriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transaksi_kategoriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaksi_kategoriPayload>
          }
          aggregate: {
            args: Prisma.Transaksi_kategoriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaksi_kategori>
          }
          groupBy: {
            args: Prisma.transaksi_kategoriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Transaksi_kategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksi_kategoriCountArgs<ExtArgs>,
            result: $Utils.Optional<Transaksi_kategoriCountAggregateOutputType> | number
          }
        }
      }
      transasksi_subkategori: {
        payload: Prisma.$transasksi_subkategoriPayload<ExtArgs>
        fields: Prisma.transasksi_subkategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transasksi_subkategoriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transasksi_subkategoriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          findFirst: {
            args: Prisma.transasksi_subkategoriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transasksi_subkategoriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          findMany: {
            args: Prisma.transasksi_subkategoriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>[]
          }
          create: {
            args: Prisma.transasksi_subkategoriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          createMany: {
            args: Prisma.transasksi_subkategoriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transasksi_subkategoriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          update: {
            args: Prisma.transasksi_subkategoriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          deleteMany: {
            args: Prisma.transasksi_subkategoriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transasksi_subkategoriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transasksi_subkategoriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksi_subkategoriPayload>
          }
          aggregate: {
            args: Prisma.Transasksi_subkategoriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransasksi_subkategori>
          }
          groupBy: {
            args: Prisma.transasksi_subkategoriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Transasksi_subkategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.transasksi_subkategoriCountArgs<ExtArgs>,
            result: $Utils.Optional<Transasksi_subkategoriCountAggregateOutputType> | number
          }
        }
      }
      transasksi: {
        payload: Prisma.$transasksiPayload<ExtArgs>
        fields: Prisma.transasksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transasksiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transasksiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          findFirst: {
            args: Prisma.transasksiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transasksiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          findMany: {
            args: Prisma.transasksiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>[]
          }
          create: {
            args: Prisma.transasksiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          createMany: {
            args: Prisma.transasksiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transasksiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          update: {
            args: Prisma.transasksiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          deleteMany: {
            args: Prisma.transasksiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transasksiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transasksiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transasksiPayload>
          }
          aggregate: {
            args: Prisma.TransasksiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransasksi>
          }
          groupBy: {
            args: Prisma.transasksiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransasksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transasksiCountArgs<ExtArgs>,
            result: $Utils.Optional<TransasksiCountAggregateOutputType> | number
          }
        }
      }
      hutang: {
        payload: Prisma.$hutangPayload<ExtArgs>
        fields: Prisma.hutangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hutangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hutangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          findFirst: {
            args: Prisma.hutangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hutangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          findMany: {
            args: Prisma.hutangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>[]
          }
          create: {
            args: Prisma.hutangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          createMany: {
            args: Prisma.hutangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.hutangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          update: {
            args: Prisma.hutangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          deleteMany: {
            args: Prisma.hutangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.hutangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.hutangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hutangPayload>
          }
          aggregate: {
            args: Prisma.HutangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHutang>
          }
          groupBy: {
            args: Prisma.hutangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HutangGroupByOutputType>[]
          }
          count: {
            args: Prisma.hutangCountArgs<ExtArgs>,
            result: $Utils.Optional<HutangCountAggregateOutputType> | number
          }
        }
      }
      piutang: {
        payload: Prisma.$piutangPayload<ExtArgs>
        fields: Prisma.piutangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.piutangFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.piutangFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          findFirst: {
            args: Prisma.piutangFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.piutangFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          findMany: {
            args: Prisma.piutangFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>[]
          }
          create: {
            args: Prisma.piutangCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          createMany: {
            args: Prisma.piutangCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.piutangDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          update: {
            args: Prisma.piutangUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          deleteMany: {
            args: Prisma.piutangDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.piutangUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.piutangUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$piutangPayload>
          }
          aggregate: {
            args: Prisma.PiutangAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePiutang>
          }
          groupBy: {
            args: Prisma.piutangGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PiutangGroupByOutputType>[]
          }
          count: {
            args: Prisma.piutangCountArgs<ExtArgs>,
            result: $Utils.Optional<PiutangCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    phone: string | null
    password: string | null
    isaktif: boolean | null
    google_id: string | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    isPremium: boolean | null
    premium_expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    phone: string | null
    password: string | null
    isaktif: boolean | null
    google_id: string | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    isPremium: boolean | null
    premium_expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    phone: number
    password: number
    isaktif: number
    google_id: number
    lastSeenAt: number
    token: number
    tokenRefresh: number
    isPremium: number
    premium_expired_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    isaktif?: true
    google_id?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    isPremium?: true
    premium_expired_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    isaktif?: true
    google_id?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    isPremium?: true
    premium_expired_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    isaktif?: true
    google_id?: true
    lastSeenAt?: true
    token?: true
    tokenRefresh?: true
    isPremium?: true
    premium_expired_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string | null
    phone: string | null
    password: string
    isaktif: boolean
    google_id: string | null
    lastSeenAt: Date | null
    token: string | null
    tokenRefresh: string | null
    isPremium: boolean
    premium_expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isaktif?: boolean
    google_id?: boolean
    lastSeenAt?: boolean
    token?: boolean
    tokenRefresh?: boolean
    isPremium?: boolean
    premium_expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isaktif?: boolean
    google_id?: boolean
    lastSeenAt?: boolean
    token?: boolean
    tokenRefresh?: boolean
    isPremium?: boolean
    premium_expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }



  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string | null
      phone: string | null
      password: string
      isaktif: boolean
      google_id: string | null
      lastSeenAt: Date | null
      token: string | null
      tokenRefresh: string | null
      isPremium: boolean
      premium_expired_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly nama: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly isaktif: FieldRef<"user", 'Boolean'>
    readonly google_id: FieldRef<"user", 'String'>
    readonly lastSeenAt: FieldRef<"user", 'DateTime'>
    readonly token: FieldRef<"user", 'String'>
    readonly tokenRefresh: FieldRef<"user", 'String'>
    readonly isPremium: FieldRef<"user", 'Boolean'>
    readonly premium_expired_at: FieldRef<"user", 'DateTime'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
  }


  /**
   * Model icons
   */

  export type AggregateIcons = {
    _count: IconsCountAggregateOutputType | null
    _min: IconsMinAggregateOutputType | null
    _max: IconsMaxAggregateOutputType | null
  }

  export type IconsMinAggregateOutputType = {
    id: string | null
    img: string | null
    deleted_at: Date | null
  }

  export type IconsMaxAggregateOutputType = {
    id: string | null
    img: string | null
    deleted_at: Date | null
  }

  export type IconsCountAggregateOutputType = {
    id: number
    img: number
    deleted_at: number
    _all: number
  }


  export type IconsMinAggregateInputType = {
    id?: true
    img?: true
    deleted_at?: true
  }

  export type IconsMaxAggregateInputType = {
    id?: true
    img?: true
    deleted_at?: true
  }

  export type IconsCountAggregateInputType = {
    id?: true
    img?: true
    deleted_at?: true
    _all?: true
  }

  export type IconsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which icons to aggregate.
     */
    where?: iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of icons to fetch.
     */
    orderBy?: iconsOrderByWithRelationInput | iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned icons
    **/
    _count?: true | IconsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IconsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IconsMaxAggregateInputType
  }

  export type GetIconsAggregateType<T extends IconsAggregateArgs> = {
        [P in keyof T & keyof AggregateIcons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcons[P]>
      : GetScalarType<T[P], AggregateIcons[P]>
  }




  export type iconsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: iconsWhereInput
    orderBy?: iconsOrderByWithAggregationInput | iconsOrderByWithAggregationInput[]
    by: IconsScalarFieldEnum[] | IconsScalarFieldEnum
    having?: iconsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IconsCountAggregateInputType | true
    _min?: IconsMinAggregateInputType
    _max?: IconsMaxAggregateInputType
  }

  export type IconsGroupByOutputType = {
    id: string
    img: string
    deleted_at: Date | null
    _count: IconsCountAggregateOutputType | null
    _min: IconsMinAggregateOutputType | null
    _max: IconsMaxAggregateOutputType | null
  }

  type GetIconsGroupByPayload<T extends iconsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IconsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IconsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IconsGroupByOutputType[P]>
            : GetScalarType<T[P], IconsGroupByOutputType[P]>
        }
      >
    >


  export type iconsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    deleted_at?: boolean
    aset_kategori?: boolean | icons$aset_kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["icons"]>

  export type iconsSelectScalar = {
    id?: boolean
    img?: boolean
    deleted_at?: boolean
  }


  export type iconsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aset_kategori?: boolean | icons$aset_kategoriArgs<ExtArgs>
  }


  export type $iconsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "icons"
    objects: {
      aset_kategori: Prisma.$aset_kategoriPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      img: string
      deleted_at: Date | null
    }, ExtArgs["result"]["icons"]>
    composites: {}
  }


  type iconsGetPayload<S extends boolean | null | undefined | iconsDefaultArgs> = $Result.GetResult<Prisma.$iconsPayload, S>

  type iconsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<iconsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IconsCountAggregateInputType | true
    }

  export interface iconsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['icons'], meta: { name: 'icons' } }
    /**
     * Find zero or one Icons that matches the filter.
     * @param {iconsFindUniqueArgs} args - Arguments to find a Icons
     * @example
     * // Get one Icons
     * const icons = await prisma.icons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends iconsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, iconsFindUniqueArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Icons that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {iconsFindUniqueOrThrowArgs} args - Arguments to find a Icons
     * @example
     * // Get one Icons
     * const icons = await prisma.icons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends iconsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsFindFirstArgs} args - Arguments to find a Icons
     * @example
     * // Get one Icons
     * const icons = await prisma.icons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends iconsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsFindFirstArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Icons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsFindFirstOrThrowArgs} args - Arguments to find a Icons
     * @example
     * // Get one Icons
     * const icons = await prisma.icons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends iconsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Icons
     * const icons = await prisma.icons.findMany()
     * 
     * // Get first 10 Icons
     * const icons = await prisma.icons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iconsWithIdOnly = await prisma.icons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends iconsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Icons.
     * @param {iconsCreateArgs} args - Arguments to create a Icons.
     * @example
     * // Create one Icons
     * const Icons = await prisma.icons.create({
     *   data: {
     *     // ... data to create a Icons
     *   }
     * })
     * 
    **/
    create<T extends iconsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, iconsCreateArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Icons.
     *     @param {iconsCreateManyArgs} args - Arguments to create many Icons.
     *     @example
     *     // Create many Icons
     *     const icons = await prisma.icons.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends iconsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Icons.
     * @param {iconsDeleteArgs} args - Arguments to delete one Icons.
     * @example
     * // Delete one Icons
     * const Icons = await prisma.icons.delete({
     *   where: {
     *     // ... filter to delete one Icons
     *   }
     * })
     * 
    **/
    delete<T extends iconsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, iconsDeleteArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Icons.
     * @param {iconsUpdateArgs} args - Arguments to update one Icons.
     * @example
     * // Update one Icons
     * const icons = await prisma.icons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends iconsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, iconsUpdateArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Icons.
     * @param {iconsDeleteManyArgs} args - Arguments to filter Icons to delete.
     * @example
     * // Delete a few Icons
     * const { count } = await prisma.icons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends iconsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, iconsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Icons
     * const icons = await prisma.icons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends iconsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, iconsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Icons.
     * @param {iconsUpsertArgs} args - Arguments to update or create a Icons.
     * @example
     * // Update or create a Icons
     * const icons = await prisma.icons.upsert({
     *   create: {
     *     // ... data to create a Icons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Icons we want to update
     *   }
     * })
    **/
    upsert<T extends iconsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, iconsUpsertArgs<ExtArgs>>
    ): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsCountArgs} args - Arguments to filter Icons to count.
     * @example
     * // Count the number of Icons
     * const count = await prisma.icons.count({
     *   where: {
     *     // ... the filter for the Icons we want to count
     *   }
     * })
    **/
    count<T extends iconsCountArgs>(
      args?: Subset<T, iconsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IconsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IconsAggregateArgs>(args: Subset<T, IconsAggregateArgs>): Prisma.PrismaPromise<GetIconsAggregateType<T>>

    /**
     * Group by Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {iconsGroupByArgs} args - Group by arguments.
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
      T extends iconsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: iconsGroupByArgs['orderBy'] }
        : { orderBy?: iconsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, iconsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIconsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the icons model
   */
  readonly fields: iconsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for icons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__iconsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    aset_kategori<T extends icons$aset_kategoriArgs<ExtArgs> = {}>(args?: Subset<T, icons$aset_kategoriArgs<ExtArgs>>): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the icons model
   */ 
  interface iconsFieldRefs {
    readonly id: FieldRef<"icons", 'String'>
    readonly img: FieldRef<"icons", 'String'>
    readonly deleted_at: FieldRef<"icons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * icons findUnique
   */
  export type iconsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter, which icons to fetch.
     */
    where: iconsWhereUniqueInput
  }

  /**
   * icons findUniqueOrThrow
   */
  export type iconsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter, which icons to fetch.
     */
    where: iconsWhereUniqueInput
  }

  /**
   * icons findFirst
   */
  export type iconsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter, which icons to fetch.
     */
    where?: iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of icons to fetch.
     */
    orderBy?: iconsOrderByWithRelationInput | iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for icons.
     */
    cursor?: iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of icons.
     */
    distinct?: IconsScalarFieldEnum | IconsScalarFieldEnum[]
  }

  /**
   * icons findFirstOrThrow
   */
  export type iconsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter, which icons to fetch.
     */
    where?: iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of icons to fetch.
     */
    orderBy?: iconsOrderByWithRelationInput | iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for icons.
     */
    cursor?: iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of icons.
     */
    distinct?: IconsScalarFieldEnum | IconsScalarFieldEnum[]
  }

  /**
   * icons findMany
   */
  export type iconsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter, which icons to fetch.
     */
    where?: iconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of icons to fetch.
     */
    orderBy?: iconsOrderByWithRelationInput | iconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing icons.
     */
    cursor?: iconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` icons.
     */
    skip?: number
    distinct?: IconsScalarFieldEnum | IconsScalarFieldEnum[]
  }

  /**
   * icons create
   */
  export type iconsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * The data needed to create a icons.
     */
    data: XOR<iconsCreateInput, iconsUncheckedCreateInput>
  }

  /**
   * icons createMany
   */
  export type iconsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many icons.
     */
    data: iconsCreateManyInput | iconsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * icons update
   */
  export type iconsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * The data needed to update a icons.
     */
    data: XOR<iconsUpdateInput, iconsUncheckedUpdateInput>
    /**
     * Choose, which icons to update.
     */
    where: iconsWhereUniqueInput
  }

  /**
   * icons updateMany
   */
  export type iconsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update icons.
     */
    data: XOR<iconsUpdateManyMutationInput, iconsUncheckedUpdateManyInput>
    /**
     * Filter which icons to update
     */
    where?: iconsWhereInput
  }

  /**
   * icons upsert
   */
  export type iconsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * The filter to search for the icons to update in case it exists.
     */
    where: iconsWhereUniqueInput
    /**
     * In case the icons found by the `where` argument doesn't exist, create a new icons with this data.
     */
    create: XOR<iconsCreateInput, iconsUncheckedCreateInput>
    /**
     * In case the icons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<iconsUpdateInput, iconsUncheckedUpdateInput>
  }

  /**
   * icons delete
   */
  export type iconsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    /**
     * Filter which icons to delete.
     */
    where: iconsWhereUniqueInput
  }

  /**
   * icons deleteMany
   */
  export type iconsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which icons to delete
     */
    where?: iconsWhereInput
  }

  /**
   * icons.aset_kategori
   */
  export type icons$aset_kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    where?: aset_kategoriWhereInput
  }

  /**
   * icons without action
   */
  export type iconsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
  }


  /**
   * Model aset_kategori
   */

  export type AggregateAset_kategori = {
    _count: Aset_kategoriCountAggregateOutputType | null
    _min: Aset_kategoriMinAggregateOutputType | null
    _max: Aset_kategoriMaxAggregateOutputType | null
  }

  export type Aset_kategoriMinAggregateOutputType = {
    id: string | null
    nama: string | null
    icon_id: string | null
  }

  export type Aset_kategoriMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    icon_id: string | null
  }

  export type Aset_kategoriCountAggregateOutputType = {
    id: number
    nama: number
    icon_id: number
    _all: number
  }


  export type Aset_kategoriMinAggregateInputType = {
    id?: true
    nama?: true
    icon_id?: true
  }

  export type Aset_kategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    icon_id?: true
  }

  export type Aset_kategoriCountAggregateInputType = {
    id?: true
    nama?: true
    icon_id?: true
    _all?: true
  }

  export type Aset_kategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_kategori to aggregate.
     */
    where?: aset_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_kategoris to fetch.
     */
    orderBy?: aset_kategoriOrderByWithRelationInput | aset_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aset_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aset_kategoris
    **/
    _count?: true | Aset_kategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aset_kategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aset_kategoriMaxAggregateInputType
  }

  export type GetAset_kategoriAggregateType<T extends Aset_kategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateAset_kategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAset_kategori[P]>
      : GetScalarType<T[P], AggregateAset_kategori[P]>
  }




  export type aset_kategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aset_kategoriWhereInput
    orderBy?: aset_kategoriOrderByWithAggregationInput | aset_kategoriOrderByWithAggregationInput[]
    by: Aset_kategoriScalarFieldEnum[] | Aset_kategoriScalarFieldEnum
    having?: aset_kategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aset_kategoriCountAggregateInputType | true
    _min?: Aset_kategoriMinAggregateInputType
    _max?: Aset_kategoriMaxAggregateInputType
  }

  export type Aset_kategoriGroupByOutputType = {
    id: string
    nama: string
    icon_id: string | null
    _count: Aset_kategoriCountAggregateOutputType | null
    _min: Aset_kategoriMinAggregateOutputType | null
    _max: Aset_kategoriMaxAggregateOutputType | null
  }

  type GetAset_kategoriGroupByPayload<T extends aset_kategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aset_kategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aset_kategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aset_kategoriGroupByOutputType[P]>
            : GetScalarType<T[P], Aset_kategoriGroupByOutputType[P]>
        }
      >
    >


  export type aset_kategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    icon_id?: boolean
    icon?: boolean | aset_kategori$iconArgs<ExtArgs>
  }, ExtArgs["result"]["aset_kategori"]>

  export type aset_kategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    icon_id?: boolean
  }


  export type aset_kategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icon?: boolean | aset_kategori$iconArgs<ExtArgs>
  }


  export type $aset_kategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aset_kategori"
    objects: {
      icon: Prisma.$iconsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      icon_id: string | null
    }, ExtArgs["result"]["aset_kategori"]>
    composites: {}
  }


  type aset_kategoriGetPayload<S extends boolean | null | undefined | aset_kategoriDefaultArgs> = $Result.GetResult<Prisma.$aset_kategoriPayload, S>

  type aset_kategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aset_kategoriFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Aset_kategoriCountAggregateInputType | true
    }

  export interface aset_kategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aset_kategori'], meta: { name: 'aset_kategori' } }
    /**
     * Find zero or one Aset_kategori that matches the filter.
     * @param {aset_kategoriFindUniqueArgs} args - Arguments to find a Aset_kategori
     * @example
     * // Get one Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aset_kategoriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriFindUniqueArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aset_kategori that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aset_kategoriFindUniqueOrThrowArgs} args - Arguments to find a Aset_kategori
     * @example
     * // Get one Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aset_kategoriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aset_kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriFindFirstArgs} args - Arguments to find a Aset_kategori
     * @example
     * // Get one Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aset_kategoriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriFindFirstArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aset_kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriFindFirstOrThrowArgs} args - Arguments to find a Aset_kategori
     * @example
     * // Get one Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aset_kategoriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aset_kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aset_kategoris
     * const aset_kategoris = await prisma.aset_kategori.findMany()
     * 
     * // Get first 10 Aset_kategoris
     * const aset_kategoris = await prisma.aset_kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aset_kategoriWithIdOnly = await prisma.aset_kategori.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aset_kategoriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aset_kategori.
     * @param {aset_kategoriCreateArgs} args - Arguments to create a Aset_kategori.
     * @example
     * // Create one Aset_kategori
     * const Aset_kategori = await prisma.aset_kategori.create({
     *   data: {
     *     // ... data to create a Aset_kategori
     *   }
     * })
     * 
    **/
    create<T extends aset_kategoriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriCreateArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aset_kategoris.
     *     @param {aset_kategoriCreateManyArgs} args - Arguments to create many Aset_kategoris.
     *     @example
     *     // Create many Aset_kategoris
     *     const aset_kategori = await prisma.aset_kategori.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aset_kategoriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aset_kategori.
     * @param {aset_kategoriDeleteArgs} args - Arguments to delete one Aset_kategori.
     * @example
     * // Delete one Aset_kategori
     * const Aset_kategori = await prisma.aset_kategori.delete({
     *   where: {
     *     // ... filter to delete one Aset_kategori
     *   }
     * })
     * 
    **/
    delete<T extends aset_kategoriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriDeleteArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aset_kategori.
     * @param {aset_kategoriUpdateArgs} args - Arguments to update one Aset_kategori.
     * @example
     * // Update one Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aset_kategoriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriUpdateArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aset_kategoris.
     * @param {aset_kategoriDeleteManyArgs} args - Arguments to filter Aset_kategoris to delete.
     * @example
     * // Delete a few Aset_kategoris
     * const { count } = await prisma.aset_kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aset_kategoriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_kategoriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aset_kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aset_kategoris
     * const aset_kategori = await prisma.aset_kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aset_kategoriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aset_kategori.
     * @param {aset_kategoriUpsertArgs} args - Arguments to update or create a Aset_kategori.
     * @example
     * // Update or create a Aset_kategori
     * const aset_kategori = await prisma.aset_kategori.upsert({
     *   create: {
     *     // ... data to create a Aset_kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aset_kategori we want to update
     *   }
     * })
    **/
    upsert<T extends aset_kategoriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aset_kategoriUpsertArgs<ExtArgs>>
    ): Prisma__aset_kategoriClient<$Result.GetResult<Prisma.$aset_kategoriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aset_kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriCountArgs} args - Arguments to filter Aset_kategoris to count.
     * @example
     * // Count the number of Aset_kategoris
     * const count = await prisma.aset_kategori.count({
     *   where: {
     *     // ... the filter for the Aset_kategoris we want to count
     *   }
     * })
    **/
    count<T extends aset_kategoriCountArgs>(
      args?: Subset<T, aset_kategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aset_kategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aset_kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aset_kategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aset_kategoriAggregateArgs>(args: Subset<T, Aset_kategoriAggregateArgs>): Prisma.PrismaPromise<GetAset_kategoriAggregateType<T>>

    /**
     * Group by Aset_kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_kategoriGroupByArgs} args - Group by arguments.
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
      T extends aset_kategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aset_kategoriGroupByArgs['orderBy'] }
        : { orderBy?: aset_kategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aset_kategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAset_kategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aset_kategori model
   */
  readonly fields: aset_kategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aset_kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aset_kategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    icon<T extends aset_kategori$iconArgs<ExtArgs> = {}>(args?: Subset<T, aset_kategori$iconArgs<ExtArgs>>): Prisma__iconsClient<$Result.GetResult<Prisma.$iconsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aset_kategori model
   */ 
  interface aset_kategoriFieldRefs {
    readonly id: FieldRef<"aset_kategori", 'String'>
    readonly nama: FieldRef<"aset_kategori", 'String'>
    readonly icon_id: FieldRef<"aset_kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * aset_kategori findUnique
   */
  export type aset_kategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter, which aset_kategori to fetch.
     */
    where: aset_kategoriWhereUniqueInput
  }

  /**
   * aset_kategori findUniqueOrThrow
   */
  export type aset_kategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter, which aset_kategori to fetch.
     */
    where: aset_kategoriWhereUniqueInput
  }

  /**
   * aset_kategori findFirst
   */
  export type aset_kategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter, which aset_kategori to fetch.
     */
    where?: aset_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_kategoris to fetch.
     */
    orderBy?: aset_kategoriOrderByWithRelationInput | aset_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_kategoris.
     */
    cursor?: aset_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_kategoris.
     */
    distinct?: Aset_kategoriScalarFieldEnum | Aset_kategoriScalarFieldEnum[]
  }

  /**
   * aset_kategori findFirstOrThrow
   */
  export type aset_kategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter, which aset_kategori to fetch.
     */
    where?: aset_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_kategoris to fetch.
     */
    orderBy?: aset_kategoriOrderByWithRelationInput | aset_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_kategoris.
     */
    cursor?: aset_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_kategoris.
     */
    distinct?: Aset_kategoriScalarFieldEnum | Aset_kategoriScalarFieldEnum[]
  }

  /**
   * aset_kategori findMany
   */
  export type aset_kategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter, which aset_kategoris to fetch.
     */
    where?: aset_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_kategoris to fetch.
     */
    orderBy?: aset_kategoriOrderByWithRelationInput | aset_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aset_kategoris.
     */
    cursor?: aset_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_kategoris.
     */
    skip?: number
    distinct?: Aset_kategoriScalarFieldEnum | Aset_kategoriScalarFieldEnum[]
  }

  /**
   * aset_kategori create
   */
  export type aset_kategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a aset_kategori.
     */
    data: XOR<aset_kategoriCreateInput, aset_kategoriUncheckedCreateInput>
  }

  /**
   * aset_kategori createMany
   */
  export type aset_kategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aset_kategoris.
     */
    data: aset_kategoriCreateManyInput | aset_kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aset_kategori update
   */
  export type aset_kategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a aset_kategori.
     */
    data: XOR<aset_kategoriUpdateInput, aset_kategoriUncheckedUpdateInput>
    /**
     * Choose, which aset_kategori to update.
     */
    where: aset_kategoriWhereUniqueInput
  }

  /**
   * aset_kategori updateMany
   */
  export type aset_kategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aset_kategoris.
     */
    data: XOR<aset_kategoriUpdateManyMutationInput, aset_kategoriUncheckedUpdateManyInput>
    /**
     * Filter which aset_kategoris to update
     */
    where?: aset_kategoriWhereInput
  }

  /**
   * aset_kategori upsert
   */
  export type aset_kategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the aset_kategori to update in case it exists.
     */
    where: aset_kategoriWhereUniqueInput
    /**
     * In case the aset_kategori found by the `where` argument doesn't exist, create a new aset_kategori with this data.
     */
    create: XOR<aset_kategoriCreateInput, aset_kategoriUncheckedCreateInput>
    /**
     * In case the aset_kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aset_kategoriUpdateInput, aset_kategoriUncheckedUpdateInput>
  }

  /**
   * aset_kategori delete
   */
  export type aset_kategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
    /**
     * Filter which aset_kategori to delete.
     */
    where: aset_kategoriWhereUniqueInput
  }

  /**
   * aset_kategori deleteMany
   */
  export type aset_kategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_kategoris to delete
     */
    where?: aset_kategoriWhereInput
  }

  /**
   * aset_kategori.icon
   */
  export type aset_kategori$iconArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the icons
     */
    select?: iconsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: iconsInclude<ExtArgs> | null
    where?: iconsWhereInput
  }

  /**
   * aset_kategori without action
   */
  export type aset_kategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_kategori
     */
    select?: aset_kategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aset_kategoriInclude<ExtArgs> | null
  }


  /**
   * Model aset
   */

  export type AggregateAset = {
    _count: AsetCountAggregateOutputType | null
    _min: AsetMinAggregateOutputType | null
    _max: AsetMaxAggregateOutputType | null
  }

  export type AsetMinAggregateOutputType = {
    id: string | null
  }

  export type AsetMaxAggregateOutputType = {
    id: string | null
  }

  export type AsetCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type AsetMinAggregateInputType = {
    id?: true
  }

  export type AsetMaxAggregateInputType = {
    id?: true
  }

  export type AsetCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type AsetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset to aggregate.
     */
    where?: asetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asets to fetch.
     */
    orderBy?: asetOrderByWithRelationInput | asetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asets
    **/
    _count?: true | AsetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsetMaxAggregateInputType
  }

  export type GetAsetAggregateType<T extends AsetAggregateArgs> = {
        [P in keyof T & keyof AggregateAset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAset[P]>
      : GetScalarType<T[P], AggregateAset[P]>
  }




  export type asetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asetWhereInput
    orderBy?: asetOrderByWithAggregationInput | asetOrderByWithAggregationInput[]
    by: AsetScalarFieldEnum[] | AsetScalarFieldEnum
    having?: asetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsetCountAggregateInputType | true
    _min?: AsetMinAggregateInputType
    _max?: AsetMaxAggregateInputType
  }

  export type AsetGroupByOutputType = {
    id: string
    _count: AsetCountAggregateOutputType | null
    _min: AsetMinAggregateOutputType | null
    _max: AsetMaxAggregateOutputType | null
  }

  type GetAsetGroupByPayload<T extends asetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsetGroupByOutputType[P]>
            : GetScalarType<T[P], AsetGroupByOutputType[P]>
        }
      >
    >


  export type asetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["aset"]>

  export type asetSelectScalar = {
    id?: boolean
  }



  export type $asetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["aset"]>
    composites: {}
  }


  type asetGetPayload<S extends boolean | null | undefined | asetDefaultArgs> = $Result.GetResult<Prisma.$asetPayload, S>

  type asetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsetCountAggregateInputType | true
    }

  export interface asetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aset'], meta: { name: 'aset' } }
    /**
     * Find zero or one Aset that matches the filter.
     * @param {asetFindUniqueArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends asetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, asetFindUniqueArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {asetFindUniqueOrThrowArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends asetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetFindFirstArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends asetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, asetFindFirstArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetFindFirstOrThrowArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends asetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Asets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asets
     * const asets = await prisma.aset.findMany()
     * 
     * // Get first 10 Asets
     * const asets = await prisma.aset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asetWithIdOnly = await prisma.aset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends asetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aset.
     * @param {asetCreateArgs} args - Arguments to create a Aset.
     * @example
     * // Create one Aset
     * const Aset = await prisma.aset.create({
     *   data: {
     *     // ... data to create a Aset
     *   }
     * })
     * 
    **/
    create<T extends asetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, asetCreateArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Asets.
     *     @param {asetCreateManyArgs} args - Arguments to create many Asets.
     *     @example
     *     // Create many Asets
     *     const aset = await prisma.aset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends asetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aset.
     * @param {asetDeleteArgs} args - Arguments to delete one Aset.
     * @example
     * // Delete one Aset
     * const Aset = await prisma.aset.delete({
     *   where: {
     *     // ... filter to delete one Aset
     *   }
     * })
     * 
    **/
    delete<T extends asetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, asetDeleteArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aset.
     * @param {asetUpdateArgs} args - Arguments to update one Aset.
     * @example
     * // Update one Aset
     * const aset = await prisma.aset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends asetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, asetUpdateArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Asets.
     * @param {asetDeleteManyArgs} args - Arguments to filter Asets to delete.
     * @example
     * // Delete a few Asets
     * const { count } = await prisma.aset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends asetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asets
     * const aset = await prisma.aset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends asetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, asetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aset.
     * @param {asetUpsertArgs} args - Arguments to update or create a Aset.
     * @example
     * // Update or create a Aset
     * const aset = await prisma.aset.upsert({
     *   create: {
     *     // ... data to create a Aset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aset we want to update
     *   }
     * })
    **/
    upsert<T extends asetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, asetUpsertArgs<ExtArgs>>
    ): Prisma__asetClient<$Result.GetResult<Prisma.$asetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Asets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetCountArgs} args - Arguments to filter Asets to count.
     * @example
     * // Count the number of Asets
     * const count = await prisma.aset.count({
     *   where: {
     *     // ... the filter for the Asets we want to count
     *   }
     * })
    **/
    count<T extends asetCountArgs>(
      args?: Subset<T, asetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsetAggregateArgs>(args: Subset<T, AsetAggregateArgs>): Prisma.PrismaPromise<GetAsetAggregateType<T>>

    /**
     * Group by Aset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asetGroupByArgs} args - Group by arguments.
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
      T extends asetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asetGroupByArgs['orderBy'] }
        : { orderBy?: asetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, asetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aset model
   */
  readonly fields: asetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aset model
   */ 
  interface asetFieldRefs {
    readonly id: FieldRef<"aset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * aset findUnique
   */
  export type asetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter, which aset to fetch.
     */
    where: asetWhereUniqueInput
  }

  /**
   * aset findUniqueOrThrow
   */
  export type asetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter, which aset to fetch.
     */
    where: asetWhereUniqueInput
  }

  /**
   * aset findFirst
   */
  export type asetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter, which aset to fetch.
     */
    where?: asetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asets to fetch.
     */
    orderBy?: asetOrderByWithRelationInput | asetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asets.
     */
    cursor?: asetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asets.
     */
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * aset findFirstOrThrow
   */
  export type asetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter, which aset to fetch.
     */
    where?: asetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asets to fetch.
     */
    orderBy?: asetOrderByWithRelationInput | asetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asets.
     */
    cursor?: asetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asets.
     */
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * aset findMany
   */
  export type asetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter, which asets to fetch.
     */
    where?: asetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asets to fetch.
     */
    orderBy?: asetOrderByWithRelationInput | asetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asets.
     */
    cursor?: asetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asets.
     */
    skip?: number
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * aset create
   */
  export type asetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * The data needed to create a aset.
     */
    data?: XOR<asetCreateInput, asetUncheckedCreateInput>
  }

  /**
   * aset createMany
   */
  export type asetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asets.
     */
    data: asetCreateManyInput | asetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aset update
   */
  export type asetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * The data needed to update a aset.
     */
    data: XOR<asetUpdateInput, asetUncheckedUpdateInput>
    /**
     * Choose, which aset to update.
     */
    where: asetWhereUniqueInput
  }

  /**
   * aset updateMany
   */
  export type asetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asets.
     */
    data: XOR<asetUpdateManyMutationInput, asetUncheckedUpdateManyInput>
    /**
     * Filter which asets to update
     */
    where?: asetWhereInput
  }

  /**
   * aset upsert
   */
  export type asetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * The filter to search for the aset to update in case it exists.
     */
    where: asetWhereUniqueInput
    /**
     * In case the aset found by the `where` argument doesn't exist, create a new aset with this data.
     */
    create: XOR<asetCreateInput, asetUncheckedCreateInput>
    /**
     * In case the aset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asetUpdateInput, asetUncheckedUpdateInput>
  }

  /**
   * aset delete
   */
  export type asetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
    /**
     * Filter which aset to delete.
     */
    where: asetWhereUniqueInput
  }

  /**
   * aset deleteMany
   */
  export type asetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asets to delete
     */
    where?: asetWhereInput
  }

  /**
   * aset without action
   */
  export type asetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset
     */
    select?: asetSelect<ExtArgs> | null
  }


  /**
   * Model aset_akun
   */

  export type AggregateAset_akun = {
    _count: Aset_akunCountAggregateOutputType | null
    _min: Aset_akunMinAggregateOutputType | null
    _max: Aset_akunMaxAggregateOutputType | null
  }

  export type Aset_akunMinAggregateOutputType = {
    id: string | null
  }

  export type Aset_akunMaxAggregateOutputType = {
    id: string | null
  }

  export type Aset_akunCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Aset_akunMinAggregateInputType = {
    id?: true
  }

  export type Aset_akunMaxAggregateInputType = {
    id?: true
  }

  export type Aset_akunCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Aset_akunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_akun to aggregate.
     */
    where?: aset_akunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_akuns to fetch.
     */
    orderBy?: aset_akunOrderByWithRelationInput | aset_akunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aset_akunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_akuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_akuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aset_akuns
    **/
    _count?: true | Aset_akunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aset_akunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aset_akunMaxAggregateInputType
  }

  export type GetAset_akunAggregateType<T extends Aset_akunAggregateArgs> = {
        [P in keyof T & keyof AggregateAset_akun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAset_akun[P]>
      : GetScalarType<T[P], AggregateAset_akun[P]>
  }




  export type aset_akunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aset_akunWhereInput
    orderBy?: aset_akunOrderByWithAggregationInput | aset_akunOrderByWithAggregationInput[]
    by: Aset_akunScalarFieldEnum[] | Aset_akunScalarFieldEnum
    having?: aset_akunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aset_akunCountAggregateInputType | true
    _min?: Aset_akunMinAggregateInputType
    _max?: Aset_akunMaxAggregateInputType
  }

  export type Aset_akunGroupByOutputType = {
    id: string
    _count: Aset_akunCountAggregateOutputType | null
    _min: Aset_akunMinAggregateOutputType | null
    _max: Aset_akunMaxAggregateOutputType | null
  }

  type GetAset_akunGroupByPayload<T extends aset_akunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aset_akunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aset_akunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aset_akunGroupByOutputType[P]>
            : GetScalarType<T[P], Aset_akunGroupByOutputType[P]>
        }
      >
    >


  export type aset_akunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["aset_akun"]>

  export type aset_akunSelectScalar = {
    id?: boolean
  }



  export type $aset_akunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aset_akun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["aset_akun"]>
    composites: {}
  }


  type aset_akunGetPayload<S extends boolean | null | undefined | aset_akunDefaultArgs> = $Result.GetResult<Prisma.$aset_akunPayload, S>

  type aset_akunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aset_akunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Aset_akunCountAggregateInputType | true
    }

  export interface aset_akunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aset_akun'], meta: { name: 'aset_akun' } }
    /**
     * Find zero or one Aset_akun that matches the filter.
     * @param {aset_akunFindUniqueArgs} args - Arguments to find a Aset_akun
     * @example
     * // Get one Aset_akun
     * const aset_akun = await prisma.aset_akun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aset_akunFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunFindUniqueArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aset_akun that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aset_akunFindUniqueOrThrowArgs} args - Arguments to find a Aset_akun
     * @example
     * // Get one Aset_akun
     * const aset_akun = await prisma.aset_akun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aset_akunFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aset_akun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunFindFirstArgs} args - Arguments to find a Aset_akun
     * @example
     * // Get one Aset_akun
     * const aset_akun = await prisma.aset_akun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aset_akunFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunFindFirstArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aset_akun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunFindFirstOrThrowArgs} args - Arguments to find a Aset_akun
     * @example
     * // Get one Aset_akun
     * const aset_akun = await prisma.aset_akun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aset_akunFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aset_akuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aset_akuns
     * const aset_akuns = await prisma.aset_akun.findMany()
     * 
     * // Get first 10 Aset_akuns
     * const aset_akuns = await prisma.aset_akun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aset_akunWithIdOnly = await prisma.aset_akun.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aset_akunFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aset_akun.
     * @param {aset_akunCreateArgs} args - Arguments to create a Aset_akun.
     * @example
     * // Create one Aset_akun
     * const Aset_akun = await prisma.aset_akun.create({
     *   data: {
     *     // ... data to create a Aset_akun
     *   }
     * })
     * 
    **/
    create<T extends aset_akunCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunCreateArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aset_akuns.
     *     @param {aset_akunCreateManyArgs} args - Arguments to create many Aset_akuns.
     *     @example
     *     // Create many Aset_akuns
     *     const aset_akun = await prisma.aset_akun.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aset_akunCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aset_akun.
     * @param {aset_akunDeleteArgs} args - Arguments to delete one Aset_akun.
     * @example
     * // Delete one Aset_akun
     * const Aset_akun = await prisma.aset_akun.delete({
     *   where: {
     *     // ... filter to delete one Aset_akun
     *   }
     * })
     * 
    **/
    delete<T extends aset_akunDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunDeleteArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aset_akun.
     * @param {aset_akunUpdateArgs} args - Arguments to update one Aset_akun.
     * @example
     * // Update one Aset_akun
     * const aset_akun = await prisma.aset_akun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aset_akunUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunUpdateArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aset_akuns.
     * @param {aset_akunDeleteManyArgs} args - Arguments to filter Aset_akuns to delete.
     * @example
     * // Delete a few Aset_akuns
     * const { count } = await prisma.aset_akun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aset_akunDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_akunDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aset_akuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aset_akuns
     * const aset_akun = await prisma.aset_akun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aset_akunUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aset_akun.
     * @param {aset_akunUpsertArgs} args - Arguments to update or create a Aset_akun.
     * @example
     * // Update or create a Aset_akun
     * const aset_akun = await prisma.aset_akun.upsert({
     *   create: {
     *     // ... data to create a Aset_akun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aset_akun we want to update
     *   }
     * })
    **/
    upsert<T extends aset_akunUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aset_akunUpsertArgs<ExtArgs>>
    ): Prisma__aset_akunClient<$Result.GetResult<Prisma.$aset_akunPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aset_akuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunCountArgs} args - Arguments to filter Aset_akuns to count.
     * @example
     * // Count the number of Aset_akuns
     * const count = await prisma.aset_akun.count({
     *   where: {
     *     // ... the filter for the Aset_akuns we want to count
     *   }
     * })
    **/
    count<T extends aset_akunCountArgs>(
      args?: Subset<T, aset_akunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aset_akunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aset_akun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aset_akunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aset_akunAggregateArgs>(args: Subset<T, Aset_akunAggregateArgs>): Prisma.PrismaPromise<GetAset_akunAggregateType<T>>

    /**
     * Group by Aset_akun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_akunGroupByArgs} args - Group by arguments.
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
      T extends aset_akunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aset_akunGroupByArgs['orderBy'] }
        : { orderBy?: aset_akunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aset_akunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAset_akunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aset_akun model
   */
  readonly fields: aset_akunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aset_akun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aset_akunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aset_akun model
   */ 
  interface aset_akunFieldRefs {
    readonly id: FieldRef<"aset_akun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * aset_akun findUnique
   */
  export type aset_akunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter, which aset_akun to fetch.
     */
    where: aset_akunWhereUniqueInput
  }

  /**
   * aset_akun findUniqueOrThrow
   */
  export type aset_akunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter, which aset_akun to fetch.
     */
    where: aset_akunWhereUniqueInput
  }

  /**
   * aset_akun findFirst
   */
  export type aset_akunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter, which aset_akun to fetch.
     */
    where?: aset_akunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_akuns to fetch.
     */
    orderBy?: aset_akunOrderByWithRelationInput | aset_akunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_akuns.
     */
    cursor?: aset_akunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_akuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_akuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_akuns.
     */
    distinct?: Aset_akunScalarFieldEnum | Aset_akunScalarFieldEnum[]
  }

  /**
   * aset_akun findFirstOrThrow
   */
  export type aset_akunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter, which aset_akun to fetch.
     */
    where?: aset_akunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_akuns to fetch.
     */
    orderBy?: aset_akunOrderByWithRelationInput | aset_akunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_akuns.
     */
    cursor?: aset_akunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_akuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_akuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_akuns.
     */
    distinct?: Aset_akunScalarFieldEnum | Aset_akunScalarFieldEnum[]
  }

  /**
   * aset_akun findMany
   */
  export type aset_akunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter, which aset_akuns to fetch.
     */
    where?: aset_akunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_akuns to fetch.
     */
    orderBy?: aset_akunOrderByWithRelationInput | aset_akunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aset_akuns.
     */
    cursor?: aset_akunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_akuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_akuns.
     */
    skip?: number
    distinct?: Aset_akunScalarFieldEnum | Aset_akunScalarFieldEnum[]
  }

  /**
   * aset_akun create
   */
  export type aset_akunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * The data needed to create a aset_akun.
     */
    data?: XOR<aset_akunCreateInput, aset_akunUncheckedCreateInput>
  }

  /**
   * aset_akun createMany
   */
  export type aset_akunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aset_akuns.
     */
    data: aset_akunCreateManyInput | aset_akunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aset_akun update
   */
  export type aset_akunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * The data needed to update a aset_akun.
     */
    data: XOR<aset_akunUpdateInput, aset_akunUncheckedUpdateInput>
    /**
     * Choose, which aset_akun to update.
     */
    where: aset_akunWhereUniqueInput
  }

  /**
   * aset_akun updateMany
   */
  export type aset_akunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aset_akuns.
     */
    data: XOR<aset_akunUpdateManyMutationInput, aset_akunUncheckedUpdateManyInput>
    /**
     * Filter which aset_akuns to update
     */
    where?: aset_akunWhereInput
  }

  /**
   * aset_akun upsert
   */
  export type aset_akunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * The filter to search for the aset_akun to update in case it exists.
     */
    where: aset_akunWhereUniqueInput
    /**
     * In case the aset_akun found by the `where` argument doesn't exist, create a new aset_akun with this data.
     */
    create: XOR<aset_akunCreateInput, aset_akunUncheckedCreateInput>
    /**
     * In case the aset_akun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aset_akunUpdateInput, aset_akunUncheckedUpdateInput>
  }

  /**
   * aset_akun delete
   */
  export type aset_akunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
    /**
     * Filter which aset_akun to delete.
     */
    where: aset_akunWhereUniqueInput
  }

  /**
   * aset_akun deleteMany
   */
  export type aset_akunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_akuns to delete
     */
    where?: aset_akunWhereInput
  }

  /**
   * aset_akun without action
   */
  export type aset_akunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_akun
     */
    select?: aset_akunSelect<ExtArgs> | null
  }


  /**
   * Model aset_user
   */

  export type AggregateAset_user = {
    _count: Aset_userCountAggregateOutputType | null
    _min: Aset_userMinAggregateOutputType | null
    _max: Aset_userMaxAggregateOutputType | null
  }

  export type Aset_userMinAggregateOutputType = {
    id: string | null
  }

  export type Aset_userMaxAggregateOutputType = {
    id: string | null
  }

  export type Aset_userCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Aset_userMinAggregateInputType = {
    id?: true
  }

  export type Aset_userMaxAggregateInputType = {
    id?: true
  }

  export type Aset_userCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Aset_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_user to aggregate.
     */
    where?: aset_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_users to fetch.
     */
    orderBy?: aset_userOrderByWithRelationInput | aset_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aset_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aset_users
    **/
    _count?: true | Aset_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aset_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aset_userMaxAggregateInputType
  }

  export type GetAset_userAggregateType<T extends Aset_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAset_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAset_user[P]>
      : GetScalarType<T[P], AggregateAset_user[P]>
  }




  export type aset_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aset_userWhereInput
    orderBy?: aset_userOrderByWithAggregationInput | aset_userOrderByWithAggregationInput[]
    by: Aset_userScalarFieldEnum[] | Aset_userScalarFieldEnum
    having?: aset_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aset_userCountAggregateInputType | true
    _min?: Aset_userMinAggregateInputType
    _max?: Aset_userMaxAggregateInputType
  }

  export type Aset_userGroupByOutputType = {
    id: string
    _count: Aset_userCountAggregateOutputType | null
    _min: Aset_userMinAggregateOutputType | null
    _max: Aset_userMaxAggregateOutputType | null
  }

  type GetAset_userGroupByPayload<T extends aset_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aset_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aset_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aset_userGroupByOutputType[P]>
            : GetScalarType<T[P], Aset_userGroupByOutputType[P]>
        }
      >
    >


  export type aset_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["aset_user"]>

  export type aset_userSelectScalar = {
    id?: boolean
  }



  export type $aset_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aset_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["aset_user"]>
    composites: {}
  }


  type aset_userGetPayload<S extends boolean | null | undefined | aset_userDefaultArgs> = $Result.GetResult<Prisma.$aset_userPayload, S>

  type aset_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aset_userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Aset_userCountAggregateInputType | true
    }

  export interface aset_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aset_user'], meta: { name: 'aset_user' } }
    /**
     * Find zero or one Aset_user that matches the filter.
     * @param {aset_userFindUniqueArgs} args - Arguments to find a Aset_user
     * @example
     * // Get one Aset_user
     * const aset_user = await prisma.aset_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aset_userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userFindUniqueArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aset_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aset_userFindUniqueOrThrowArgs} args - Arguments to find a Aset_user
     * @example
     * // Get one Aset_user
     * const aset_user = await prisma.aset_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aset_userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aset_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userFindFirstArgs} args - Arguments to find a Aset_user
     * @example
     * // Get one Aset_user
     * const aset_user = await prisma.aset_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aset_userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userFindFirstArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aset_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userFindFirstOrThrowArgs} args - Arguments to find a Aset_user
     * @example
     * // Get one Aset_user
     * const aset_user = await prisma.aset_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aset_userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aset_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aset_users
     * const aset_users = await prisma.aset_user.findMany()
     * 
     * // Get first 10 Aset_users
     * const aset_users = await prisma.aset_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aset_userWithIdOnly = await prisma.aset_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aset_userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aset_user.
     * @param {aset_userCreateArgs} args - Arguments to create a Aset_user.
     * @example
     * // Create one Aset_user
     * const Aset_user = await prisma.aset_user.create({
     *   data: {
     *     // ... data to create a Aset_user
     *   }
     * })
     * 
    **/
    create<T extends aset_userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userCreateArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aset_users.
     *     @param {aset_userCreateManyArgs} args - Arguments to create many Aset_users.
     *     @example
     *     // Create many Aset_users
     *     const aset_user = await prisma.aset_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aset_userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aset_user.
     * @param {aset_userDeleteArgs} args - Arguments to delete one Aset_user.
     * @example
     * // Delete one Aset_user
     * const Aset_user = await prisma.aset_user.delete({
     *   where: {
     *     // ... filter to delete one Aset_user
     *   }
     * })
     * 
    **/
    delete<T extends aset_userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userDeleteArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aset_user.
     * @param {aset_userUpdateArgs} args - Arguments to update one Aset_user.
     * @example
     * // Update one Aset_user
     * const aset_user = await prisma.aset_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aset_userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userUpdateArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aset_users.
     * @param {aset_userDeleteManyArgs} args - Arguments to filter Aset_users to delete.
     * @example
     * // Delete a few Aset_users
     * const { count } = await prisma.aset_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aset_userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aset_userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aset_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aset_users
     * const aset_user = await prisma.aset_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aset_userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aset_user.
     * @param {aset_userUpsertArgs} args - Arguments to update or create a Aset_user.
     * @example
     * // Update or create a Aset_user
     * const aset_user = await prisma.aset_user.upsert({
     *   create: {
     *     // ... data to create a Aset_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aset_user we want to update
     *   }
     * })
    **/
    upsert<T extends aset_userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aset_userUpsertArgs<ExtArgs>>
    ): Prisma__aset_userClient<$Result.GetResult<Prisma.$aset_userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aset_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userCountArgs} args - Arguments to filter Aset_users to count.
     * @example
     * // Count the number of Aset_users
     * const count = await prisma.aset_user.count({
     *   where: {
     *     // ... the filter for the Aset_users we want to count
     *   }
     * })
    **/
    count<T extends aset_userCountArgs>(
      args?: Subset<T, aset_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aset_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aset_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aset_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Aset_userAggregateArgs>(args: Subset<T, Aset_userAggregateArgs>): Prisma.PrismaPromise<GetAset_userAggregateType<T>>

    /**
     * Group by Aset_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aset_userGroupByArgs} args - Group by arguments.
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
      T extends aset_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aset_userGroupByArgs['orderBy'] }
        : { orderBy?: aset_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aset_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAset_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aset_user model
   */
  readonly fields: aset_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aset_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aset_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aset_user model
   */ 
  interface aset_userFieldRefs {
    readonly id: FieldRef<"aset_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * aset_user findUnique
   */
  export type aset_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter, which aset_user to fetch.
     */
    where: aset_userWhereUniqueInput
  }

  /**
   * aset_user findUniqueOrThrow
   */
  export type aset_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter, which aset_user to fetch.
     */
    where: aset_userWhereUniqueInput
  }

  /**
   * aset_user findFirst
   */
  export type aset_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter, which aset_user to fetch.
     */
    where?: aset_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_users to fetch.
     */
    orderBy?: aset_userOrderByWithRelationInput | aset_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_users.
     */
    cursor?: aset_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_users.
     */
    distinct?: Aset_userScalarFieldEnum | Aset_userScalarFieldEnum[]
  }

  /**
   * aset_user findFirstOrThrow
   */
  export type aset_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter, which aset_user to fetch.
     */
    where?: aset_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_users to fetch.
     */
    orderBy?: aset_userOrderByWithRelationInput | aset_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aset_users.
     */
    cursor?: aset_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aset_users.
     */
    distinct?: Aset_userScalarFieldEnum | Aset_userScalarFieldEnum[]
  }

  /**
   * aset_user findMany
   */
  export type aset_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter, which aset_users to fetch.
     */
    where?: aset_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aset_users to fetch.
     */
    orderBy?: aset_userOrderByWithRelationInput | aset_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aset_users.
     */
    cursor?: aset_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aset_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aset_users.
     */
    skip?: number
    distinct?: Aset_userScalarFieldEnum | Aset_userScalarFieldEnum[]
  }

  /**
   * aset_user create
   */
  export type aset_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * The data needed to create a aset_user.
     */
    data?: XOR<aset_userCreateInput, aset_userUncheckedCreateInput>
  }

  /**
   * aset_user createMany
   */
  export type aset_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aset_users.
     */
    data: aset_userCreateManyInput | aset_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aset_user update
   */
  export type aset_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * The data needed to update a aset_user.
     */
    data: XOR<aset_userUpdateInput, aset_userUncheckedUpdateInput>
    /**
     * Choose, which aset_user to update.
     */
    where: aset_userWhereUniqueInput
  }

  /**
   * aset_user updateMany
   */
  export type aset_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aset_users.
     */
    data: XOR<aset_userUpdateManyMutationInput, aset_userUncheckedUpdateManyInput>
    /**
     * Filter which aset_users to update
     */
    where?: aset_userWhereInput
  }

  /**
   * aset_user upsert
   */
  export type aset_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * The filter to search for the aset_user to update in case it exists.
     */
    where: aset_userWhereUniqueInput
    /**
     * In case the aset_user found by the `where` argument doesn't exist, create a new aset_user with this data.
     */
    create: XOR<aset_userCreateInput, aset_userUncheckedCreateInput>
    /**
     * In case the aset_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aset_userUpdateInput, aset_userUncheckedUpdateInput>
  }

  /**
   * aset_user delete
   */
  export type aset_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
    /**
     * Filter which aset_user to delete.
     */
    where: aset_userWhereUniqueInput
  }

  /**
   * aset_user deleteMany
   */
  export type aset_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aset_users to delete
     */
    where?: aset_userWhereInput
  }

  /**
   * aset_user without action
   */
  export type aset_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aset_user
     */
    select?: aset_userSelect<ExtArgs> | null
  }


  /**
   * Model transaksi_jenis
   */

  export type AggregateTransaksi_jenis = {
    _count: Transaksi_jenisCountAggregateOutputType | null
    _min: Transaksi_jenisMinAggregateOutputType | null
    _max: Transaksi_jenisMaxAggregateOutputType | null
  }

  export type Transaksi_jenisMinAggregateOutputType = {
    id: string | null
  }

  export type Transaksi_jenisMaxAggregateOutputType = {
    id: string | null
  }

  export type Transaksi_jenisCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Transaksi_jenisMinAggregateInputType = {
    id?: true
  }

  export type Transaksi_jenisMaxAggregateInputType = {
    id?: true
  }

  export type Transaksi_jenisCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Transaksi_jenisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi_jenis to aggregate.
     */
    where?: transaksi_jenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_jenis to fetch.
     */
    orderBy?: transaksi_jenisOrderByWithRelationInput | transaksi_jenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksi_jenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksi_jenis
    **/
    _count?: true | Transaksi_jenisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaksi_jenisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaksi_jenisMaxAggregateInputType
  }

  export type GetTransaksi_jenisAggregateType<T extends Transaksi_jenisAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi_jenis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi_jenis[P]>
      : GetScalarType<T[P], AggregateTransaksi_jenis[P]>
  }




  export type transaksi_jenisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksi_jenisWhereInput
    orderBy?: transaksi_jenisOrderByWithAggregationInput | transaksi_jenisOrderByWithAggregationInput[]
    by: Transaksi_jenisScalarFieldEnum[] | Transaksi_jenisScalarFieldEnum
    having?: transaksi_jenisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaksi_jenisCountAggregateInputType | true
    _min?: Transaksi_jenisMinAggregateInputType
    _max?: Transaksi_jenisMaxAggregateInputType
  }

  export type Transaksi_jenisGroupByOutputType = {
    id: string
    _count: Transaksi_jenisCountAggregateOutputType | null
    _min: Transaksi_jenisMinAggregateOutputType | null
    _max: Transaksi_jenisMaxAggregateOutputType | null
  }

  type GetTransaksi_jenisGroupByPayload<T extends transaksi_jenisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaksi_jenisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaksi_jenisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaksi_jenisGroupByOutputType[P]>
            : GetScalarType<T[P], Transaksi_jenisGroupByOutputType[P]>
        }
      >
    >


  export type transaksi_jenisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["transaksi_jenis"]>

  export type transaksi_jenisSelectScalar = {
    id?: boolean
  }



  export type $transaksi_jenisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi_jenis"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["transaksi_jenis"]>
    composites: {}
  }


  type transaksi_jenisGetPayload<S extends boolean | null | undefined | transaksi_jenisDefaultArgs> = $Result.GetResult<Prisma.$transaksi_jenisPayload, S>

  type transaksi_jenisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transaksi_jenisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transaksi_jenisCountAggregateInputType | true
    }

  export interface transaksi_jenisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi_jenis'], meta: { name: 'transaksi_jenis' } }
    /**
     * Find zero or one Transaksi_jenis that matches the filter.
     * @param {transaksi_jenisFindUniqueArgs} args - Arguments to find a Transaksi_jenis
     * @example
     * // Get one Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transaksi_jenisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisFindUniqueArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaksi_jenis that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transaksi_jenisFindUniqueOrThrowArgs} args - Arguments to find a Transaksi_jenis
     * @example
     * // Get one Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transaksi_jenisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaksi_jenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisFindFirstArgs} args - Arguments to find a Transaksi_jenis
     * @example
     * // Get one Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transaksi_jenisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisFindFirstArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaksi_jenis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisFindFirstOrThrowArgs} args - Arguments to find a Transaksi_jenis
     * @example
     * // Get one Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transaksi_jenisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transaksi_jenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findMany()
     * 
     * // Get first 10 Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksi_jenisWithIdOnly = await prisma.transaksi_jenis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transaksi_jenisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaksi_jenis.
     * @param {transaksi_jenisCreateArgs} args - Arguments to create a Transaksi_jenis.
     * @example
     * // Create one Transaksi_jenis
     * const Transaksi_jenis = await prisma.transaksi_jenis.create({
     *   data: {
     *     // ... data to create a Transaksi_jenis
     *   }
     * })
     * 
    **/
    create<T extends transaksi_jenisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisCreateArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transaksi_jenis.
     *     @param {transaksi_jenisCreateManyArgs} args - Arguments to create many Transaksi_jenis.
     *     @example
     *     // Create many Transaksi_jenis
     *     const transaksi_jenis = await prisma.transaksi_jenis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transaksi_jenisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaksi_jenis.
     * @param {transaksi_jenisDeleteArgs} args - Arguments to delete one Transaksi_jenis.
     * @example
     * // Delete one Transaksi_jenis
     * const Transaksi_jenis = await prisma.transaksi_jenis.delete({
     *   where: {
     *     // ... filter to delete one Transaksi_jenis
     *   }
     * })
     * 
    **/
    delete<T extends transaksi_jenisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisDeleteArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaksi_jenis.
     * @param {transaksi_jenisUpdateArgs} args - Arguments to update one Transaksi_jenis.
     * @example
     * // Update one Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transaksi_jenisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisUpdateArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transaksi_jenis.
     * @param {transaksi_jenisDeleteManyArgs} args - Arguments to filter Transaksi_jenis to delete.
     * @example
     * // Delete a few Transaksi_jenis
     * const { count } = await prisma.transaksi_jenis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transaksi_jenisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_jenisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksi_jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transaksi_jenisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi_jenis.
     * @param {transaksi_jenisUpsertArgs} args - Arguments to update or create a Transaksi_jenis.
     * @example
     * // Update or create a Transaksi_jenis
     * const transaksi_jenis = await prisma.transaksi_jenis.upsert({
     *   create: {
     *     // ... data to create a Transaksi_jenis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi_jenis we want to update
     *   }
     * })
    **/
    upsert<T extends transaksi_jenisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_jenisUpsertArgs<ExtArgs>>
    ): Prisma__transaksi_jenisClient<$Result.GetResult<Prisma.$transaksi_jenisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transaksi_jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisCountArgs} args - Arguments to filter Transaksi_jenis to count.
     * @example
     * // Count the number of Transaksi_jenis
     * const count = await prisma.transaksi_jenis.count({
     *   where: {
     *     // ... the filter for the Transaksi_jenis we want to count
     *   }
     * })
    **/
    count<T extends transaksi_jenisCountArgs>(
      args?: Subset<T, transaksi_jenisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaksi_jenisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi_jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaksi_jenisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaksi_jenisAggregateArgs>(args: Subset<T, Transaksi_jenisAggregateArgs>): Prisma.PrismaPromise<GetTransaksi_jenisAggregateType<T>>

    /**
     * Group by Transaksi_jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_jenisGroupByArgs} args - Group by arguments.
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
      T extends transaksi_jenisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksi_jenisGroupByArgs['orderBy'] }
        : { orderBy?: transaksi_jenisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaksi_jenisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksi_jenisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi_jenis model
   */
  readonly fields: transaksi_jenisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi_jenis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksi_jenisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transaksi_jenis model
   */ 
  interface transaksi_jenisFieldRefs {
    readonly id: FieldRef<"transaksi_jenis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaksi_jenis findUnique
   */
  export type transaksi_jenisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_jenis to fetch.
     */
    where: transaksi_jenisWhereUniqueInput
  }

  /**
   * transaksi_jenis findUniqueOrThrow
   */
  export type transaksi_jenisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_jenis to fetch.
     */
    where: transaksi_jenisWhereUniqueInput
  }

  /**
   * transaksi_jenis findFirst
   */
  export type transaksi_jenisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_jenis to fetch.
     */
    where?: transaksi_jenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_jenis to fetch.
     */
    orderBy?: transaksi_jenisOrderByWithRelationInput | transaksi_jenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksi_jenis.
     */
    cursor?: transaksi_jenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksi_jenis.
     */
    distinct?: Transaksi_jenisScalarFieldEnum | Transaksi_jenisScalarFieldEnum[]
  }

  /**
   * transaksi_jenis findFirstOrThrow
   */
  export type transaksi_jenisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_jenis to fetch.
     */
    where?: transaksi_jenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_jenis to fetch.
     */
    orderBy?: transaksi_jenisOrderByWithRelationInput | transaksi_jenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksi_jenis.
     */
    cursor?: transaksi_jenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksi_jenis.
     */
    distinct?: Transaksi_jenisScalarFieldEnum | Transaksi_jenisScalarFieldEnum[]
  }

  /**
   * transaksi_jenis findMany
   */
  export type transaksi_jenisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_jenis to fetch.
     */
    where?: transaksi_jenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_jenis to fetch.
     */
    orderBy?: transaksi_jenisOrderByWithRelationInput | transaksi_jenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksi_jenis.
     */
    cursor?: transaksi_jenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_jenis.
     */
    skip?: number
    distinct?: Transaksi_jenisScalarFieldEnum | Transaksi_jenisScalarFieldEnum[]
  }

  /**
   * transaksi_jenis create
   */
  export type transaksi_jenisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * The data needed to create a transaksi_jenis.
     */
    data?: XOR<transaksi_jenisCreateInput, transaksi_jenisUncheckedCreateInput>
  }

  /**
   * transaksi_jenis createMany
   */
  export type transaksi_jenisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksi_jenis.
     */
    data: transaksi_jenisCreateManyInput | transaksi_jenisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi_jenis update
   */
  export type transaksi_jenisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * The data needed to update a transaksi_jenis.
     */
    data: XOR<transaksi_jenisUpdateInput, transaksi_jenisUncheckedUpdateInput>
    /**
     * Choose, which transaksi_jenis to update.
     */
    where: transaksi_jenisWhereUniqueInput
  }

  /**
   * transaksi_jenis updateMany
   */
  export type transaksi_jenisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksi_jenis.
     */
    data: XOR<transaksi_jenisUpdateManyMutationInput, transaksi_jenisUncheckedUpdateManyInput>
    /**
     * Filter which transaksi_jenis to update
     */
    where?: transaksi_jenisWhereInput
  }

  /**
   * transaksi_jenis upsert
   */
  export type transaksi_jenisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * The filter to search for the transaksi_jenis to update in case it exists.
     */
    where: transaksi_jenisWhereUniqueInput
    /**
     * In case the transaksi_jenis found by the `where` argument doesn't exist, create a new transaksi_jenis with this data.
     */
    create: XOR<transaksi_jenisCreateInput, transaksi_jenisUncheckedCreateInput>
    /**
     * In case the transaksi_jenis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksi_jenisUpdateInput, transaksi_jenisUncheckedUpdateInput>
  }

  /**
   * transaksi_jenis delete
   */
  export type transaksi_jenisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
    /**
     * Filter which transaksi_jenis to delete.
     */
    where: transaksi_jenisWhereUniqueInput
  }

  /**
   * transaksi_jenis deleteMany
   */
  export type transaksi_jenisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi_jenis to delete
     */
    where?: transaksi_jenisWhereInput
  }

  /**
   * transaksi_jenis without action
   */
  export type transaksi_jenisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_jenis
     */
    select?: transaksi_jenisSelect<ExtArgs> | null
  }


  /**
   * Model transaksi_kategori
   */

  export type AggregateTransaksi_kategori = {
    _count: Transaksi_kategoriCountAggregateOutputType | null
    _min: Transaksi_kategoriMinAggregateOutputType | null
    _max: Transaksi_kategoriMaxAggregateOutputType | null
  }

  export type Transaksi_kategoriMinAggregateOutputType = {
    id: string | null
  }

  export type Transaksi_kategoriMaxAggregateOutputType = {
    id: string | null
  }

  export type Transaksi_kategoriCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Transaksi_kategoriMinAggregateInputType = {
    id?: true
  }

  export type Transaksi_kategoriMaxAggregateInputType = {
    id?: true
  }

  export type Transaksi_kategoriCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Transaksi_kategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi_kategori to aggregate.
     */
    where?: transaksi_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_kategoris to fetch.
     */
    orderBy?: transaksi_kategoriOrderByWithRelationInput | transaksi_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksi_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksi_kategoris
    **/
    _count?: true | Transaksi_kategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaksi_kategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaksi_kategoriMaxAggregateInputType
  }

  export type GetTransaksi_kategoriAggregateType<T extends Transaksi_kategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi_kategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi_kategori[P]>
      : GetScalarType<T[P], AggregateTransaksi_kategori[P]>
  }




  export type transaksi_kategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksi_kategoriWhereInput
    orderBy?: transaksi_kategoriOrderByWithAggregationInput | transaksi_kategoriOrderByWithAggregationInput[]
    by: Transaksi_kategoriScalarFieldEnum[] | Transaksi_kategoriScalarFieldEnum
    having?: transaksi_kategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaksi_kategoriCountAggregateInputType | true
    _min?: Transaksi_kategoriMinAggregateInputType
    _max?: Transaksi_kategoriMaxAggregateInputType
  }

  export type Transaksi_kategoriGroupByOutputType = {
    id: string
    _count: Transaksi_kategoriCountAggregateOutputType | null
    _min: Transaksi_kategoriMinAggregateOutputType | null
    _max: Transaksi_kategoriMaxAggregateOutputType | null
  }

  type GetTransaksi_kategoriGroupByPayload<T extends transaksi_kategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaksi_kategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaksi_kategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaksi_kategoriGroupByOutputType[P]>
            : GetScalarType<T[P], Transaksi_kategoriGroupByOutputType[P]>
        }
      >
    >


  export type transaksi_kategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["transaksi_kategori"]>

  export type transaksi_kategoriSelectScalar = {
    id?: boolean
  }



  export type $transaksi_kategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi_kategori"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["transaksi_kategori"]>
    composites: {}
  }


  type transaksi_kategoriGetPayload<S extends boolean | null | undefined | transaksi_kategoriDefaultArgs> = $Result.GetResult<Prisma.$transaksi_kategoriPayload, S>

  type transaksi_kategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transaksi_kategoriFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transaksi_kategoriCountAggregateInputType | true
    }

  export interface transaksi_kategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi_kategori'], meta: { name: 'transaksi_kategori' } }
    /**
     * Find zero or one Transaksi_kategori that matches the filter.
     * @param {transaksi_kategoriFindUniqueArgs} args - Arguments to find a Transaksi_kategori
     * @example
     * // Get one Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transaksi_kategoriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriFindUniqueArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaksi_kategori that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transaksi_kategoriFindUniqueOrThrowArgs} args - Arguments to find a Transaksi_kategori
     * @example
     * // Get one Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transaksi_kategoriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaksi_kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriFindFirstArgs} args - Arguments to find a Transaksi_kategori
     * @example
     * // Get one Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transaksi_kategoriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriFindFirstArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaksi_kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriFindFirstOrThrowArgs} args - Arguments to find a Transaksi_kategori
     * @example
     * // Get one Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transaksi_kategoriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transaksi_kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksi_kategoris
     * const transaksi_kategoris = await prisma.transaksi_kategori.findMany()
     * 
     * // Get first 10 Transaksi_kategoris
     * const transaksi_kategoris = await prisma.transaksi_kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksi_kategoriWithIdOnly = await prisma.transaksi_kategori.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transaksi_kategoriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaksi_kategori.
     * @param {transaksi_kategoriCreateArgs} args - Arguments to create a Transaksi_kategori.
     * @example
     * // Create one Transaksi_kategori
     * const Transaksi_kategori = await prisma.transaksi_kategori.create({
     *   data: {
     *     // ... data to create a Transaksi_kategori
     *   }
     * })
     * 
    **/
    create<T extends transaksi_kategoriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriCreateArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transaksi_kategoris.
     *     @param {transaksi_kategoriCreateManyArgs} args - Arguments to create many Transaksi_kategoris.
     *     @example
     *     // Create many Transaksi_kategoris
     *     const transaksi_kategori = await prisma.transaksi_kategori.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transaksi_kategoriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaksi_kategori.
     * @param {transaksi_kategoriDeleteArgs} args - Arguments to delete one Transaksi_kategori.
     * @example
     * // Delete one Transaksi_kategori
     * const Transaksi_kategori = await prisma.transaksi_kategori.delete({
     *   where: {
     *     // ... filter to delete one Transaksi_kategori
     *   }
     * })
     * 
    **/
    delete<T extends transaksi_kategoriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriDeleteArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaksi_kategori.
     * @param {transaksi_kategoriUpdateArgs} args - Arguments to update one Transaksi_kategori.
     * @example
     * // Update one Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transaksi_kategoriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriUpdateArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transaksi_kategoris.
     * @param {transaksi_kategoriDeleteManyArgs} args - Arguments to filter Transaksi_kategoris to delete.
     * @example
     * // Delete a few Transaksi_kategoris
     * const { count } = await prisma.transaksi_kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transaksi_kategoriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaksi_kategoriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksi_kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksi_kategoris
     * const transaksi_kategori = await prisma.transaksi_kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transaksi_kategoriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi_kategori.
     * @param {transaksi_kategoriUpsertArgs} args - Arguments to update or create a Transaksi_kategori.
     * @example
     * // Update or create a Transaksi_kategori
     * const transaksi_kategori = await prisma.transaksi_kategori.upsert({
     *   create: {
     *     // ... data to create a Transaksi_kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi_kategori we want to update
     *   }
     * })
    **/
    upsert<T extends transaksi_kategoriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transaksi_kategoriUpsertArgs<ExtArgs>>
    ): Prisma__transaksi_kategoriClient<$Result.GetResult<Prisma.$transaksi_kategoriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transaksi_kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriCountArgs} args - Arguments to filter Transaksi_kategoris to count.
     * @example
     * // Count the number of Transaksi_kategoris
     * const count = await prisma.transaksi_kategori.count({
     *   where: {
     *     // ... the filter for the Transaksi_kategoris we want to count
     *   }
     * })
    **/
    count<T extends transaksi_kategoriCountArgs>(
      args?: Subset<T, transaksi_kategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaksi_kategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi_kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaksi_kategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaksi_kategoriAggregateArgs>(args: Subset<T, Transaksi_kategoriAggregateArgs>): Prisma.PrismaPromise<GetTransaksi_kategoriAggregateType<T>>

    /**
     * Group by Transaksi_kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksi_kategoriGroupByArgs} args - Group by arguments.
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
      T extends transaksi_kategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksi_kategoriGroupByArgs['orderBy'] }
        : { orderBy?: transaksi_kategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaksi_kategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksi_kategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi_kategori model
   */
  readonly fields: transaksi_kategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi_kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksi_kategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transaksi_kategori model
   */ 
  interface transaksi_kategoriFieldRefs {
    readonly id: FieldRef<"transaksi_kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaksi_kategori findUnique
   */
  export type transaksi_kategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_kategori to fetch.
     */
    where: transaksi_kategoriWhereUniqueInput
  }

  /**
   * transaksi_kategori findUniqueOrThrow
   */
  export type transaksi_kategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_kategori to fetch.
     */
    where: transaksi_kategoriWhereUniqueInput
  }

  /**
   * transaksi_kategori findFirst
   */
  export type transaksi_kategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_kategori to fetch.
     */
    where?: transaksi_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_kategoris to fetch.
     */
    orderBy?: transaksi_kategoriOrderByWithRelationInput | transaksi_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksi_kategoris.
     */
    cursor?: transaksi_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksi_kategoris.
     */
    distinct?: Transaksi_kategoriScalarFieldEnum | Transaksi_kategoriScalarFieldEnum[]
  }

  /**
   * transaksi_kategori findFirstOrThrow
   */
  export type transaksi_kategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_kategori to fetch.
     */
    where?: transaksi_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_kategoris to fetch.
     */
    orderBy?: transaksi_kategoriOrderByWithRelationInput | transaksi_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksi_kategoris.
     */
    cursor?: transaksi_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksi_kategoris.
     */
    distinct?: Transaksi_kategoriScalarFieldEnum | Transaksi_kategoriScalarFieldEnum[]
  }

  /**
   * transaksi_kategori findMany
   */
  export type transaksi_kategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter, which transaksi_kategoris to fetch.
     */
    where?: transaksi_kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksi_kategoris to fetch.
     */
    orderBy?: transaksi_kategoriOrderByWithRelationInput | transaksi_kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksi_kategoris.
     */
    cursor?: transaksi_kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksi_kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksi_kategoris.
     */
    skip?: number
    distinct?: Transaksi_kategoriScalarFieldEnum | Transaksi_kategoriScalarFieldEnum[]
  }

  /**
   * transaksi_kategori create
   */
  export type transaksi_kategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * The data needed to create a transaksi_kategori.
     */
    data?: XOR<transaksi_kategoriCreateInput, transaksi_kategoriUncheckedCreateInput>
  }

  /**
   * transaksi_kategori createMany
   */
  export type transaksi_kategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksi_kategoris.
     */
    data: transaksi_kategoriCreateManyInput | transaksi_kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi_kategori update
   */
  export type transaksi_kategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * The data needed to update a transaksi_kategori.
     */
    data: XOR<transaksi_kategoriUpdateInput, transaksi_kategoriUncheckedUpdateInput>
    /**
     * Choose, which transaksi_kategori to update.
     */
    where: transaksi_kategoriWhereUniqueInput
  }

  /**
   * transaksi_kategori updateMany
   */
  export type transaksi_kategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksi_kategoris.
     */
    data: XOR<transaksi_kategoriUpdateManyMutationInput, transaksi_kategoriUncheckedUpdateManyInput>
    /**
     * Filter which transaksi_kategoris to update
     */
    where?: transaksi_kategoriWhereInput
  }

  /**
   * transaksi_kategori upsert
   */
  export type transaksi_kategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * The filter to search for the transaksi_kategori to update in case it exists.
     */
    where: transaksi_kategoriWhereUniqueInput
    /**
     * In case the transaksi_kategori found by the `where` argument doesn't exist, create a new transaksi_kategori with this data.
     */
    create: XOR<transaksi_kategoriCreateInput, transaksi_kategoriUncheckedCreateInput>
    /**
     * In case the transaksi_kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksi_kategoriUpdateInput, transaksi_kategoriUncheckedUpdateInput>
  }

  /**
   * transaksi_kategori delete
   */
  export type transaksi_kategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
    /**
     * Filter which transaksi_kategori to delete.
     */
    where: transaksi_kategoriWhereUniqueInput
  }

  /**
   * transaksi_kategori deleteMany
   */
  export type transaksi_kategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi_kategoris to delete
     */
    where?: transaksi_kategoriWhereInput
  }

  /**
   * transaksi_kategori without action
   */
  export type transaksi_kategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi_kategori
     */
    select?: transaksi_kategoriSelect<ExtArgs> | null
  }


  /**
   * Model transasksi_subkategori
   */

  export type AggregateTransasksi_subkategori = {
    _count: Transasksi_subkategoriCountAggregateOutputType | null
    _min: Transasksi_subkategoriMinAggregateOutputType | null
    _max: Transasksi_subkategoriMaxAggregateOutputType | null
  }

  export type Transasksi_subkategoriMinAggregateOutputType = {
    id: string | null
  }

  export type Transasksi_subkategoriMaxAggregateOutputType = {
    id: string | null
  }

  export type Transasksi_subkategoriCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type Transasksi_subkategoriMinAggregateInputType = {
    id?: true
  }

  export type Transasksi_subkategoriMaxAggregateInputType = {
    id?: true
  }

  export type Transasksi_subkategoriCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type Transasksi_subkategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transasksi_subkategori to aggregate.
     */
    where?: transasksi_subkategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksi_subkategoris to fetch.
     */
    orderBy?: transasksi_subkategoriOrderByWithRelationInput | transasksi_subkategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transasksi_subkategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksi_subkategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksi_subkategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transasksi_subkategoris
    **/
    _count?: true | Transasksi_subkategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transasksi_subkategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transasksi_subkategoriMaxAggregateInputType
  }

  export type GetTransasksi_subkategoriAggregateType<T extends Transasksi_subkategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateTransasksi_subkategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransasksi_subkategori[P]>
      : GetScalarType<T[P], AggregateTransasksi_subkategori[P]>
  }




  export type transasksi_subkategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transasksi_subkategoriWhereInput
    orderBy?: transasksi_subkategoriOrderByWithAggregationInput | transasksi_subkategoriOrderByWithAggregationInput[]
    by: Transasksi_subkategoriScalarFieldEnum[] | Transasksi_subkategoriScalarFieldEnum
    having?: transasksi_subkategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transasksi_subkategoriCountAggregateInputType | true
    _min?: Transasksi_subkategoriMinAggregateInputType
    _max?: Transasksi_subkategoriMaxAggregateInputType
  }

  export type Transasksi_subkategoriGroupByOutputType = {
    id: string
    _count: Transasksi_subkategoriCountAggregateOutputType | null
    _min: Transasksi_subkategoriMinAggregateOutputType | null
    _max: Transasksi_subkategoriMaxAggregateOutputType | null
  }

  type GetTransasksi_subkategoriGroupByPayload<T extends transasksi_subkategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transasksi_subkategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transasksi_subkategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transasksi_subkategoriGroupByOutputType[P]>
            : GetScalarType<T[P], Transasksi_subkategoriGroupByOutputType[P]>
        }
      >
    >


  export type transasksi_subkategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["transasksi_subkategori"]>

  export type transasksi_subkategoriSelectScalar = {
    id?: boolean
  }



  export type $transasksi_subkategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transasksi_subkategori"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["transasksi_subkategori"]>
    composites: {}
  }


  type transasksi_subkategoriGetPayload<S extends boolean | null | undefined | transasksi_subkategoriDefaultArgs> = $Result.GetResult<Prisma.$transasksi_subkategoriPayload, S>

  type transasksi_subkategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transasksi_subkategoriFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transasksi_subkategoriCountAggregateInputType | true
    }

  export interface transasksi_subkategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transasksi_subkategori'], meta: { name: 'transasksi_subkategori' } }
    /**
     * Find zero or one Transasksi_subkategori that matches the filter.
     * @param {transasksi_subkategoriFindUniqueArgs} args - Arguments to find a Transasksi_subkategori
     * @example
     * // Get one Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transasksi_subkategoriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriFindUniqueArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transasksi_subkategori that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transasksi_subkategoriFindUniqueOrThrowArgs} args - Arguments to find a Transasksi_subkategori
     * @example
     * // Get one Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transasksi_subkategoriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transasksi_subkategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriFindFirstArgs} args - Arguments to find a Transasksi_subkategori
     * @example
     * // Get one Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transasksi_subkategoriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriFindFirstArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transasksi_subkategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriFindFirstOrThrowArgs} args - Arguments to find a Transasksi_subkategori
     * @example
     * // Get one Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transasksi_subkategoriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transasksi_subkategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transasksi_subkategoris
     * const transasksi_subkategoris = await prisma.transasksi_subkategori.findMany()
     * 
     * // Get first 10 Transasksi_subkategoris
     * const transasksi_subkategoris = await prisma.transasksi_subkategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transasksi_subkategoriWithIdOnly = await prisma.transasksi_subkategori.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transasksi_subkategoriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transasksi_subkategori.
     * @param {transasksi_subkategoriCreateArgs} args - Arguments to create a Transasksi_subkategori.
     * @example
     * // Create one Transasksi_subkategori
     * const Transasksi_subkategori = await prisma.transasksi_subkategori.create({
     *   data: {
     *     // ... data to create a Transasksi_subkategori
     *   }
     * })
     * 
    **/
    create<T extends transasksi_subkategoriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriCreateArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transasksi_subkategoris.
     *     @param {transasksi_subkategoriCreateManyArgs} args - Arguments to create many Transasksi_subkategoris.
     *     @example
     *     // Create many Transasksi_subkategoris
     *     const transasksi_subkategori = await prisma.transasksi_subkategori.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transasksi_subkategoriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transasksi_subkategori.
     * @param {transasksi_subkategoriDeleteArgs} args - Arguments to delete one Transasksi_subkategori.
     * @example
     * // Delete one Transasksi_subkategori
     * const Transasksi_subkategori = await prisma.transasksi_subkategori.delete({
     *   where: {
     *     // ... filter to delete one Transasksi_subkategori
     *   }
     * })
     * 
    **/
    delete<T extends transasksi_subkategoriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriDeleteArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transasksi_subkategori.
     * @param {transasksi_subkategoriUpdateArgs} args - Arguments to update one Transasksi_subkategori.
     * @example
     * // Update one Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transasksi_subkategoriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriUpdateArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transasksi_subkategoris.
     * @param {transasksi_subkategoriDeleteManyArgs} args - Arguments to filter Transasksi_subkategoris to delete.
     * @example
     * // Delete a few Transasksi_subkategoris
     * const { count } = await prisma.transasksi_subkategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transasksi_subkategoriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksi_subkategoriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transasksi_subkategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transasksi_subkategoris
     * const transasksi_subkategori = await prisma.transasksi_subkategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transasksi_subkategoriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transasksi_subkategori.
     * @param {transasksi_subkategoriUpsertArgs} args - Arguments to update or create a Transasksi_subkategori.
     * @example
     * // Update or create a Transasksi_subkategori
     * const transasksi_subkategori = await prisma.transasksi_subkategori.upsert({
     *   create: {
     *     // ... data to create a Transasksi_subkategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transasksi_subkategori we want to update
     *   }
     * })
    **/
    upsert<T extends transasksi_subkategoriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transasksi_subkategoriUpsertArgs<ExtArgs>>
    ): Prisma__transasksi_subkategoriClient<$Result.GetResult<Prisma.$transasksi_subkategoriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transasksi_subkategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriCountArgs} args - Arguments to filter Transasksi_subkategoris to count.
     * @example
     * // Count the number of Transasksi_subkategoris
     * const count = await prisma.transasksi_subkategori.count({
     *   where: {
     *     // ... the filter for the Transasksi_subkategoris we want to count
     *   }
     * })
    **/
    count<T extends transasksi_subkategoriCountArgs>(
      args?: Subset<T, transasksi_subkategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transasksi_subkategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transasksi_subkategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transasksi_subkategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transasksi_subkategoriAggregateArgs>(args: Subset<T, Transasksi_subkategoriAggregateArgs>): Prisma.PrismaPromise<GetTransasksi_subkategoriAggregateType<T>>

    /**
     * Group by Transasksi_subkategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksi_subkategoriGroupByArgs} args - Group by arguments.
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
      T extends transasksi_subkategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transasksi_subkategoriGroupByArgs['orderBy'] }
        : { orderBy?: transasksi_subkategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transasksi_subkategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransasksi_subkategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transasksi_subkategori model
   */
  readonly fields: transasksi_subkategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transasksi_subkategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transasksi_subkategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transasksi_subkategori model
   */ 
  interface transasksi_subkategoriFieldRefs {
    readonly id: FieldRef<"transasksi_subkategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transasksi_subkategori findUnique
   */
  export type transasksi_subkategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter, which transasksi_subkategori to fetch.
     */
    where: transasksi_subkategoriWhereUniqueInput
  }

  /**
   * transasksi_subkategori findUniqueOrThrow
   */
  export type transasksi_subkategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter, which transasksi_subkategori to fetch.
     */
    where: transasksi_subkategoriWhereUniqueInput
  }

  /**
   * transasksi_subkategori findFirst
   */
  export type transasksi_subkategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter, which transasksi_subkategori to fetch.
     */
    where?: transasksi_subkategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksi_subkategoris to fetch.
     */
    orderBy?: transasksi_subkategoriOrderByWithRelationInput | transasksi_subkategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transasksi_subkategoris.
     */
    cursor?: transasksi_subkategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksi_subkategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksi_subkategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transasksi_subkategoris.
     */
    distinct?: Transasksi_subkategoriScalarFieldEnum | Transasksi_subkategoriScalarFieldEnum[]
  }

  /**
   * transasksi_subkategori findFirstOrThrow
   */
  export type transasksi_subkategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter, which transasksi_subkategori to fetch.
     */
    where?: transasksi_subkategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksi_subkategoris to fetch.
     */
    orderBy?: transasksi_subkategoriOrderByWithRelationInput | transasksi_subkategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transasksi_subkategoris.
     */
    cursor?: transasksi_subkategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksi_subkategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksi_subkategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transasksi_subkategoris.
     */
    distinct?: Transasksi_subkategoriScalarFieldEnum | Transasksi_subkategoriScalarFieldEnum[]
  }

  /**
   * transasksi_subkategori findMany
   */
  export type transasksi_subkategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter, which transasksi_subkategoris to fetch.
     */
    where?: transasksi_subkategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksi_subkategoris to fetch.
     */
    orderBy?: transasksi_subkategoriOrderByWithRelationInput | transasksi_subkategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transasksi_subkategoris.
     */
    cursor?: transasksi_subkategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksi_subkategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksi_subkategoris.
     */
    skip?: number
    distinct?: Transasksi_subkategoriScalarFieldEnum | Transasksi_subkategoriScalarFieldEnum[]
  }

  /**
   * transasksi_subkategori create
   */
  export type transasksi_subkategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * The data needed to create a transasksi_subkategori.
     */
    data?: XOR<transasksi_subkategoriCreateInput, transasksi_subkategoriUncheckedCreateInput>
  }

  /**
   * transasksi_subkategori createMany
   */
  export type transasksi_subkategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transasksi_subkategoris.
     */
    data: transasksi_subkategoriCreateManyInput | transasksi_subkategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transasksi_subkategori update
   */
  export type transasksi_subkategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * The data needed to update a transasksi_subkategori.
     */
    data: XOR<transasksi_subkategoriUpdateInput, transasksi_subkategoriUncheckedUpdateInput>
    /**
     * Choose, which transasksi_subkategori to update.
     */
    where: transasksi_subkategoriWhereUniqueInput
  }

  /**
   * transasksi_subkategori updateMany
   */
  export type transasksi_subkategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transasksi_subkategoris.
     */
    data: XOR<transasksi_subkategoriUpdateManyMutationInput, transasksi_subkategoriUncheckedUpdateManyInput>
    /**
     * Filter which transasksi_subkategoris to update
     */
    where?: transasksi_subkategoriWhereInput
  }

  /**
   * transasksi_subkategori upsert
   */
  export type transasksi_subkategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * The filter to search for the transasksi_subkategori to update in case it exists.
     */
    where: transasksi_subkategoriWhereUniqueInput
    /**
     * In case the transasksi_subkategori found by the `where` argument doesn't exist, create a new transasksi_subkategori with this data.
     */
    create: XOR<transasksi_subkategoriCreateInput, transasksi_subkategoriUncheckedCreateInput>
    /**
     * In case the transasksi_subkategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transasksi_subkategoriUpdateInput, transasksi_subkategoriUncheckedUpdateInput>
  }

  /**
   * transasksi_subkategori delete
   */
  export type transasksi_subkategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
    /**
     * Filter which transasksi_subkategori to delete.
     */
    where: transasksi_subkategoriWhereUniqueInput
  }

  /**
   * transasksi_subkategori deleteMany
   */
  export type transasksi_subkategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transasksi_subkategoris to delete
     */
    where?: transasksi_subkategoriWhereInput
  }

  /**
   * transasksi_subkategori without action
   */
  export type transasksi_subkategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi_subkategori
     */
    select?: transasksi_subkategoriSelect<ExtArgs> | null
  }


  /**
   * Model transasksi
   */

  export type AggregateTransasksi = {
    _count: TransasksiCountAggregateOutputType | null
    _min: TransasksiMinAggregateOutputType | null
    _max: TransasksiMaxAggregateOutputType | null
  }

  export type TransasksiMinAggregateOutputType = {
    id: string | null
  }

  export type TransasksiMaxAggregateOutputType = {
    id: string | null
  }

  export type TransasksiCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TransasksiMinAggregateInputType = {
    id?: true
  }

  export type TransasksiMaxAggregateInputType = {
    id?: true
  }

  export type TransasksiCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TransasksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transasksi to aggregate.
     */
    where?: transasksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksis to fetch.
     */
    orderBy?: transasksiOrderByWithRelationInput | transasksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transasksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transasksis
    **/
    _count?: true | TransasksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransasksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransasksiMaxAggregateInputType
  }

  export type GetTransasksiAggregateType<T extends TransasksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransasksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransasksi[P]>
      : GetScalarType<T[P], AggregateTransasksi[P]>
  }




  export type transasksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transasksiWhereInput
    orderBy?: transasksiOrderByWithAggregationInput | transasksiOrderByWithAggregationInput[]
    by: TransasksiScalarFieldEnum[] | TransasksiScalarFieldEnum
    having?: transasksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransasksiCountAggregateInputType | true
    _min?: TransasksiMinAggregateInputType
    _max?: TransasksiMaxAggregateInputType
  }

  export type TransasksiGroupByOutputType = {
    id: string
    _count: TransasksiCountAggregateOutputType | null
    _min: TransasksiMinAggregateOutputType | null
    _max: TransasksiMaxAggregateOutputType | null
  }

  type GetTransasksiGroupByPayload<T extends transasksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransasksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransasksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransasksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransasksiGroupByOutputType[P]>
        }
      >
    >


  export type transasksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["transasksi"]>

  export type transasksiSelectScalar = {
    id?: boolean
  }



  export type $transasksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transasksi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["transasksi"]>
    composites: {}
  }


  type transasksiGetPayload<S extends boolean | null | undefined | transasksiDefaultArgs> = $Result.GetResult<Prisma.$transasksiPayload, S>

  type transasksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transasksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransasksiCountAggregateInputType | true
    }

  export interface transasksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transasksi'], meta: { name: 'transasksi' } }
    /**
     * Find zero or one Transasksi that matches the filter.
     * @param {transasksiFindUniqueArgs} args - Arguments to find a Transasksi
     * @example
     * // Get one Transasksi
     * const transasksi = await prisma.transasksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transasksiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiFindUniqueArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transasksi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transasksiFindUniqueOrThrowArgs} args - Arguments to find a Transasksi
     * @example
     * // Get one Transasksi
     * const transasksi = await prisma.transasksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transasksiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transasksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiFindFirstArgs} args - Arguments to find a Transasksi
     * @example
     * // Get one Transasksi
     * const transasksi = await prisma.transasksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transasksiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiFindFirstArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transasksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiFindFirstOrThrowArgs} args - Arguments to find a Transasksi
     * @example
     * // Get one Transasksi
     * const transasksi = await prisma.transasksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transasksiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transasksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transasksis
     * const transasksis = await prisma.transasksi.findMany()
     * 
     * // Get first 10 Transasksis
     * const transasksis = await prisma.transasksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transasksiWithIdOnly = await prisma.transasksi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transasksiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transasksi.
     * @param {transasksiCreateArgs} args - Arguments to create a Transasksi.
     * @example
     * // Create one Transasksi
     * const Transasksi = await prisma.transasksi.create({
     *   data: {
     *     // ... data to create a Transasksi
     *   }
     * })
     * 
    **/
    create<T extends transasksiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiCreateArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transasksis.
     *     @param {transasksiCreateManyArgs} args - Arguments to create many Transasksis.
     *     @example
     *     // Create many Transasksis
     *     const transasksi = await prisma.transasksi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transasksiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transasksi.
     * @param {transasksiDeleteArgs} args - Arguments to delete one Transasksi.
     * @example
     * // Delete one Transasksi
     * const Transasksi = await prisma.transasksi.delete({
     *   where: {
     *     // ... filter to delete one Transasksi
     *   }
     * })
     * 
    **/
    delete<T extends transasksiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiDeleteArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transasksi.
     * @param {transasksiUpdateArgs} args - Arguments to update one Transasksi.
     * @example
     * // Update one Transasksi
     * const transasksi = await prisma.transasksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transasksiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiUpdateArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transasksis.
     * @param {transasksiDeleteManyArgs} args - Arguments to filter Transasksis to delete.
     * @example
     * // Delete a few Transasksis
     * const { count } = await prisma.transasksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transasksiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transasksiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transasksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transasksis
     * const transasksi = await prisma.transasksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transasksiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transasksi.
     * @param {transasksiUpsertArgs} args - Arguments to update or create a Transasksi.
     * @example
     * // Update or create a Transasksi
     * const transasksi = await prisma.transasksi.upsert({
     *   create: {
     *     // ... data to create a Transasksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transasksi we want to update
     *   }
     * })
    **/
    upsert<T extends transasksiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transasksiUpsertArgs<ExtArgs>>
    ): Prisma__transasksiClient<$Result.GetResult<Prisma.$transasksiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transasksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiCountArgs} args - Arguments to filter Transasksis to count.
     * @example
     * // Count the number of Transasksis
     * const count = await prisma.transasksi.count({
     *   where: {
     *     // ... the filter for the Transasksis we want to count
     *   }
     * })
    **/
    count<T extends transasksiCountArgs>(
      args?: Subset<T, transasksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransasksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transasksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransasksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransasksiAggregateArgs>(args: Subset<T, TransasksiAggregateArgs>): Prisma.PrismaPromise<GetTransasksiAggregateType<T>>

    /**
     * Group by Transasksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transasksiGroupByArgs} args - Group by arguments.
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
      T extends transasksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transasksiGroupByArgs['orderBy'] }
        : { orderBy?: transasksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transasksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransasksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transasksi model
   */
  readonly fields: transasksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transasksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transasksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transasksi model
   */ 
  interface transasksiFieldRefs {
    readonly id: FieldRef<"transasksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transasksi findUnique
   */
  export type transasksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter, which transasksi to fetch.
     */
    where: transasksiWhereUniqueInput
  }

  /**
   * transasksi findUniqueOrThrow
   */
  export type transasksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter, which transasksi to fetch.
     */
    where: transasksiWhereUniqueInput
  }

  /**
   * transasksi findFirst
   */
  export type transasksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter, which transasksi to fetch.
     */
    where?: transasksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksis to fetch.
     */
    orderBy?: transasksiOrderByWithRelationInput | transasksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transasksis.
     */
    cursor?: transasksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transasksis.
     */
    distinct?: TransasksiScalarFieldEnum | TransasksiScalarFieldEnum[]
  }

  /**
   * transasksi findFirstOrThrow
   */
  export type transasksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter, which transasksi to fetch.
     */
    where?: transasksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksis to fetch.
     */
    orderBy?: transasksiOrderByWithRelationInput | transasksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transasksis.
     */
    cursor?: transasksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transasksis.
     */
    distinct?: TransasksiScalarFieldEnum | TransasksiScalarFieldEnum[]
  }

  /**
   * transasksi findMany
   */
  export type transasksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter, which transasksis to fetch.
     */
    where?: transasksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transasksis to fetch.
     */
    orderBy?: transasksiOrderByWithRelationInput | transasksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transasksis.
     */
    cursor?: transasksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transasksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transasksis.
     */
    skip?: number
    distinct?: TransasksiScalarFieldEnum | TransasksiScalarFieldEnum[]
  }

  /**
   * transasksi create
   */
  export type transasksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * The data needed to create a transasksi.
     */
    data?: XOR<transasksiCreateInput, transasksiUncheckedCreateInput>
  }

  /**
   * transasksi createMany
   */
  export type transasksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transasksis.
     */
    data: transasksiCreateManyInput | transasksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transasksi update
   */
  export type transasksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * The data needed to update a transasksi.
     */
    data: XOR<transasksiUpdateInput, transasksiUncheckedUpdateInput>
    /**
     * Choose, which transasksi to update.
     */
    where: transasksiWhereUniqueInput
  }

  /**
   * transasksi updateMany
   */
  export type transasksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transasksis.
     */
    data: XOR<transasksiUpdateManyMutationInput, transasksiUncheckedUpdateManyInput>
    /**
     * Filter which transasksis to update
     */
    where?: transasksiWhereInput
  }

  /**
   * transasksi upsert
   */
  export type transasksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * The filter to search for the transasksi to update in case it exists.
     */
    where: transasksiWhereUniqueInput
    /**
     * In case the transasksi found by the `where` argument doesn't exist, create a new transasksi with this data.
     */
    create: XOR<transasksiCreateInput, transasksiUncheckedCreateInput>
    /**
     * In case the transasksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transasksiUpdateInput, transasksiUncheckedUpdateInput>
  }

  /**
   * transasksi delete
   */
  export type transasksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
    /**
     * Filter which transasksi to delete.
     */
    where: transasksiWhereUniqueInput
  }

  /**
   * transasksi deleteMany
   */
  export type transasksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transasksis to delete
     */
    where?: transasksiWhereInput
  }

  /**
   * transasksi without action
   */
  export type transasksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transasksi
     */
    select?: transasksiSelect<ExtArgs> | null
  }


  /**
   * Model hutang
   */

  export type AggregateHutang = {
    _count: HutangCountAggregateOutputType | null
    _min: HutangMinAggregateOutputType | null
    _max: HutangMaxAggregateOutputType | null
  }

  export type HutangMinAggregateOutputType = {
    id: string | null
  }

  export type HutangMaxAggregateOutputType = {
    id: string | null
  }

  export type HutangCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type HutangMinAggregateInputType = {
    id?: true
  }

  export type HutangMaxAggregateInputType = {
    id?: true
  }

  export type HutangCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type HutangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hutang to aggregate.
     */
    where?: hutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hutangs to fetch.
     */
    orderBy?: hutangOrderByWithRelationInput | hutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hutangs
    **/
    _count?: true | HutangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HutangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HutangMaxAggregateInputType
  }

  export type GetHutangAggregateType<T extends HutangAggregateArgs> = {
        [P in keyof T & keyof AggregateHutang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHutang[P]>
      : GetScalarType<T[P], AggregateHutang[P]>
  }




  export type hutangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hutangWhereInput
    orderBy?: hutangOrderByWithAggregationInput | hutangOrderByWithAggregationInput[]
    by: HutangScalarFieldEnum[] | HutangScalarFieldEnum
    having?: hutangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HutangCountAggregateInputType | true
    _min?: HutangMinAggregateInputType
    _max?: HutangMaxAggregateInputType
  }

  export type HutangGroupByOutputType = {
    id: string
    _count: HutangCountAggregateOutputType | null
    _min: HutangMinAggregateOutputType | null
    _max: HutangMaxAggregateOutputType | null
  }

  type GetHutangGroupByPayload<T extends hutangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HutangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HutangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HutangGroupByOutputType[P]>
            : GetScalarType<T[P], HutangGroupByOutputType[P]>
        }
      >
    >


  export type hutangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["hutang"]>

  export type hutangSelectScalar = {
    id?: boolean
  }



  export type $hutangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hutang"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["hutang"]>
    composites: {}
  }


  type hutangGetPayload<S extends boolean | null | undefined | hutangDefaultArgs> = $Result.GetResult<Prisma.$hutangPayload, S>

  type hutangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hutangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HutangCountAggregateInputType | true
    }

  export interface hutangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hutang'], meta: { name: 'hutang' } }
    /**
     * Find zero or one Hutang that matches the filter.
     * @param {hutangFindUniqueArgs} args - Arguments to find a Hutang
     * @example
     * // Get one Hutang
     * const hutang = await prisma.hutang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hutangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hutangFindUniqueArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hutang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {hutangFindUniqueOrThrowArgs} args - Arguments to find a Hutang
     * @example
     * // Get one Hutang
     * const hutang = await prisma.hutang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hutangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hutang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangFindFirstArgs} args - Arguments to find a Hutang
     * @example
     * // Get one Hutang
     * const hutang = await prisma.hutang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hutangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangFindFirstArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hutang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangFindFirstOrThrowArgs} args - Arguments to find a Hutang
     * @example
     * // Get one Hutang
     * const hutang = await prisma.hutang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hutangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hutangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hutangs
     * const hutangs = await prisma.hutang.findMany()
     * 
     * // Get first 10 Hutangs
     * const hutangs = await prisma.hutang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hutangWithIdOnly = await prisma.hutang.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hutangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hutang.
     * @param {hutangCreateArgs} args - Arguments to create a Hutang.
     * @example
     * // Create one Hutang
     * const Hutang = await prisma.hutang.create({
     *   data: {
     *     // ... data to create a Hutang
     *   }
     * })
     * 
    **/
    create<T extends hutangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hutangCreateArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hutangs.
     *     @param {hutangCreateManyArgs} args - Arguments to create many Hutangs.
     *     @example
     *     // Create many Hutangs
     *     const hutang = await prisma.hutang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hutangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hutang.
     * @param {hutangDeleteArgs} args - Arguments to delete one Hutang.
     * @example
     * // Delete one Hutang
     * const Hutang = await prisma.hutang.delete({
     *   where: {
     *     // ... filter to delete one Hutang
     *   }
     * })
     * 
    **/
    delete<T extends hutangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hutangDeleteArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hutang.
     * @param {hutangUpdateArgs} args - Arguments to update one Hutang.
     * @example
     * // Update one Hutang
     * const hutang = await prisma.hutang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hutangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hutangUpdateArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hutangs.
     * @param {hutangDeleteManyArgs} args - Arguments to filter Hutangs to delete.
     * @example
     * // Delete a few Hutangs
     * const { count } = await prisma.hutang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hutangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hutangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hutangs
     * const hutang = await prisma.hutang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hutangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hutangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hutang.
     * @param {hutangUpsertArgs} args - Arguments to update or create a Hutang.
     * @example
     * // Update or create a Hutang
     * const hutang = await prisma.hutang.upsert({
     *   create: {
     *     // ... data to create a Hutang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hutang we want to update
     *   }
     * })
    **/
    upsert<T extends hutangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hutangUpsertArgs<ExtArgs>>
    ): Prisma__hutangClient<$Result.GetResult<Prisma.$hutangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangCountArgs} args - Arguments to filter Hutangs to count.
     * @example
     * // Count the number of Hutangs
     * const count = await prisma.hutang.count({
     *   where: {
     *     // ... the filter for the Hutangs we want to count
     *   }
     * })
    **/
    count<T extends hutangCountArgs>(
      args?: Subset<T, hutangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HutangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HutangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HutangAggregateArgs>(args: Subset<T, HutangAggregateArgs>): Prisma.PrismaPromise<GetHutangAggregateType<T>>

    /**
     * Group by Hutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hutangGroupByArgs} args - Group by arguments.
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
      T extends hutangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hutangGroupByArgs['orderBy'] }
        : { orderBy?: hutangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hutangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHutangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hutang model
   */
  readonly fields: hutangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hutang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hutangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the hutang model
   */ 
  interface hutangFieldRefs {
    readonly id: FieldRef<"hutang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hutang findUnique
   */
  export type hutangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter, which hutang to fetch.
     */
    where: hutangWhereUniqueInput
  }

  /**
   * hutang findUniqueOrThrow
   */
  export type hutangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter, which hutang to fetch.
     */
    where: hutangWhereUniqueInput
  }

  /**
   * hutang findFirst
   */
  export type hutangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter, which hutang to fetch.
     */
    where?: hutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hutangs to fetch.
     */
    orderBy?: hutangOrderByWithRelationInput | hutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hutangs.
     */
    cursor?: hutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hutangs.
     */
    distinct?: HutangScalarFieldEnum | HutangScalarFieldEnum[]
  }

  /**
   * hutang findFirstOrThrow
   */
  export type hutangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter, which hutang to fetch.
     */
    where?: hutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hutangs to fetch.
     */
    orderBy?: hutangOrderByWithRelationInput | hutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hutangs.
     */
    cursor?: hutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hutangs.
     */
    distinct?: HutangScalarFieldEnum | HutangScalarFieldEnum[]
  }

  /**
   * hutang findMany
   */
  export type hutangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter, which hutangs to fetch.
     */
    where?: hutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hutangs to fetch.
     */
    orderBy?: hutangOrderByWithRelationInput | hutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hutangs.
     */
    cursor?: hutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hutangs.
     */
    skip?: number
    distinct?: HutangScalarFieldEnum | HutangScalarFieldEnum[]
  }

  /**
   * hutang create
   */
  export type hutangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * The data needed to create a hutang.
     */
    data?: XOR<hutangCreateInput, hutangUncheckedCreateInput>
  }

  /**
   * hutang createMany
   */
  export type hutangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hutangs.
     */
    data: hutangCreateManyInput | hutangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hutang update
   */
  export type hutangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * The data needed to update a hutang.
     */
    data: XOR<hutangUpdateInput, hutangUncheckedUpdateInput>
    /**
     * Choose, which hutang to update.
     */
    where: hutangWhereUniqueInput
  }

  /**
   * hutang updateMany
   */
  export type hutangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hutangs.
     */
    data: XOR<hutangUpdateManyMutationInput, hutangUncheckedUpdateManyInput>
    /**
     * Filter which hutangs to update
     */
    where?: hutangWhereInput
  }

  /**
   * hutang upsert
   */
  export type hutangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * The filter to search for the hutang to update in case it exists.
     */
    where: hutangWhereUniqueInput
    /**
     * In case the hutang found by the `where` argument doesn't exist, create a new hutang with this data.
     */
    create: XOR<hutangCreateInput, hutangUncheckedCreateInput>
    /**
     * In case the hutang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hutangUpdateInput, hutangUncheckedUpdateInput>
  }

  /**
   * hutang delete
   */
  export type hutangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
    /**
     * Filter which hutang to delete.
     */
    where: hutangWhereUniqueInput
  }

  /**
   * hutang deleteMany
   */
  export type hutangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hutangs to delete
     */
    where?: hutangWhereInput
  }

  /**
   * hutang without action
   */
  export type hutangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hutang
     */
    select?: hutangSelect<ExtArgs> | null
  }


  /**
   * Model piutang
   */

  export type AggregatePiutang = {
    _count: PiutangCountAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  export type PiutangMinAggregateOutputType = {
    id: string | null
  }

  export type PiutangMaxAggregateOutputType = {
    id: string | null
  }

  export type PiutangCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type PiutangMinAggregateInputType = {
    id?: true
  }

  export type PiutangMaxAggregateInputType = {
    id?: true
  }

  export type PiutangCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type PiutangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which piutang to aggregate.
     */
    where?: piutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piutangs to fetch.
     */
    orderBy?: piutangOrderByWithRelationInput | piutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: piutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned piutangs
    **/
    _count?: true | PiutangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiutangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiutangMaxAggregateInputType
  }

  export type GetPiutangAggregateType<T extends PiutangAggregateArgs> = {
        [P in keyof T & keyof AggregatePiutang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiutang[P]>
      : GetScalarType<T[P], AggregatePiutang[P]>
  }




  export type piutangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: piutangWhereInput
    orderBy?: piutangOrderByWithAggregationInput | piutangOrderByWithAggregationInput[]
    by: PiutangScalarFieldEnum[] | PiutangScalarFieldEnum
    having?: piutangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiutangCountAggregateInputType | true
    _min?: PiutangMinAggregateInputType
    _max?: PiutangMaxAggregateInputType
  }

  export type PiutangGroupByOutputType = {
    id: string
    _count: PiutangCountAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  type GetPiutangGroupByPayload<T extends piutangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiutangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiutangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiutangGroupByOutputType[P]>
            : GetScalarType<T[P], PiutangGroupByOutputType[P]>
        }
      >
    >


  export type piutangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["piutang"]>

  export type piutangSelectScalar = {
    id?: boolean
  }



  export type $piutangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "piutang"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["piutang"]>
    composites: {}
  }


  type piutangGetPayload<S extends boolean | null | undefined | piutangDefaultArgs> = $Result.GetResult<Prisma.$piutangPayload, S>

  type piutangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<piutangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PiutangCountAggregateInputType | true
    }

  export interface piutangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['piutang'], meta: { name: 'piutang' } }
    /**
     * Find zero or one Piutang that matches the filter.
     * @param {piutangFindUniqueArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends piutangFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, piutangFindUniqueArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Piutang that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {piutangFindUniqueOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends piutangFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Piutang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangFindFirstArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends piutangFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangFindFirstArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Piutang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangFindFirstOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends piutangFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Piutangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Piutangs
     * const piutangs = await prisma.piutang.findMany()
     * 
     * // Get first 10 Piutangs
     * const piutangs = await prisma.piutang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piutangWithIdOnly = await prisma.piutang.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends piutangFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Piutang.
     * @param {piutangCreateArgs} args - Arguments to create a Piutang.
     * @example
     * // Create one Piutang
     * const Piutang = await prisma.piutang.create({
     *   data: {
     *     // ... data to create a Piutang
     *   }
     * })
     * 
    **/
    create<T extends piutangCreateArgs<ExtArgs>>(
      args: SelectSubset<T, piutangCreateArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Piutangs.
     *     @param {piutangCreateManyArgs} args - Arguments to create many Piutangs.
     *     @example
     *     // Create many Piutangs
     *     const piutang = await prisma.piutang.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends piutangCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Piutang.
     * @param {piutangDeleteArgs} args - Arguments to delete one Piutang.
     * @example
     * // Delete one Piutang
     * const Piutang = await prisma.piutang.delete({
     *   where: {
     *     // ... filter to delete one Piutang
     *   }
     * })
     * 
    **/
    delete<T extends piutangDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, piutangDeleteArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Piutang.
     * @param {piutangUpdateArgs} args - Arguments to update one Piutang.
     * @example
     * // Update one Piutang
     * const piutang = await prisma.piutang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends piutangUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, piutangUpdateArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Piutangs.
     * @param {piutangDeleteManyArgs} args - Arguments to filter Piutangs to delete.
     * @example
     * // Delete a few Piutangs
     * const { count } = await prisma.piutang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends piutangDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, piutangDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Piutangs
     * const piutang = await prisma.piutang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends piutangUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, piutangUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Piutang.
     * @param {piutangUpsertArgs} args - Arguments to update or create a Piutang.
     * @example
     * // Update or create a Piutang
     * const piutang = await prisma.piutang.upsert({
     *   create: {
     *     // ... data to create a Piutang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piutang we want to update
     *   }
     * })
    **/
    upsert<T extends piutangUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, piutangUpsertArgs<ExtArgs>>
    ): Prisma__piutangClient<$Result.GetResult<Prisma.$piutangPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangCountArgs} args - Arguments to filter Piutangs to count.
     * @example
     * // Count the number of Piutangs
     * const count = await prisma.piutang.count({
     *   where: {
     *     // ... the filter for the Piutangs we want to count
     *   }
     * })
    **/
    count<T extends piutangCountArgs>(
      args?: Subset<T, piutangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiutangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PiutangAggregateArgs>(args: Subset<T, PiutangAggregateArgs>): Prisma.PrismaPromise<GetPiutangAggregateType<T>>

    /**
     * Group by Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piutangGroupByArgs} args - Group by arguments.
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
      T extends piutangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: piutangGroupByArgs['orderBy'] }
        : { orderBy?: piutangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, piutangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiutangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the piutang model
   */
  readonly fields: piutangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for piutang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__piutangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the piutang model
   */ 
  interface piutangFieldRefs {
    readonly id: FieldRef<"piutang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * piutang findUnique
   */
  export type piutangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter, which piutang to fetch.
     */
    where: piutangWhereUniqueInput
  }

  /**
   * piutang findUniqueOrThrow
   */
  export type piutangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter, which piutang to fetch.
     */
    where: piutangWhereUniqueInput
  }

  /**
   * piutang findFirst
   */
  export type piutangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter, which piutang to fetch.
     */
    where?: piutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piutangs to fetch.
     */
    orderBy?: piutangOrderByWithRelationInput | piutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for piutangs.
     */
    cursor?: piutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * piutang findFirstOrThrow
   */
  export type piutangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter, which piutang to fetch.
     */
    where?: piutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piutangs to fetch.
     */
    orderBy?: piutangOrderByWithRelationInput | piutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for piutangs.
     */
    cursor?: piutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * piutang findMany
   */
  export type piutangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter, which piutangs to fetch.
     */
    where?: piutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piutangs to fetch.
     */
    orderBy?: piutangOrderByWithRelationInput | piutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing piutangs.
     */
    cursor?: piutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piutangs.
     */
    skip?: number
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * piutang create
   */
  export type piutangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * The data needed to create a piutang.
     */
    data?: XOR<piutangCreateInput, piutangUncheckedCreateInput>
  }

  /**
   * piutang createMany
   */
  export type piutangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many piutangs.
     */
    data: piutangCreateManyInput | piutangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * piutang update
   */
  export type piutangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * The data needed to update a piutang.
     */
    data: XOR<piutangUpdateInput, piutangUncheckedUpdateInput>
    /**
     * Choose, which piutang to update.
     */
    where: piutangWhereUniqueInput
  }

  /**
   * piutang updateMany
   */
  export type piutangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update piutangs.
     */
    data: XOR<piutangUpdateManyMutationInput, piutangUncheckedUpdateManyInput>
    /**
     * Filter which piutangs to update
     */
    where?: piutangWhereInput
  }

  /**
   * piutang upsert
   */
  export type piutangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * The filter to search for the piutang to update in case it exists.
     */
    where: piutangWhereUniqueInput
    /**
     * In case the piutang found by the `where` argument doesn't exist, create a new piutang with this data.
     */
    create: XOR<piutangCreateInput, piutangUncheckedCreateInput>
    /**
     * In case the piutang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<piutangUpdateInput, piutangUncheckedUpdateInput>
  }

  /**
   * piutang delete
   */
  export type piutangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
    /**
     * Filter which piutang to delete.
     */
    where: piutangWhereUniqueInput
  }

  /**
   * piutang deleteMany
   */
  export type piutangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which piutangs to delete
     */
    where?: piutangWhereInput
  }

  /**
   * piutang without action
   */
  export type piutangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piutang
     */
    select?: piutangSelect<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    pass_fail: number | null
    otp_fail: number | null
  }

  export type AdminSumAggregateOutputType = {
    pass_fail: number | null
    otp_fail: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    google_id: string | null
    nama: string | null
    email: string | null
    phone: string | null
    password: string | null
    pass_fail: number | null
    pass_fail_at: Date | null
    role: string | null
    isaktif: boolean | null
    otp: string | null
    otp_resend_at: Date | null
    otp_expired_at: Date | null
    otp_fail: number | null
    otp_fail_at: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    google_id: string | null
    nama: string | null
    email: string | null
    phone: string | null
    password: string | null
    pass_fail: number | null
    pass_fail_at: Date | null
    role: string | null
    isaktif: boolean | null
    otp: string | null
    otp_resend_at: Date | null
    otp_expired_at: Date | null
    otp_fail: number | null
    otp_fail_at: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    google_id: number
    nama: number
    email: number
    phone: number
    password: number
    pass_fail: number
    pass_fail_at: number
    role: number
    isaktif: number
    otp: number
    otp_resend_at: number
    otp_expired_at: number
    otp_fail: number
    otp_fail_at: number
    token: number
    tokenRefresh: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    pass_fail?: true
    otp_fail?: true
  }

  export type AdminSumAggregateInputType = {
    pass_fail?: true
    otp_fail?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    google_id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    pass_fail?: true
    pass_fail_at?: true
    role?: true
    isaktif?: true
    otp?: true
    otp_resend_at?: true
    otp_expired_at?: true
    otp_fail?: true
    otp_fail_at?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    google_id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    pass_fail?: true
    pass_fail_at?: true
    role?: true
    isaktif?: true
    otp?: true
    otp_resend_at?: true
    otp_expired_at?: true
    otp_fail?: true
    otp_fail_at?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    google_id?: true
    nama?: true
    email?: true
    phone?: true
    password?: true
    pass_fail?: true
    pass_fail_at?: true
    role?: true
    isaktif?: true
    otp?: true
    otp_resend_at?: true
    otp_expired_at?: true
    otp_fail?: true
    otp_fail_at?: true
    token?: true
    tokenRefresh?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    google_id: string | null
    nama: string
    email: string
    phone: string | null
    password: string
    pass_fail: number
    pass_fail_at: Date | null
    role: string
    isaktif: boolean
    otp: string | null
    otp_resend_at: Date | null
    otp_expired_at: Date | null
    otp_fail: number
    otp_fail_at: Date | null
    token: string | null
    tokenRefresh: string | null
    created_at: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    google_id?: boolean
    nama?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    pass_fail?: boolean
    pass_fail_at?: boolean
    role?: boolean
    isaktif?: boolean
    otp?: boolean
    otp_resend_at?: boolean
    otp_expired_at?: boolean
    otp_fail?: boolean
    otp_fail_at?: boolean
    token?: boolean
    tokenRefresh?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    google_id?: boolean
    nama?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    pass_fail?: boolean
    pass_fail_at?: boolean
    role?: boolean
    isaktif?: boolean
    otp?: boolean
    otp_resend_at?: boolean
    otp_expired_at?: boolean
    otp_fail?: boolean
    otp_fail_at?: boolean
    token?: boolean
    tokenRefresh?: boolean
    created_at?: boolean
  }



  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      google_id: string | null
      nama: string
      email: string
      phone: string | null
      password: string
      pass_fail: number
      pass_fail_at: Date | null
      role: string
      isaktif: boolean
      otp: string | null
      otp_resend_at: Date | null
      otp_expired_at: Date | null
      otp_fail: number
      otp_fail_at: Date | null
      token: string | null
      tokenRefresh: string | null
      created_at: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly google_id: FieldRef<"admin", 'String'>
    readonly nama: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly phone: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly pass_fail: FieldRef<"admin", 'Int'>
    readonly pass_fail_at: FieldRef<"admin", 'DateTime'>
    readonly role: FieldRef<"admin", 'String'>
    readonly isaktif: FieldRef<"admin", 'Boolean'>
    readonly otp: FieldRef<"admin", 'String'>
    readonly otp_resend_at: FieldRef<"admin", 'DateTime'>
    readonly otp_expired_at: FieldRef<"admin", 'DateTime'>
    readonly otp_fail: FieldRef<"admin", 'Int'>
    readonly otp_fail_at: FieldRef<"admin", 'DateTime'>
    readonly token: FieldRef<"admin", 'String'>
    readonly tokenRefresh: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
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
    nama: 'nama',
    email: 'email',
    phone: 'phone',
    password: 'password',
    isaktif: 'isaktif',
    google_id: 'google_id',
    lastSeenAt: 'lastSeenAt',
    token: 'token',
    tokenRefresh: 'tokenRefresh',
    isPremium: 'isPremium',
    premium_expired_at: 'premium_expired_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IconsScalarFieldEnum: {
    id: 'id',
    img: 'img',
    deleted_at: 'deleted_at'
  };

  export type IconsScalarFieldEnum = (typeof IconsScalarFieldEnum)[keyof typeof IconsScalarFieldEnum]


  export const Aset_kategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    icon_id: 'icon_id'
  };

  export type Aset_kategoriScalarFieldEnum = (typeof Aset_kategoriScalarFieldEnum)[keyof typeof Aset_kategoriScalarFieldEnum]


  export const AsetScalarFieldEnum: {
    id: 'id'
  };

  export type AsetScalarFieldEnum = (typeof AsetScalarFieldEnum)[keyof typeof AsetScalarFieldEnum]


  export const Aset_akunScalarFieldEnum: {
    id: 'id'
  };

  export type Aset_akunScalarFieldEnum = (typeof Aset_akunScalarFieldEnum)[keyof typeof Aset_akunScalarFieldEnum]


  export const Aset_userScalarFieldEnum: {
    id: 'id'
  };

  export type Aset_userScalarFieldEnum = (typeof Aset_userScalarFieldEnum)[keyof typeof Aset_userScalarFieldEnum]


  export const Transaksi_jenisScalarFieldEnum: {
    id: 'id'
  };

  export type Transaksi_jenisScalarFieldEnum = (typeof Transaksi_jenisScalarFieldEnum)[keyof typeof Transaksi_jenisScalarFieldEnum]


  export const Transaksi_kategoriScalarFieldEnum: {
    id: 'id'
  };

  export type Transaksi_kategoriScalarFieldEnum = (typeof Transaksi_kategoriScalarFieldEnum)[keyof typeof Transaksi_kategoriScalarFieldEnum]


  export const Transasksi_subkategoriScalarFieldEnum: {
    id: 'id'
  };

  export type Transasksi_subkategoriScalarFieldEnum = (typeof Transasksi_subkategoriScalarFieldEnum)[keyof typeof Transasksi_subkategoriScalarFieldEnum]


  export const TransasksiScalarFieldEnum: {
    id: 'id'
  };

  export type TransasksiScalarFieldEnum = (typeof TransasksiScalarFieldEnum)[keyof typeof TransasksiScalarFieldEnum]


  export const HutangScalarFieldEnum: {
    id: 'id'
  };

  export type HutangScalarFieldEnum = (typeof HutangScalarFieldEnum)[keyof typeof HutangScalarFieldEnum]


  export const PiutangScalarFieldEnum: {
    id: 'id'
  };

  export type PiutangScalarFieldEnum = (typeof PiutangScalarFieldEnum)[keyof typeof PiutangScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    google_id: 'google_id',
    nama: 'nama',
    email: 'email',
    phone: 'phone',
    password: 'password',
    pass_fail: 'pass_fail',
    pass_fail_at: 'pass_fail_at',
    role: 'role',
    isaktif: 'isaktif',
    otp: 'otp',
    otp_resend_at: 'otp_resend_at',
    otp_expired_at: 'otp_expired_at',
    otp_fail: 'otp_fail',
    otp_fail_at: 'otp_fail_at',
    token: 'token',
    tokenRefresh: 'tokenRefresh',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    nama?: StringFilter<"user"> | string
    email?: StringNullableFilter<"user"> | string | null
    phone?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    isaktif?: BoolFilter<"user"> | boolean
    google_id?: StringNullableFilter<"user"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"user"> | Date | string | null
    token?: StringNullableFilter<"user"> | string | null
    tokenRefresh?: StringNullableFilter<"user"> | string | null
    isPremium?: BoolFilter<"user"> | boolean
    premium_expired_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isaktif?: SortOrder
    google_id?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premium_expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    nama?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    isaktif?: BoolFilter<"user"> | boolean
    google_id?: StringNullableFilter<"user"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"user"> | Date | string | null
    token?: StringNullableFilter<"user"> | string | null
    tokenRefresh?: StringNullableFilter<"user"> | string | null
    isPremium?: BoolFilter<"user"> | boolean
    premium_expired_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
  }, "id" | "email" | "phone">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isaktif?: SortOrder
    google_id?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premium_expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    nama?: StringWithAggregatesFilter<"user"> | string
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    isaktif?: BoolWithAggregatesFilter<"user"> | boolean
    google_id?: StringNullableWithAggregatesFilter<"user"> | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    token?: StringNullableWithAggregatesFilter<"user"> | string | null
    tokenRefresh?: StringNullableWithAggregatesFilter<"user"> | string | null
    isPremium?: BoolWithAggregatesFilter<"user"> | boolean
    premium_expired_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type iconsWhereInput = {
    AND?: iconsWhereInput | iconsWhereInput[]
    OR?: iconsWhereInput[]
    NOT?: iconsWhereInput | iconsWhereInput[]
    id?: StringFilter<"icons"> | string
    img?: StringFilter<"icons"> | string
    deleted_at?: DateTimeNullableFilter<"icons"> | Date | string | null
    aset_kategori?: XOR<Aset_kategoriNullableRelationFilter, aset_kategoriWhereInput> | null
  }

  export type iconsOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    aset_kategori?: aset_kategoriOrderByWithRelationInput
  }

  export type iconsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: iconsWhereInput | iconsWhereInput[]
    OR?: iconsWhereInput[]
    NOT?: iconsWhereInput | iconsWhereInput[]
    img?: StringFilter<"icons"> | string
    deleted_at?: DateTimeNullableFilter<"icons"> | Date | string | null
    aset_kategori?: XOR<Aset_kategoriNullableRelationFilter, aset_kategoriWhereInput> | null
  }, "id">

  export type iconsOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: iconsCountOrderByAggregateInput
    _max?: iconsMaxOrderByAggregateInput
    _min?: iconsMinOrderByAggregateInput
  }

  export type iconsScalarWhereWithAggregatesInput = {
    AND?: iconsScalarWhereWithAggregatesInput | iconsScalarWhereWithAggregatesInput[]
    OR?: iconsScalarWhereWithAggregatesInput[]
    NOT?: iconsScalarWhereWithAggregatesInput | iconsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"icons"> | string
    img?: StringWithAggregatesFilter<"icons"> | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"icons"> | Date | string | null
  }

  export type aset_kategoriWhereInput = {
    AND?: aset_kategoriWhereInput | aset_kategoriWhereInput[]
    OR?: aset_kategoriWhereInput[]
    NOT?: aset_kategoriWhereInput | aset_kategoriWhereInput[]
    id?: StringFilter<"aset_kategori"> | string
    nama?: StringFilter<"aset_kategori"> | string
    icon_id?: StringNullableFilter<"aset_kategori"> | string | null
    icon?: XOR<IconsNullableRelationFilter, iconsWhereInput> | null
  }

  export type aset_kategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    icon_id?: SortOrderInput | SortOrder
    icon?: iconsOrderByWithRelationInput
  }

  export type aset_kategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    icon_id?: string
    AND?: aset_kategoriWhereInput | aset_kategoriWhereInput[]
    OR?: aset_kategoriWhereInput[]
    NOT?: aset_kategoriWhereInput | aset_kategoriWhereInput[]
    nama?: StringFilter<"aset_kategori"> | string
    icon?: XOR<IconsNullableRelationFilter, iconsWhereInput> | null
  }, "id" | "icon_id">

  export type aset_kategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    icon_id?: SortOrderInput | SortOrder
    _count?: aset_kategoriCountOrderByAggregateInput
    _max?: aset_kategoriMaxOrderByAggregateInput
    _min?: aset_kategoriMinOrderByAggregateInput
  }

  export type aset_kategoriScalarWhereWithAggregatesInput = {
    AND?: aset_kategoriScalarWhereWithAggregatesInput | aset_kategoriScalarWhereWithAggregatesInput[]
    OR?: aset_kategoriScalarWhereWithAggregatesInput[]
    NOT?: aset_kategoriScalarWhereWithAggregatesInput | aset_kategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aset_kategori"> | string
    nama?: StringWithAggregatesFilter<"aset_kategori"> | string
    icon_id?: StringNullableWithAggregatesFilter<"aset_kategori"> | string | null
  }

  export type asetWhereInput = {
    AND?: asetWhereInput | asetWhereInput[]
    OR?: asetWhereInput[]
    NOT?: asetWhereInput | asetWhereInput[]
    id?: StringFilter<"aset"> | string
  }

  export type asetOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type asetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: asetWhereInput | asetWhereInput[]
    OR?: asetWhereInput[]
    NOT?: asetWhereInput | asetWhereInput[]
  }, "id">

  export type asetOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: asetCountOrderByAggregateInput
    _max?: asetMaxOrderByAggregateInput
    _min?: asetMinOrderByAggregateInput
  }

  export type asetScalarWhereWithAggregatesInput = {
    AND?: asetScalarWhereWithAggregatesInput | asetScalarWhereWithAggregatesInput[]
    OR?: asetScalarWhereWithAggregatesInput[]
    NOT?: asetScalarWhereWithAggregatesInput | asetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aset"> | string
  }

  export type aset_akunWhereInput = {
    AND?: aset_akunWhereInput | aset_akunWhereInput[]
    OR?: aset_akunWhereInput[]
    NOT?: aset_akunWhereInput | aset_akunWhereInput[]
    id?: StringFilter<"aset_akun"> | string
  }

  export type aset_akunOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type aset_akunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: aset_akunWhereInput | aset_akunWhereInput[]
    OR?: aset_akunWhereInput[]
    NOT?: aset_akunWhereInput | aset_akunWhereInput[]
  }, "id">

  export type aset_akunOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: aset_akunCountOrderByAggregateInput
    _max?: aset_akunMaxOrderByAggregateInput
    _min?: aset_akunMinOrderByAggregateInput
  }

  export type aset_akunScalarWhereWithAggregatesInput = {
    AND?: aset_akunScalarWhereWithAggregatesInput | aset_akunScalarWhereWithAggregatesInput[]
    OR?: aset_akunScalarWhereWithAggregatesInput[]
    NOT?: aset_akunScalarWhereWithAggregatesInput | aset_akunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aset_akun"> | string
  }

  export type aset_userWhereInput = {
    AND?: aset_userWhereInput | aset_userWhereInput[]
    OR?: aset_userWhereInput[]
    NOT?: aset_userWhereInput | aset_userWhereInput[]
    id?: StringFilter<"aset_user"> | string
  }

  export type aset_userOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type aset_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: aset_userWhereInput | aset_userWhereInput[]
    OR?: aset_userWhereInput[]
    NOT?: aset_userWhereInput | aset_userWhereInput[]
  }, "id">

  export type aset_userOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: aset_userCountOrderByAggregateInput
    _max?: aset_userMaxOrderByAggregateInput
    _min?: aset_userMinOrderByAggregateInput
  }

  export type aset_userScalarWhereWithAggregatesInput = {
    AND?: aset_userScalarWhereWithAggregatesInput | aset_userScalarWhereWithAggregatesInput[]
    OR?: aset_userScalarWhereWithAggregatesInput[]
    NOT?: aset_userScalarWhereWithAggregatesInput | aset_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aset_user"> | string
  }

  export type transaksi_jenisWhereInput = {
    AND?: transaksi_jenisWhereInput | transaksi_jenisWhereInput[]
    OR?: transaksi_jenisWhereInput[]
    NOT?: transaksi_jenisWhereInput | transaksi_jenisWhereInput[]
    id?: StringFilter<"transaksi_jenis"> | string
  }

  export type transaksi_jenisOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type transaksi_jenisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transaksi_jenisWhereInput | transaksi_jenisWhereInput[]
    OR?: transaksi_jenisWhereInput[]
    NOT?: transaksi_jenisWhereInput | transaksi_jenisWhereInput[]
  }, "id">

  export type transaksi_jenisOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: transaksi_jenisCountOrderByAggregateInput
    _max?: transaksi_jenisMaxOrderByAggregateInput
    _min?: transaksi_jenisMinOrderByAggregateInput
  }

  export type transaksi_jenisScalarWhereWithAggregatesInput = {
    AND?: transaksi_jenisScalarWhereWithAggregatesInput | transaksi_jenisScalarWhereWithAggregatesInput[]
    OR?: transaksi_jenisScalarWhereWithAggregatesInput[]
    NOT?: transaksi_jenisScalarWhereWithAggregatesInput | transaksi_jenisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaksi_jenis"> | string
  }

  export type transaksi_kategoriWhereInput = {
    AND?: transaksi_kategoriWhereInput | transaksi_kategoriWhereInput[]
    OR?: transaksi_kategoriWhereInput[]
    NOT?: transaksi_kategoriWhereInput | transaksi_kategoriWhereInput[]
    id?: StringFilter<"transaksi_kategori"> | string
  }

  export type transaksi_kategoriOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type transaksi_kategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transaksi_kategoriWhereInput | transaksi_kategoriWhereInput[]
    OR?: transaksi_kategoriWhereInput[]
    NOT?: transaksi_kategoriWhereInput | transaksi_kategoriWhereInput[]
  }, "id">

  export type transaksi_kategoriOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: transaksi_kategoriCountOrderByAggregateInput
    _max?: transaksi_kategoriMaxOrderByAggregateInput
    _min?: transaksi_kategoriMinOrderByAggregateInput
  }

  export type transaksi_kategoriScalarWhereWithAggregatesInput = {
    AND?: transaksi_kategoriScalarWhereWithAggregatesInput | transaksi_kategoriScalarWhereWithAggregatesInput[]
    OR?: transaksi_kategoriScalarWhereWithAggregatesInput[]
    NOT?: transaksi_kategoriScalarWhereWithAggregatesInput | transaksi_kategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaksi_kategori"> | string
  }

  export type transasksi_subkategoriWhereInput = {
    AND?: transasksi_subkategoriWhereInput | transasksi_subkategoriWhereInput[]
    OR?: transasksi_subkategoriWhereInput[]
    NOT?: transasksi_subkategoriWhereInput | transasksi_subkategoriWhereInput[]
    id?: StringFilter<"transasksi_subkategori"> | string
  }

  export type transasksi_subkategoriOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type transasksi_subkategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transasksi_subkategoriWhereInput | transasksi_subkategoriWhereInput[]
    OR?: transasksi_subkategoriWhereInput[]
    NOT?: transasksi_subkategoriWhereInput | transasksi_subkategoriWhereInput[]
  }, "id">

  export type transasksi_subkategoriOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: transasksi_subkategoriCountOrderByAggregateInput
    _max?: transasksi_subkategoriMaxOrderByAggregateInput
    _min?: transasksi_subkategoriMinOrderByAggregateInput
  }

  export type transasksi_subkategoriScalarWhereWithAggregatesInput = {
    AND?: transasksi_subkategoriScalarWhereWithAggregatesInput | transasksi_subkategoriScalarWhereWithAggregatesInput[]
    OR?: transasksi_subkategoriScalarWhereWithAggregatesInput[]
    NOT?: transasksi_subkategoriScalarWhereWithAggregatesInput | transasksi_subkategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transasksi_subkategori"> | string
  }

  export type transasksiWhereInput = {
    AND?: transasksiWhereInput | transasksiWhereInput[]
    OR?: transasksiWhereInput[]
    NOT?: transasksiWhereInput | transasksiWhereInput[]
    id?: StringFilter<"transasksi"> | string
  }

  export type transasksiOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type transasksiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transasksiWhereInput | transasksiWhereInput[]
    OR?: transasksiWhereInput[]
    NOT?: transasksiWhereInput | transasksiWhereInput[]
  }, "id">

  export type transasksiOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: transasksiCountOrderByAggregateInput
    _max?: transasksiMaxOrderByAggregateInput
    _min?: transasksiMinOrderByAggregateInput
  }

  export type transasksiScalarWhereWithAggregatesInput = {
    AND?: transasksiScalarWhereWithAggregatesInput | transasksiScalarWhereWithAggregatesInput[]
    OR?: transasksiScalarWhereWithAggregatesInput[]
    NOT?: transasksiScalarWhereWithAggregatesInput | transasksiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transasksi"> | string
  }

  export type hutangWhereInput = {
    AND?: hutangWhereInput | hutangWhereInput[]
    OR?: hutangWhereInput[]
    NOT?: hutangWhereInput | hutangWhereInput[]
    id?: StringFilter<"hutang"> | string
  }

  export type hutangOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type hutangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: hutangWhereInput | hutangWhereInput[]
    OR?: hutangWhereInput[]
    NOT?: hutangWhereInput | hutangWhereInput[]
  }, "id">

  export type hutangOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: hutangCountOrderByAggregateInput
    _max?: hutangMaxOrderByAggregateInput
    _min?: hutangMinOrderByAggregateInput
  }

  export type hutangScalarWhereWithAggregatesInput = {
    AND?: hutangScalarWhereWithAggregatesInput | hutangScalarWhereWithAggregatesInput[]
    OR?: hutangScalarWhereWithAggregatesInput[]
    NOT?: hutangScalarWhereWithAggregatesInput | hutangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"hutang"> | string
  }

  export type piutangWhereInput = {
    AND?: piutangWhereInput | piutangWhereInput[]
    OR?: piutangWhereInput[]
    NOT?: piutangWhereInput | piutangWhereInput[]
    id?: StringFilter<"piutang"> | string
  }

  export type piutangOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type piutangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: piutangWhereInput | piutangWhereInput[]
    OR?: piutangWhereInput[]
    NOT?: piutangWhereInput | piutangWhereInput[]
  }, "id">

  export type piutangOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: piutangCountOrderByAggregateInput
    _max?: piutangMaxOrderByAggregateInput
    _min?: piutangMinOrderByAggregateInput
  }

  export type piutangScalarWhereWithAggregatesInput = {
    AND?: piutangScalarWhereWithAggregatesInput | piutangScalarWhereWithAggregatesInput[]
    OR?: piutangScalarWhereWithAggregatesInput[]
    NOT?: piutangScalarWhereWithAggregatesInput | piutangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"piutang"> | string
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: StringFilter<"admin"> | string
    google_id?: StringNullableFilter<"admin"> | string | null
    nama?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    phone?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    pass_fail?: IntFilter<"admin"> | number
    pass_fail_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    role?: StringFilter<"admin"> | string
    isaktif?: BoolFilter<"admin"> | boolean
    otp?: StringNullableFilter<"admin"> | string | null
    otp_resend_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    otp_expired_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    otp_fail?: IntFilter<"admin"> | number
    otp_fail_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    token?: StringNullableFilter<"admin"> | string | null
    tokenRefresh?: StringNullableFilter<"admin"> | string | null
    created_at?: DateTimeNullableFilter<"admin"> | Date | string | null
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    google_id?: SortOrderInput | SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    pass_fail?: SortOrder
    pass_fail_at?: SortOrderInput | SortOrder
    role?: SortOrder
    isaktif?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_resend_at?: SortOrderInput | SortOrder
    otp_expired_at?: SortOrderInput | SortOrder
    otp_fail?: SortOrder
    otp_fail_at?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    google_id?: StringNullableFilter<"admin"> | string | null
    nama?: StringFilter<"admin"> | string
    phone?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    pass_fail?: IntFilter<"admin"> | number
    pass_fail_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    role?: StringFilter<"admin"> | string
    isaktif?: BoolFilter<"admin"> | boolean
    otp?: StringNullableFilter<"admin"> | string | null
    otp_resend_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    otp_expired_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    otp_fail?: IntFilter<"admin"> | number
    otp_fail_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    token?: StringNullableFilter<"admin"> | string | null
    tokenRefresh?: StringNullableFilter<"admin"> | string | null
    created_at?: DateTimeNullableFilter<"admin"> | Date | string | null
  }, "id" | "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    google_id?: SortOrderInput | SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    pass_fail?: SortOrder
    pass_fail_at?: SortOrderInput | SortOrder
    role?: SortOrder
    isaktif?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_resend_at?: SortOrderInput | SortOrder
    otp_expired_at?: SortOrderInput | SortOrder
    otp_fail?: SortOrder
    otp_fail_at?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenRefresh?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admin"> | string
    google_id?: StringNullableWithAggregatesFilter<"admin"> | string | null
    nama?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    phone?: StringNullableWithAggregatesFilter<"admin"> | string | null
    password?: StringWithAggregatesFilter<"admin"> | string
    pass_fail?: IntWithAggregatesFilter<"admin"> | number
    pass_fail_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    role?: StringWithAggregatesFilter<"admin"> | string
    isaktif?: BoolWithAggregatesFilter<"admin"> | boolean
    otp?: StringNullableWithAggregatesFilter<"admin"> | string | null
    otp_resend_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    otp_expired_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    otp_fail?: IntWithAggregatesFilter<"admin"> | number
    otp_fail_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    token?: StringNullableWithAggregatesFilter<"admin"> | string | null
    tokenRefresh?: StringNullableWithAggregatesFilter<"admin"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    nama: string
    email?: string | null
    phone?: string | null
    password: string
    isaktif?: boolean
    google_id?: string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    isPremium?: boolean
    premium_expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUncheckedCreateInput = {
    id?: string
    nama: string
    email?: string | null
    phone?: string | null
    password: string
    isaktif?: boolean
    google_id?: string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    isPremium?: boolean
    premium_expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premium_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premium_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateManyInput = {
    id?: string
    nama: string
    email?: string | null
    phone?: string | null
    password: string
    isaktif?: boolean
    google_id?: string | null
    lastSeenAt?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    isPremium?: boolean
    premium_expired_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premium_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premium_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type iconsCreateInput = {
    id?: string
    img: string
    deleted_at?: Date | string | null
    aset_kategori?: aset_kategoriCreateNestedOneWithoutIconInput
  }

  export type iconsUncheckedCreateInput = {
    id?: string
    img: string
    deleted_at?: Date | string | null
    aset_kategori?: aset_kategoriUncheckedCreateNestedOneWithoutIconInput
  }

  export type iconsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aset_kategori?: aset_kategoriUpdateOneWithoutIconNestedInput
  }

  export type iconsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aset_kategori?: aset_kategoriUncheckedUpdateOneWithoutIconNestedInput
  }

  export type iconsCreateManyInput = {
    id?: string
    img: string
    deleted_at?: Date | string | null
  }

  export type iconsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type iconsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type aset_kategoriCreateInput = {
    id?: string
    nama: string
    icon?: iconsCreateNestedOneWithoutAset_kategoriInput
  }

  export type aset_kategoriUncheckedCreateInput = {
    id?: string
    nama: string
    icon_id?: string | null
  }

  export type aset_kategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: iconsUpdateOneWithoutAset_kategoriNestedInput
  }

  export type aset_kategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aset_kategoriCreateManyInput = {
    id?: string
    nama: string
    icon_id?: string | null
  }

  export type aset_kategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type aset_kategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type asetCreateInput = {
    id?: string
  }

  export type asetUncheckedCreateInput = {
    id?: string
  }

  export type asetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type asetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type asetCreateManyInput = {
    id?: string
  }

  export type asetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type asetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_akunCreateInput = {
    id?: string
  }

  export type aset_akunUncheckedCreateInput = {
    id?: string
  }

  export type aset_akunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_akunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_akunCreateManyInput = {
    id?: string
  }

  export type aset_akunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_akunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_userCreateInput = {
    id?: string
  }

  export type aset_userUncheckedCreateInput = {
    id?: string
  }

  export type aset_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_userCreateManyInput = {
    id?: string
  }

  export type aset_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aset_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_jenisCreateInput = {
    id?: string
  }

  export type transaksi_jenisUncheckedCreateInput = {
    id?: string
  }

  export type transaksi_jenisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_jenisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_jenisCreateManyInput = {
    id?: string
  }

  export type transaksi_jenisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_jenisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_kategoriCreateInput = {
    id?: string
  }

  export type transaksi_kategoriUncheckedCreateInput = {
    id?: string
  }

  export type transaksi_kategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_kategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_kategoriCreateManyInput = {
    id?: string
  }

  export type transaksi_kategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transaksi_kategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksi_subkategoriCreateInput = {
    id?: string
  }

  export type transasksi_subkategoriUncheckedCreateInput = {
    id?: string
  }

  export type transasksi_subkategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksi_subkategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksi_subkategoriCreateManyInput = {
    id?: string
  }

  export type transasksi_subkategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksi_subkategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksiCreateInput = {
    id?: string
  }

  export type transasksiUncheckedCreateInput = {
    id?: string
  }

  export type transasksiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksiCreateManyInput = {
    id?: string
  }

  export type transasksiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transasksiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type hutangCreateInput = {
    id?: string
  }

  export type hutangUncheckedCreateInput = {
    id?: string
  }

  export type hutangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type hutangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type hutangCreateManyInput = {
    id?: string
  }

  export type hutangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type hutangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type piutangCreateInput = {
    id?: string
  }

  export type piutangUncheckedCreateInput = {
    id?: string
  }

  export type piutangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type piutangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type piutangCreateManyInput = {
    id?: string
  }

  export type piutangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type piutangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateInput = {
    id: string
    google_id?: string | null
    nama: string
    email: string
    phone?: string | null
    password: string
    pass_fail?: number
    pass_fail_at?: Date | string | null
    role: string
    isaktif: boolean
    otp?: string | null
    otp_resend_at?: Date | string | null
    otp_expired_at?: Date | string | null
    otp_fail?: number
    otp_fail_at?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
  }

  export type adminUncheckedCreateInput = {
    id: string
    google_id?: string | null
    nama: string
    email: string
    phone?: string | null
    password: string
    pass_fail?: number
    pass_fail_at?: Date | string | null
    role: string
    isaktif: boolean
    otp?: string | null
    otp_resend_at?: Date | string | null
    otp_expired_at?: Date | string | null
    otp_fail?: number
    otp_fail_at?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    pass_fail?: IntFieldUpdateOperationsInput | number
    pass_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_resend_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_fail?: IntFieldUpdateOperationsInput | number
    otp_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    pass_fail?: IntFieldUpdateOperationsInput | number
    pass_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_resend_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_fail?: IntFieldUpdateOperationsInput | number
    otp_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminCreateManyInput = {
    id: string
    google_id?: string | null
    nama: string
    email: string
    phone?: string | null
    password: string
    pass_fail?: number
    pass_fail_at?: Date | string | null
    role: string
    isaktif: boolean
    otp?: string | null
    otp_resend_at?: Date | string | null
    otp_expired_at?: Date | string | null
    otp_fail?: number
    otp_fail_at?: Date | string | null
    token?: string | null
    tokenRefresh?: string | null
    created_at?: Date | string | null
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    pass_fail?: IntFieldUpdateOperationsInput | number
    pass_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_resend_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_fail?: IntFieldUpdateOperationsInput | number
    otp_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    pass_fail?: IntFieldUpdateOperationsInput | number
    pass_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    isaktif?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_resend_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_fail?: IntFieldUpdateOperationsInput | number
    otp_fail_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenRefresh?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isaktif?: SortOrder
    google_id?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    isPremium?: SortOrder
    premium_expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isaktif?: SortOrder
    google_id?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    isPremium?: SortOrder
    premium_expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isaktif?: SortOrder
    google_id?: SortOrder
    lastSeenAt?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    isPremium?: SortOrder
    premium_expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Aset_kategoriNullableRelationFilter = {
    is?: aset_kategoriWhereInput | null
    isNot?: aset_kategoriWhereInput | null
  }

  export type iconsCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    deleted_at?: SortOrder
  }

  export type iconsMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    deleted_at?: SortOrder
  }

  export type iconsMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    deleted_at?: SortOrder
  }

  export type IconsNullableRelationFilter = {
    is?: iconsWhereInput | null
    isNot?: iconsWhereInput | null
  }

  export type aset_kategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon_id?: SortOrder
  }

  export type aset_kategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon_id?: SortOrder
  }

  export type aset_kategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon_id?: SortOrder
  }

  export type asetCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type asetMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type asetMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_akunCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_akunMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_akunMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_userCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_userMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aset_userMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_jenisCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_jenisMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_jenisMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_kategoriCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_kategoriMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transaksi_kategoriMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksi_subkategoriCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksi_subkategoriMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksi_subkategoriMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksiCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksiMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type transasksiMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hutangCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hutangMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hutangMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type piutangCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type piutangMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type piutangMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    pass_fail?: SortOrder
    pass_fail_at?: SortOrder
    role?: SortOrder
    isaktif?: SortOrder
    otp?: SortOrder
    otp_resend_at?: SortOrder
    otp_expired_at?: SortOrder
    otp_fail?: SortOrder
    otp_fail_at?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    pass_fail?: SortOrder
    otp_fail?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    pass_fail?: SortOrder
    pass_fail_at?: SortOrder
    role?: SortOrder
    isaktif?: SortOrder
    otp?: SortOrder
    otp_resend_at?: SortOrder
    otp_expired_at?: SortOrder
    otp_fail?: SortOrder
    otp_fail_at?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    google_id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    pass_fail?: SortOrder
    pass_fail_at?: SortOrder
    role?: SortOrder
    isaktif?: SortOrder
    otp?: SortOrder
    otp_resend_at?: SortOrder
    otp_expired_at?: SortOrder
    otp_fail?: SortOrder
    otp_fail_at?: SortOrder
    token?: SortOrder
    tokenRefresh?: SortOrder
    created_at?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    pass_fail?: SortOrder
    otp_fail?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type aset_kategoriCreateNestedOneWithoutIconInput = {
    create?: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
    connectOrCreate?: aset_kategoriCreateOrConnectWithoutIconInput
    connect?: aset_kategoriWhereUniqueInput
  }

  export type aset_kategoriUncheckedCreateNestedOneWithoutIconInput = {
    create?: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
    connectOrCreate?: aset_kategoriCreateOrConnectWithoutIconInput
    connect?: aset_kategoriWhereUniqueInput
  }

  export type aset_kategoriUpdateOneWithoutIconNestedInput = {
    create?: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
    connectOrCreate?: aset_kategoriCreateOrConnectWithoutIconInput
    upsert?: aset_kategoriUpsertWithoutIconInput
    disconnect?: aset_kategoriWhereInput | boolean
    delete?: aset_kategoriWhereInput | boolean
    connect?: aset_kategoriWhereUniqueInput
    update?: XOR<XOR<aset_kategoriUpdateToOneWithWhereWithoutIconInput, aset_kategoriUpdateWithoutIconInput>, aset_kategoriUncheckedUpdateWithoutIconInput>
  }

  export type aset_kategoriUncheckedUpdateOneWithoutIconNestedInput = {
    create?: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
    connectOrCreate?: aset_kategoriCreateOrConnectWithoutIconInput
    upsert?: aset_kategoriUpsertWithoutIconInput
    disconnect?: aset_kategoriWhereInput | boolean
    delete?: aset_kategoriWhereInput | boolean
    connect?: aset_kategoriWhereUniqueInput
    update?: XOR<XOR<aset_kategoriUpdateToOneWithWhereWithoutIconInput, aset_kategoriUpdateWithoutIconInput>, aset_kategoriUncheckedUpdateWithoutIconInput>
  }

  export type iconsCreateNestedOneWithoutAset_kategoriInput = {
    create?: XOR<iconsCreateWithoutAset_kategoriInput, iconsUncheckedCreateWithoutAset_kategoriInput>
    connectOrCreate?: iconsCreateOrConnectWithoutAset_kategoriInput
    connect?: iconsWhereUniqueInput
  }

  export type iconsUpdateOneWithoutAset_kategoriNestedInput = {
    create?: XOR<iconsCreateWithoutAset_kategoriInput, iconsUncheckedCreateWithoutAset_kategoriInput>
    connectOrCreate?: iconsCreateOrConnectWithoutAset_kategoriInput
    upsert?: iconsUpsertWithoutAset_kategoriInput
    disconnect?: iconsWhereInput | boolean
    delete?: iconsWhereInput | boolean
    connect?: iconsWhereUniqueInput
    update?: XOR<XOR<iconsUpdateToOneWithWhereWithoutAset_kategoriInput, iconsUpdateWithoutAset_kategoriInput>, iconsUncheckedUpdateWithoutAset_kategoriInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type aset_kategoriCreateWithoutIconInput = {
    id?: string
    nama: string
  }

  export type aset_kategoriUncheckedCreateWithoutIconInput = {
    id?: string
    nama: string
  }

  export type aset_kategoriCreateOrConnectWithoutIconInput = {
    where: aset_kategoriWhereUniqueInput
    create: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
  }

  export type aset_kategoriUpsertWithoutIconInput = {
    update: XOR<aset_kategoriUpdateWithoutIconInput, aset_kategoriUncheckedUpdateWithoutIconInput>
    create: XOR<aset_kategoriCreateWithoutIconInput, aset_kategoriUncheckedCreateWithoutIconInput>
    where?: aset_kategoriWhereInput
  }

  export type aset_kategoriUpdateToOneWithWhereWithoutIconInput = {
    where?: aset_kategoriWhereInput
    data: XOR<aset_kategoriUpdateWithoutIconInput, aset_kategoriUncheckedUpdateWithoutIconInput>
  }

  export type aset_kategoriUpdateWithoutIconInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type aset_kategoriUncheckedUpdateWithoutIconInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type iconsCreateWithoutAset_kategoriInput = {
    id?: string
    img: string
    deleted_at?: Date | string | null
  }

  export type iconsUncheckedCreateWithoutAset_kategoriInput = {
    id?: string
    img: string
    deleted_at?: Date | string | null
  }

  export type iconsCreateOrConnectWithoutAset_kategoriInput = {
    where: iconsWhereUniqueInput
    create: XOR<iconsCreateWithoutAset_kategoriInput, iconsUncheckedCreateWithoutAset_kategoriInput>
  }

  export type iconsUpsertWithoutAset_kategoriInput = {
    update: XOR<iconsUpdateWithoutAset_kategoriInput, iconsUncheckedUpdateWithoutAset_kategoriInput>
    create: XOR<iconsCreateWithoutAset_kategoriInput, iconsUncheckedCreateWithoutAset_kategoriInput>
    where?: iconsWhereInput
  }

  export type iconsUpdateToOneWithWhereWithoutAset_kategoriInput = {
    where?: iconsWhereInput
    data: XOR<iconsUpdateWithoutAset_kategoriInput, iconsUncheckedUpdateWithoutAset_kategoriInput>
  }

  export type iconsUpdateWithoutAset_kategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type iconsUncheckedUpdateWithoutAset_kategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use iconsDefaultArgs instead
     */
    export type iconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = iconsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aset_kategoriDefaultArgs instead
     */
    export type aset_kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aset_kategoriDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asetDefaultArgs instead
     */
    export type asetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aset_akunDefaultArgs instead
     */
    export type aset_akunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aset_akunDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aset_userDefaultArgs instead
     */
    export type aset_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aset_userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transaksi_jenisDefaultArgs instead
     */
    export type transaksi_jenisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transaksi_jenisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transaksi_kategoriDefaultArgs instead
     */
    export type transaksi_kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transaksi_kategoriDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transasksi_subkategoriDefaultArgs instead
     */
    export type transasksi_subkategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transasksi_subkategoriDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transasksiDefaultArgs instead
     */
    export type transasksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transasksiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hutangDefaultArgs instead
     */
    export type hutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hutangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use piutangDefaultArgs instead
     */
    export type piutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = piutangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>

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