/* eslint-disable max-len */

const rabbitMQ = {
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
};

export default rabbitMQ;
