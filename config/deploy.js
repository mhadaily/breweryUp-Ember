/* jshint node: true */

module.exports = function (deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.s3.bucket = 'brewery-up-ember-development';
    ENV.s3 = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'eu-west-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'us-west-1',
      allowOverwrite: true
    };
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'eu-west-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'us-west-1',
      allowOverwrite: true
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'eu-west-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'brewery-up-ember',
      region: 'us-west-1',
      allowOverwrite: true
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
