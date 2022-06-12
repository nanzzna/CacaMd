let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Gopay • ovo • dana • Saweria 」
│ •  [0896-6399-3052]
│ •  [https://saweria.co/ADNANFAUZAN]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
