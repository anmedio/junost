/* eslint-disable max-len */

const cicd = {
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
};

export default cicd;
