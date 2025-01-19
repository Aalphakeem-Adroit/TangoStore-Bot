const axios = require('axios');
const dotenv = require('dotenv').config();
const {Telegraf, Scenes, session} = require('Telegraf');



const botToken = process.env.botToken;
const bot = new Telegraf(botToken);



bot.start(async (ctx) => {
    console.log('New interaction from', ctx.from.first_name)
    const message = `Welcome to TangoStore, your one-stop destination for effortless shopping! Whether you're looking for the latest fashion trends, tech gadgets, home essentials, or gifts for your loved ones, TangoStore has got you covered. You are special to us, ${ctx.from.first_name} ${ctx.from.last_name}`
    // ctx.reply(message)

    ctx.replyWithPhoto(
        {source: './shop.jpg'},
        {caption: message,
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Payment', callback_data: 'payment'},
                        {text: 'Req Info', callback_data: 'req_info'},
                    ],
                    [
                        {text: 'Use Coupon Code', callback_data: 'use_coupon'},
                        {text: 'Check Coupon', callback_data: 'check_coupon'},
                    ]
                ]
                
            }
        }

    )
})


bot.action('payment', async (ctx)=> {
    ctx.reply('You are about to pay to Alphakeem Adroit. He would be happy to receive your payment')
})

bot.action('req_info', async (ctx)=> {
    ctx.reply('You are too curious. What info do you think I can provide? Ahahahahah')
})

bot.action('use_coupon', async (ctx)=> {
    ctx.reply('You like FREE things. For your information, there is no coupon at the moment. Ahahahahah')
})

bot.action('check_coupon', async (ctx)=> {
    ctx.reply('I said we do not have coupon at the moment. Ahahahahah')
})






bot.launch();