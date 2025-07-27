const { config } = require("./config");

// define roles
const reactionRoleConfig = [
    // pronouns
    { messageId: config.MESSAGE_PRONOUNS_ID, reaction: "❤️", roleId: config.ROLE_SHEHER_ID },
    { messageId: config.MESSAGE_PRONOUNS_ID, reaction: "💙", roleId: config.ROLE_HEHIM_ID },
    { messageId: config.MESSAGE_PRONOUNS_ID, reaction: "💜", roleId: config.ROLE_THEYTHEM_ID },
    // pings
    { messageId: config.MESSAGE_PINGABLE_ID, reaction: "🔧", roleId: config.ROLE_SERVERUPDATES_ID },
    { messageId: config.MESSAGE_PINGABLE_ID, reaction: "❣️", roleId: config.ROLE_EPICGAMERS_ID },
    { messageId: config.MESSAGE_PINGABLE_ID, reaction: "😎", roleId: config.ROLE_ANNOUNCEMENTS_ID },
    { messageId: config.MESSAGE_PINGABLE_ID, reaction: "💩", roleId: config.ROLE_GAMENIGHTS_ID }
]

module.exports = { reactionRoleConfig };