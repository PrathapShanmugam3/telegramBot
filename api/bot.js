const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Bot is running on Vercel! 🚀'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// This is the key part for Vercel
module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body, res);
    } else {
      res.status(200).send('Bot is alive!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};
