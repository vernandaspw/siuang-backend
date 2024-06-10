const AWS = require('aws-sdk');
const crypto = require('crypto');
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

exports.uploadFile = (file, folder) => {
    const uniqueSuffix = `${file.originalname}-${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const fileExtension = file.originalname.split('.').pop();
    const hash = crypto.createHash('md5').update(uniqueSuffix).digest('hex');
    const fileName = folder ? '${folder}/${hash}.${fileExtension}' : '${hash}.${fileExtension}'

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
    };

    return s3.upload(params).promise().then((result) => ({
        ...result,
        filename: fileName,
    }));
};

exports.deleteFile = (key) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    };
  
    return s3.deleteObject(params).promise();
  };


