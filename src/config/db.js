const { PrismaClient: schema1 } = require('../../prisma/siuang');

const siuang = new schema1();

module.exports = {
    siuang,
};

// npx prisma generate --schema=prisma/schema1.prisma
// npx prisma db pull --schema=prisma/schema1.prisma
// npx prisma db push --schema=prisma/schema1.prisma


// git pull origin main --allow-unrelated-histories