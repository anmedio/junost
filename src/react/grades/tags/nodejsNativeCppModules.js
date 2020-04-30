/* eslint-disable max-len */

const nodejsNativeCppModules = {
  // TODO: Добавить материалы
  tag: 'Nodejs Native C++ Modules',
  name: 'Nodejs Native C++ Modules',
  text:
    'Нативные C++ модули - это очень сильный инструмент в работе с nodejs. Конечно стандартная библиотека nodejs реализует все абстракции, необходимые для создания современных приложений, однако в один прекрасный момент Вы можете столкнуться с тем, что производительности nodejs по каким-то причинам не хватает. Именно тогда на помощь Вам приходят нативные C++ модули, которые, как легко можно догадаться, писать придётся на языке C++. Вам не нужно быть гуру C++ для того, чтобы реализоваться простые модули, однако знания данного языка программирования - это обязательное требование.',
  links: [
    {
      url: 'https://nodejs.org/dist/latest-v12.x/docs/api/addons.html',
      name: 'Официальная документация встроенной библиотеки "C++ Addons"',
    },
    {
      url: 'https://nodejs.org/dist/latest-v12.x/docs/api/n-api.html',
      name: 'Официальная документация встроенной библиотеки "N-API"',
    },
    {
      url: 'https://github.com/workshopper/goingnative',
      name: 'Goingnative',
    },
  ],
};

export default nodejsNativeCppModules;
