const corss = require('cors');

const corsOptions = {
    credentials : true,
    origin: []
};

const cors = corss(corsOptions);

module.exports = cors;