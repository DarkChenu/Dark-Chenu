/*════════════════════════════════════════════════════════════════════════════
                                                                            
   ⚡️ 𝗠𝗔𝗡𝗨-𝗠𝗗 𝐁𝐎𝐓 - 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 8.0 ⚡️                                     
                                                                            
     🤖 Multi-functional WhatsApp User Bot by Dark Chenu                                   
     ▶️ YouTube  : https://www.youtube.com/@Tunes1N                   
     📱 WhatsApp : +94 76 287 7975                                            
                                                                            
   ╭────────────────────────────────────────────────────────────────────╮
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▀█░▄▄▀█░▄▄▀█░█▀████░▄▄▀█░████░▄▄█░▄▄▀█░██░
██░██░█░▀▀░█░▀▀▄█░▄▀████░████░▄▄░█░▄▄█░██░█░██░
██░▀▀░█▄██▄█▄█▄▄█▄█▄████░▀▀▄█▄██▄█▄▄▄█▄██▄██▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  ╰────────────────────────────────────────────────────────────────────╯  
                                                                          
════════════════════════════════════════════════════════════════════════════
*/
/**
 * 🧠 Author        : Dark Chenu
 * 🌐 Project Name  : Darkz-MD
 * 🛠 Base Script   : By Dark Chenu
 * 📝 Description   : Darkz-MD is a powerful and customizable WhatsApp bot 
 *                    built for fun, automation, and productivity!
 * 🔒 License       : © 2025 Darkz-MD v8.0 - All Rights Reserved
 */
 
 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&PRcBlZhR#ApDenECiipE73g4X4J6SKZQORXsKuIGjRJsAI3JebM8', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000'
};
