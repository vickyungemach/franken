require('dotenv').config();
const AWS = require('aws-sdk');
const uuid = require('uuid');


/* ===================================
   Upload image
=================================== */
async function uploadImage(req, res) {
    try {
        const keyPrefix = `${req.user.id}`;
        const fileName = `${uuid.v4()}.jpg`;

        const key = `${keyPrefix}/${fileName}`;

        // Get signed url for web upload
        const s3 = new AWS.S3({
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY
        })

        s3.getSignedUrl('putObject', {
            Bucket: 'minite-bucket',
            ContentType: 'image/jpeg',
            Key: key,
            Expires: 60
        }, (err, url) => res.send({key, url}))

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something didnt work right' });
    }
}

module.exports = {
    uploadImage
}