const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348148048544";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_15_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0tYTm9Bdk4zUFpXU25QR0xVY21RckE1NVAwL1ZvRERJZUM4T0RUeUhxST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkZOQ2N5dWlUU0tmYWhHOXZDSmJ0Z1wiLFxuICBcInBob25lSWRcIjogXCI2Njk3NTY3Ny0xMzlkLTQzYTktYjdhMy05MjZmYzA3NDE0ZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjIyLFxuICAgICAgMjQyLFxuICAgICAgMzgsXG4gICAgICA1OCxcbiAgICAgIDEwLFxuICAgICAgMjE4LFxuICAgICAgNDIsXG4gICAgICAxMjQsXG4gICAgICAxODYsXG4gICAgICA5MCxcbiAgICAgIDc5LFxuICAgICAgNDAsXG4gICAgICAxMTAsXG4gICAgICA5MCxcbiAgICAgIDEwNSxcbiAgICAgIDI0OCxcbiAgICAgIDQ0LFxuICAgICAgOSxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDE3NSxcbiAgICAgIDUsXG4gICAgICAxNDYsXG4gICAgICAxNzIsXG4gICAgICAxMzgsXG4gICAgICAyMyxcbiAgICAgIDEyOCxcbiAgICAgIDEyNixcbiAgICAgIDM2LFxuICAgICAgNzEsXG4gICAgICAxODYsXG4gICAgICAxNDAsXG4gICAgICA0MixcbiAgICAgIDMsXG4gICAgICA3NSxcbiAgICAgIDkzLFxuICAgICAgMTEwLFxuICAgICAgMTQxLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkcyMThKMkEyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MDQ4NTQ0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9oblwiLFxuICAgIFwibGlkXCI6IFwiMjA4NjU0MDQxMTcxMzI6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUR3Ky9jRUVPMkQzTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5NHpxWHh4YURIN1R3NjdXaittVi9Gd1A1NVNvbmwrWmtlaU4zRU9sWVh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlabjRySGN4WElnY0Q0bTdMOFVOZEtFdU1mTkxxdCttVUtwT21EL0pQVDZPRXhNd3lFTFJLWVpicVZiWlV5bFVROVgzeUQ0bzZ3YVk1T0huck9rTEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1zVHJaUC8yMWhUS3NJZVcrSmRLeVd0V205ZDRsQUFmVnI3cUdWa1NWeEJROGlCc1h2MG1WaGJ6akZoQ284b1VWU1R1YXFLUHVUNXd1QndBTkJuTGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDgwNDg1NDQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4NTI1MzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "JOHN BOT",
  ownername:process.env.OWNER_NAME|| "John",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
