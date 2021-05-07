const telegramApi = require('node-telegram-bot-api')


const token = '947603520:AAEkr2UxJpWbX_rzk4dP5Z82VnmaKDpIeog'

const bot = new telegramApi(token, {polling: true})

bot.on('message', msg => {
	const text =  msg.text
	const chatId = msg.chat.id
	console.log(text)
	bot.sendMessage(chatId, text)
})