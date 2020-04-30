/* eslint-disable max-len */

const webSockets = {
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
};

export default webSockets;
