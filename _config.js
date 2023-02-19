var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mikedee:S3Y8Kp7zbSWv6u4y@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://mikedee:S3Y8Kp7zbSWv6u4y@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://mikedee:S3Y8Kp7zbSWv6u4y@moringa-devops.3mlwhea.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
