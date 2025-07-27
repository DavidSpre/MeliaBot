// ensure everyone's .env is up to date
const requiredEnv = [
    "DISCORD_TOKEN",
    "DISCORD_CLIENT_ID",
    "SERVER_ID",
    "CHANNEL_ROLES_ID",
    "MESSAGE_PRONOUNS_ID",
    "MESSAGE_PINGABLE_ID",
    "ROLE_SHEHER_ID",
    "ROLE_HEHIM_ID",
    "ROLE_THEYTHEM_ID",
    "ROLE_SERVERUPDATES_ID",
    "ROLE_EPICGAMERS_ID",
    "ROLE_ANNOUNCEMENTS_ID",
    "ROLE_GAMENIGHTS_ID"
];

// validate all env vars are set
const checkEnvVars = function() {
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
        throw new Error(`Missing required environment variables: ${missingEnv.join(", ")}`);
    }
};

// vars are checked, can now be used as config in other files
const config = process.env;

module.exports = { checkEnvVars, config };