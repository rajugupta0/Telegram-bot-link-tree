const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);





bot.start((ctx) => {
    const startmessage = "Welcome to linkBot, you can try /about or /help commands";
    ctx.reply(startmessage);
});

bot.command('creater', (ctx) => ctx.reply('Raju Here'));

bot.command('about', (ctx) => ctx.reply('Welcome to LinkBot, your go-to source for links! LinkBot is a Telegram bot that provides you with quick and easy access to all the important links and resources related about me and it is updated on regular basis.try /help command'));


bot.command('gmail', (ctx) => ctx.reply('raju200115@gmail.com'));
bot.command('mail', (ctx) => ctx.reply('raju200115@gmail.com'));

bot.command('blog', (ctx) => ctx.reply('https://codenirvanaraju.hashnode.dev/'));
bot.command('hashnode', (ctx) => ctx.reply('https://codenirvanaraju.hashnode.dev/'));

bot.command('linkedin', (ctx) => ctx.reply('https://www.linkedin.com/in/rajugupta0/'));

bot.command('github', (ctx) => ctx.reply('https://github.com/rajugupta0'));

// Roll 
bot.command('roll', (ctx) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    ctx.reply(`You rolled a ${roll}`);
  });
  
  // Random 
  bot.command('random', (ctx) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    ctx.reply(`Your random number is ${randomNumber}`);
  });
  
  // Quote 
  bot.command('quote', (ctx) => {
    const quotes = [
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "It does not matter how slowly you go as long as you do not stop. -Confucius",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
      "It is never too late to be what you might have been. -George Eliot",
      "The only way to do great work is to love what you do. -Steve Jobs"
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    ctx.reply(randomQuote);
  });

// Help command handler
bot.command('help', (ctx) => {
    const helpMessage = `Here are the available commands:
    /start 
    /help 
    /gmail 
    /linkedin  
    /github
    /blog
    /roll - Roll a dice
    /random - Generate a random number
    /quote - Send an inspirational quote`;
  
    ctx.reply(helpMessage);
  });

bot.on('text', (ctx) => {
    ctx.reply('Sorry, I don\'t understand that command. Type /help to see the available commands.');
  });
// start the bot 
bot.launch();


