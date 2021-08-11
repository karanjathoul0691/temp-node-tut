const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method to get systems up time in seconds
console.log(`system uptime is ${os.uptime()/3600} hours`);
