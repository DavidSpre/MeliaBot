// validate ids are present
const { 
    MESSAGE_PRONOUNS_ID, 
    MESSAGE_PINGABLE_ID, 
    ROLE_SHEHER_ID, 
    ROLE_HEHIM_ID, 
    ROLE_THEYTHEM_ID, 
    ROLE_SERVERUPDATES_ID, 
    ROLE_EPICGAMERS_ID, 
    ROLE_ANNOUNCEMENTS_ID, 
    ROLE_GAMENIGHTS_ID 
} = process.env;

if (
    !ROLE_SHEHER_ID || 
    !ROLE_HEHIM_ID || 
    !ROLE_THEYTHEM_ID ||
    !ROLE_SERVERUPDATES_ID || 
    !ROLE_EPICGAMERS_ID || 
    !ROLE_ANNOUNCEMENTS_ID || 
    !ROLE_GAMENIGHTS_ID
)
{
    throw new Error("Missing environment variables");
}

// define roles
const reactionRoleConfig = [
    // pronouns
    { messageId: MESSAGE_PRONOUNS_ID, reaction: "❤️", roleId: ROLE_SHEHER_ID },
    { messageId: MESSAGE_PRONOUNS_ID, reaction: "💙", roleId: ROLE_HEHIM_ID },
    { messageId: MESSAGE_PRONOUNS_ID, reaction: "💜", roleId: ROLE_THEYTHEM_ID },
    // pings
    { messageId: MESSAGE_PINGABLE_ID, reaction: "🔧", roleId: ROLE_SERVERUPDATES_ID },
    { messageId: MESSAGE_PINGABLE_ID, reaction: "❣️", roleId: ROLE_EPICGAMERS_ID },
    { messageId: MESSAGE_PINGABLE_ID, reaction: "😎", roleId: ROLE_ANNOUNCEMENTS_ID },
    { messageId: MESSAGE_PINGABLE_ID, reaction: "💩", roleId: ROLE_GAMENIGHTS_ID }
]

module.exports = { reactionRoleConfig };