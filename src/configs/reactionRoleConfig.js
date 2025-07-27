// define roles
// TODO: move ids into .env?
const reactionRoleConfig = [
    // pronouns
    { messageId: "884731376241369118", reaction: "❤️", roleId: "884730013088366632" }, // :heart:
    { messageId: "884731376241369118", reaction: "💙", roleId: "884730075579297792" }, // :blue_heart:
    { messageId: "884731376241369118", reaction: "💜", roleId: "884730111889391636" }, // :purple_heart:
    // pings
    { messageId: "884831953667358720", reaction: "🔧", roleId: "884730013088366632" }, // :wrench:
    { messageId: "884831953667358720", reaction: "❣️", roleId: "884730013088366632" }, // :heart_exclamation:
    { messageId: "884831953667358720", reaction: "😎", roleId: "884730013088366632" }, // :sunglasses:
    { messageId: "884831953667358720", reaction: "💩", roleId: "884730013088366632" } // :poop:
]

module.exports = { reactionRoleConfig };