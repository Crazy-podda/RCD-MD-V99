//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NpVExOWlBoR01EY0VRbXlzVmN4R1VhTzY2RDhJNFZIclUwSHV2U3VsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tTd2M3dzc0TU9mRFQ1bzNLT2JXcmQ2M1k1aWZhSmd1QktFUVIvTFZVTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SEFDeXkwaGRvOEtzV0s3N285VW9QeGwyaGdvQk1EOFdwUVJ1MDEvRkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSlp5VWU2OFFrU3J4U2Y5NkhTYlJJd3I3R256aG5QZHp1QisxNDBpb0J3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBUklkZzg4TWdwRHdwcDhUYW1ic0dDWlhTZS9DTnN1VlNsbzk3d2VhbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlhZTlBM0RkczMzNXNOekN4b1duek5PQmZaT0tySGl5U3ZLYkxrc1dveGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1ya3pkL3lZdUR4eEZ2UGRDdWlVNGZVaVZDdzgvcjRDYXdicHF3WXJXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFNXaTA2N0hVRzNkY3ZyTzVwWVhXbWRTbml4NnJBeG5CL01KUVVTYnF5cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklUaGJTeWFiN2hwaE9mMEF4bDVic0lvU29jK2tqQTczT2pGR0ZiVE9TT3AvaUdqbUpubEdvcUpzeWowYnlLSCsrbWZqVTFxRit0a055WFdQTG9kVGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiIwSXVUUit1dVpGbndONnFhRXNDOFNOSkhjWHRjODZMWS9qY3ZVbkhTbis4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItbXFLOWVTeVJZZVY1NWRRek10V3d3IiwicGhvbmVJZCI6IjZkNGZkNDg5LTRhM2YtNGQ4MC1hZjUwLTMwM2M5ZjQyMmIxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWFZtb2Y0UVZ4VWFwM3gxcnRsaWxrcldtc0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM012RExqTDNRcWJkSFRFUUZzMnpoVWpIeUtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgxQUdaQVlHIiwibWUiOnsiaWQiOiI5NDc1MjkwMjE2MzoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTXG5cblxuXG5UXG5cblxuXG5BXG5cblxuXG5UXG5cblxuXG5VXG5cblxuXG5TXG5cblxuXG4gS1xuXG5cblxuSVxuXG5cblxuTlxuXG5cblxuR1xuXG5cblxuV1xuXG5cblxuSFxuXG5cblxuSVxuXG5cblxuVFxuXG5cblxuRSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZVNjVFREVKKy82N2NHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTlncVlDZy9jQlcyaWRCVFhOMGVSMEUvY05BWUMxVnYydzlqTUhnc3Yybz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSkVKYlBuM29sTjNGbk9IeVBHWmN2bHZrV0J2cm0xTGxVb01vUHVsY3ZEMmJEditvc3lVUXVyOWx2dDgrY2hNb1VBcTQ1V0JNeGNmcmMrMXprYlpSQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InlEeSs0VUJVbWZWY0pLSDEvcGIwRWtmQjJRWlQ0emJrbGJWclM2dksrQVpseXBuQytpbnQ0aVcyeHQ0dXZ6b3gxTUY2Y0xOdTJDelNvN00zNEtXMWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTI5MDIxNjM6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGZZS21Bb1AzQVZ0b25RVTF6ZEhrZEJQM0RRR0F0VmI5c1BZekI0TEw5cSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzcxNzI5MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBRmgifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
