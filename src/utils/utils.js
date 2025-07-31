// check if user has admin rights in the current server/channel
const isAdmin = function(msg) {
    try {
        // user is admin - pass
        return msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR");
    } catch(err) {
        // TODO: Check if error can be prevented by adjusting Melia's permissions
        // user is not an admin - return
        return false;
    }
};

// generates a random integer between min and max
const generateRandomInteger = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { isAdmin, generateRandomInteger };