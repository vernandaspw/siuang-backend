
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
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
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

exports.Prisma.AdminsScalarFieldEnum = {
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

exports.Prisma.Aset_akunsScalarFieldEnum = {
  id: 'id',
  urut: 'urut',
  group_id: 'group_id',
  user_id: 'user_id',
  aset_id: 'aset_id',
  nama: 'nama',
  icon_id: 'icon_id',
  color_bg: 'color_bg',
  color_text: 'color_text',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Aset_kategorisScalarFieldEnum = {
  id: 'id',
  urut: 'urut',
  nama: 'nama',
  group_id: 'group_id',
  keterangan: 'keterangan',
  icon_id: 'icon_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.AsetsScalarFieldEnum = {
  id: 'id',
  urut: 'urut',
  group_id: 'group_id',
  user_id: 'user_id',
  aset_kategori_id: 'aset_kategori_id',
  nama: 'nama',
  icon_id: 'icon_id',
  color_bg: 'color_bg',
  color_text: 'color_text',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Group_kreditsScalarFieldEnum = {
  id: 'id',
  tipe: 'tipe',
  nominal: 'nominal',
  keterangan: 'keterangan',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id',
  group_id: 'group_id'
};

exports.Prisma.Group_usersScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  user_id: 'user_id',
  status: 'status',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GroupsScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  user_id: 'user_id',
  isPremium: 'isPremium',
  premium_expired_at: 'premium_expired_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.HutangsScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.IconsScalarFieldEnum = {
  id: 'id',
  img: 'img',
  deleted_at: 'deleted_at'
};

exports.Prisma.Kredit_topupsScalarFieldEnum = {
  id: 'id',
  group_kredits: 'group_kredits',
  group_id: 'group_id',
  user_id: 'user_id',
  admin_id: 'admin_id',
  nominal: 'nominal',
  kode_unik: 'kode_unik',
  ppn: 'ppn',
  total_bayar: 'total_bayar',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LabelsScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  color_bg: 'color_bg',
  color_text: 'color_text'
};

exports.Prisma.PiutangsScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.Transaksi_kategorisScalarFieldEnum = {
  id: 'id',
  urut: 'urut',
  group_id: 'group_id',
  partOf: 'partOf',
  tipe: 'tipe',
  icon_id: 'icon_id',
  nama: 'nama',
  user_id: 'user_id',
  label_id: 'label_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  email: 'email',
  phone: 'phone',
  password: 'password',
  isaktif: 'isaktif',
  group_id: 'group_id',
  google_id: 'google_id',
  lastSeenAt: 'lastSeenAt',
  token: 'token',
  tokenRefresh: 'tokenRefresh',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TransaksisScalarFieldEnum = {
  id: 'id',
  tipe: 'tipe',
  transaksi_kategori_id: 'transaksi_kategori_id',
  label_id: 'label_id',
  aset_akun_id: 'aset_akun_id',
  nominal: 'nominal',
  catatan: 'catatan',
  img: 'img',
  isLaporan: 'isLaporan',
  transaksiOf: 'transaksiOf',
  group_id: 'group_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.group_kredits_tipe = exports.$Enums.group_kredits_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.group_users_status = exports.$Enums.group_users_status = {
  pending: 'pending',
  aktif: 'aktif',
  nonaktif: 'nonaktif'
};

exports.group_users_role = exports.$Enums.group_users_role = {
  admin: 'admin',
  anggota: 'anggota'
};

exports.kredit_topups_status = exports.$Enums.kredit_topups_status = {
  pending: 'pending',
  success: 'success',
  failed: 'failed'
};

exports.transaksi_kategoris_tipe = exports.$Enums.transaksi_kategoris_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.transaksis_tipe = exports.$Enums.transaksis_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.Prisma.ModelName = {
  admins: 'admins',
  aset_akuns: 'aset_akuns',
  aset_kategoris: 'aset_kategoris',
  asets: 'asets',
  group_kredits: 'group_kredits',
  group_users: 'group_users',
  groups: 'groups',
  hutangs: 'hutangs',
  icons: 'icons',
  kredit_topups: 'kredit_topups',
  labels: 'labels',
  piutangs: 'piutangs',
  transaksi_kategoris: 'transaksi_kategoris',
  users: 'users',
  transaksis: 'transaksis'
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
