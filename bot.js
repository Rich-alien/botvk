const express = require('express');
const bodyParser = require('body-parser');
const { Botact } = require('botact');


const app = express();
const bot = new Botact({
    token: 'ffd8131c3cabeab91dc3b6e53c70d958cb711c88221907e0a7a7b09eb10a577c9b024acd04ec56c7f280a',
    confirmation: 'acb5a488'
});

bot.on(function (ctx){
    console.log(ctx.body);
    ctx.reply( 'Что то пошло не по плану' );
});
bot.command('start',function(ctx){
    ctx.reply('Привет, я бот-психолог! У тебя есть осознанность? Тебе нужна психологическая помощь? Если есть , ответь "Да"');
});
// bot.event('group_join', ({ reply }) => {
//     reply('Привет, я бот-психолог! У тебя есть осознанность? Тебе нужна психологическая помощь? Если есть , ответь "Да"');
//   });
bot.command('Да',function(ctx){
    console.log(ctx.body);
    ctx.reply('Выберите цифру варианта : 1) суицид 2) депрессия 3) Взаимоотношения в коллективе 4)Взаимоотношения в семье 5)Переживания связанные с учёбой' );
});

bot.command('1',function(ctx){
    ctx.reply('Поспи');
});
bot.command('2',function(ctx){
    ctx.reply('Поспи');
});
bot.command('3',function(ctx){
    ctx.reply('Поспи');
});
bot.command('4',function(ctx){
    ctx.reply('Поспи');
});
bot.command('5',function(ctx){
    ctx.reply('Поспи');
});
// bot.command('start',function(ctx){
//     ctx.reply('я знаю, что мир серен и ты одинок , единственное твое решение , это просто взять и спрыгнять , просто сделай это , никто не подумает о тебе . Прыгай! ');
// });


app.use( bodyParser.json() );

app.post('/', bot.listen);

app.listen(80);

