/* eslint-disable max-len */

const memoryJs = {
  tag: 'Javascript Memory',
  name: 'Javascript Memory',
  text:
    'Низкоуровневые языки программирования (например, C) имеют низкоуровневые примитивы для управления памятью, такие как malloc() и free(). В JavaScript же память выделяется динамически при создании сущностей (т.е., объектов, строк и т.п.) и "автоматически" освобождается, когда они больше не используются. Последний процесс называется сборкой мусора . Слово "автоматически" является источником путаницы и зачастую создает у программистов на JavaScript (и других высокоуровневых языках) ложное ощущение, что они могут не заботиться об управлении памятью.',
  links: [
    {
      url:
        'https://developer.mozilla.org/ru/docs/Web/JavaScript/Memory_Management',
      name: 'Официальная документация MDN',
    },
    {
      url: 'https://learn.javascript.ru/memory-management',
      name:
        'Учебник Ильи Кантора "learn.javascript.ru" - Управление памятью в JavaScript',
    },
    {
      url:
        'https://medium.com/devschacht/a-crash-course-in-memory-management-b4863e000a5f',
      name: 'Статья на Medium - "Быстрый курс по управлению памятью"',
    },
  ],
};

export default memoryJs;
