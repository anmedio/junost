const hintsOptions = {
  tooltipPosition: 'bottom',
  showStepNumbers: false,
  nextLabel: 'Дальше',
  prevLabel: 'Назад',
  showBullets: false,
  steps: [
    {
      element: '.grade-section',
      intro: 'Каждая строчка — направление развития digital-специалиста.',
      position: 'top'
    },
    {
      element: '.grade-section__title',
      intro: 'Тап по названию направления раскроет скиллы этого раздела.',
      position: 'right'
    },
    {
      element: '.grade__item',
      intro: 'Тап по скиллу откроет поп-ап с подробной информацией и ссылками на материалы для изучения.',
    },
    {
      element: '.header__logo',
      intro: 'Предложить свои материалы или скиллы для направлений можно на Github или написав на opensource@anmedio.ru',
      position: 'left'
    }
  ]
}

export default hintsOptions;