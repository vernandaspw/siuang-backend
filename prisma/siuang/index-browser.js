
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.IconsScalarFieldEnum = {
  id: 'id',
  img: 'img',
  deleted_at: 'deleted_at'
};

exports.Prisma.Aset_kategoriScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  icon_id: 'icon_id'
};

exports.Prisma.AsetScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Aset_akunScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Aset_userScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Transaksi_jenisScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Transaksi_kategoriScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Transasksi_subkategoriScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.TransasksiScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.HutangScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.PiutangScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.AdminScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)