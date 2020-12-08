const aws = require('aws-sdk');

export const hello = async event => {
  const redis = new aws.Lambda();
  const opts = {
    FunctionName: 'redis-cache-lambda-dev-gruezi'
  };

  return new Promise((resolve, reject) => {
    redis.invoke(opts, function (err, data) {
      if (err) {
        console.log('Error : ' + err);
        reject(err);
      } else if (data) {
        const response = {
          statusCode: 200,
          body: JSON.parse(data.Payload)
        };
        resolve(response.body);
      }
    });
  });
};
