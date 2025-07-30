// check if user has admin rights in the current server/channel
const isAdmin = function(msg) {
    return msg.member.permissionsIn(msg.channel).has("ADMINISTRATOR");
};

module.exports = { isAdmin };