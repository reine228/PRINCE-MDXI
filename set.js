
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VVa4+iSBT9L/VVM81DBUw6WUREREVRRNnshxIKLHlXFdg48b9vsKenJ5vsbO+3oh7nnnvOvZfvIC8wRRZqwfg7KAluIEPdkrUlAmMwqaMIEdAHIWQQjIG2OfZ45bSfSoP7UNJyBM+luFtJhyZA2mrth5eSJQqKApF7BY8+KOtzioPfAHp1VGUbvW7U7XrGLd2XVVoON7osRftL0uvN5zubp0dxGerJK3h0iBATnMd6eUEZIjC1ULuBmHyNPrIzR3PfBuhkZZNBK2lGBO2EHmeWf1uIp2qRt2w/2rUmv/0a/eV1Q5a4sK6aGbvidFQUia1XUnIbWukLE7CIg553QZMovr3TpzjOUWiGKGeYtV/WXV2w/YS5xZzzmnKxvnOpN5rd7wPJOvKqMcvXkIzcqnH9fPU14kMiL8yF7pp4ekZuvd04RTKaLPMbvzh5jJvFjThy9JTdneBX4hvyUSvJ/9Hd0q3mOFxHque7+vTQ24jYXqq0pxk5xvjiZrPD5brmX1D6RfrV0nI8XKMjLgrFUUL+vNzau6v2dmOOF+7z2WY914pedEi5T/qQ1eR3LKERRO1uyJEmjQ+3RlUVR3IX5n2gi2VeZK62bqpSEL28vSuHkxxMjfOx12aSKi0qGFS+OjkdXFQHXhYR6XzctZO9rN1enxklqDVDMOYffUBQjCkjkOEi7/ZGgz6AYbNDAUHsqS7wRcUUxelNW+/lm9+T56hixcTldGOhtJtJax6rkF/u6nN2egV9UJIiQJSicI4pK0i7QpTCGFEw/vOvPsjRG3v3rYsm8n0QYUKZm9dlWsDww9SPQxgERZ2zXZsHWrdABIy5z23EGM5j2slY55AEF9wg7QIZBeMIphT9TBARFIIxIzX62bRaEXa6Dya6Ka0FEfRB9vQDh2AMBEFWRgNFkgfSmBf+oN9uHSosy285YqAPcthdBlcEc9AH6fMNL4gyzw8VQeIFkVe6d93B4yfdDj1EDOKUdtPLEpN4GU/0tbYWqGkY6jZWtVgFn+l9lMm7DwdVqjjJDO/u1Mluw7U8PePWSbxzr3o788abcYAWrZz8zj19+CcIGIMZ3abQjlKfO21SKrL97S19sZ2Xe6OeZ3Kz7PknIz8pkFXChSPL4zUzateORym3DdnhskrOy+Hxaqyc0J7TOo6vy8ifqq9dtBA1OEC/Bks2DFHZc0Wyqo6jIRUzC12JFCHOMZMh3cm3bMoTYuWmrbu8v5F461pKYhZptiDEpne1ruujaK5yp5lrU+bueFSp6nsBPxso/TG48LO2OuO6zwij5xz44dB/GfnOuys37tH/BeLHYPmX5pwctvaI2e084FXOp/Y+UoUBTfxZ9lJRT3Gok3qYWIkvKwZ4PP7qgzKFLCpIBsaAZmcI+oAUdVe8Zh4Vv/vHqbE53b5nnULK1M+G2OMMUQazEox5acgNOZ6ThfdbG1KUc0gvnQDGQM1q8PgbulN1w10HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "22896497847", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "prive", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "꧁❤•༆$🆆🅰🅷🆉(((༼•̫͡•༽)))", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
