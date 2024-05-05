const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const ChatGPTClass = require('./services/chatgpt')

const createBotChatGpt = async ({ provider, database }) => {
    return new ChatGPTClass(database, provider)
  }

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterProvider = createProvider(BaileysProvider)

    createBotChatGpt({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
