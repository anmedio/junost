/* eslint-disable max-len */

const libuvAndAsynchronousIO = {
  tag: 'Libuv & asynchronous I/O',
  name: 'Libuv & asynchronous I/O',
  text:
    'Libuv -  это многоплатформенная библиотека C, которая поддерживает асинхронный ввод-вывод на основе циклов событий. Он поддерживает порты событий epoll, kqueue, Windows IOCP и Solaris. Он в первую очередь предназначен для использования в Node.js, но также используется другими программными проектами.',
  links: [
    {
      url: 'http://docs.libuv.org/en/v1.x/',
      name: 'Официальная документация',
    },
    {
      url: 'https://habr.com/ru/post/336498/',
      name: 'Статья на Habr - "Знай свой инструмент: Event Loop в libuv"',
    },
    {
      url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
      name:
        'Доклад Филиппа Робертса на конференции JSConf EU 2014 - "Что за чертовщина такая event loop?"',
    },
    {
      url: 'https://github.com/thlorenz/learnuv',
      name: 'Learnuv',
    },
  ],
};

export default libuvAndAsynchronousIO;
