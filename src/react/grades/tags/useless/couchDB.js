/* eslint-disable max-len */

const couchDB = {
  tag: 'CouchDB',
  name: 'CouchDB',
  text:
    'CouchDB — документо-ориентированная система управления базами данных с открытым исходным кодом, не требующая описания схемы данных, распространяется свободно, написана на языке Erlang. Впервые вышла в 2005 году, с 2008 года — проект фонда Apache. Реализована в рамках подхода NoSQL. Для хранения данных используется JSON, для реализации MapReduce-запросов — JavaScript. Возможно написание любой логики на Erlang.Одной из особенностей СУБД является поддержка репликации с несколькими ведущими узлами. CouchDB можно рассматривать как сервер веб-приложений; для реализации этой идеи в CouchDB встроен производительный веб-сервер, а программный код, как и данные, сохраняется в той же базе данных. Для автоматизации работы с приложениями используется утилита CouchApp. Следуя подходу NoSQL, CouchDB не хранит данные и связи в таблицах. Вместо этого каждая база данных — набор независимых документов. Каждый документ содержит свои собственные данные и независимую схему. Приложение может получить доступ к нескольким базам данных, например, хранящейся на мобильном телефоне пользователя и на сервере. Метаданные документа содержат информацию о версии, позволяя объединять данные и разрешать любые противоречия, которые могли появиться в момент, когда базы данных были разъединены. Для управления конкурентным доступом используется механизм MVCC, благодаря чему возможно избежать необходимости блокировки файла базы данных во время записи. Разрешение конфликтов относится к сфере ответственности логики приложения, разрешение конфликта обычно включает в себя объединение данных в один документ, а затем старый документ удаляется.',
  links: [
    {
      url: 'http://docs.couchdb.org/en/stable/',
      name: 'Официальная документация',
    },
    {
      url: 'https://www.youtube.com/watch?v=nlqv9Np3iAU',
      name: 'Traversy Media - "CouchDB Basics"',
    },
    {
      url: 'https://www.youtube.com/watch?v=R6LUMXrAoCE',
      name: 'Traversy Media - "Node js With CouchDB"',
    },
    {
      url: 'https://github.com/robertkowalski/learnyoucouchdb',
      name: 'Learn You CouchDB for great good!',
    },
  ],
};

export default couchDB;
