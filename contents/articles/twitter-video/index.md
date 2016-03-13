---
title: "Процесс создания Twitter Video: Обзор дизайна и прототипирования"
author: {name: "Пол Стаматиу", link: "http://twitter.com", ava: "https://pbs.twimg.com/profile_images/661428775658217480/K0XWYOxu.png"}
date: 2016-02-23
template: article.jade
---

В середине 2011-го Твиттер выкатил собственный фотохостинг. В 2013-м фотографии стали отображаться прямо в таймлайне, а через год появились твиты с фотоколлажами и анимированными гифками. Только что мы анонсировали сервис [Twitter Video](https://blog.twitter.com/2015/now-on-twitter-group-direct-messages-and-mobile-video-capture), который поможет вам делиться впечатлениями и твитить видеоролики прямо из iOS- или Android-приложения.

---


Журнал Wired уже сделал обзор нашей новой фичи:

![Twitter Video, Nexus 6](http://turbo.paulstamatiou.com/uploads/2015/01/DSC08761-1000.jpg)
<small>Twitter Video, Nexus 6</small>

В этой статье я приоткрою подробности работы над Twitter Video. Я не смогу показать вам бумажных эскизов или вайрфреймов, просто потому что вместо них мы использовали работающие прототипы.

>«Что можно сказать наверняка: взаимодействие внутри команды через работающий прототип — лучшая форма коммуникации».

Вы, возможно, знакомы с моим постом «Передача смысла через анимацию», где я писал, как важно дизайнерам разбираться в моушн-дизайне и интерактивном прототипировании. Тогда я только начал использовать в своей работе Framer.js и Framer Studio и не подозревал, насколько решающую роль это сыграет в будущем.

Однако JavaScript-прототипами дело не ограничилось. Ниже я расскажу, как сотрудничал с нашей командой iOS-прототипирования и пробовал разные направления в нативном коде.



## Что такое Twitter Video

Наша команда фото- и видео-сервисов относится к подразделению, отвечающему за «самовыражение пользователей». Сюда также входит команда личных *сообщений* и команда составления твита. Усилиями этой группы улучшают опыт и инструменты, связанные с самовыражением людей.

##### Задача: Нашей платформе — публичной, коммуникативной, ежесекундно обновляющейся и ставшей широко распространенной — требуется нативная поддержка видео-постинга, который позволит людям запечатлевать моменты и делиться своими впечатлениями об окружающем мире.

Мы начали с 30-секундных видео — достаточно длинных, чтобы донести значимое сообщение, но не отнимающих много времени на просмотр. Мы стремились не перегружать интерфейс экстра-функционалом для продвинутых пользователей. Даже если мы позволяем делать длинные видео, не нужно, чтобы человек чувствовал, будто требуется заполнить все отведенное время. Поэтому наш выбор пал на простой интерфейс, в котором можно записывать ролик по фрагментам, но нету прогресс-баров, подстегивающих писать видео, пока не кончатся ограничения.

>«Впечатляет, что при беглом ознакомлении все возможности сервиса обнаруживаются сразу на одном экране. Еще больше впечатляет, что все операции выполняются только двумя кнопками: записать и отправить».

>— Wired.

Twitter, iOS
Запись видео у меня на iPhone 6+.

Первым делом нам пришлось с нуля переписывать камеры для iOS и Andoid. С нативными камерами ни одной из операционных систем не удалось бы достичь такого результата. Оставалось еще две задачи: переделка интерфейса для фотосъемки и создание записи видео. Мой коллега-дизайнер Уэйн Фан занялся фото, а я начал работать над видеорежимом.



## Итерации

Как прототипирование изменило игру:

750+
макетов в Sketch

54
прототипа во Framer

За все время мы перебрали множество набросков, внесли множество правок в макеты и прототипы, поэтому я покажу только основные направления. После того, как выяснилась суть проблемы и появились первые ее решения, я начал набрасывать самые разнородные варианты, какие только приходили мне в голову, а самые перспективные выбирал для проверки прототипами. Дизайн-команда Google Ventures называет подобный подход «Вникнуть в суть, нагенерить, отфильтровать, запрототипировать и испытать» ("Understand, Diverge, Decide, Prototype and Validate”).

В каждой итерации по достижению удовлетворительного макета в Sketch я переключался во Framer Studio. Так я подстегивал себя как можно раньше задумываться о деталях, всплывающих только во время взаимодействия, и анимациях. Плюс это самый быстрый способ выявить непродуманные места в макете. В последних проектах все пришло к тому, что я вносил правки прямо во Framer, а Sketch остался позади в качестве отправной точки.

Одна из последних итераций. Масса быстрого и мусорного кода
![Framer](http://turbo.paulstamatiou.com/uploads/2015/01/pstam-twtr-video-prototyping-with-framer-1000.jpg)

Все прототипы были максимально реалистичными: они поддерживали жесты, скроллинги, хранили состояния системы и т. д. Я только не стал подключать настоящую камеру (хотя есть JavaScript-библиотеки, которые позволяют работать с ней из браузера), и использовал заранее подготовленные фотки и видео.

Я люблю проповедовать прототипирование, но важно различать ситуации, где оно действительно несет пользу, а где тратит время в пустую. На прототипы уходит ощутимое количество времени, т. к. в программировании нередко натыкаешься на сложности. Я садился за прототип, если у нас было очень слабое понимание того, как дизайн-решение будет ощущаться в жизни; и в тех вещах, которые я не мог основательно «рассмотреть в воображении», как сказал бы один мой закомый дизайнер. Я делал прототипы настолько детальными, насколько это требовалось, чтобы развеять все имеющиеся сомнения, но при этом старался, чтобы лишние день-два не уходили на воссоздание полного функционала.

Для кого мы прототипируем? Прежде всего для себя: чтобы понять, как эта вещь будет на ощуп и опробовать концепцию в живом взаимодействии. Кроме того, в большой степени прототипы делаются для коммуникации с заказчиками. Все сырые прототипы я показываю нашему менеджеру Брендану Донохью и коллегам из дизайн-отдела, чтобы узнать их мнение и критику; плюс отправляю видео-скринкаст команде менеджеров из Twitter Video.

Почему я выбрал Framer? Во-первых, мне комфортно работать с JavaScript, т. к. у меня уже был опыт с фронт-эндом. Во-вторых, мне очень не хотелось упереться в ограничения инструмента в самый разгар работы, а с HTML/CSS/JS как раз реализуем практически любой замысел.

>«Один прототип стоит тысячи встреч».



## Итерация №1

Работа до этого момента была исследовательской или как мы говорим «витанием в облаках». Каждая деталь была под вопросом. Вещи, о которых мы размышляли:

- навигация,
- индикаторы процесса видеозаписи,
- как переключаться из фото- в видеосъемку,
- какие функции нужны для спонтанной видеозаписи, а какие для размеренной и продуманной,
- какие функции нужны для редактирования нескольких записанных фрагментов.

Была одна вещь, которую мы знали наперед: видео портретной ориентации — не лучший формат для просмотра. Оно слишком высокое и для таймлайна, и для экрана отдельного твита (если не прибегать к показу на весь экран по нажатию); был вариант еще хуже: уменьшить его и добавить черные поля по бокам. Нам хотелось избежать такого выбора, при этом не запрещать портретные видео в Твиттере совсем. Решили, что портретные видео, записанные нашей камерой, будут только квадратными, а видео любых других пропорций можно загрузить только из фотоальбома.

Мои первые дизайны состояли из двустраничного флоу: на первой странице — запись видео и просмотр; на второй — упорядочивание и удаление фрагментов. Казалось, что логично разнести все элементы на две группы по их назначению. На странице записи была кнопка «нажмите-и-держите-для-записи» и прогресс-бар голубого цвета. На странице редактирования — блок с уже записанными видеофрагментами; у коротких был виден только первый кадр, а у фрагментов длинее 5 секунд появлялись раскадровки. Таким образом, можно было одним взглядом сравнить все фрагменты по продолжительности, даже не читая временных меток.

Framer Studio
В первом прототипе я начал играться с идеей добавления быстрой отмены и возможностью таскать фрагменты: менять их местами и удалять из списка.

На этом этапе я использовал временные иконки, пока наш звездный дизайнер иконок Джереми Рейз Jeremy Reiss не отрисовал их в нашем стиле.