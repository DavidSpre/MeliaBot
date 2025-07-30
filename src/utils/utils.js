// check if user has admin rights in the current server/channel
const isAdmin = function(msg) {
    try {
        // user is admin - pass
        return msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR");
    } catch(err) {
        // user is not an admin - return
        return false;
    }
};

module.exports = { isAdmin };