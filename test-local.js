const { Telegraf } = require('telegraf');
require('dotenv').config();

// Use the token from environment or fallback to the one provided
const token = process.env.BOT_TOKEN || '8578602555:AAGLeO-garUTyqaQO4CuYGeGw_yvCeF-lR0';

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Local Test: Bot is working! 🚀'));
bot.on('text', (ctx) => ctx.reply(`Local Test: You said: ${ctx.message.text}`));

console.log('Starting local bot test...');
console.log('Send a message to your bot on Telegram to test it.');

bot.launch().then(() => {
    console.log('Bot started successfully!');
}).catch((err) => {
    console.error('Failed to start bot:', err);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
