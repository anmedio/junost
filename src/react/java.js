const javaGrades =
  /**
   *
   *  Java
   *
   */
  {
    name: 'Java',
    levels: [
      /**
       *
       *  Java - Junior
       *
       */
      {
        name: 'Junior',
        skills: [
          // {
          //         tag: 'Computer science (basics)',
          //         name: 'Computer science (basics)',
          //         text:
          //           'Основы программирования и Computer Science - это те самые фундаментальные знания, которые необходима каждому, кто хочет стать настоящим инженером, а не просто заурядным программистом, который знает, как писать код, но понятия не имеет, как этот код работает',
          //         links: [
          //           {
          //             url: 'https://habr.com/ru/company/vertdider/blog/403823/',
          //             name: 'Легендарний гарвардский курс CS50',
          //           },
          //           {
          //             url:
          //               'https://vk.com/doc2036633_461668315?hash=3bbe2d53fdb5bac884&dl=830098fee8b589a01c',
          //             name: 'Адитья Бхаргава. "Грокаем Алгоритмы"',
          //           },
          //           {
          //             url: 'https://www.codewars.com/dashboard',
          //             name: 'Codewars',
          //           },
          //           {
          //             url: 'https://vk.com/wall-54530371_11457',
          //             name: 'Роберт Лафоре. "Структуры данных и алгоритмы в Java"',
          //           },
          //     {
          // url: 'https://www.info.ucl.ac.be/~pvr/VanRoyChapter.pdf',
          // name: 'Peter Van Roy. "Programming Paradigms for Dummies: What Every Programmer Should Know"',
          //     },
          //         ],
          //       },
          // {
          // 	tag: 'Java SE',
          // 	name: 'Java SE',
          // 	text:
          // 	  'Знания языка и стандартной библиотеки позволяют экономить время и не изобретать велосипеды. Большинство проблем решаются применением правильных классов и методов Java SE, поэтому важно знать возможности своего языка и уметь их подбирать под нужды бизнеса.',
          // 	links: [
          // 		{
          // 			url: 'https://www.techbeamers.com/introduction-jvm-jdk-jre/',
          // 			name: 'Introduction To JVM, JDK, JRE By Meenakshi Agarwal',
          // 		},
          // 		{
          // 			url: 'https://docs.oracle.com/javase/tutorial/',
          // 			name: 'Oracle Java SE Tutorial',
          // 		},
          // 		{
          // 			url: 'https://www.javatpoint.com/java-tutorial',
          // 			name: 'Java Point Tutorial',
          // 		},
          // 		{
          // 			url: 'https://docs.oracle.com/javase/specs/index.html',
          // 			name: 'Java Language Specification',
          // 		},
          // 		{
          // 			url: 'https://www.oracle.com/technetwork/java/codeconvtoc-136057.html',
          // 			name: 'Code Conventions for the Java Programming Language',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'Collections API',
          // 	name: 'Collections API',
          // 	text:
          // 	  'Самый распространённый фреймворк в Java мире - это Collections API. Реализации списков, очередей и множеств, сортировки, безопасный параллельный доступ, без их использования невозможна разработка современного программного обеспечения.',
          // 	links: [
          // 		{
          // 			url: 'https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html',
          // 			name: 'Official Oracle Java Collections Tutorial',
          // 		},
          // 		{
          // 			url: 'https://stackoverflow.com/questions/322715/when-to-use-linkedlist-over-arraylist-in-java',
          // 			name: 'Ответ на извечный вопрос, что лучше - LinkedList или ArrayList',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'Git VCS',
          // 	name: 'Git VCS',
          // 	text:
          // 	  'Системы контроля версий, и Git в частности, являются важнейшим инструментом в промышленной разработке программного обеспечения. Умение манипулировать ветвями, писать осмысленные сообщения и исправлять конфликты выделяет хороших специалистов.',
          // 	links: [
          // 		{
          // 			url: 'https://guides.github.com/introduction/git-handbook/',
          // 			name: 'Git Handbook by Github',
          // 		},
          // 		{
          // 			url: 'https://git-scm.com/doc',
          // 			name: 'Official Git Documentation',
          // 		},
          // 		{
          // 			url: 'https://blog.axosoft.com/tag/learn-git/',
          // 			name: 'Video series about Git',
          // 		},
          // 		{
          // 			url: 'https://www.atlassian.com/git/tutorials/comparing-workflows',
          // 			name: 'Comparison of Git Workflows',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'JUnit',
          // 	name: 'JUnit',
          // 	text:
          // 	  'Самая популярная библиотека для Unit тестирования на Java. Даже те команды, что не используют Test Driven Development подход могут сэкономить много времени и нервов благодаря написанию качественных Unit тестов.',
          // 	links: [
          // 		{
          // 			url: 'https://www.tutorialspoint.com/junit/index.htm',
          // 			name: 'Tutorialspoint JUnit Tutorial',
          // 		},
          // 		{
          // 			url: 'https://junit.org/junit5/docs/current/user-guide/',
          // 			name: 'Official JUnit User Guide',
          // 		},
          // 	],
          // },
        ],
      },
      /**
       *
       *  Java - Middle
       *
       */
      {
        name: 'Middle',
        skills: [
          // {
          // 	tag: 'Web Framework',
          // 	name: 'Web Framework',
          // 	text:
          // 	  'Современный темп разработки и запросы бизнеса требуют комплексных решений, поэтому использование Web фреймворков является неотъемлемой частью процесса. Самые популярные решения среди Java разработчиков это Jakarta EE и Spring, но не стоит забывать об альтернативах. При выборе фреймворка ориентируйтесь на его востребованность, поддержку сообщества, функционал и индивидуальные предпочтения.',
          // 	links: [
          // 		{
          // 			url: 'https://spring.io/guides',
          // 			name: 'Official Spring Guides',
          // 		},
          // 		{
          // 			url: 'https://jakarta.ee/release/',
          // 			name: 'Jakarta EE Resources',
          // 		},
          // 		{
          // 			url: 'https://quarkus.io/get-started/',
          // 			name: 'Quarkus Get Started',
          // 		},
          // 		{
          // 			url: 'https://vertx.io/docs/',
          // 			name: 'Vert.x Documentation',
          // 		},
          // 		{
          // 			url: 'https://javalin.io/documentation',
          // 			name: 'Javalin Documentation',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'Databases',
          // 	name: 'Databases',
          // 	text:
          // 	  'Сейчас Java разработка доминирует на Backend, поэтому большую часть времени вы будете работать между Frontend и базой данных. Навыки администрирования БД будут плюсом, но самое главное это уметь грамотно пользоваться SQL/NoSQL решениями и понимать когда и что выбирать.',
          // 	links: [
          // 		{
          // 			url: 'https://www.youtube.com/watch?v=qI_g07C_Q5I',
          // 			name: 'GOTO 2012 • Introduction to NoSQL • Martin Fowler',
          // 		},
          // 		{
          // 			url: 'https://www.w3schools.com/sql/',
          // 			name: 'W3School SQL Tutorial',
          // 		},
          // 		{
          // 			url: 'https://www.mongodb.com/what-is-mongodb',
          // 			name: 'What is MongoDB',
          // 		},
          // 		{
          // 			url: 'http://openjpa.apache.org/documentation.html',
          // 			name: 'Open Java Persistence API tutorial',
          // 		},
          // 	],
          // },
        ],
      },

      /**
       *
       *  Java - Senior
       *
       */
      {
        name: 'Senior',
        skills: [
          // {
          // 	tag: 'CI/CD',
          // 	name: 'CI/CD',
          // 	text:
          // 	  'Умение различить Delivery и Deployment, опыт настройки непрерывных интеграций и максимальная автоматизация процессов - всем этим могут похвастаться опытные специалисты и то, почему они успевают выполнять сложную работу быстро и качественно.',
          // 	links: [
          // 		{
          // 			url: 'https://about.gitlab.com/devops-tools/',
          // 			name: 'Comparison of DevOps Tools',
          // 		},
          // 		{
          // 			url: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment',
          // 			name: 'Continuous integration vs. continuous delivery vs. continuous deployment by Sten Pittet',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'Security',
          // 	name: 'Security',
          // 	text:
          // 	  'Являясь опытным специалистом и профессионалом своего дела, вы должны быть уверены в безопасности создаваемых вами продуктов. Знания механизмов защиты веб приложений и умение пользоваться инструментами из этой области то, что позволяет Seniorам спать спокойно.',
          // 	links: [
          // 		{
          // 			url: 'https://www.youtube.com/watch?v=CPbvxxslDTU',
          // 			name: 'OAuth 2.0 Overview',
          // 		},
          // 		{
          // 			url: 'https://www.youtube.com/watch?v=PMCKjrwL5rM',
          // 			name: '2017.02.28 Дмитрий Буздин - Modern Security with OAuth 2.0, JWT and Spring',
          // 		},
          // 		{
          // 			url: 'https://blog.frankel.ch/tag/security/',
          // 			name: 'Nicolas Frankel blog posts about Java Security',
          // 		},
          // 		{
          // 			url: 'https://www.oracle.com/technetwork/java/javase/tech/index-jsp-136007.html',
          // 			name: 'Oracle Java SE Security',
          // 		},
          // 	],
          // },
          // {
          // 	tag: 'Software Architecture',
          // 	name: 'Software Architecture',
          // 	text:
          // 	  'Всё чаще и чаще выделенные роли Solution Architect заменяются консорциумом Senior специалистов, поэтому важно уметь не только понимать архитектуру вашей системы, но и предлагать идеи и решения по её изменения или созданию с нуля.',
          // 	links: [
          // 		{
          // 			url: 'https://www.yegor256.com/2014/10/12/who-is-software-architect.html',
          // 			name: 'What Does a Software Architect Do? by Egor Bugayenko',
          // 		},
          // 		{
          // 			url: 'https://www.nginx.com/blog/introduction-to-microservices/',
          // 			name: 'Nginx Introduction to Microservices',
          // 		},
          // 		{
          // 			url: 'https://www.sebokwiki.org/wiki/Stakeholder_Needs_and_Requirements',
          // 			name: 'Stakeholder Needs and Requirements',
          // 		},
          // 	],
          // },
        ],
      },
    ],
  };
