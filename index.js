const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "983193866620514324";

 client = new Client({
﻿checkUpdate: false,
﻿});
 kizzo = new Client({
﻿checkUpdate: false,
﻿});

client.on('ready', async () => {
    


 const connection =   joinVoiceChannel({
        channelId: "986276844057788476",
        guildId: "681797849926860810",
        adapterCreator: client.guilds.cache.get(681797849926860810).voiceAdapterCreator,
});

connection.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} est en ligne!`);

});

    });



 
  
client.login("NDk5NDQ3NDU2Njc4MDE5MDcy.GBL3yQ.0zmzxwZsruUnrmg1-nghRNhK-AC4rwFIPKw5XM");
kizzo.login("ODE5OTIwMTg4NTI2MTY2MDI3.GRGe1Q.HalS3dTJSzPodrOKEBKx1sQyNi75L4wvTiNJ0Y");

 







