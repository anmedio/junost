const grades = [
  /**
   *
   *  Frontend
   *
   */
  {
    name: 'Frontend',
    levels: [
      /**
       *
       *  Frontend - Junior
       *
       */
      {
        name: 'Junior',
        skills: [
          /**
           *  Инструменты
           */
          {
            tag: 'Computer science (basics)',
            name: 'Computer science (basics)',
            text:
              'Основы программирования и Computer Science - это те самые фундаментальные знания, которые необходима каждому, кто хочет стать настоящим инженером, а не просто заурядным программистом, который знает, как писать код, но понятия не имеет, как этот код работает',
            links: [
              {
                url: 'https://habr.com/ru/company/vertdider/blog/403823/',
                name: 'Легендарний гарвардский курс CS50',
              },
              {
                url:
                  'https://vk.com/doc2036633_461668315?hash=3bbe2d53fdb5bac884&dl=830098fee8b589a01c',
                name: 'Адитья Бхаргава. "Грокаем Алгоритмы"',
              },
              {
                url: 'https://www.codewars.com/dashboard',
                name: 'Codewars',
              },
              {
                url: 'https://vk.com/wall-54530371_11457',
                name: 'Роберт Лафоре. "Структуры данных и алгоритмы в Java"',
              },
              {
                url:
                  'https://code.tutsplus.com/series/data-structures-in-javascript--cms-772',
                name: 'Реализация структур данных на языке JavaScript',
              },
            ],
          },
          {
            tag: 'Markdown',
            name: 'Markdown',
            text:
              'Markdown — облегчённый язык разметки, созданный с целью написания наиболее читаемого и удобного для правки текста, но пригодного для преобразования в языки для продвинутых публикаций.',
            links: [
              {
                url:
                  'https://docs.microsoft.com/ru-ru/contribute/how-to-write-use-markdown',
                name: 'Документация от Microsoft',
              },
              {
                url: 'https://www.markdowntutorial.com/',
                name: 'Туториал',
              },
              {
                url: 'https://github.com/workshopper/how-to-markdown',
                name: 'How-to-markdown',
              },
            ],
          },
          {
            tag: 'HTML',
            name: 'HTML',
            text:
              'HTML — (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — язык разметки, определяющий структуру веб-страниц. Большинство веб-страниц в интернете содержат описание разметки на языке HTML.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                name: 'Документация от MDN',
              },
              {
                url: 'https://htmlacademy.ru/',
                name: 'Курсы от HTML Academy',
              },
              {
                url: 'https://github.com/denysdovhan/learnyouhtml',
                name: 'Learnyouhtml',
              },
            ],
          },
          {
            tag: 'CSS',
            name: 'CSS',
            text:
              'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Именно CSS делает Ваш HTML "красивым".',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                name: 'Документация от MDN',
              },
              {
                url: 'https://htmlacademy.ru/',
                name: 'Курсы от HTML Academy',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=wmAP2xvNs08&list=PL55RiY5tL51q6KKXoA0_CIskaTSJEM1fN',
                name: 'Academind - "Understanding CSS"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLyf8LgkO_8q8p3XDhKp8c4yJzgbRl7jFN',
                name: 'WebDesignMaster - "Джедай верстки"',
              },
            ],
          },
          {
            tag: 'Figma / Adobe XD',
            name: 'Figma / Adobe XD',
            text:
              'Adobe XD - программа для разработки интерфейсов от Adobe Systems. Поддерживает векторную графику и веб-верстку и создает небольшие активные прототипы. Как и Figma подходит для работы с макетами, которые получает веб-разработчик от дизайнера. \n Figma — кросс-платформенный онлайн-сервис для дизайнеров интерфейсов и веб-разработчиков. Figma позволяет разрабатывать интерфейсы в онлайн-приложении. У Figma две ключевые особенности: доступ к макету прямо из окна браузера и возможность совместной работы над документами. Как веб-разработчику Вам необходимо уметь работать с макетами, которые Вы получаете от дизайнера. Figma прекрасно подходит для этой работы.',
            links: [
              {
                url: 'https://www.figma.com/',
                name: 'Официальный сайт Figma',
              },
              {
                url: 'https://htmlacademy.ru/blog/useful/figma',
                name: 'HTMLacademy - "Старт в Figma для верстальщика"',
              },
              {
                url: 'https://coursehunters.net/course/izuchaem-figma',
                name: 'Курс "Mastering Figma"',
              },
              {
                url: 'https://www.adobe.com/ru/products/xd.html',
                name: 'Официальный сайт Adobe XD',
              },
              {
                url:
                  'https://coursehunters.net/course/adobe-xd-uskorennyy-kurs',
                name: 'Курс "Adobe XD Crash Course"',
              },
            ],
          },
          {
            tag: 'JavaScript (basics)',
            name: 'JavaScript (basics)',
            text:
              'JavaScript — язык программирования, который изначально создавался для того, чтобы сделать web-странички «живыми». Однако к 2019 году он серьезно "вырос" и сейчас представляет собой язык номер 1 для создания веб-приложений как на стороне клиента, так и на стороне сервера. Под "базовым" JS подразумеваются понимание таких вещей, как знание основ, понимание замыканий и областей видимости, умение реализовать и пользоваться встроенными в язык базовыми структурами данных, понимание контекста вызова и умение работать со встроенными объектами. Также нужно уметь работать с DOM и событиями браузера.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
                name: 'Документация от MDN',
              },
              {
                url: 'https://learn.javascript.ru',
                name: 'Учебник Ильи Кантора "learn.javascript.ru"',
              },
              {
                url: 'http://eloquentjavascript.net',
                name: 'Книга "Eloquent JavaScript"',
              },
              {
                url: 'https://github.com/workshopper/javascripting',
                name: 'JAVASCRIPTING',
              },
            ],
          },
          {
            tag: 'JSON',
            name: 'JSON',
            text:
              'JSON (JavaScript Object Notation) - простой формат обмена данными, удобный для чтения и написания как человеком, так и компьютером. Он основан на подмножестве языка программирования JavaScript, определенного в стандарте ECMA-262 3rd Edition - December 1999. JSON - текстовый формат, полностью независимый от языка реализации, но он использует соглашения, знакомые программистам C-подобных языков, таких как C, C++, C#, Java, JavaScript, Perl, Python и многих других. Эти свойства делают JSON идеальным языком обмена данными.',
            links: [
              {
                url: 'https://www.json.org/json-ru.html',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=bw10M9RuR30',
                name: 'Sorax - "JSON"',
              },
            ],
          },
          {
            tag: 'AJAX',
            name: 'AJAX',
            text:
              'AJAX - (ˈeɪdʒæks, от англ. Asynchronous JavaScript and XML — «асинхронный JavaScript и XML») — подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером. В результате, при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее. По-русски иногда произносится транслитом как «аякс». У аббревиатуры AJAX нет устоявшегося аналога на кириллице.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/Web/Guide/AJAX',
                name: 'Документация MDN',
              },
              {
                url: 'https://www.youtube.com/watch?v=lEfp6_ByY-Q',
                name: 'Loftblog - "AJAX. Настройка и отправка AJAX запросов"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=wMMki2FEYGY&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=53',
                name:
                  'Тимур Шемсединов - "HTTP запросы в браузере и Node.js: XMLHttpRequest, fetch"',
              },
            ],
          },
          {
            tag: 'NPM',
            name: 'NPM',
            text: 'NPM — менеджер пакетов, входящий в состав Node.js.',
            links: [
              {
                url: 'https://docs.npmjs.com',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/znakomstvo-s-npm',
                name: 'Курс "Знакомство с npm"',
              },
            ],
          },
          {
            tag: 'Pug',
            name: 'Pug',
            text:
              'Pug — препроцессор HTML и шаблонизатор, который был написан на JavaScript для Node.js. Он позволяет быстрее и "элегантнее" писать HTML.',
            links: [
              {
                url: 'https://pugjs.org/api/getting-started.html',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228',
                name: 'Развернутый туториал на GitHub',
              },
            ],
          },
          {
            tag: 'SASS / SCSS',
            name: 'SASS / SCSS',
            text:
              'SASS — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей. Язык SASS имеет два синтаксиса: SASS — отличается отсутствием фигурных скобок, в нём вложенные элементы реализованы с помощью отступов; SCSS (Sassy CSS) — использует фигурные скобки, как и сам CSS. По своей сути SASS и SCSS - это препроцессоры для CSS с разным синтаксисом. Они позволяют быстрее и "элегантнее" писать CSS.',
            links: [
              {
                url: 'https://sass-lang.com/documentation',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=H4cG4tbc-xQ',
                name:
                  'WebDesignMaster - "Sass для самых маленьких - подробное руководство"',
              },
              {
                url: 'https://github.com/workshopper/learn-sass',
                name: 'Learn SASS',
              },
            ],
          },
          {
            tag: 'Bootstrap',
            name: 'Bootstrap',
            text:
              'Bootstrap - это инструментарий с открытым исходным кодом для разработки с помощью HTML, CSS и JS. Наверное самый популярный фреймворк для создания UI.',
            links: [
              {
                url:
                  'https://bootstrap-4.ru/docs/4.3.1/getting-started/introduction/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=7g8Gg2QVdeU&list=PL55RiY5tL51rLqH4-8LBVlUTIFF70dxhb',
                name:
                  'Academind - "Bootstrap 4 Concepts & Setup | BOOTSTRAP 4 TUTORIAL"',
              },
              {
                url: 'https://coursehunters.net/course/freymvork-bootstrap-4',
                name: 'Курс "Фреймворк Bootstrap 4"',
              },
            ],
          },
          {
            tag: 'Gulp',
            name: 'Gulp',
            text:
              'Gulp — это таск-менеджер для автоматического выполнения часто используемых задач (например, минификации, тестирования, объединения файлов), написанный на языке программирования JavaScript.',
            links: [
              {
                url: 'https://gulpjs.com/docs/en/getting-started/quick-start',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/gulp',
                name: 'Скринкаст Ильи Кантора',
              },
            ],
          },
          {
            tag: 'ES6+',
            name: 'ES6+',
            text:
              'ES6+ — это новые возможности языка программирования JavaScript, появившихся в 6 и более поздних редакциях стандарта ECMAScript.',
            links: [
              {
                url: 'https://habr.com/ru/post/305900/',
                name: 'Статья на Habr',
              },
              {
                url: 'https://learn.javascript.ru/es-modern',
                name: 'Учебник Ильи Кантора "learn.javascript.ru"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=4YfsAz-sNAo&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q',
                name: 'CodeDojo - "Основы ES6"',
              },
              {
                url:
                  'https://www.youtube.com/channel/UCEBHlT_L1ME6e9ixaRPp0wg/videos',
                name: 'Видео на канале .getInstance',
              },
              {
                url: 'https://github.com/domenic/count-to-6',
                name: 'Count Up to Version 6 of JavaScript!',
              },
              {
                url: 'https://github.com/jesstelford/esnext-generation',
                name: 'ESNext Generation Interactive Workshop',
              },
            ],
          },
          {
            tag: 'Babel',
            name: 'Babel',
            text:
              'Babel.JS – это транспайлер, переписывающий код на ES-2015 в код на предыдущем стандарте ES5. Берёт код "нового образца" и полифилит его в код "старого образца". Всё просто.',
            links: [
              {
                url: 'https://babeljs.io/',
                name: 'Официальный сайт с tryout и документацией',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=XVDJxIpiDJw&list=PLqHlAwsJRxAOZCOfiukwZe4zJZIiVynvh',
                name: 'CodeDojo - "Знакомство с Babel"',
              },
              {
                url: 'https://github.com/yosuke-furukawa/tower-of-babel',
                name: 'Tower-of-babel',
              },
            ],
          },
          {
            tag: 'ESLint',
            name: 'ESLint',
            text:
              'ESLint – это инструмент, который позволяет проводить анализ качества вашего кода, написанного на любом выбранном стандарте JavaScript. Он приводит код к более-менее единому стилю, помогает избежать глупых ошибок, умеет автоматически исправлять многие из найденных проблем и отлично интегрируется со многими инструментами разработки.',
            links: [
              {
                url: 'https://eslint.org/',
                name: 'Официальный сайт',
              },
              {
                url: 'https://www.youtube.com/watch?v=lHAeK8t94as',
                name:
                  'Wes Bos - "ESLint + Prettier + VS Code — The Perfect Setup"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5zIRX5k9mg4',
                name:
                  'Для тех, кто любит необычную подачу информации ;D - Jilio',
              },
              {
                url: 'https://www.npmjs.com/package/eslint-config-airbnb',
                name: 'Конфиг от airbnb',
              },
            ],
          },
          {
            tag: 'Prettier',
            name: 'Prettier',
            text:
              'Prettier –  инструмент форматирования кода c поддержкой множества языков, минимумом конфигурации и максимумом навязанных правил. Prettier отлично сочетается с любым конфигом eslint, разделяя ответственность: за форматирование отвечает Prettier, за умными штуками вроде неиспользуемых переменных следит eslint. Prettier навязывает правила форматирования, которые вы можете выбрать сами. Не нужно спорить о правилах форматирования, Prettier решает все споры за вас. Также основным удобством Prettier является автоформатирование Вашего кода при сохранении файла. Это экономит очень много времени и сил. Попробуйте и убедитесь сами!',
            links: [
              {
                url: 'https://prettier.io/',
                name: 'Официальный сайт',
              },
              {
                url: 'https://www.youtube.com/watch?v=lHAeK8t94as',
                name:
                  'Wes Bos - "ESLint + Prettier + VS Code — The Perfect Setup"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5zIRX5k9mg4',
                name:
                  'Для тех, кто любит необычную подачу информации ;D - Jilio',
              },
            ],
          },
          {
            tag: 'Webpack',
            name: 'Webpack',
            text:
              'Webpack — инструмент веб-разработчика, который соединяет JavaScript- и CSS-файлы в единое целое — файл, который часто называется «bundle» (с англ. «пачка»).',
            links: [
              {
                url: 'https://webpack.js.org/concepts/',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/webpack',
                name: 'Скринкаст Ильи Кантора',
              },
              {
                url: 'https://nuancesprog.ru/p/2752/',
                name: 'Статья "Введение в WebPack для новиков"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os',
                name: 'Academind - "Webpack 2 Basics"',
              },
            ],
          },
          {
            tag: 'Parcel',
            name: 'Parcel',
            text:
              '"Простой" бандлер. Как и вебпак выполняет функции соединения JavaScript- и CSS-файлов в единое целое. Позиционируется как молниеносно быстрый упаковщик для веб-приложений без настроек. Ну или просто "Вебпак для людей".',
            links: [
              {
                url: 'https://ru.parceljs.org/getting_started.html',
                name: 'Официальная документация',
              },
            ],
          },
          {
            tag: 'JQuery',
            name: 'JQuery',
            text:
              'Старый добрый JQuery - фреймворк, "который мы заслужили". Основная задача - взаимодействие JavaScript и HTML. Помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими и так далее.',
            links: [
              {
                url: 'https://api.jquery.com/',
                name: 'Официальная документация',
              },
            ],
          },
          {
            tag: 'React',
            name: 'React',
            text:
              'React — это очень популярная JavaScript-библиотека с открытым исходным кодом для создания пользовательских интерфейсов.',
            links: [
              {
                url: 'https://reactjs.org/',
                name: 'Официальная документация',
              },
              {
                url: 'https://codedojo.ru/courses/react-basics',
                name: 'CodeDojo - "Основы React"',
              },
              {
                url: 'https://learn-reactjs.ru/home',
                name: 'Ресурс "Learn React JS"',
              },
              {
                url: 'https://github.com/workshopper/learnyoureact',
                name: 'Learnyoureact',
              },
            ],
          },
          {
            tag: 'Angular',
            name: 'Angular',
            text:
              'Angular — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона, а также упрощение тестирования и разработки.',
            links: [
              {
                url: 'https://angular.io/start',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=t3KH5LXHi0s&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp',
                name: 'CodeDojo - "Знакомство с Angular 2"',
              },
            ],
          },
          {
            tag: 'Vue',
            name: 'Vue',
            text:
              'Vue - прогрессивный JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Как React, только не так.',
            links: [
              {
                url: 'https://vuejs.org/v2/guide/',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/udemy-vuejs-2',
                name: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)',
              },
            ],
          },
          {
            tag: 'Visual Studio Code',
            name: 'Visual Studio Code',
            text:
              'Visual Studio Code — наверное, лучший текстовый редактор в 2019 году. Можно писать код где угодно, но зачем, если есть отличные инструменты?',
            links: [
              {
                url: 'https://code.visualstudio.com/docs',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/super-polzovatel-vscode',
                name: 'Курс "VSCode Power User"',
              },
            ],
          },
          {
            tag: 'Debugging',
            name: 'Debugging',
            text:
              'Не важно какой именно дебаггер Вы используете - Google Chrome, standalone решение или встренный в вашу IDE или текстовый редактор. Важно, что Вы умеете это делать и понимаете зачем Вы это делаете.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=AX7uybwukkk',
                name: 'James Q Quick - "Debugging JavaScript"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=XbB5_fHHxRc&list=PLy2A398ErdfTiHcS8zFynFaQnmSpiuxEG&index=2',
                name: '"Node.js Debugging Made Easy"',
              },
              {
                url: 'https://github.com/othiym23/bug-clinic',
                name: 'Bug-clinic',
              },
            ],
          },
          {
            tag: 'Chrome DevTools',
            name: 'Chrome DevTools',
            text:
              'Chrome DevTools - это набор инструментов веб-разработки, входящий в состав веб-браузера Google Chrome. Эти инструменты помогут Вам быстро редактировать веб-страницы и диагностировать проблемы Ваших приложений не покидая браузер, что, безусловно, поможет Вам быстрее и качественнее делать Вашу работу.',
            links: [
              {
                url: 'https://developers.google.com/web/tools/chrome-devtools/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/chrome-devtools-instrumenty-testirovshchika',
                name: 'Курс "Chrome DevTools: Инструменты тестировщика"',
              },
            ],
          },
          {
            tag: 'Postman',
            name: 'Postman',
            text: 'Postman ',
            links: [
              {
                url:
                  'https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ',
                name: 'Postman "How To" Playlist',
              },
            ],
          },
          {
            tag: 'SSH',
            name: 'SSH',
            text:
              'SSH - Secure Shell — «безопасная оболочка» — сетевой протокол прикладного уровня, позволяющий производить удалённое управление операционной системой и туннелирование TCP-соединений (например, для передачи файлов). Схож по функциональности с протоколами Telnet и rlogin, но, в отличие от них, шифрует весь трафик, включая и передаваемые пароли. SSH допускает выбор различных алгоритмов шифрования. SSH-клиенты и SSH-серверы доступны для большинства сетевых операционных систем. SSH позволяет безопасно передавать в незащищённой среде практически любой другой сетевой протокол. Таким образом, можно не только удалённо работать на компьютере через командную оболочку, но и передавать по шифрованному каналу звуковой поток или видео (например, с веб-камеры). Также SSH может использовать сжатие передаваемых данных для последующего их шифрования, что удобно, например, для удалённого запуска клиентов X Window System. Большинство хостинг-провайдеров за определённую плату предоставляет клиентам доступ к их домашнему каталогу по SSH. Это может быть удобно как для работы в командной строке, так и для удалённого запуска программ (в том числе графических приложений).',
            links: [
              {
                url: 'https://guides.hexlet.io/ssh/',
                name: 'Hexlet Guides - "Что такое SSH"',
              },
              {
                url:
                  'https://help.github.com/en/articles/connecting-to-github-with-ssh',
                name: 'Connecting to GitHub with SSH',
              },
            ],
          },
          {
            tag: 'Git',
            name: 'Git',
            text:
              'Распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux.',
            links: [
              {
                url: 'https://git-scm.com/doc',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/git',
                name: 'Скринкаст Ильи Кантора',
              },
              {
                url: 'https://learngitbranching.js.org',
                name: 'Learn Git Branching',
              },
              {
                url: 'https://githowto.com/ru',
                name: 'GitHowTo',
              },
            ],
          },
          {
            tag: 'Regular expressions',
            name: 'Regular expressions',
            text:
              '"Если у Вас есть проблема, воспользуйтесь регулярным выражением, чтобы получить две проблемы". Знаменитая фраза, которая, безусловно, имеет место в реальном мире. Но отнюдь не потому, что регулярные выражения - это плохо, а потому, что "нужно уметь их готовить". Регулярные выражения - это формальный язык поиска и осуществления манипуляций с подстроками в тексте, основанный на использовании метасимволов. Научитесь пользоваться им и многие задачи, которые кажутся Вам сложными, перестанут вызывать у Вас трудности.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions',
                name: 'Документация от MDN',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=0LKdKixl5Ug&list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE',
                name: 'Academind - "Regular Expressions Demystified"',
              },
              {
                url: 'https://coursehunters.net/course/regexp',
                name:
                  'CodeSchool - "Breaking the ice with Regulae Expressions"',
              },
            ],
          },
          {
            tag: 'Canvas',
            name: 'Canvas',
            text:
              'Элемент HTML5, предназначенный для создания растрового двухмерного изображения при помощи скриптов, обычно на языке JavaScript.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/Web/API/Canvas_API',
                name: 'Документация от MDN',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=SRM7PYjKuGo&list=PLM7wFzahDYnFnw7aZfmhlpmflYa_Z98sF',
                name:
                  'WebDev с нуля. Канал Алекса Лущенко - "JavaScript Canvas"',
              },
            ],
          },
          {
            tag: 'Optimization',
            name: 'Optimization',
            text:
              'Анализ и оптимизация — процессы, построенный на оценке производительности, дизайна и юзабилити сайтов и приложений. По результатам анализа разработчикам даются рекомендации по улучшению кода за счёт использования сервисов и техник оптимизации. Скорость сайта состоит из 2 частей: как быстро загружается страница и как быстро работает код в ней. Многие сервисы, такие как минификаторы или CDN, помогают ускорить загрузку, но скорость работы кода зависит только от вас. Небольшие изменения в коде могут давать огромные изменения в производительности. Всего несколько строк могут означать разницу между быстрым сайтом и диалогом “Unresponsive Script”',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/Tools/Profiler',
                name: 'Документация от MDN',
              },
              {
                url:
                  'https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=ru',
                name: 'Официальные рекомендации от Google',
              },
              {
                url:
                  'https://developers.google.com/speed/docs/insights/v5/about',
                name: 'Официальная документация Google PageSpeed Insights',
              },
              {
                url: 'https://developers.google.com/web/tools/lighthouse/',
                name: 'Официальная документация Lighthouse',
              },
              {
                url: 'https://tproger.ru/translations/chrome-devtools/',
                name:
                  'Полезные проекты и инструменты для работы с Chrome DevTools',
              },
              {
                url: 'https://github.com/bevacqua/perfschool',
                name: 'Perfschool',
              },
            ],
          },
          /**
           *  Теория
           */
          {
            tag: 'Code сommenting',
            name: 'Code сommenting',
            text:
              'Комментирование кода - очень важная вещь, которой, зачастую, многие принебрегают, особенно этим грешат начинающие разработчики. Комментарии помогают поддерживать и развивать Ваш код как другим разработчикам, так и Вам самим, спустя время. А вы комментируете свой код?',
            links: [
              {
                url: 'https://habr.com/ru/post/108985/',
                name: 'Небольшая статья на Habr',
              },
            ],
          },
          {
            tag: 'Touch typing',
            name: 'Touch typing',
            text:
              'Слепой метод набора (слепая печать) — методика набора текста «вслепую», то есть не глядя на клавиши печатной машинки или клавиши клавиатуры, используя все (или большинство) пальцы рук.',
            links: [
              {
                url: 'https://klava.org/delta/#rus_speed',
                name: 'Klava.org',
              },
              {
                url: 'https://klavogonki.ru/',
                name: 'Клавагонки',
              },
            ],
          },
          {
            tag: 'Semantic HTML',
            name: 'Semantic HTML',
            text:
              'Семантическая верстка - это подход, который путём правильной вложенности HTML-тегов говорит браузеру не только как показывать контент на странице, но и даёт ему чёткое пояснение роли того или иного контента.',
            links: [
              {
                url:
                  'https://medium.com/@stasonmars/%D1%81%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D1%8B-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D0%B5%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%D0%B2-html5-c7cd5e6f1ebb',
                name: 'Отличная статья на Medium',
              },
            ],
          },
          {
            tag: 'SEO',
            name: 'SEO',
            text:
              'SEO (Search Engine Optimization, поисковая оптимизация) – это всестороннее развитие и продвижение сайта для его выхода на первые позиции в результатах выдачи поисковых систем (SERPs) по выбранным запросам с целью увеличения посещаемости и дальнейшего получения дохода.',
            links: [
              {
                url: 'https://seo.ru/chto-takoe-seo/#one',
                name: 'Статья на сайте SEO.ru',
              },
            ],
          },
          {
            tag: 'BEM',
            name: 'BEM',
            text:
              'Методология БЭМ создана в Яндексе для разработки сайтов, которые надо делать быстро,а поддерживать долгие годы. Она позволяет создавать расширяемые и повторно используемые компоненты интерфейса.',
            links: [
              {
                url: 'https://ru.bem.info/methodology/quick-start/',
                name: 'Официальная документация',
              },
            ],
          },
          {
            tag: 'DRY / KISS / YAGNI / SOLID',
            name: 'DRY / KISS / YAGNI / SOLID',
            text:
              'Ключевые принципы разработки ПО, которые Вы должны понимать!',
            links: [
              {
                url: 'https://habr.com/ru/post/144611/',
                name: 'Статья на Habr',
              },
              {
                url: 'https://www.youtube.com/watch?v=0qP6Vh8GNM0',
                name: 'Скринкаст на тему "Что такое SOLID, KISS, DRY и YAGNI?"',
              },
            ],
          },
          {
            tag: 'Refactoring',
            name: 'Refactoring',
            text:
              'Рефакторинг — это контролируемый процесс улучшения кода, без написания новой функциональности. Результат рефакторинга — это чистый код и простой дизайн. В первую очередь рефакторинг - это превращение грязного кода в чистый. Но зачем "чистить" грязный код, если можно сразу писать чистый?',
            links: [
              {
                url: 'https://refactoring.guru/ru/refactoring',
                name: 'Рефакторинг Гуру',
              },
            ],
          },
        ],
      },

      /**
       *
       *  Frontend - Middle
       *
       */
      {
        name: 'Middle',
        skills: [
          /**
           *  Инструменты
           */
          {
            tag: 'JavaScript (advanced)',
            name: 'JavaScript (advanced)',
            text:
              'Продвинутый уровень JavaScript для продвинутых разработчиков. Дерзайте!',
            links: [
              {
                url: 'https://johnresig.com/apps/learn/',
                name: 'Learning Advanced JavaScript',
              },
              {
                url:
                  'https://coursehunters.net/course/prodvinutye-koncepcii-javascript',
                name: 'Advanced JavaScript Concepts',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=zMU4ir10DMg&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0',
                name: 'Тимур Шемсединов - "Programming"',
              },
              {
                url: 'https://github.com/Apress/pro-javascript-design-patterns',
                name: 'Pro JavaScript Design Patterns',
              },
            ],
          },
          {
            tag: 'TypeScript',
            name: 'TypeScript',
            text:
              'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. TypeScript отличается от JavaScript возможностью явного статического назначения типов, поддержкой использования полноценных классов (как в традиционных объектно-ориентированных языках), а также поддержкой подключения модулей, что призвано повысить скорость разработки, облегчить читаемость, рефакторинг и повторное использование кода, помочь осуществлять поиск ошибок на этапе разработки и компиляции, и, возможно, ускорить выполнение программ.',
            links: [
              {
                url: 'https://www.typescriptlang.org/docs/home.html',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/itvdn-typescript-fundamentals',
                name: 'ITVDN - "TypeScript Fundamentals"',
              },
              {
                url:
                  'https://coursehunters.net/course/understanding-typescript',
                name: 'Academind - "Understanding TypeScript"',
              },
            ],
          },
          {
            tag: 'JSDoc',
            name: 'JSDoc',
            text:
              'Комментирование кода - хорошо, а документирование - ещё лучше! Такие инстументы, как JSDoc, помогут Вам сделать поддержку вашего кода проще и приятнее.',
            links: [
              {
                url: 'https://jsdoc.app/',
                name: 'Официальная документация JSDoc',
              },
              {
                url:
                  'https://dev.by/news/kak-priuchit-razrabotchikov-dokumentirovat-svoy-kod',
                name: 'Небольшая статья на тему документрирования кода',
              },
            ],
          },
          {
            tag: 'Jest',
            name: 'Jest',
            text:
              'Jest — архитектурный подход или набор шаблонов программирования для построения пользовательского интерфейса веб-приложений, сочетающийся с реактивным программированием и построенный на однонаправленных потоках данных. Согласно замыслу создателей и несмотря на то, что Facebook предоставил реализацию Flux в дополнение к React, Flux не является ещё одним веб-фреймворком, а является архитектурным решением.',
            links: [
              {
                url: 'https://jestjs.io/docs/en/getting-started',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI&t=1344s',
                name:
                  'Academind - "JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests"',
              },
              {
                url: 'https://www.youtube.com/watch?v=4Fl5GH4eYZ8',
                name: 'Academind - "JavaScript Testing - Mocking Async Code"',
              },
            ],
          },
          {
            tag: 'Vuetify',
            name: 'Vuetify',
            text:
              'Vuetify — это инструментарий с открытым исходным кодом для разработки с помощью HTML, CSS и JS. Популярный фреймворк для создания UI, как и Bootstrap, но для Vue.',
            links: [
              {
                url: 'https://vuetifyjs.com/en/getting-started/quick-start',
                name: 'Официальная документация и небольшой туториал',
              },
            ],
          },
          {
            tag: 'Flux',
            name: 'Flux',
            text:
              'Flux — архитектурный подход или набор шаблонов программирования для построения пользовательского интерфейса веб-приложений, сочетающийся с реактивным программированием и построенный на однонаправленных потоках данных. Согласно замыслу создателей и несмотря на то, что Facebook предоставил реализацию Flux в дополнение к React, Flux не является ещё одним веб-фреймворком, а является архитектурным решением.',
            links: [
              {
                url: 'https://facebook.github.io/flux/',
                name: 'Официальная документация и небольшой туториал',
              },
            ],
          },
          {
            tag: 'Redux',
            name: 'Redux',
            text:
              'Redux — библиотека для JavaScript с открытым исходным кодом, предназначенный для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.',
            links: [
              {
                url: 'https://redux.js.org/introduction/getting-started',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=-m3evZuzXC8&list=PLqHlAwsJRxANFIgAf7BO8hNYdvipLERxQ',
                name: 'CodeDojo - "Основы Redux"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_',
                name: 'Academind - "ReactJS + Redux Basics"',
              },
            ],
          },
          {
            tag: 'Vuex',
            name: 'Vuex',
            text:
              'Vuex — библиотека для JavaScript с открытым исходным кодом, предназначенный для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.',
            links: [
              {
                url: 'https://vuex.vuejs.org/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=2CSr2vBApSI&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo',
                name: 'Academind - "Vue.js 2 & Vuex (Basics)"',
              },
            ],
          },
          {
            tag: 'RxJS',
            name: 'RxJS',
            text:
              'RxJS - это библиотека для работы с асинхронными и основанными на событиях программами с использованием наблюдаемых последовательностей. Библиотека предоставляет основной тип Observable, несколько вспомогательных типов (Observer, Schedulers, Subjects) и операторы работы с событиями как с коллекциями (map, filter, reduce, every и подобные из JavaScript Array).',
            links: [
              {
                url: 'https://rxjs-dev.firebaseapp.com/guide/overview',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=T9wOu11uU6U&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi',
                name: 'Academind - "Understanding RxJS"',
              },
            ],
          },
          {
            tag: 'NgRX',
            name: 'NgRX',
            text:
              'ngrx — это группа библиотек, «вдохновленная» библиотекой Redux , которая, в свою очередь, «вдохновлена» шаблоном Flux . Это означает, что шаблон Redux является упрощенной версией шаблона Flux , а NGRX является версией шаблона redux с использованием Angular и RxJS.',
            links: [
              {
                url: 'https://ngrx.io/docs',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/angular-4-ngrx',
                name: 'WebforMyself - "Angular 4 NgRx"',
              },
            ],
          },
          {
            tag: 'Next.js',
            name: 'Next.js',
            text:
              'Next.js представляет собой облегченный фреймворк для статических и обработанных сервером приложений React. По сути это Server Side Rendering для React с возможностью генерации статиеских сборок.',
            links: [
              {
                url: 'https://nextjs.org/docs',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://medium.com/@ivaneroshkin/next-js-server-side-rendering-%D0%B4%D0%BB%D1%8F-react-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-f5f61e20dc8c',
                name: 'Статья на Medium',
              },
            ],
          },
          {
            tag: 'Nuxt.js',
            name: 'Nuxt.js',
            text:
              'Nuxt.js представляет собой облегченный фреймворк для статических и обработанных сервером приложений React. Как Next.js, только не так.',
            links: [
              {
                url: 'https://nuxtjs.org/guide',
                name: 'Официальная документация и гайдлайн',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL55RiY5tL51pk1RvaQOxI6sJ-yZzExzJn',
                name: 'Статья на Medium',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL55RiY5tL51pk1RvaQOxI6sJ-yZzExzJn',
                name:
                  'Academind - "Nuxt.js & Storyblok - Building a Complete Blog"',
              },
            ],
          },
          {
            tag: 'PWA',
            name: 'PWA',
            text:
              'PWA (Progressive Web App) - Прогрессивное веб-приложение — технология в веб-разработке, которая добавляет сайтам возможности приложений для мобильных устройств. В частности, PWA обладают такими признаками: Устанавливаются на смартфоны или планшеты пользователей, Работают в режиме офлайн благодаря кэшированию контента. Доставляют пользователям пуш-уведомления.',
            links: [
              {
                url: 'https://developers.google.com/web/progressive-web-apps/',
                name: 'Официальная документация от Google',
              },
              {
                url: 'https://habr.com/ru/post/418923/',
                name: 'Статья на Habr',
              },
            ],
          },
          {
            tag: 'GraphQL',
            name: 'GraphQL',
            text:
              'GraphQL - язык запросов с открытым исходным кодом, разработанный Facebook. Он создавался как более эффективная альтернатива REST для разработки и использования программных интерфейсов приложений.',
            links: [
              {
                url: 'https://graphql.org/learn/',
                name: 'Официальная документация',
              },
              {
                url: 'https://tproger.ru/translations/graphql-beginners-guide/',
                name: 'Небольшое введение в GraphQL от Tproger',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLNkWIWHIRwMF2sVLwzRef0Cu5kzAOeRcu',
                name: 'webDev - "GraphQL"',
              },
              {
                url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q&t=1890s',
                name:
                  'freeCodeCamp.org - "GraphQL Full Course - Novice to Expert"',
              },
              {
                url:
                  'https://coursehunters.net/course/full-stack-prodvinutyy-react-graphql',
                name: 'WesBos - FullStack Advanced React + GraphQL',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'Firebase',
            name: 'Firebase',
            text:
              'Firebase — американская компания, поставщик облачных услуг, основанная в 2011 году Эндрю Ли и Джеймсом Тэмплином, и поглощённая в 2014 году корпорацией Google. Основной сервис — облачная СУБД класса NoSQL, позволяющая разработчикам приложений хранить и синхронизировать данные между несколькими клиентами. Поддержаны особенности интеграции с приложениями под операционные системы Android и iOS, реализовано API для приложений на JavaScript, Java, Objective-C и Node.js, также возможно работать напрямую с базой данных в стиле REST из ряда JavaScript-фреймворков, включая AngularJS, React, Vue.js, Ember.js и Backbone.js. Предусмотрено API для шифрования данных. Среди других услуг, предоставлявшихся компанией — запущенный 13 мая 2014 года хостинг для хранения статических файлов (таких как CSS, HTML, JavaScript), обеспечивающий доставку через CDN и сервис аутентификации клиента с использованием кода только на стороне клиента с поддержкой входа через Facebook, GitHub, Twitter и Google (Firebase Simple Login). ',
            links: [
              {
                url: 'https://firebase.google.com/docs',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=FXY1UyQfSFw&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt',
                name:
                  'Academind - "FULL PROJECT with Vue.js + Vuetify + Firebase"',
              },
            ],
          },
          {
            tag: 'Nodejs (basics)',
            name: 'Nodejs (basics)',
            text:
              'Nodejs — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel и espruino).',
            links: [
              {
                url: 'https://nodejs.org/en/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLXzsasNqYIa2igoviH9LLT3Q7aymHWkpN',
                name:
                  'VECTOR:metarhia - Тимур Шемсединов - Летняя школа по JavaScript и Node.js',
              },
              {
                url: 'https://github.com/workshopper/learnyounode',
                name: 'Learn You The Node.js For Much Win!',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQZmXEqIIlq2S9-Ibh9b_-rQ',
                name: 'Тимур Шемсединов - "Node.js"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q',
                name: 'Academind - "Building a RESTful API with Node.js"',
              },
              {
                url:
                  'https://coursehunters.net/course/nodejs-polnoe-rukovodstvo-vklyuchaya-mvc-rest-api-graphql',
                name:
                  'Academind - "NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_',
                name:
                  'Academind - "Build a Project with GraphQL, Node, MongoDB and React.js"',
              },
            ],
          },
          {
            tag: 'Binary Data',
            name: 'Binary Data',
            text:
              'Binary Data - неотъемлемая часть работы любого программиста, однако начинающие разработчики чаще всего пропускают эту важную тему, так как она кажется им достаточно сложной и не особо нужной. Однако это не так. До появления объекта TypedArray в ECMAScript 2015 (ES6), в JavaScript не было механизма для чтения потоков двоичных данных или для выполнения других операций с ними. Класс Buffer был представлен как часть API Node.js, позволяющая взаимодействовать с потоками произвольных двоичных данных в контексте, например, TCP-потоков и операций с файловой системой.',
            links: [
              {
                url: 'https://habr.com/ru/company/ruvds/blog/348970/',
                name: 'Буферы, потоки и двоичные данные в Node.js',
              },
              {
                url: 'https://github.com/maxogden/bytewiser',
                name:
                  'Bytewiser - работа с бинарными данными в nodejs и браузерах, поддерживающих HTML5 формат',
              },
            ],
          },
          {
            tag: 'Docker',
            name: 'Docker',
            text:
              'Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации. Позволяет «упаковать» приложение со всем его окружением и зависимостями в контейнер, который может быть перенесён на любую Linux-систему с поддержкой cgroups в ядре, а также предоставляет среду по управлению контейнерами.',
            links: [
              {
                url: 'https://docs.docker.com/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/docker-mastery-polnyy-nabor-instrumentov-ot-kapitana-dokera',
                name:
                  'Docker Mastery: The Complete Toolset From a Docker Captain',
              },
              {
                url:
                  'https://coursehunters.net/course/docker-i-kubernetes-polnoe-rukovodstvo',
                name: 'Docker and Kubernetes: The Complete Guide',
              },
            ],
          },
          {
            tag: 'CI / CD',
            name: 'CI / CD',
            text:
              'Continuous Integration(CI) и Continuous Delivery (CD) - концепция непрерывной интеграции и доставки. CI/CD реализуется как конвейер, облегчая слияние только что закомиченного кода в основную кодовую базу. Концепция позволяет запускать различные типы тестов на каждом этапе (выполнение интеграционного аспекта) и завершать его запуском с развертыванием закомиченного кода в фактический продукт, который видят конечные пользователи (выполнение доставки).',
            links: [
              {
                url:
                  'https://medium.com/southbridge/ci-cd-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-f0626b9994c8',
                name: 'Статья на MDN (TLDR)',
              },
              {
                url: 'https://docs.gitlab.com/ee/ci/',
                name: 'Официальная документация GitLab CI/CD',
              },
              {
                url:
                  'https://blog.gds-gov.tech/that-ci-cd-thing-principles-implementation-tools-aa8e77f9a350',
                name: 'Cтатья на MDN (longread)',
              },
            ],
          },
          /**
           *  Теория
           */
          {
            tag: 'Linux (basics)',
            name: 'Linux (basics)',
            text:
              'Linux - семейство Unix-подобных операционных систем на базе ядра Linux, включающих тот или иной набор утилит и программ проекта GNU, и, возможно, другие компоненты. Понимание основ Linux и умение пользоваться системой - важный аспект в работе веб-разработчика.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=tQLpAefAKuA',
                name:
                  'Хороший программист - "Основы Ubuntu Linux: apt-get, bash, командная строка"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL874KddjzYd8d_A1mmUwxZ63MtJaSBXE1',
                name: 'Linux для Начинающих',
              },
              {
                url: 'https://github.com/denysdovhan/learnyoubash',
                name: 'Learnyoubash',
              },
            ],
          },
          {
            tag: 'Cyber security (basics)',
            name: 'Cyber security (basics)',
            text:
              'Информационная безопасность (nformation Security - InfoSec) - практика предотвращения несанкционированного доступа, использования, раскрытия, искажения, изменения, исследования, записи или уничтожения информации. Основная задача информационной безопасности — сбалансированная защита конфиденциальности, целостности и доступности данных, с учётом целесообразности применения и без какого-либо ущерба производительности организации.',
            links: [
              {
                url: 'http://kmb.ufoctf.ru/about.html',
                name: 'КМБ (Курс молодого бойца) CTF',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=rSp2cpAI4Tc&list=PLdJo1XilUTZPOJ1kSnoKheT7YSygP9FIO',
                name: 'Яндекс - "Безопасность"',
              },
            ],
          },
          {
            tag: 'Data bases (basics)',
            name: 'Data bases (basics)',
            text:
              'База данных - представленная в объективной форме совокупность самостоятельных материалов (статей, расчётов, нормативных актов, судебных решений и иных подобных материалов), систематизированных таким образом, чтобы эти материалы могли быть найдены и обработаны с помощью электронной вычислительной машины (ЭВМ).',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLrCZzMib1e9oOFQbuOgjKYbRUoA8zGKnj',
                name: 'Технострим Mailru - "Базы данных"',
              },
            ],
          },
          {
            tag: 'Design patterns',
            name: 'Design patterns',
            text:
              'Паттерны (или шаблоны) проектирования описывают типичные способы решения часто встречающихся проблем при проектировании программ. В отличие от готовых функций или библиотек, паттерн нельзя просто взять и скопировать в программу. Паттерн представляет собой не какой-то конкретный код, а общую концепцию решения той или иной проблемы, которую нужно будет ещё подстроить под нужды вашей программы. Паттерны проектирования - это фундаментальные знания проектирования программ, без которых Вы будете "наступать на грабли" снова и снова.',
            links: [
              {
                url: 'https://refactoring.guru/ru/design-patterns',
                name: 'Рефакторинг Гуру',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQaJFrm02DoSnmvN5P-cVykm',
                name: 'Тимур Шемсединов - "Patterns"',
              },
              {
                url:
                  'https://medium.com/@marina.kovalyova/java-script-design-patterns-569c627d25f9',
                name:
                  'Статья на Medium - "Шаблоны проектирования в JavaScript"',
              },
            ],
          },
          {
            tag: 'OOP',
            name: 'OOP',
            text:
              'Объеектно-ориентиированное программирование (ООП) - методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript',
                name: 'Документация MDN',
              },
              {
                url:
                  'https://vk.com/doc24068470_315312653?hash=dba1ea7a7b5708f4b3&dl=800df7906016b44cec',
                name:
                  'Книга Мэтта Вайсфельда - "Объектно-ориентированное мышление"',
              },
              {
                url: 'https://learn.javascript.ru/prototypes',
                name:
                  'Илья Кантор и его учебник learn.javascript.ru - "ООП в прототипном стиле"',
              },
            ],
          },
          {
            tag: 'MVC / MVP / MVVM',
            name: 'MVC / MVP / MVVM',
            text:
              'Схема разделения данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: модель, представление и контроллер — таким образом, что модификация каждого компонента может осуществляться независимо&',
            links: [
              {
                url: 'https://habr.com/ru/post/215605/',
                name:
                  'Статья на Habr - "Паттерны для новичков: MVC vs MVP vs MVVM"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name: 'Неплохое видео от канала Веб-стандарты',
              },
            ],
          },
          {
            tag: 'Functional programming',
            name: 'Functional programming',
            text:
              'Functional programming (функциональное программирование) — раздел дискретной математики и парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).',
            links: [
              {
                url:
                  'http://kspt.icc.spbstu.ru/media/files/2016/course/lang/slides/lection0.pdf',
                name:
                  'Презентация по введению в функциональное программирование',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQZGa7hYnwBQufg9XXoJr5LP',
                name: 'Тимур Шемсединов - "Functional Programming"',
              },
              {
                url:
                  'https://github.com/timoxley/functional-javascript-workshop',
                name: 'Functional JavaScript Workshop',
              },
              {
                url: 'https://github.com/kishorsharma/currying-workshopper',
                name: 'Сurrying-workshopper',
              },
            ],
          },
          {
            tag: 'SSL / TLS',
            name: 'SSL / TLS',
            text:
              'TLS - протокол защиты транспортного уровня, как и его предшественник SSL (англ. secure sockets layer — слой защищённых сокетов), — криптографические протоколы, обеспечивающие защищённую передачу данных между узлами в сети Интернет. TLS и SSL используют асимметричное шифрование для аутентификации, симметричное шифрование для конфиденциальности и коды аутентичности сообщений для сохранения целостности сообщений.',
            links: [
              {
                url:
                  'https://mnorin.com/tls-ssl-neobhodimy-j-minimum-znanij.html',
                name: 'Отличная статья на тему SSL/TLS',
              },
              {
                url: 'https://www.youtube.com/watch?v=2WYNW2uZQhs',
                name: '"SSL/TLS: история уязвимостей"',
              },
              {
                url:
                  'https://mnorin.com/tls-ssl-neobhodimy-j-minimum-znanij.html',
                name: 'Статья на MNorin.com',
              },
            ],
          },
          {
            tag: 'SOAP / REST',
            name: 'SOAP / REST',
            text:
              'Это архитектурные стили реализации ПО со своими принципами и нюансами.',
            links: [
              {
                url:
                  'https://medium.com/@nanotexnolagiya/%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-soap-%D0%B8-rest-%D1%81-json-2019-779fef6eba9b',
                name:
                  'Статья на Medium - "Сравнение SOAP и REST с JSON [2019]"',
              },
              {
                url: 'https://refaq.ru/voprosy/soap_vs_rest_razlichiya',
                name: 'Много мыслей на тему SOAP и REST',
              },
              {
                url: 'https://www.youtube.com/watch?v=2CrjWD3VGG4',
                name: 'Неплохое видео на тему RESTful приложений',
              },
            ],
          },
          {
            tag: 'HTTP',
            name: 'HTTP',
            text:
              'Протокол передачи гипертекста (Hypertext Transfer Protocol - HTTP) - это прикладной протокол для передачи гипертекстовых документов, таких как HTML. Он создан для связи между веб-браузерами и веб-серверами, хотя в принципе HTTP может использоваться и для других целей. Протокол следует классической клиент-серверной модели, когда клиент открывает соединение для создания запроса, а затем ждет ответа. HTTP - это протокол без сохранения состояния, то есть сервер не сохраняет никаких данных (состояние) между двумя парами "запрос-ответ". Несмотря на то, что HTTP основан на TCP/IP, он также может использовать любой другой протокол транспортного уровня с гарантированной доставкой.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name: 'Документация MDN',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол HTTP"',
              },
            ],
          },
          {
            tag: 'TCP',
            name: 'TCP',
            text:
              'Transmission Control Protocol (TCP, протокол управления передачей) — один из основных протоколов передачи данных интернета, предназначенный для управления передачей данных. В стеке протоколов TCP/IP выполняет функции транспортного уровня модели OSI. Механизм TCP предоставляет поток данных с предварительной установкой соединения, осуществляет повторный запрос данных в случае потери данных и устраняет дублирование при получении двух копий одного пакета, гарантируя тем самым, в отличие от UDP, целостность передаваемых данных и уведомление отправителя о результатах передачи. Реализации TCP обычно встроены в ядра ОС. Существуют реализации TCP, работающие в пространстве пользователя. Когда осуществляется передача от компьютера к компьютеру через Интернет, TCP работает на верхнем уровне между двумя конечными системами, например, браузером и веб-сервером. TCP осуществляет надёжную передачу потока байтов от одного процесса к другому. TCP реализует управление потоком, управление перегрузкой, рукопожатие, надёжную передачу.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/UDP',
                name: 'Документация MDN (описание)',
              },
              {
                url: 'https://www.youtube.com/watch?v=CKUOb4htnB4',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол TCP"',
              },
            ],
          },
          {
            tag: 'UDP',
            name: 'UDP',
            text:
              'Протокол пользовательских датаграмм (User Datagram Protocol — UDP ) — один из ключевых элементов набора сетевых протоколов для Интернета. С UDP компьютерные приложения могут посылать сообщения (в данном случае называемые датаграммами) другим хостам по IP-сети без необходимости предварительного сообщения для установки специальных каналов передачи или путей данных.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/UDP',
                name: 'Документация MDN (описание)',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол UDP"',
              },
            ],
          },
          {
            tag: 'WebSockets',
            name: 'WebSockets',
            text:
              'Вебсокеты (WebSockets) - это продвинутая технология, позволяющая открыть постоянное двунаправленное сетевое соединение между браузером пользователя и сервером. С помощью его API вы можете отправить сообщение на сервер и получить ответ без выполнения http запроса, причем этот процесс будет событийно-управляемым.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/WebSockets',
                name: 'Документация MDN',
              },
              {
                url:
                  'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications',
                name: 'Туториал на MDN',
              },
              {
                url: 'https://socket.io/',
                name:
                  'socket.io - самая популярная библиотека для создания веб-приложений на WebSockets',
              },
            ],
          },
          {
            tag: 'TDD / BDD',
            name: 'TDD / BDD',
            text:
              'TDD и BDD - методики разработки ПО через тестирование. Концепции обоих подходов похожи, сначала идут тесты и только потом начинается разработка, но предназначение у них совершенно разное. TDD — это больше о программировании и тестировании на уровне технической реализации продукта, когда тесты создают сами разработчики. BDD предполагает описание тестировщиком или аналитиком пользовательских сценариев на естественном языке — если можно так выразиться, на языке бизнеса.',
            links: [
              {
                url:
                  'https://www.youtube.com/watch?v=H4Hf3pji7Fw&list=PLngnoZX8cAn8XyTsN7_A1gTIQ15SNcKQS',
                name:
                  'Development play pays - "TDD vs BDD. Test Driven Development vs Behaviour Driven Development"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=4sgTIVLGPAk&list=PLngnoZX8cAn-rZpWzX4TFlNbNLJRTKKDm',
                name: 'Development play pays - "TDD vs BDD. Death Match"',
              },
              {
                url:
                  'https://medium.com/@ryuta_udo/tdd-bdd-with-javascript-3dde511e4e2f',
                name: 'Статья на Medium - "TDD / BDD with JavaScript"',
              },
            ],
          },
        ],
      },

      /**
       *
       *  Frontend - Senior
       *
       */
      {
        name: 'Senior',
        skills: [
          // TODO: Добавить материалы
          {
            tag: 'Algorithms analysis and design',
            name: 'Algorithms analysis and design',
            text: 'Анализ и построение алгоритмов',
            links: [
              {
                url: 'https://e-maxx.ru/bookz/files/cormen.pdf',
                name: 'Книга "Алгоритмы: Анализ и построение"',
              },
            ],
          },
          {
            tag: 'Data structures realisation',
            name: 'Data structures realisation',
            text: 'Реализация структур данных',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=9KvA4hDDSjk',
                name:
                  'Тимур Шемсединов - "Структуры данных: списки, стек, очередь, дэк в JavaScript"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=PI5rMkqPODI&list=PLIFGfLqvZ-yGHI2Fg0NCgi7FY0h1yh-af',
                name: 'Алгоритмы и структуры данных на JavaScript',
              },
            ],
          },
          {
            tag: 'Memory in JavaScript',
            name: 'Memory in JavaScript',
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
          },
          {
            tag: 'Memory leaks',
            name: 'Memory leaks',
            text:
              'Утечки памяти - (англ. memory leak) — процесс неконтролируемого уменьшения объёма свободной оперативной или виртуальной памяти компьютера, связанный с ошибками в работающих программах, вовремя не освобождающих ненужные участки памяти, или с ошибками системных служб контроля памяти.',
            links: [
              {
                url: 'https://medium.com/webbdev/js-ae40719fd84e',
                name:
                  'Статья на Medium - "Управление памятью в JS, четыре вида утечек памяти"',
              },
              {
                url: 'https://www.youtube.com/watch?v=0oZa64SB2wM',
                name:
                  'Тимур Шемсединов - "Утечки памяти в Node.js и JavaScript, сборка мусора и профилирование"',
              },
              {
                url: 'https://learn.javascript.ru/optimize',
                name:
                  'Учебник Ильи Кантора "learn.javascript.ru" - Утечки памяти и оптимизации',
              },
              {
                url: 'https://www.youtube.com/watch?v=y_rVMy_5wz0',
                name:
                  'Vladislav Orlikov - "Автоматизация поиска утечек памяти в клиентском JavaScript"',
              },
            ],
          },
          {
            tag: 'WebGL',
            name: 'WebGL',
            text:
              'WebGL — кроссплатформенный API для 3D-графики в браузере, разрабатываемый некоммерческой организацией Khronos Group. WebGL использует язык программирования шейдеров GLSL. WebGL исполняется как элемент HTML5 и поэтому является полноценной частью объектной модели документа (DOM API) браузера. Может использоваться с любыми языками программирования, которые умеют работать с DOM API, например, JavaScript, Rust, Java, Kotlin и другими. Все ведущие разработчики браузеров Google (Chrome), Opera (Opera), Mozilla (Firefox), и Apple (Safari), являются членами Khronos и реализуют WebGL в своих браузерах. За счёт использования низкоуровневых средств поддержки OpenGL часть кода на WebGL может выполняться непосредственно на видеокартах. WebGL — это контекст элемента canvas HTML, который обеспечивает API 3D графики без использования плагинов. Первая спецификация была выпущена 3 марта 2011 года. Современная версия 2.0 (несовместима с версией 1.0) доступна с 27 февраля 2017 года.',
            links: [
              {
                url: 'https://webglfundamentals.org/webgl/lessons/ru/',
                name: 'Официальная документация и основы WebGL',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLyeqauxei6jdrycyKTK0GAJE4enh0Pii-',
                name: 'Дмитрий Лаврик - "WebGL и three.js. Видеокурс."',
              },
              {
                url: 'https://github.com/alexmackey/IntroToWebGLWithThreeJS',
                name: 'An introduction to WebGL with three.js',
              },
              {
                url: 'https://github.com/stackgl/webgl-workshop',
                name: 'Webgl-workshop',
              },
            ],
          },
          // TODO: Добавить линки
          {
            tag: 'V8 / SpiderMonkey / Chakra',
            name: 'V8 / SpiderMonkey / Chakra',
            text:
              'Движок JavaScript — специализированная программа, обрабатывающая JavaScript, в частности, в браузерах.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=PsDqH_RKvyc',
                name: 'The V8 Engine and Node.js',
              },
            ],
          },
          // TODO: Добавить линки
          {
            tag: 'Protobuf',
            name: 'Protobuf',
            text:
              'Протокол сериализации (передачи) структурированных данных, предложенный Google как эффективная бинарная альтернатива текстовому формату XML. Разработчики сообщают, что Protocol Buffers проще, компактнее и быстрее, чем XML, поскольку осуществляется передача бинарных данных, оптимизированных под минимальный размер сообщения.',
            links: [
              {
                url: 'https://developers.google.com/protocol-buffers/?hl=ru',
                name: 'Официальная документация от Google',
              },
            ],
          },
          // TODO: Добавить линки
          {
            tag: 'gRPC',
            name: 'gRPC',
            text:
              'gRPC - это система удаленного вызова процедур с открытым исходным кодом, изначально разработанная в Google. ',
            links: [
              {
                url: 'https://grpc.io/docs/',
                name: 'Официальная документация',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'P2P',
            name: 'P2P',
            text:
              'P2P -  одноранговая, децентрализованная, или пиринговая (англ. peer-to-peer, P2P — равный к равному) сеть — оверлейная компьютерная сеть, основанная на равноправии участников. Часто в такой сети отсутствуют выделенные серверы, а каждый узел (peer) является как клиентом, так и выполняет функции сервера. В отличие от архитектуры клиент-сервера, такая организация позволяет сохранять работоспособность сети при любом количестве и любом сочетании доступных узлов. Участниками сети являются все пиры.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PL1QRvYV-LXn7Mdt7pKOdp7gircj8CwMgk',
                name: "Let's Write Code - P2P / WebRTC",
              },
              {
                url: 'https://github.com/No9/torrential',
                name: 'torrential',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'WebRTC',
            name: 'WebRTC',
            text:
              'WebRTC (Web Real Time Communications) — это стандарт, который описывает передачу потоковых аудиоданных, видеоданных и контента от браузера и к браузеру в режиме реального времени без установки плагинов или иных расширений. Стандарт позволяет превратить браузер в оконечный терминал видеоконференцсвязи, достаточно просто открыть веб-страницу, чтобы начать общение.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PL1QRvYV-LXn7Mdt7pKOdp7gircj8CwMgk',
                name: "Let's Write Code - P2P / WebRTC",
              },
              {
                url: 'https://trueconf.ru/webrtc.html',
                name: 'Trueconf - WebRTC',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'IoT',
            name: 'IoT',
            text:
              'IoT (Internet of Things) - интернет вещей — это сеть связанных через интернет объектов, способных собирать данные и обмениваться данными, поступающими со встроенных сервисов. Устройства, входящие в интернет вещей, — любые автономные устройства, подключённые к интернету, которые могут отслеживаться и/или управляться удалённо.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLbW_am_GRTo2O5xTDsVsVX2JX7S4Z6Pvt',
                name: 'IOT Nodejs',
              },
              {
                url: 'https://github.com/tableflip/nodebot-workshop',
                name: 'Nodebot Workshop',
              },
            ],
          },
          {
            tag: 'Linux (advanced)',
            name: 'Linux (advanced)',
            text:
              'Linux - семейство Unix-подобных операционных систем на базе ядра Linux, включающих тот или иной набор утилит и программ проекта GNU, и, возможно, другие компоненты. Понимание основ Linux и умение пользоваться системой - важный аспект в работе веб-разработчика. Умение конфигурировать и администрировать сревера Linux - частая задача.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLrCZzMib1e9rx3HmaLQfLYb9ociIvYOY1',
                name: 'Технострим Mailru -  "Администрирование Linux"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLg5SS_4L6LYsgy5qLYZtvoaV34zn5iKPe',
                name: 'ADV-IT- "Linux для НЕ Начинающих"',
              },
              {
                url:
                  'http://www.mustitz.net/attachments/download/525/%D0%AF%D0%B4%D1%80%D0%BE_Linux._%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8._3-%D0%B5_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.pdf',
                name: '"Ядро Линукс - Описание процесса разработки"',
              },
            ],
          },
          {
            tag: 'Network (advanced)',
            name: 'Network (advanced)',
            text:
              'Компьютерные сети - это система, обеспечивающая обмен данными между вычислительными устройствами (компьютеры, серверы, маршрутизаторы и другое оборудование). Для передачи информации могут быть использованы различные среды.',
            links: [
              {
                url:
                  'https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C',
                name:
                  'Википедия (не смешно, там действительно много информации на эту тему)',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLtPJ9lKvJ4oiNMvYbOzCmWy6cRzYAh9B1',
                name: 'Андрей Созыкин - Учебный курс "Компьютерные сети"',
              },
              {
                url:
                  'http://www.ipa.nw.ru/PAGE/aspirantura/literatura/tanenbaum.pdf',
                name: 'Книга Э. Таненбаум, Д. Уэзеролл -  "Компьютерные сети"',
              },
              {
                url: 'https://proglib.io/p/networks-course/',
                name:
                  'Курс на ProgLib - "Лучший видеокурс по сетевым технологиям"',
              },
            ],
          },
          // TODO: Добавить материалы
          {
            tag: 'Databases (advanced)',
            name: 'Databases (advanced)',
            text:
              'Более глубокое понимание баз данных даёт более глубокое понимание работы структур данных, движков и прочих "сложных" вещей в мире IT',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=i3yoZca-KjE',
                name: 'Roman Brovko - "Погружение в СУБД"',
              },
            ],
          },
          {
            tag: 'React Native',
            name: 'React Native',
            text:
              'React Native — это фреймворк для разработки кроссплатформенных приложений. Он даёт возможность создавать и использовать компоненты точно так же, как обычно мы это делаем в React, вот только рендериться они будут не в HTML, а в нативные контролы операционной системы, под которую будет собрано наше приложение.',
            links: [
              {
                url:
                  'https://facebook.github.io/react-native/docs/getting-started',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/react-native-prakticheskoe-rukovodstvo',
                name: 'Academind - "React Native - The Practical Guide"',
              },
            ],
          },
          {
            tag: 'Electron',
            name: 'Electron',
            text:
              'Electron - фреймворк, разработанный GitHub. Позволяет разрабатывать нативные графические приложения для настольных операционных систем с помощью веб-технологий. Фреймворк включает в себя Node.js для работы с back-end и библиотеку рендеринга из Chromium.',
            links: [
              {
                url: 'https://electronjs.org/docs',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=kN1Czs0m1SU',
                name:
                  'Traversy Media - "Build an Electron App in Under 60 Minutes"',
              },
              {
                url: 'https://github.com/maxogden/elementary-electron',
                name: 'Elementary Electron',
              },
            ],
          },
        ],
      },
    ],
  },
  /**
   *
   *  NodeJS
   *
   */
  {
    name: 'NodeJS',
    levels: [
      /**
       *
       *  Nodejs - Junior
       *
       */
      {
        name: 'Junior',
        skills: [
          /**
           *  Инструменты
           */
          {
            tag: 'Computer science (basics)',
            name: 'Computer science (basics)',
            text:
              'Основы программирования и Computer Science - это те самые фундаментальные знания, которые необходима каждому, кто хочет стать настоящим инженером, а не просто заурядным программистом, который знает, как писать код, но понятия не имеет, как этот код работает',
            links: [
              {
                url: 'https://habr.com/ru/company/vertdider/blog/403823/',
                name: 'Легендарний гарвардский курс CS50',
              },
              {
                url:
                  'https://vk.com/doc2036633_461668315?hash=3bbe2d53fdb5bac884&dl=830098fee8b589a01c',
                name: 'Адитья Бхаргава. "Грокаем Алгоритмы"',
              },
              {
                url: 'https://www.codewars.com/dashboard',
                name: 'Codewars',
              },
              {
                url: 'https://vk.com/wall-54530371_11457',
                name: 'Роберт Лафоре. "Структуры данных и алгоритмы в Java"',
              },
              {
                url:
                  'https://code.tutsplus.com/series/data-structures-in-javascript--cms-772',
                name: 'Реализация структур данных на языке JavaScript',
              },
            ],
          },
          {
            tag: 'Markdown',
            name: 'Markdown',
            text:
              'Markdown — облегчённый язык разметки, созданный с целью написания наиболее читаемого и удобного для правки текста, но пригодного для преобразования в языки для продвинутых публикаций.',
            links: [
              {
                url:
                  'https://docs.microsoft.com/ru-ru/contribute/how-to-write-use-markdown',
                name: 'Документация от Microsoft',
              },
              {
                url: 'https://www.markdowntutorial.com/',
                name: 'Туториал',
              },
              {
                url: 'https://github.com/workshopper/how-to-markdown',
                name: 'How-to-markdown',
              },
            ],
          },
          {
            tag: 'HTML',
            name: 'HTML',
            text:
              'HTML — (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — язык разметки, определяющий структуру веб-страниц. Большинство веб-страниц в интернете содержат описание разметки на языке HTML.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                name: 'Документация от MDN',
              },
              {
                url: 'https://htmlacademy.ru/',
                name: 'Курсы от HTML Academy',
              },
              {
                url: 'https://github.com/denysdovhan/learnyouhtml',
                name: 'Learnyouhtml',
              },
            ],
          },
          {
            tag: 'CSS',
            name: 'CSS',
            text:
              'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Именно CSS делает Ваш HTML "красивым". История такая же, как с HTML - Вам не нужно быть "гуру вёрстки", однако базовое понимание и умение пользоваться инструментом у Вас присутствовать должно.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                name: 'Документация от MDN',
              },
              {
                url: 'https://htmlacademy.ru/',
                name: 'Курсы от HTML Academy',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=wmAP2xvNs08&list=PL55RiY5tL51q6KKXoA0_CIskaTSJEM1fN',
                name: 'Academind - "Understanding CSS"',
              },
            ],
          },
          {
            tag: 'JavaScript (basics)',
            name: 'JavaScript (basics)',
            text:
              'JavaScript — язык программирования, который изначально создавался для того, чтобы сделать web-странички «живыми». Однако к 2019 году он серьезно "вырос" и сейчас представляет собой язык номер 1 для создания веб-приложений как на стороне клиента, так и на стороне сервера. Под "базовым" JS подразумеваются понимание таких вещей, как знание основ, понимание замыканий и областей видимости, умение реализовать и пользоваться встроенными в язык базовыми структурами данных, понимание контекста вызова и умение работать со встроенными объектами. Также нужно уметь работать с DOM и событиями браузера.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
                name: 'Документация от MDN',
              },
              {
                url: 'https://learn.javascript.ru',
                name: 'Учебник Ильи Кантора "learn.javascript.ru"',
              },
              {
                url: 'http://eloquentjavascript.net',
                name: 'Книга "Eloquent JavaScript"',
              },
              {
                url: 'https://github.com/workshopper/javascripting',
                name: 'JAVASCRIPTING',
              },
            ],
          },
          {
            tag: 'JSON',
            name: 'JSON',
            text:
              'JSON (JavaScript Object Notation) - простой формат обмена данными, удобный для чтения и написания как человеком, так и компьютером. Он основан на подмножестве языка программирования JavaScript, определенного в стандарте ECMA-262 3rd Edition - December 1999. JSON - текстовый формат, полностью независимый от языка реализации, но он использует соглашения, знакомые программистам C-подобных языков, таких как C, C++, C#, Java, JavaScript, Perl, Python и многих других. Эти свойства делают JSON идеальным языком обмена данными.',
            links: [
              {
                url: 'https://www.json.org/json-ru.html',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=bw10M9RuR30',
                name: 'Sorax - "JSON"',
              },
            ],
          },
          {
            tag: 'AJAX',
            name: 'AJAX',
            text:
              'AJAX - (ˈeɪdʒæks, от англ. Asynchronous JavaScript and XML — «асинхронный JavaScript и XML») — подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером. В результате, при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее. По-русски иногда произносится транслитом как «аякс». У аббревиатуры AJAX нет устоявшегося аналога на кириллице.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/Web/Guide/AJAX',
                name: 'Документация MDN',
              },
              {
                url: 'https://www.youtube.com/watch?v=lEfp6_ByY-Q',
                name: 'Loftblog - "AJAX. Настройка и отправка AJAX запросов"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=wMMki2FEYGY&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=53',
                name:
                  'Тимур Шемсединов - "HTTP запросы в браузере и Node.js: XMLHttpRequest, fetch"',
              },
            ],
          },
          {
            tag: 'NPM',
            name: 'NPM',
            text: 'NPM — менеджер пакетов, входящий в состав Node.js.',
            links: [
              {
                url: 'https://docs.npmjs.com',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/znakomstvo-s-npm',
                name: 'Курс "Знакомство с npm"',
              },
              {
                url: 'https://github.com/workshopper/how-to-npm',
                name: 'how-to-npm',
              },
            ],
          },
          {
            tag: 'Gulp',
            name: 'Gulp',
            text:
              'Gulp — это таск-менеджер для автоматического выполнения часто используемых задач (например, минификации, тестирования, объединения файлов), написанный на языке программирования JavaScript. Gulp можно использовать не только для сборки frontend, но и для запуска backend таксов, так что его знания пригодятся backend разработчику.',
            links: [
              {
                url: 'https://gulpjs.com/docs/en/getting-started/quick-start',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/gulp',
                name: 'Скринкаст Ильи Кантора',
              },
            ],
          },
          {
            tag: 'ES6+',
            name: 'ES6+',
            text:
              'ES6+ — это новые возможности языка программирования JavaScript, появившихся в 6 и более поздних редакциях стандарта ECMAScript.',
            links: [
              {
                url: 'https://habr.com/ru/post/305900/',
                name: 'Статья на Habr',
              },
              {
                url: 'https://learn.javascript.ru/es-modern',
                name: 'Учебник Ильи Кантора "learn.javascript.ru"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=4YfsAz-sNAo&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q',
                name: 'CodeDojo - "Основы ES6"',
              },
              {
                url:
                  'https://www.youtube.com/channel/UCEBHlT_L1ME6e9ixaRPp0wg/videos',
                name: 'Видео на канале .getInstance',
              },
              {
                url: 'https://github.com/domenic/count-to-6',
                name: 'Count Up to Version 6 of JavaScript!',
              },
              {
                url: 'https://github.com/jesstelford/esnext-generation',
                name: 'ESNext Generation Interactive Workshop',
              },
            ],
          },
          {
            tag: 'Nodejs (basics)',
            name: 'Nodejs (basics)',
            text:
              'Nodejs — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel и espruino).',
            links: [
              {
                url: 'https://nodejs.org/en/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLXzsasNqYIa2igoviH9LLT3Q7aymHWkpN',
                name:
                  'VECTOR:metarhia - Тимур Шемсединов - Летняя школа по JavaScript и Node.js',
              },
              {
                url: 'https://github.com/workshopper/learnyounode',
                name: 'Learn You The Node.js For Much Win!',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQZmXEqIIlq2S9-Ibh9b_-rQ',
                name: 'Тимур Шемсединов - "Node.js"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q',
                name: 'Academind - "Building a RESTful API with Node.js"',
              },
              {
                url:
                  'https://coursehunters.net/course/nodejs-polnoe-rukovodstvo-vklyuchaya-mvc-rest-api-graphql',
                name:
                  'Academind - "NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_',
                name:
                  'Academind - "Build a Project with GraphQL, Node, MongoDB and React.js"',
              },
            ],
          },
          {
            tag: 'Binary Data',
            name: 'Binary Data',
            text:
              'Binary Data - неотъемлемая часть работы любого программиста, однако начинающие разработчики чаще всего пропускают эту важную тему, так как она кажется им достаточно сложной и не особо нужной. Однако это не так. До появления объекта TypedArray в ECMAScript 2015 (ES6), в JavaScript не было механизма для чтения потоков двоичных данных или для выполнения других операций с ними. Класс Buffer был представлен как часть API Node.js, позволяющая взаимодействовать с потоками произвольных двоичных данных в контексте, например, TCP-потоков и операций с файловой системой.',
            links: [
              {
                url: 'https://habr.com/ru/company/ruvds/blog/348970/',
                name: 'Буферы, потоки и двоичные данные в Node.js',
              },
              {
                url: 'https://github.com/maxogden/bytewiser',
                name:
                  'Bytewiser - работа с бинарными данными в nodejs и браузерах, поддерживающих HTML5 формат',
              },
            ],
          },
          {
            tag: 'Express.js',
            name: 'Express.js',
            text:
              'Express.js — Express - это минималистичный и гибкий веб-фреймворк для приложений Node.js, предоставляющий обширный набор функций для мобильных и веб-приложений. Имея в своем распоряжении множество служебных методов HTTP и промежуточных обработчиков, создать надежный API можно быстро и легко. Express предоставляет тонкий слой фундаментальных функций веб-приложений, которые не мешают вам работать с давно знакомыми и любимыми вами функциями Node.js.',
            links: [
              {
                url: 'https://expressjs.com/en/starter/installing.html',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
                name: 'Traversy Media - "Express JS Crash Course"',
              },
              {
                url: 'https://github.com/azat-co/expressworks',
                name: 'Expressworks',
              },
            ],
          },
          {
            tag: 'Koa',
            name: 'Koa',
            text:
              'Koa — Koa был создан командой разработчиков, как вариант фреймворка Express в новом поколении. Такая улучшенная версия разрабатывалась для создания веб-приложений и API с повышенной производительностью. Соответственно, создатели стремились учесть все недостатки предшественника и сделать его более современным и удобным в использовании. Koa обладает практически таким же функционалом и превосходит Express по легкости. Характерной особенностью Koa является использование генераторов ES6. Применение генераторов ES6 в Koa позволяет исключить обратные вызовы (англ. callbacks), уменьшает для разработчиков объем работы с кодом и снижает вероятность ошибок. Благодаря тому, что создателями Koa уже были учтены минусы, выявленные в процессе работы с Express, этот фреймворк может похвастаться тем, что его применение существенно упрощает адаптацию под конкретные запросы клиентов (кастомизацию). А такая характеристика может в итоге сыграть решающую роль в процессе выбора: сегодня в условиях высокой конкуренции любое приложение стремится к использованию своего собственного стиля.',
            links: [
              {
                url: 'https://koajs.com/#introduction',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=z84uTk5zmak',
                name:
                  'Traversy Media - "Koa.js Crash Course - Modern & Minimalist Node.js Framework"',
              },
              {
                url: 'https://github.com/koajs/kick-off-koa',
                name: 'Kick-off-koa',
              },
              {
                url: 'https://www.youtube.com/watch?v=uwlzpzZhlbE',
                name:
                  'Доклад Евгения Пшеничного на конференции HolyJS на тему "Koa и эволюция middleware"',
              },
            ],
          },
          {
            tag: 'Babel',
            name: 'Babel',
            text:
              'Babel.JS – это транспайлер, переписывающий код на ES-2015 в код на предыдущем стандарте ES5. Берёт код "нового образца" и полифилит его в код "старого образца". Всё просто.',
            links: [
              {
                url: 'https://babeljs.io/',
                name: 'Официальный сайт с tryout и документацией',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=XVDJxIpiDJw&list=PLqHlAwsJRxAOZCOfiukwZe4zJZIiVynvh',
                name: 'CodeDojo - "Знакомство с Babel"',
              },
              {
                url: 'https://github.com/yosuke-furukawa/tower-of-babel',
                name: 'Tower-of-babel',
              },
            ],
          },
          {
            tag: 'ESLint',
            name: 'ESLint',
            text:
              'ESLint – это инструмент, который позволяет проводить анализ качества вашего кода, написанного на любом выбранном стандарте JavaScript. Он приводит код к более-менее единому стилю, помогает избежать глупых ошибок, умеет автоматически исправлять многие из найденных проблем и отлично интегрируется со многими инструментами разработки.',
            links: [
              {
                url: 'https://eslint.org/',
                name: 'Официальный сайт',
              },
              {
                url: 'https://www.youtube.com/watch?v=lHAeK8t94as',
                name:
                  'Wes Bos - "ESLint + Prettier + VS Code — The Perfect Setup"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5zIRX5k9mg4',
                name:
                  'Для тех, кто любит необычную подачу информации ;D - Jilio',
              },
              {
                url: 'https://www.npmjs.com/package/eslint-config-airbnb',
                name: 'Конфиг от airbnb',
              },
            ],
          },
          {
            tag: 'Prettier',
            name: 'Prettier',
            text:
              'Prettier –  инструмент форматирования кода c поддержкой множества языков, минимумом конфигурации и максимумом навязанных правил. Prettier отлично сочетается с любым конфигом eslint, разделяя ответственность: за форматирование отвечает Prettier, за умными штуками вроде неиспользуемых переменных следит eslint. Prettier навязывает правила форматирования, которые вы можете выбрать сами. Не нужно спорить о правилах форматирования, Prettier решает все споры за вас. Также основным удобством Prettier является автоформатирование Вашего кода при сохранении файла. Это экономит очень много времени и сил. Попробуйте и убедитесь сами!',
            links: [
              {
                url: 'https://prettier.io/',
                name: 'Официальный сайт',
              },
              {
                url: 'https://www.youtube.com/watch?v=lHAeK8t94as',
                name:
                  'Wes Bos - "ESLint + Prettier + VS Code — The Perfect Setup"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5zIRX5k9mg4',
                name:
                  'Для тех, кто любит необычную подачу информации ;D - Jilio',
              },
              {
                url: 'https://www.youtube.com/watch?v=hSyA7tcNaCE',
                name:
                  'Тимур Шемсединов - "Настройка среды: Node.js, npm, git, eslint"',
              },
            ],
          },
          {
            tag: 'Webpack',
            name: 'Webpack',
            text:
              'Webpack — инструмент веб-разработчика, который соединяет JavaScript- и CSS-файлы в единое целое — файл, который часто называется «bundle» (с англ. «пачка»). Конечно backend разработчику не нужно уметь делать сложные webpack-конфигурации, однако часто появляется необходимость внести изменения в конфигурацию уже готового проекта.',
            links: [
              {
                url: 'https://webpack.js.org/concepts/',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/webpack',
                name: 'Скринкаст Ильи Кантора',
              },
              {
                url: 'https://nuancesprog.ru/p/2752/',
                name: 'Статья "Введение в WebPack для новиков"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os',
                name: 'Academind - "Webpack 2 Basics"',
              },
            ],
          },
          {
            tag: 'Visual Studio Code',
            name: 'Visual Studio Code',
            text:
              'Visual Studio Code — наверное, лучший текстовый редактор в 2019 году. Можно писать код где угодно, но зачем, если есть отличные инструменты?',
            links: [
              {
                url: 'https://code.visualstudio.com/docs',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/super-polzovatel-vscode',
                name: 'Курс "VSCode Power User"',
              },
            ],
          },
          {
            tag: 'Debugging',
            name: 'Debugging',
            text:
              'Не важно какой именно дебаггер Вы используете - Google Chrome, standalone решение или встренный в вашу IDE или текстовый редактор. Важно, что Вы умеете это делать и понимаете зачем Вы это делаете.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=AX7uybwukkk',
                name: 'James Q Quick - "Debugging JavaScript"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=XbB5_fHHxRc&list=PLy2A398ErdfTiHcS8zFynFaQnmSpiuxEG&index=2',
                name: '"Node.js Debugging Made Easy"',
              },
              {
                url: 'https://github.com/othiym23/bug-clinic',
                name: 'Bug-clinic',
              },
            ],
          },
          {
            tag: 'Chrome DevTools',
            name: 'Chrome DevTools',
            text:
              'Chrome DevTools - это набор инструментов веб-разработки, входящий в состав веб-браузера Google Chrome. Эти инструменты помогут Вам быстро редактировать веб-страницы и диагностировать проблемы Ваших приложений не покидая браузер, что, безусловно, поможет Вам быстрее и качественнее делать Вашу работу. Также инструменты разработчика Chrome позволяют дебажить nodejs код прямо в браузере, что порой бывает довольно удобно.',
            links: [
              {
                url: 'https://developers.google.com/web/tools/chrome-devtools/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/chrome-devtools-instrumenty-testirovshchika',
                name: 'Курс "Chrome DevTools: Инструменты тестировщика"',
              },
            ],
          },
          {
            tag: 'Postman',
            name: 'Postman',
            text: 'Postman ',
            links: [
              {
                url:
                  'https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ',
                name: 'Postman "How To" Playlist',
              },
            ],
          },
          {
            tag: 'MariaDB',
            name: 'MariaDB',
            text:
              'MariaDB — ответвление от системы управления базами данных MySQL, разрабатываемое сообществом под лицензией GNU GPL. Разработку и поддержку MariaDB осуществляет компания MariaDB Corporation Ab и фонд MariaDB Foundation. Толчком к созданию стала необходимость обеспечения свободного статуса СУБД, в противовес политике лицензирования MySQL компанией Oracle. Основателями проекта выступили первоначальные разработчики MySQL. Система лицензирования MariaDB обязывает участников, желающих добавить свой код в основную ветку СУБД, обмениваться своими авторскими правами с MariaDB Foundation для охраны лицензии и возможности создавать критические исправления для MySQL.',
            links: [
              {
                url: 'https://mariadb.com/kb/en/library/documentation/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL9Uyqhstp-wNllCTzTu7gDdLRTAJ4TQ_p',
                name: 'MariaDB Corporation - "Getting Started with MariaDB "',
              },
            ],
          },
          {
            tag: 'PostgreSQL',
            name: 'PostgreSQL',
            text:
              'PostgreSQL — PostgreSQL (произносится «Пост-Грэс-Кью-Эл») — свободная объектно-реляционная система управления базами данных (СУБД). Существует в реализациях для множества UNIX-подобных платформ, включая AIX, различные BSD-системы, HP-UX, IRIX, Linux, macOS, Solaris/OpenSolaris, Tru64, QNX, а также для Microsoft Windows.',
            links: [
              {
                url: 'https://www.postgresql.org/docs/',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
                name:
                  'freeCodeCamp.org - "Learn PostgreSQL Tutorial - Full Course for Beginners"',
              },
            ],
          },
          {
            tag: 'MongoDB',
            name: 'MongoDB',
            text:
              'MariaDB — MongoDB (от англ. humongous — огромный) — документоориентированная система управления базами данных (СУБД) с открытым исходным кодом, не требующая описания схемы таблиц. Классифицирована как NoSQL, использует JSON-подобные документы и схему базы данных. Написана на языке C++.',
            links: [
              {
                url:
                  'https://docs.mongodb.com/?_ga=2.62983855.1067639926.1564580613-595727854.1559299987',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=VELru-FCWDM&t=930s',
                name: 'Academind - "MongoDB Complete Introduction & Summary"',
              },
              {
                url: 'https://github.com/evanlucas/learnyoumongo',
                name: 'Learnyoumongo',
              },
            ],
          },
          {
            tag: 'Apache',
            name: 'Apache',
            text:
              'Apache — Apache HTTP-сервер (произносится /ə.ˈpæ.ʧi/, назван именем группы племён североамериканских индейцев апачей; кроме того, является искажённым сокращением от англ. a patchy server; среди русских пользователей общепринято переводное апа́ч) — свободный веб-сервер. Apache является кроссплатформенным ПО, поддерживает операционные системы Linux, BSD, Mac OS, Microsoft Windows, Novell NetWare, BeOS. Основными достоинствами Apache считаются надёжность и гибкость конфигурации. Он позволяет подключать внешние модули для предоставления данных, использовать СУБД для аутентификации пользователей, модифицировать сообщения об ошибках и т. д. Поддерживает IPv6.',
            links: [
              {
                url: 'https://httpd.apache.org/docs/',
                name: 'Официальная документация',
              },
            ],
          },
          {
            tag: 'Nginx',
            name: 'Nginx',
            text:
              'Nginx —  (engine x — англ. Engine X; по-русски произносится как э́нгинкс или э́нжин-и́кс) — веб-сервер и почтовый прокси-сервер, работающий на Unix-подобных операционных системах (тестировалась сборка и работа на FreeBSD, OpenBSD, Linux, Solaris, Mac OS X, AIX и HP-UX). Начиная с версии 0.7.52 появилась экспериментальная бинарная сборка под Microsoft Windows.',
            links: [
              {
                url: 'https://nginx.org/ru/docs/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=dHsv8EnhSgQ&list=PLhgRAQ8BwWFa7ulOkX0qi5UfVizGD_-Rc',
                name: 'Geek Code - "Основы Nginx"',
              },
            ],
          },
          {
            tag: 'PM2',
            name: 'PM2',
            text:
              'PM2 — менеджер процессов для JavaScript-среды Node.js. В 2016 году PM2 занял 82-е место по популярности среди JavaScript-проектов на GitHub.',
            links: [
              {
                url: 'http://pm2.keymetrics.io/docs/usage/quick-start/',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=2XZKDhSRCMY&t=3s',
                name:
                  'Aida Drogan - "Диспетчер процессов pm2. Выход node.js-сервера в свет."',
              },
            ],
          },
          {
            tag: 'SSH',
            name: 'SSH',
            text:
              'SSH - Secure Shell — «безопасная оболочка» — сетевой протокол прикладного уровня, позволяющий производить удалённое управление операционной системой и туннелирование TCP-соединений (например, для передачи файлов). Схож по функциональности с протоколами Telnet и rlogin, но, в отличие от них, шифрует весь трафик, включая и передаваемые пароли. SSH допускает выбор различных алгоритмов шифрования. SSH-клиенты и SSH-серверы доступны для большинства сетевых операционных систем. SSH позволяет безопасно передавать в незащищённой среде практически любой другой сетевой протокол. Таким образом, можно не только удалённо работать на компьютере через командную оболочку, но и передавать по шифрованному каналу звуковой поток или видео (например, с веб-камеры). Также SSH может использовать сжатие передаваемых данных для последующего их шифрования, что удобно, например, для удалённого запуска клиентов X Window System. Большинство хостинг-провайдеров за определённую плату предоставляет клиентам доступ к их домашнему каталогу по SSH. Это может быть удобно как для работы в командной строке, так и для удалённого запуска программ (в том числе графических приложений).',
            links: [
              {
                url: 'https://guides.hexlet.io/ssh/',
                name: 'Hexlet Guides - "Что такое SSH"',
              },
              {
                url:
                  'https://help.github.com/en/articles/connecting-to-github-with-ssh',
                name: 'Connecting to GitHub with SSH',
              },
            ],
          },
          {
            tag: 'Git',
            name: 'Git',
            text:
              'Распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux.',
            links: [
              {
                url: 'https://git-scm.com/doc',
                name: 'Официальная документация',
              },
              {
                url: 'https://learn.javascript.ru/screencast/git',
                name: 'Скринкаст Ильи Кантора',
              },
              {
                url: 'https://learngitbranching.js.org',
                name: 'Learn Git Branching',
              },
              {
                url: 'https://githowto.com/ru',
                name: 'GitHowTo',
              },
            ],
          },
          {
            tag: 'Regular Expressions',
            name: 'Regular Expressions',
            text:
              '"Если у Вас есть проблема, воспользуйтесь регулярным выражением, чтобы получить две проблемы". Знаменитая фраза, которая, безусловно, имеет место в реальном мире. Но отнюдь не потому, что регулярные выражения - это плохо, а потому, что "нужно уметь их готовить". Регулярные выражения - это формальный язык поиска и осуществления манипуляций с подстроками в тексте, основанный на использовании метасимволов. Научитесь пользоваться им и многие задачи, которые кажутся Вам сложными, перестанут вызывать у Вас трудности.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions',
                name: 'Документация от MDN',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=0LKdKixl5Ug&list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE',
                name: 'Academind - "Regular Expressions Demystified"',
              },
              {
                url: 'https://coursehunters.net/course/regexp',
                name:
                  'CodeSchool - "Breaking the ice with Regulae Expressions"',
              },
              {
                url: 'https://github.com/workshopper/regex-adventure',
                name: 'Regex-adventure',
              },
            ],
          },
          {
            tag: 'Optimization',
            name: 'Optimization',
            text:
              'Анализ и оптимизация — процессы, построенный на оценке производительности, дизайна и юзабилити сайтов и приложений. По результатам анализа разработчикам даются рекомендации по улучшению кода за счёт использования сервисов и техник оптимизации. Скорость сайта состоит из 2 частей: как быстро загружается страница и как быстро работает код в ней. Многие сервисы, такие как минификаторы или CDN, помогают ускорить загрузку, но скорость работы кода зависит только от вас. Небольшие изменения в коде могут давать огромные изменения в производительности. Всего несколько строк могут означать разницу между быстрым сайтом и диалогом “Unresponsive Script”',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/Tools/Profiler',
                name: 'Документация от MDN',
              },
              {
                url:
                  'https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=ru',
                name: 'Официальные рекомендации от Google',
              },
              {
                url:
                  'https://developers.google.com/speed/docs/insights/v5/about',
                name: 'Официальная документация Google PageSpeed Insights',
              },
              {
                url: 'https://developers.google.com/web/tools/lighthouse/',
                name: 'Официальная документация Lighthouse',
              },
              {
                url: 'https://tproger.ru/translations/chrome-devtools/',
                name:
                  'Полезные проекты и инструменты для работы с Chrome DevTools',
              },
              {
                url: 'https://github.com/bevacqua/perfschool',
                name: 'Perfschool',
              },
            ],
          },
          /**
           *  Теория
           */
          {
            tag: 'Linux (basics)',
            name: 'Linux (basics)',
            text:
              'Linux - семейство Unix-подобных операционных систем на базе ядра Linux, включающих тот или иной набор утилит и программ проекта GNU, и, возможно, другие компоненты. Понимание основ Linux и умение пользоваться системой - важный аспект в работе веб-разработчика.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=tQLpAefAKuA',
                name:
                  'Хороший программист - "Основы Ubuntu Linux: apt-get, bash, командная строка"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL874KddjzYd8d_A1mmUwxZ63MtJaSBXE1',
                name: 'Linux для Начинающих',
              },
            ],
          },
          {
            tag: 'Cyber security (basics)',
            name: 'Cyber security (basics)',
            text:
              'Информационная безопасность (nformation Security - InfoSec) - практика предотвращения несанкционированного доступа, использования, раскрытия, искажения, изменения, исследования, записи или уничтожения информации. Основная задача информационной безопасности — сбалансированная защита конфиденциальности, целостности и доступности данных, с учётом целесообразности применения и без какого-либо ущерба производительности организации.',
            links: [
              {
                url: 'http://kmb.ufoctf.ru/about.html',
                name: 'КМБ (Курс молодого бойца) CTF',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=rSp2cpAI4Tc&list=PLdJo1XilUTZPOJ1kSnoKheT7YSygP9FIO',
                name: 'Яндекс - "Безопасность"',
              },
            ],
          },
          {
            tag: 'Databases (basics)',
            name: 'Databases (basics)',
            text:
              'База данных - представленная в объективной форме совокупность самостоятельных материалов (статей, расчётов, нормативных актов, судебных решений и иных подобных материалов), систематизированных таким образом, чтобы эти материалы могли быть найдены и обработаны с помощью электронной вычислительной машины (ЭВМ).',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLrCZzMib1e9oOFQbuOgjKYbRUoA8zGKnj',
                name: 'Технострим Mailru - "Базы данных"',
              },
            ],
          },
          {
            tag: 'OOP',
            name: 'OOP',
            text:
              'Объеектно-ориентиированное программирование (ООП) - методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript',
                name: 'Документация MDN',
              },
              {
                url:
                  'https://vk.com/doc24068470_315312653?hash=dba1ea7a7b5708f4b3&dl=800df7906016b44cec',
                name:
                  'Книга Мэтта Вайсфельда - "Объектно-ориентированное мышление"',
              },
              {
                url: 'https://learn.javascript.ru/prototypes',
                name:
                  'Илья Кантор и его учебник learn.javascript.ru - "ООП в прототипном стиле"',
              },
            ],
          },
          {
            tag: 'SOAP / REST',
            name: 'SOAP / REST',
            text:
              'Это архитектурные стили реализации ПО со своими принципами и нюансами.',
            links: [
              {
                url:
                  'https://medium.com/@nanotexnolagiya/%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-soap-%D0%B8-rest-%D1%81-json-2019-779fef6eba9b',
                name:
                  'Статья на Medium - "Сравнение SOAP и REST с JSON [2019]"',
              },
              {
                url: 'https://refaq.ru/voprosy/soap_vs_rest_razlichiya',
                name: 'Много мыслей на тему SOAP и REST',
              },
              {
                url: 'https://www.youtube.com/watch?v=2CrjWD3VGG4',
                name: 'Неплохое видео на тему RESTful приложений',
              },
            ],
          },
          {
            tag: 'HTTP',
            name: 'HTTP',
            text:
              'Протокол передачи гипертекста (Hypertext Transfer Protocol - HTTP) - это прикладной протокол для передачи гипертекстовых документов, таких как HTML. Он создан для связи между веб-браузерами и веб-серверами, хотя в принципе HTTP может использоваться и для других целей. Протокол следует классической клиент-серверной модели, когда клиент открывает соединение для создания запроса, а затем ждет ответа. HTTP - это протокол без сохранения состояния, то есть сервер не сохраняет никаких данных (состояние) между двумя парами "запрос-ответ". Несмотря на то, что HTTP основан на TCP/IP, он также может использовать любой другой протокол транспортного уровня с гарантированной доставкой.',
            links: [
              {
                url:
                  'https://developer.mozilla.org/en-US/docs/Glossary/Transmission_Control_Protocol_(TCP)',
                name: 'Документация MDN',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол HTTP"',
              },
            ],
          },
          {
            tag: 'TCP',
            name: 'TCP',
            text:
              'Transmission Control Protocol (TCP, протокол управления передачей) — один из основных протоколов передачи данных интернета, предназначенный для управления передачей данных. В стеке протоколов TCP/IP выполняет функции транспортного уровня модели OSI. Механизм TCP предоставляет поток данных с предварительной установкой соединения, осуществляет повторный запрос данных в случае потери данных и устраняет дублирование при получении двух копий одного пакета, гарантируя тем самым, в отличие от UDP, целостность передаваемых данных и уведомление отправителя о результатах передачи. Реализации TCP обычно встроены в ядра ОС. Существуют реализации TCP, работающие в пространстве пользователя. Когда осуществляется передача от компьютера к компьютеру через Интернет, TCP работает на верхнем уровне между двумя конечными системами, например, браузером и веб-сервером. TCP осуществляет надёжную передачу потока байтов от одного процесса к другому. TCP реализует управление потоком, управление перегрузкой, рукопожатие, надёжную передачу.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/UDP',
                name: 'Документация MDN (описание)',
              },
              {
                url: 'https://www.youtube.com/watch?v=CKUOb4htnB4',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол TCP"',
              },
            ],
          },
          {
            tag: 'UDP',
            name: 'UDP',
            text:
              'Протокол пользовательских датаграмм (User Datagram Protocol — UDP ) — один из ключевых элементов набора сетевых протоколов для Интернета. С UDP компьютерные приложения могут посылать сообщения (в данном случае называемые датаграммами) другим хостам по IP-сети без необходимости предварительного сообщения для установки специальных каналов передачи или путей данных.',
            links: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Glossary/UDP',
                name: 'Документация MDN (описание)',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name:
                  'Лекция Андрея Созыкина из курса "Компьютерные сети" - "Протокол UDP"',
              },
            ],
          },
          {
            tag: 'WebSockets',
            name: 'WebSockets',
            text:
              'Вебсокеты (WebSockets) - это продвинутая технология, позволяющая открыть постоянное двунаправленное сетевое соединение между браузером пользователя и сервером. С помощью его API вы можете отправить сообщение на сервер и получить ответ без выполнения http запроса, причем этот процесс будет событийно-управляемым.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/WebSockets',
                name: 'Документация MDN',
              },
              {
                url:
                  'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications',
                name: 'Туториал на MDN',
              },
              {
                url: 'https://socket.io/',
                name:
                  'socket.io - самая популярная библиотека для создания веб-приложений на WebSockets',
              },
            ],
          },
          {
            tag: 'SSL / TLS',
            name: 'SSL / TLS',
            text:
              'TLS - Протокол защиты транспортного уровня, как и его предшественник SSL (англ. secure sockets layer — слой защищённых сокетов), — криптографические протоколы, обеспечивающие защищённую передачу данных между узлами в сети Интернет. TLS и SSL используют асимметричное шифрование для аутентификации, симметричное шифрование для конфиденциальности и коды аутентичности сообщений для сохранения целостности сообщений.',
            links: [
              {
                url:
                  'https://mnorin.com/tls-ssl-neobhodimy-j-minimum-znanij.html',
                name: 'Отличная статья на тему SSL/TLS',
              },
              {
                url: 'https://www.youtube.com/watch?v=2WYNW2uZQhs',
                name: '"SSL/TLS: история уязвимостей"',
              },
              {
                url:
                  'https://mnorin.com/tls-ssl-neobhodimy-j-minimum-znanij.html',
                name: 'Статья на MNorin.com',
              },
            ],
          },
          {
            tag: 'Code сommenting',
            name: 'Code сommenting',
            text:
              'Комментирование кода - очень важная вещь, которой, зачастую, многие принебрегают, особенно этим грешат начинающие разработчики. Комментарии помогают поддерживать и развивать Ваш код как другим разработчикам, так и Вам самим, спустя время. А вы комментируете свой код?',
            links: [
              {
                url: 'https://habr.com/ru/post/108985/',
                name: 'Небольшая статья на Habr',
              },
            ],
          },
          {
            tag: 'Touch Typing',
            name: 'Touch Typing',
            text:
              'Слепой метод набора (слепая печать) — методика набора текста «вслепую», то есть не глядя на клавиши печатной машинки или клавиши клавиатуры, используя все (или большинство) пальцы рук.',
            links: [
              {
                url: 'https://klava.org/delta/#rus_speed',
                name: 'Klava.org',
              },
              {
                url: 'https://klavogonki.ru/',
                name: 'Клавагонки',
              },
            ],
          },
          {
            tag: 'DRY / KISS / YAGNI / SOLID',
            name: 'DRY / KISS / YAGNI / SOLID',
            text:
              'Ключевые принципы разработки ПО, которые Вы должны понимать!',
            links: [
              {
                url: 'https://habr.com/ru/post/144611/',
                name: 'Статья на Habr',
              },
              {
                url: 'https://www.youtube.com/watch?v=0qP6Vh8GNM0',
                name: 'Скринкаст на тему "Что такое SOLID, KISS, DRY и YAGNI?"',
              },
            ],
          },
          {
            tag: 'Refactoring',
            name: 'Refactoring',
            text:
              'Рефакторинг — это контролируемый процесс улучшения кода, без написания новой функциональности. Результат рефакторинга — это чистый код и простой дизайн. В первую очередь рефакторинг - это превращение грязного кода в чистый. Но зачем "чистить" грязный код, если можно сразу писать чистый?',
            links: [
              {
                url: 'https://refactoring.guru/ru/refactoring',
                name: 'Рефакторинг Гуру',
              },
            ],
          },
        ],
      },
      /**
       *
       *  Nodejs - Middle
       *
       */
      {
        name: 'Middle',
        skills: [
          /**
           *  Инструменты
           */
          {
            tag: 'JavaScript (advanced)',
            name: 'JavaScript (advanced)',
            text:
              'Продвинутый уровень JavaScript для продвинутых разработчиков. Дерзайте!',
            links: [
              {
                url: 'https://johnresig.com/apps/learn/',
                name: 'Learning Advanced JavaScript',
              },
              {
                url:
                  'https://coursehunters.net/course/prodvinutye-koncepcii-javascript',
                name: 'Advanced JavaScript Concepts',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=zMU4ir10DMg&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0',
                name: 'Тимур Шемсединов - "Programming"',
              },
              {
                url: 'https://github.com/Apress/pro-javascript-design-patterns',
                name: 'Pro JavaScript Design Patterns',
              },
            ],
          },
          {
            tag: 'TypeScript',
            name: 'TypeScript',
            text:
              'TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. TypeScript отличается от JavaScript возможностью явного статического назначения типов, поддержкой использования полноценных классов (как в традиционных объектно-ориентированных языках), а также поддержкой подключения модулей, что призвано повысить скорость разработки, облегчить читаемость, рефакторинг и повторное использование кода, помочь осуществлять поиск ошибок на этапе разработки и компиляции, и, возможно, ускорить выполнение программ.',
            links: [
              {
                url: 'https://www.typescriptlang.org/docs/home.html',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/itvdn-typescript-fundamentals',
                name: 'ITVDN - "TypeScript Fundamentals"',
              },
              {
                url:
                  'https://coursehunters.net/course/understanding-typescript',
                name: 'Academind - "Understanding TypeScript"',
              },
            ],
          },
          {
            tag: 'JSDoc',
            name: 'JSDoc',
            text:
              'Комментирование кода - хорошо, а документирование - ещё лучше! Такие инстументы, как JSDoc, помогут Вам сделать поддержку вашего кода проще и приятнее.',
            links: [
              {
                url: 'https://jsdoc.app/',
                name: 'Официальная документация JSDoc',
              },
              {
                url:
                  'https://dev.by/news/kak-priuchit-razrabotchikov-dokumentirovat-svoy-kod',
                name: 'Небольшая статья на тему документрирования кода',
              },
            ],
          },
          {
            tag: 'Jest',
            name: 'Jest',
            text:
              'Jest — архитектурный подход или набор шаблонов программирования для построения пользовательского интерфейса веб-приложений, сочетающийся с реактивным программированием и построенный на однонаправленных потоках данных. Согласно замыслу создателей и несмотря на то, что Facebook предоставил реализацию Flux в дополнение к React, Flux не является ещё одним веб-фреймворком, а является архитектурным решением.',
            links: [
              {
                url: 'https://jestjs.io/docs/en/getting-started',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI&t=1344s',
                name:
                  'Academind - "JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests"',
              },
              {
                url: 'https://www.youtube.com/watch?v=4Fl5GH4eYZ8',
                name: 'Academind - "JavaScript Testing - Mocking Async Code"',
              },
            ],
          },
          {
            tag: 'Nodejs (advanced)',
            name: 'Nodejs (advanced)',
            text:
              'Продвинутый уровень Nodejs для продвинутых разработчиков. Дерзайте!',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLfiFyFs7K9szsv4Mz11bFzfhyOAjMHEbd',
                name: 'Advanced Nodejs',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQZ0MpTsmi54OkjTbo0cjU1T',
                name: 'Тимур Шемсединов - "Asynchronous Programming"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLSpJkDDmpFZ7GowbJE-mvX09zY9zfYatI',
                name: 'CodeWorkr - "API Authentication with Node"',
              },
            ],
          },
          {
            tag: 'Loopback3',
            name: 'Loopback3',
            text:
              'Loopback3 - это расширяемая высокоуровневая платформа с открытым исходным кодом, написанная на nodejs. На сегоднящний момент это, пожалуй, наиболее предпочтительная платформа для "молниеносной" реализации проектов, не требующих сложного архитектурного подхода. Если Вам нужно сделать MVP или относительно простой проект - это Ваш выбор!',
            links: [
              {
                url: 'https://loopback.io/doc/en/lb3/index.html',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLYO9T4zW_Xsk9o-K__KJqyzwVdl4A2Omb',
                name: 'LoopBack.io, the Node.js API Framework',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLYO9T4zW_Xsk9o-K__KJqyzwVdl4A2Omb',
                name: 'Доклад Николая Сладкого на тему "Loopback 3 и 4"',
              },
            ],
          },
          {
            tag: 'Loopback4',
            name: 'Loopback4',
            text:
              'Loopback4 - это расширяемая высокоуровневая платформа с открытым исходным кодом, написанная на nodejs. 4 версия не имеет (пока не имеет) достаточно встроенных моделей для быстрого построения web-приложений, однако переработанная архитектура и более высокий уровень абстракции делают 4 версию более "взрослой" и позволяют использовать её для реализации более серьезных проектов.',
            links: [
              {
                url: 'https://loopback.io/doc/en/lb4/index.html',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=W5u_YF96q6o&list=PLy2A398ErdfTiHcS8zFynFaQnmSpiuxEG&index=70',
                name:
                  'StrongLoop Videos - "LoopBack 4 Demo Example todo application"',
              },
            ],
          },
          {
            tag: 'NestJS',
            name: 'NestJS',
            text:
              'NestJS — Nest (или NestJS) - это платформа для создания эффективных, масштабируемых серверных приложений Node.js. Он использует прогрессивный JavaScript, построен с использованием и полностью поддерживает TypeScript (но все же позволяет разработчикам кодировать на чистом JavaScript) и объединяет элементы OOP (объектно-ориентированное программирование), FP (функциональное программирование) и FRP (функциональное реактивное программирование). Внутри Nest использует надежные платформы HTTP-сервера, такие как Express (по умолчанию), и может быть дополнительно настроен на использование Fastify! Nest обеспечивает уровень абстракции выше этих распространенных сред NodeJS (Express / Fastify), но также предоставляет свои API-интерфейсы непосредственно разработчику. Это позволяет разработчикам свободно использовать множество сторонних модулей, доступных для базовой платформы.',
            links: [
              {
                url: 'https://docs.nestjs.com/',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=wqhNoDE6pb4',
                name: 'Traversy Media - "NestJS Crash Course"',
              },
            ],
          },
          {
            tag: 'Strapi',
            name: 'Strapi',
            text:
              'Strapi — это фреймворк для управления контентом, основанный на Node.js. Он позволяет быстро разрабатывать API для работы с данными и занимает промежуточное положение между фреймворком для Node.js и CMS без пользовательского интерфейса. Strapi позволяет разрабатывать API очень быстро, что экономит время. Strapi имеет расширяемую систему плагинов, он отличается большим набором встроенных возможностей. Среди них — панель администратора, система управления аутентификацией и разрешениями, средства управления контентом, генератор API и так далее. Strapi — это опенсорсный проект, что выгодно отличает его от других CMS. В частности, это означает, что, во-первых, он полностью бесплатен, а во-вторых — то, что компания, выбравшая Strapi, разворачивает CMS на собственных серверах, то есть данные компании остаются под её полным контролем. Кроме того, Strapi можно настраивать и расширять благодаря системе плагинов.',
            links: [
              {
                url:
                  'https://strapi.io/documentation/3.0.0-beta.x/getting-started/introduction.html#strapi-documentation',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://blog.strapi.io/cooking-a-deliveroo-clone-with-nuxt-vue-js-graphql-strapi-and-stripe-setup-part-1-7/',
                name:
                  'Cooking a Deliveroo clone with Nuxt (Vue.js), GraphQL, Strapi and Stripe',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL7Q0DQYATmvgGiz0MbbsMA_aB1V0yLE7a',
                name: 'Learn GatsbyJS with Strapi Headless CMS',
              },
            ],
          },
          {
            tag: 'React',
            name: 'React',
            text:
              'React — это очень популярная JavaScript-библиотека с открытым исходным кодом для создания пользовательских интерфейсов.',
            links: [
              {
                url: 'https://reactjs.org/',
                name: 'Официальная документация',
              },
              {
                url: 'https://codedojo.ru/courses/react-basics',
                name: 'CodeDojo - "Основы React"',
              },
              {
                url: 'https://learn-reactjs.ru/home',
                name: 'Ресурс "Learn React JS"',
              },
              {
                url: 'https://github.com/workshopper/learnyoureact',
                name: 'Learnyoureact',
              },
            ],
          },
          {
            tag: 'Angular',
            name: 'Angular',
            text:
              'Angular — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона, а также упрощение тестирования и разработки.',
            links: [
              {
                url: 'https://angular.io/start',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=t3KH5LXHi0s&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp',
                name: 'CodeDojo - "Знакомство с Angular 2"',
              },
            ],
          },
          {
            tag: 'Vue',
            name: 'Vue',
            text:
              'Vue - прогрессивный JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Как React, только не так.',
            links: [
              {
                url: 'https://vuejs.org/v2/guide/',
                name: 'Официальная документация',
              },
              {
                url: 'https://coursehunters.net/course/udemy-vuejs-2',
                name: 'Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)',
              },
            ],
          },
          {
            tag: 'GraphQL',
            name: 'GraphQL',
            text:
              'GraphQL - язык запросов с открытым исходным кодом, разработанный Facebook. Он создавался как более эффективная альтернатива REST для разработки и использования программных интерфейсов приложений.',
            links: [
              {
                url: 'https://graphql.org/learn/',
                name: 'Официальная документация',
              },
              {
                url: 'https://tproger.ru/translations/graphql-beginners-guide/',
                name: 'Небольшое введение в GraphQL от Tproger',
              },
              {
                url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q&t=1890s',
                name:
                  'freeCodeCamp.org - "GraphQL Full Course - Novice to Expert"',
              },
              {
                url:
                  'https://coursehunters.net/course/full-stack-prodvinutyy-react-graphql',
                name: 'WesBos - FullStack Advanced React + GraphQL',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'Firebase',
            name: 'Firebase',
            text:
              'Firebase — американская компания, поставщик облачных услуг, основанная в 2011 году Эндрю Ли и Джеймсом Тэмплином, и поглощённая в 2014 году корпорацией Google. Основной сервис — облачная СУБД класса NoSQL, позволяющая разработчикам приложений хранить и синхронизировать данные между несколькими клиентами. Поддержаны особенности интеграции с приложениями под операционные системы Android и iOS, реализовано API для приложений на JavaScript, Java, Objective-C и Node.js, также возможно работать напрямую с базой данных в стиле REST из ряда JavaScript-фреймворков, включая AngularJS, React, Vue.js, Ember.js и Backbone.js. Предусмотрено API для шифрования данных. Среди других услуг, предоставлявшихся компанией — запущенный 13 мая 2014 года хостинг для хранения статических файлов (таких как CSS, HTML, JavaScript), обеспечивающий доставку через CDN и сервис аутентификации клиента с использованием кода только на стороне клиента с поддержкой входа через Facebook, GitHub, Twitter и Google (Firebase Simple Login). ',
            links: [
              {
                url: 'https://firebase.google.com/docs',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=FXY1UyQfSFw&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt',
                name:
                  'Academind - "FULL PROJECT with Vue.js + Vuetify + Firebase"',
              },
            ],
          },
          {
            tag: 'JWT',
            name: 'JWT',
            text:
              'JWT (JSON Web Token) — это открытый стандарт (RFC 7519) для создания токенов доступа, основанный на формате JSON. Как правило, используется для передачи данных для аутентификации в клиент-серверных приложениях. Токены создаются сервером, подписываются секретным ключом и передаются клиенту, который в дальнейшем использует данный токен для подтверждения своей личности.',
            links: [
              {
                url: 'https://jwt.io/introduction/',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=7nafaH9SddU&t=1063s',
                name: 'Traversy Media - "Node.js API Authentication With JWT"',
              },
            ],
          },
          {
            tag: 'OAuth',
            name: 'OAuth',
            text:
              'OAuth — OAuth — открытый протокол (схема) авторизации, который позволяет предоставить третьей стороне ограниченный доступ к защищённым ресурсам пользователя без необходимости передавать ей (третьей стороне) логин и пароль.',
            links: [
              {
                url: 'https://oauth.net/code/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x',
                name: 'The Net Ninja - "OAuth Login (Passport.js) Tutorial"',
              },
              {
                url: 'https://www.youtube.com/watch?v=6FOq4cUdH8k&t=1010s',
                name: 'Traversy Media - "Node.js With Passport Authentication"',
              },
            ],
          },
          {
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
          },
          {
            tag: 'Redis',
            name: 'Redis',
            text:
              'Redis (от англ. remote dictionary server) — резидентная система управления базами данных класса NoSQL с открытым исходным кодом, работающая со структурами данных типа «ключ — значение». Используется как для баз данных, так и для реализации кэшей, брокеров сообщений. Ориентирована на достижение максимальной производительности на атомарных операциях (заявляется о приблизительно 100 тыс. SET- и GET-запросов на Linux-сервере начального уровня). Написана на Си, интерфейсы доступа созданы для большинства основных языков программирования.',
            links: [
              {
                url: 'https://redis.io/documentation',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=Hbt56gFj998',
                name: 'Traversy Media - "Redis Crash Course Tutorial"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=z25CPqJMFUk&list=PLy2A398ErdfTiHcS8zFynFaQnmSpiuxEG&index=33',
                name:
                  'Redis Labs - "Building Light weight Microservices Using Redis"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=ECz6Mv3T7Ec&list=PLy2A398ErdfTiHcS8zFynFaQnmSpiuxEG&index=32',
                name: '"Implementing a Redis Cache"',
              },
            ],
          },
          {
            tag: 'Memcached',
            name: 'Memcached',
            text:
              'Memcached — программное обеспечение, реализующее сервис кэширования данных в оперативной памяти на основе хеш-таблицы. С помощью клиентской библиотеки (для C/C++, Ruby, Perl, PHP, Python, Java, .Net и др.) позволяет кэшировать данные в оперативной памяти множества доступных серверов. Распределение реализуется путём сегментирования данных по значению хеша ключа по аналогии с сокетами хеш-таблицы. Клиентская библиотека, используя ключ данных, вычисляет хеш и использует его для выбора соответствующего сервера. Ситуация сбоя сервера трактуется как промах кэша, что позволяет повышать отказоустойчивость комплекса за счет наращивания количества memcached серверов и возможности производить их горячую замену. В API memcached есть только базовые функции: выбор сервера, установка и разрыв соединения, добавление, удаление, обновление и получение объекта, а также Compare-and-swap. Для каждого объекта устанавливается время жизни, от 1 секунды до бесконечности. При исчерпании памяти более старые объекты автоматически удаляются. Для PHP также есть уже готовые библиотеки PECL для работы с memcached, которые дают дополнительную функциональность. По умолчанию memcached использует порт 11211.',
            links: [
              {
                url: 'https://github.com/memcached/memcached/wiki',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=7MLXuG83Fsw',
                name: 'Traversy Media - "Intro To Memcached"',
              },
            ],
          },
          {
            tag: 'Docker',
            name: 'Docker',
            text:
              'Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации. Позволяет «упаковать» приложение со всем его окружением и зависимостями в контейнер, который может быть перенесён на любую Linux-систему с поддержкой cgroups в ядре, а также предоставляет среду по управлению контейнерами.',
            links: [
              {
                url: 'https://docs.docker.com/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/docker-mastery-polnyy-nabor-instrumentov-ot-kapitana-dokera',
                name:
                  'Docker Mastery: The Complete Toolset From a Docker Captain',
              },
              {
                url:
                  'https://coursehunters.net/course/docker-i-kubernetes-polnoe-rukovodstvo',
                name: 'Docker and Kubernetes: The Complete Guide',
              },
            ],
          },
          {
            tag: 'CI / CD',
            name: 'CI / CD',
            text:
              'Continuous Integration(CI) и Continuous Delivery (CD) - концепция непрерывной интеграции и доставки. CI/CD реализуется как конвейер, облегчая слияние только что закомиченного кода в основную кодовую базу. Концепция позволяет запускать различные типы тестов на каждом этапе (выполнение интеграционного аспекта) и завершать его запуском с развертыванием закомиченного кода в фактический продукт, который видят конечные пользователи (выполнение доставки).',
            links: [
              {
                url:
                  'https://medium.com/southbridge/ci-cd-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-f0626b9994c8',
                name: 'Статья на MDN (TLDR)',
              },
              {
                url: 'https://docs.gitlab.com/ee/ci/',
                name: 'Официальная документация GitLab CI/CD',
              },
              {
                url:
                  'https://blog.gds-gov.tech/that-ci-cd-thing-principles-implementation-tools-aa8e77f9a350',
                name: 'Cтатья на MDN (longread)',
              },
            ],
          },
          {
            tag: 'Jenkins',
            name: 'Jenkins',
            text:
              'Jenkins — программная система с открытым исходным кодом на Java, предназначенная для обеспечения процесса непрерывной интеграции программного обеспечения. Ответвлена в 2008 году от проекта Hudson, принадлежащего компании Oracle, основным его автором — Косукэ Кавагути. Распространяется под лицензией MIT. Позволяет автоматизировать часть процесса разработки программного обеспечения, в котором не обязательно участие человека, обеспечивая функции непрерывной интеграции. Работает в сервлет-контейнере, например, Apache Tomcat. Поддерживает инструменты системы управления версиями, включая AccuRev, CVS, Subversion, Git, Mercurial, Perforce, Clearcase и RTC. Может собирать проекты с использованием Apache Ant и Apache Maven, а также выполнять произвольные сценарии оболочки и пакетные файлы Windows. Сборка может быть запущена разными способами, например, по событию фиксации изменений в системе управления версиями, по расписанию, по запросу на определённый URL, после завершения другой сборки в очереди. Возможности Jenkins можно расширять с помощью плагинов. Контроль доступа реализуется двумя способами: проверкой подлинности пользователя и авторизацией. Поддерживается защита от внешних угроз, в том числе от CSRF-атак и вредоносных сборок.',
            links: [
              {
                url: 'https://jenkins.io/doc/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLg5SS_4L6LYvQbMrSuOjTL1HOiDhUE_5a',
                name: 'ADV-IT - "Jenkins На Русском Языке"',
              },
            ],
          },
          {
            tag: 'Ansible',
            name: 'Ansible',
            text:
              'Ansible — система управления конфигурациями, написанная на Python, с использованием декларативного языка разметки для описания конфигураций. Используется для автоматизации настройки и развертывания программного обеспечения. Обычно используется для управления Linux-узлами, но Windows также поддерживается. Поддерживает работу с сетевыми устройствами, на которых установлен Python версии 2.4 и выше по SSH или WinRM соединению.',
            links: [
              {
                url: 'https://www.ansible.com/resources/get-started',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLg5SS_4L6LYufspdPupdynbMQTBnZd31N',
                name: 'ADV-IT- "Ansible На Русском Языке"',
              },
            ],
          },
          /**
           *  Теория
           */
          {
            tag: 'Design patterns',
            name: 'Design patterns',
            text:
              'Паттерны (или шаблоны) проектирования описывают типичные способы решения часто встречающихся проблем при проектировании программ. В отличие от готовых функций или библиотек, паттерн нельзя просто взять и скопировать в программу. Паттерн представляет собой не какой-то конкретный код, а общую концепцию решения той или иной проблемы, которую нужно будет ещё подстроить под нужды вашей программы. Паттерны проектирования - это фундаментальные знания проектирования программ, без которых Вы будете "наступать на грабли" снова и снова.',
            links: [
              {
                url: 'https://refactoring.guru/ru/design-patterns',
                name: 'Рефакторинг Гуру',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQaJFrm02DoSnmvN5P-cVykm',
                name: 'Тимур Шемсединов - "Patterns"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLfiFyFs7K9syHZJSfRI5Fc_3tiualZhdK',
                name: '"Node.js: Design Patterns"',
              },
              {
                url:
                  'https://medium.com/@marina.kovalyova/java-script-design-patterns-569c627d25f9',
                name:
                  'Статья на Medium - "Шаблоны проектирования в JavaScript"',
              },
            ],
          },
          {
            tag: 'MVC / MVP / MVVM',
            name: 'MVC / MVP / MVVM',
            text:
              'Схема разделения данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: модель, представление и контроллер — таким образом, что модификация каждого компонента может осуществляться независимо&',
            links: [
              {
                url: 'https://habr.com/ru/post/215605/',
                name:
                  'Статья на Habr - "Паттерны для новичков: MVC vs MVP vs MVVM"',
              },
              {
                url: 'https://www.youtube.com/watch?v=5WgsKtlHUls',
                name: 'Неплохое видео от канала Веб-стандарты',
              },
            ],
          },
          {
            tag: 'Functional programming',
            name: 'Functional programming',
            text:
              'Функциональное программирование — раздел дискретной математики и парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних (в отличие от функций как подпрограмм в процедурном программировании).',
            links: [
              {
                url:
                  'http://kspt.icc.spbstu.ru/media/files/2016/course/lang/slides/lection0.pdf',
                name:
                  'Презентация по введению в функциональное программирование',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQZGa7hYnwBQufg9XXoJr5LP',
                name: 'Тимур Шемсединов - "Functional Programming"',
              },
            ],
          },
          {
            tag: 'TDD / BDD',
            name: 'TDD / BDD',
            text:
              'TDD и BDD - методики разработки ПО через тестирование. Концепции обоих подходов похожи, сначала идут тесты и только потом начинается разработка, но предназначение у них совершенно разное. TDD — это больше о программировании и тестировании на уровне технической реализации продукта, когда тесты создают сами разработчики. BDD предполагает описание тестировщиком или аналитиком пользовательских сценариев на естественном языке — если можно так выразиться, на языке бизнеса.',
            links: [
              {
                url:
                  'https://www.youtube.com/watch?v=H4Hf3pji7Fw&list=PLngnoZX8cAn8XyTsN7_A1gTIQ15SNcKQS',
                name:
                  'Development play pays - "TDD vs BDD. Test Driven Development vs Behaviour Driven Development"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=4sgTIVLGPAk&list=PLngnoZX8cAn-rZpWzX4TFlNbNLJRTKKDm',
                name: 'Development play pays - "TDD vs BDD. Death Match"',
              },
              {
                url:
                  'https://medium.com/@ryuta_udo/tdd-bdd-with-javascript-3dde511e4e2f',
                name: 'Статья на Medium - "TDD / BDD with JavaScript"',
              },
            ],
          },
          {
            tag: 'Linux (advanced)',
            name: 'Linux (advanced)',
            text:
              'Linux - семейство Unix-подобных операционных систем на базе ядра Linux, включающих тот или иной набор утилит и программ проекта GNU, и, возможно, другие компоненты. Понимание основ Linux и умение пользоваться системой - важный аспект в работе веб-разработчика. Умение конфигурировать и администрировать сревера Linux - частая задача.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLrCZzMib1e9rx3HmaLQfLYb9ociIvYOY1',
                name: 'Технострим Mailru -  "Администрирование Linux"',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLg5SS_4L6LYsgy5qLYZtvoaV34zn5iKPe',
                name: 'ADV-IT- "Linux для НЕ Начинающих"',
              },
              {
                url:
                  'http://www.mustitz.net/attachments/download/525/%D0%AF%D0%B4%D1%80%D0%BE_Linux._%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%B0_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8._3-%D0%B5_%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.pdf',
                name: '"Ядро Линукс - Описание процесса разработки"',
              },
            ],
          },
          {
            tag: 'Network (advanced)',
            name: 'Network (advanced)',
            text:
              'Компьютерные сети - это система, обеспечивающая обмен данными между вычислительными устройствами (компьютеры, серверы, маршрутизаторы и другое оборудование). Для передачи информации могут быть использованы различные среды.',
            links: [
              {
                url:
                  'https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C',
                name:
                  'Википедия (не смешно, там действительно много информации на эту тему)',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLtPJ9lKvJ4oiNMvYbOzCmWy6cRzYAh9B1',
                name: 'Андрей Созыкин - Учебный курс "Компьютерные сети"',
              },
              {
                url:
                  'http://www.ipa.nw.ru/PAGE/aspirantura/literatura/tanenbaum.pdf',
                name: 'Книга Э. Таненбаум, Д. Уэзеролл -  "Компьютерные сети"',
              },
              {
                url: 'https://proglib.io/p/networks-course/',
                name:
                  'Курс на ProgLib - "Лучший видеокурс по сетевым технологиям"',
              },
            ],
          },
          // TODO: Добавить материалы
          {
            tag: 'Databases (advanced)',
            name: 'Databases (advanced)',
            text:
              'Более глубокое понимание баз данных даёт более глубокое понимание работы структур данных, движков и прочих "сложных" вещей в мире IT',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=i3yoZca-KjE',
                name: 'Roman Brovko - "Погружение в СУБД"',
              },
            ],
          },
          {
            tag: 'Data structures realisation',
            name: 'Data structures realisation',
            text: 'Реализация структур данных',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=9KvA4hDDSjk',
                name:
                  'Тимур Шемсединов - "Структуры данных: списки, стек, очередь, дэк в JavaScript"',
              },
              {
                url:
                  'https://www.youtube.com/watch?v=PI5rMkqPODI&list=PLIFGfLqvZ-yGHI2Fg0NCgi7FY0h1yh-af',
                name: 'Алгоритмы и структуры данных на JavaScript',
              },
            ],
          },
        ],
      },

      /**
       *
       *  Nodejs - Senior
       *
       */
      {
        name: 'Senior',
        skills: [
          // TODO: Добавить материалы
          {
            tag: 'Algorithms analysis and design',
            name: 'Algorithms analysis and design',
            text: 'Анализ и построение алгоритмов',
            links: [
              {
                url: 'https://e-maxx.ru/bookz/files/cormen.pdf',
                name: 'Книга "Алгоритмы: Анализ и построение"',
              },
            ],
          },
          // TODO: Добавить материалы
          {
            tag: 'Software architecture',
            name: 'Software architecture',
            text: 'Архитектура приложения - это Вам не это!',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLHhi8ymDMrQYGZLuEc92Sp0uO2fhoSslz',
                name: 'Тимур Шемсединов - "Software Architecture"',
              },
            ],
          },
          // TODO: Добавить материалы
          {
            tag: 'Microservices architecture',
            name: 'Microservices architecture',
            text:
              'Microservices Architecture (микросервисная архитектура) — вариант сервис-ориентированной архитектуры программного обеспечения, ориентированный на взаимодействие насколько это возможно небольших, слабо связанных и легко изменяемых модулей — микросервисов, получивший распространение в середине 2010-х годов в связи с развитием практик гибкой разработки и DevOps. Если в традиционных вариантах сервис-ориентированной архитектуры модули могут быть сами по себе достаточно сложными программными системами, а взаимодействие между ними зачастую полагается на стандартизованные тяжеловесные протоколы (такие, как SOAP, XML-RPC), в микросервисной архитектуре системы выстраиваются из компонентов, выполняющих относительно элементарные функции, и взаимодействующие с использованием экономичных сетевых коммуникационных протоколов (в стиле REST с использованием, например, JSON, Protocol Buffers, Thrift). За счёт повышения гранулярности модулей архитектура нацелена на уменьшение степени зацепления и увеличение связности, что позволяет проще добавлять и изменять функции в системе в любое время.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLDmvslp_VR0xZGhJHMjy5dozCDJYZK6W-',
                name: 'Create A Microservice-based Web Application',
              },
            ],
          },
          {
            tag: 'Memory in JavaScript',
            name: 'Memory in JavaScript',
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
          },
          {
            tag: 'Memory leaks',
            name: 'Memory leaks',
            text:
              'Утечки памяти - (англ. memory leak) — процесс неконтролируемого уменьшения объёма свободной оперативной или виртуальной памяти компьютера, связанный с ошибками в работающих программах, вовремя не освобождающих ненужные участки памяти, или с ошибками системных служб контроля памяти.',
            links: [
              {
                url: 'https://medium.com/webbdev/js-ae40719fd84e',
                name:
                  'Статья на Medium - "Управление памятью в JS, четыре вида утечек памяти"',
              },
              {
                url: 'https://www.youtube.com/watch?v=0oZa64SB2wM',
                name:
                  'Тимур Шемсединов - "Утечки памяти в Node.js и JavaScript, сборка мусора и профилирование"',
              },
              {
                url: 'https://learn.javascript.ru/optimize',
                name:
                  'Учебник Ильи Кантора "learn.javascript.ru" - Утечки памяти и оптимизации',
              },
              {
                url: 'https://www.youtube.com/watch?v=y_rVMy_5wz0',
                name:
                  'Vladislav Orlikov - "Автоматизация поиска утечек памяти в клиентском JavaScript"',
              },
            ],
          },
          {
            tag: 'V8 / SpiderMonkey / Chakra',
            name: 'V8 / SpiderMonkey / Chakra',
            text:
              'Движок JavaScript — специализированная программа, обрабатывающая JavaScript, в частности, в браузерах.',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=PsDqH_RKvyc',
                name: 'The V8 Engine and Node.js',
              },
            ],
          },
          // TODO: Добавить материалы
          {
            tag: 'Native C++ Modules (Node.js)',
            name: 'Native C++ Modules (Node.js)',
            text:
              'Нативные C++ модули - это очень сильный инструмент в работе с nodejs. Конечно стандартная библиотека nodejs реализует все абстракции, необходимые для создания современных приложений, однако в один прекрасный момент Вы можете столкнуться с тем, что производительности nodejs по каким-то причинам не хватает. Именно тогда на помощь Вам приходят нативные C++ модули, которые, как легко можно догадаться, писать придётся на языке C++. Вам не нужно быть гуру C++ для того, чтобы реализоваться простые модули, однако знания данного языка программирования - это обязательное требование.',
            links: [
              {
                url:
                  'https://nodejs.org/dist/latest-v12.x/docs/api/addons.html',
                name:
                  'Официальная документация встроенной библиотеки "C++ Addons"',
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
          },
          {
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
                name:
                  'Статья на Habr - "Знай свой инструмент: Event Loop в libuv"',
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
          },
          // TODO: Добавить линки
          {
            tag: 'Protobuf',
            name: 'Protobuf',
            text:
              'Протокол сериализации (передачи) структурированных данных, предложенный Google как эффективная бинарная альтернатива текстовому формату XML. Разработчики сообщают, что Protocol Buffers проще, компактнее и быстрее, чем XML, поскольку осуществляется передача бинарных данных, оптимизированных под минимальный размер сообщения.',
            links: [
              {
                url: 'https://developers.google.com/protocol-buffers/?hl=ru',
                name: 'Официальная документация от Google',
              },
            ],
          },
          // TODO: Добавить линки
          {
            tag: 'gRPC',
            name: 'gRPC',
            text:
              'gRPC - это система удаленного вызова процедур с открытым исходным кодом, изначально разработанная в Google. ',
            links: [
              {
                url: 'https://grpc.io/docs/',
                name: 'Официальная документация',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'P2P',
            name: 'P2P',
            text:
              'P2P -  одноранговая, децентрализованная, или пиринговая (англ. peer-to-peer, P2P — равный к равному) сеть — оверлейная компьютерная сеть, основанная на равноправии участников. Часто в такой сети отсутствуют выделенные серверы, а каждый узел (peer) является как клиентом, так и выполняет функции сервера. В отличие от архитектуры клиент-сервера, такая организация позволяет сохранять работоспособность сети при любом количестве и любом сочетании доступных узлов. Участниками сети являются все пиры.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PL1QRvYV-LXn7Mdt7pKOdp7gircj8CwMgk',
                name: "Let's Write Code - P2P / WebRTC",
              },
              {
                url: 'https://github.com/No9/torrential',
                name: 'torrential',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'WebRTC',
            name: 'WebRTC',
            text:
              'WebRTC (Web Real Time Communications) — это стандарт, который описывает передачу потоковых аудиоданных, видеоданных и контента от браузера и к браузеру в режиме реального времени без установки плагинов или иных расширений. Стандарт позволяет превратить браузер в оконечный терминал видеоконференцсвязи, достаточно просто открыть веб-страницу, чтобы начать общение.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PL1QRvYV-LXn7Mdt7pKOdp7gircj8CwMgk',
                name: "Let's Write Code - P2P / WebRTC",
              },
              {
                url: 'https://trueconf.ru/webrtc.html',
                name: 'Trueconf - WebRTC',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'IoT',
            name: 'IoT',
            text:
              'IoT (Internet of Things) - интернет вещей — это сеть связанных через интернет объектов, способных собирать данные и обмениваться данными, поступающими со встроенных сервисов. Устройства, входящие в интернет вещей, — любые автономные устройства, подключённые к интернету, которые могут отслеживаться и/или управляться удалённо.',
            links: [
              {
                url:
                  'https://www.youtube.com/playlist?list=PLbW_am_GRTo2O5xTDsVsVX2JX7S4Z6Pvt',
                name: 'IOT Nodejs',
              },
              {
                url: 'https://github.com/tableflip/nodebot-workshop',
                name: 'Nodebot Workshop',
              },
            ],
          },
          {
            tag: 'Web Assembly',
            name: 'Web Assembly',
            text:
              'WebAssembly (сокращенно wasm) — это бинарный формат инструкций для стековой виртуальной машины. WebAssembly спроектирован как портативная цель компиляции для высокоуровневых языков, таких как C/C++/Rust, которую можно развертывать в web для клиентских и серверных приложений.',
            links: [
              {
                url: 'https://developer.mozilla.org/ru/docs/WebAssembly',
                name: 'Документация MDN',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLFjq8z-aGyQ78CQu1G3C5CT9ieiNpsnbJ',
                name: 'Coding Tech - "WebAssembly"',
              },
            ],
          },
          {
            tag: 'Kafka',
            name: 'Kafka',
            text:
              'Kafka — распределённый программный брокер сообщений, проект с открытым исходным кодом, разрабатываемый в рамках фонда Apache. Написан на языке программирования Scala и Java. Спроектирован как распределённая, горизонтально масштабируемая система, обеспечивающая наращивание пропускной способности как при росте числа и нагрузки со стороны источников, так и количества систем-подписчиков. Подписчики могут быть объединены в группы. Поддерживается возможность временного хранения данных для последующей пакетной обработки. Одной из особенностей реализации инструмента является применение техники, сходной с журналами транзакций, используемыми в системах управления базами данных.',
            links: [
              {
                url: 'https://kafka.apache.org/documentation/',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=3hVMXhqYhXc',
                name: 'Real time chart data with Angular2 and Kafka',
              },
              {
                url: 'https://www.youtube.com/watch?v=udnX21__SuU',
                name: 'Kafka Tutorial - Core Concepts',
              },
            ],
          },
          {
            tag: 'RabbitMQ',
            name: 'RabbitMQ',
            text:
              'RabbitMQ — программный брокер сообщений на основе стандарта AMQP — тиражируемое связующее программное обеспечение, ориентированное на обработку сообщений. Создан на основе системы Open Telecom Platform, написан на языке Erlang, в качестве движка базы данных для хранения сообщений использует Mnesia. Состоит из сервера, библиотек поддержки протоколов HTTP, XMPP и STOMP[en], клиентских библиотек AMQP для Java и .NET Framework и различных плагинов (таких как плагины для мониторинга и управления через HTTP или веб-интерфейс или плагин «Shovel» для передачи сообщений между брокерами). Имеется реализация клиентов для доступа к RabbitMQ для целого ряда языков программирования, в том числе для Perl, Python, Ruby, PHP. Поддерживается горизонтальное масштабирование для построения кластерных решений.',
            links: [
              {
                url: 'https://www.rabbitmq.com/#getstarted',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=Dcz8L1DAvQM&t=248s',
                name:
                  'Programming With Spirit - "Send and Receive Messages with Nodejs and RabbitMQ"',
              },
            ],
          },
          {
            tag: 'ElasticSearch',
            name: 'ElasticSearch',
            text:
              'ElasticSearch — Elasticsearch — тиражируемая свободная программная поисковая система, по состоянию на середину 2010-х годов — самая популярная в своей категории. Написана на Java, распространяется по лицензии Apache, в основе использует библиотеку Lucene (так же как и вторая по популярности поисковая система — Solr), официальные клиенты доступны на Java, .NET (C#), Python, Groovy и ряде других языков. Разрабатывается компанией Elastic вместе со связанными проектами — механизмом сбора данных и анализа журналов Logstash и платформой аналитики и визуализации Kibana; эти три продукта предназначены для использования в качестве интегрированного решения, называемого «Elastic Stack». Среди крупных сайтов, использующих Elasticsearch, отмечаются Wikimedia, StumbleUpon, Quora, Foursquare, SoundCloud, GitHub, Netflix. Amazon, IBM, Qbox и компания Elastic предлагают подписчикам Elasticsearch в качестве управляемого сервиса, большинство таких публично-облачных управляемых услуг также включают поддержку Kibana.',
            links: [
              {
                url:
                  'https://www.elastic.co/training/elasticsearch-engineer-1?baymax=rtp&elektra=products-es&storm=ribbon2&rogue=default&iesrc=ctr',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=RUw1WUsRuH8',
                name:
                  'Programming With Spirit - "Use Elasticsearch in Node.js App"',
              },
            ],
          },
          {
            tag: 'React Native',
            name: 'React Native',
            text:
              'React Native — это фреймворк для разработки кроссплатформенных приложений. Он даёт возможность создавать и использовать компоненты точно так же, как обычно мы это делаем в React, вот только рендериться они будут не в HTML, а в нативные контролы операционной системы, под которую будет собрано наше приложение.',
            links: [
              {
                url:
                  'https://facebook.github.io/react-native/docs/getting-started',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://coursehunters.net/course/react-native-prakticheskoe-rukovodstvo',
                name: 'Academind - "React Native - The Practical Guide"',
              },
            ],
          },
          {
            tag: 'Electron',
            name: 'Electron',
            text:
              'Electron - фреймворк, разработанный GitHub. Позволяет разрабатывать нативные графические приложения для настольных операционных систем с помощью веб-технологий. Фреймворк включает в себя Node.js для работы с back-end и библиотеку рендеринга из Chromium.',
            links: [
              {
                url: 'https://electronjs.org/docs',
                name: 'Официальная документация',
              },
              {
                url: 'https://www.youtube.com/watch?v=kN1Czs0m1SU',
                name:
                  'Traversy Media - "Build an Electron App in Under 60 Minutes"',
              },
              {
                url: 'https://github.com/maxogden/elementary-electron',
                name: 'Elementary Electron',
              },
            ],
          },
          // TODO: Добавить материал
          {
            tag: 'AWS',
            name: 'AWS',
            text:
              'Amazon Web Services (AWS) — коммерческое публичное облако, поддерживаемое и развиваемое компанией Amazon с 2006 года. Предоставляет подписчикам услуги как по инфраструктурной модели (виртуальные серверы, ресурсы хранения), так и платформенного уровня (облачные базы данных, облачное связующее программное обеспечение, облачные бессерверные вычисления, средства разработки). В значительной степени (наряду с Google Cloud Platform) повлияло на формирование концепции облачных вычислений в целом, и определило основные направления развития публичной модели развёртывания.',
            links: [
              {
                url: 'https://aws.amazon.com/ru/',
                name: 'Официальная документация',
              },
              {
                url:
                  'https://www.youtube.com/playlist?list=PLg5SS_4L6LYsxrZ_4xE_U95AtGsIB96k9',
                name: 'ADV-IT - "AWS На Русском Языке"',
              },
            ],
          },
        ],
      },
    ],
  },
  /**
   *
   *  Java
   *
   */
  {
    name: 'Java',
    soon: true,
    levels: [
      /**
       *
       *  Java - Junior
       *
       */
      {
        name: 'Junior',
        skills: [
        ],
      },
      /**
       *
       *  Java - Middle
       *
       */
      {
        name: 'Middle',
        skills: [],
      },

      /**
       *
       *  Java - Senior
       *
       */
      {
        name: 'Senior',
        skills: [],
      },
    ],
  },
  /**
   *
   *  PHP
   *
   */
  {
    name: 'PHP',
    soon: true,
    levels: [
      /**
       *
       *  PHP - Junior
       *
       */
      {
        name: 'Junior',
        skills: [],
      },
      /**
       *
       *  PHP - Middle
       *
       */
      {
        name: 'Middle',
        skills: [],
      },

      /**
       *
       *  PHP - Senior
       *
       */
      {
        name: 'Senior',
        skills: [],
      },
    ],
  },
  /**
   *
   *  iOS
   *
   */
  {
    name: 'iOS',
    soon: true,
    levels: [
      /**
       *
       *  iOS - Junior
       *
       */
      {
        name: 'Junior',
        skills: [],
      },
      /**
       *
       *  iOS - Middle
       *
       */
      {
        name: 'Middle',
        skills: [],
      },

      /**
       *
       *  iOS - Senior
       *
       */
      {
        name: 'Senior',
        skills: [],
      },
    ],
  },
  /**
   *
   *  Android
   *
   */
  {
    name: 'Android',
    soon: true,
    levels: [
      /**
       *
       *  Android - Junior
       *
       */
      {
        name: 'Junior',
        skills: [],
      },
      /**
       *
       *  Android - Middle
       *
       */
      {
        name: 'Middle',
        skills: [],
      },

      /**
       *
       *  Android - Senior
       *
       */
      {
        name: 'Senior',
        skills: [],
      },
    ],
  },
];

export default grades;
