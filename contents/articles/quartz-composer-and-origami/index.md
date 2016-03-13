---
title: Базовые концепции Quartz Composer и Origami
author: ant
date: 2013-04-30
template: article.jade
---

По Quartz Composer практически нет подробных руководств на русском языке. Ютюб полон видео-уроков, по которым можно повторить за автором его проект, но сделать свой собственный по-прежнему сложно.

---

<div class="iframe">
	<img class="ratio">
	<iframe 
		src="https://coub.com/embed/5gbrg?muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false" 
		allowfullscreen="true" 
		frameborder="0" >
	</iframe>
</div>

<div class="iframe">
	<img class="ratio">
	<iframe
		src="https://www.youtube.com/embed/m-9m67mHNHU?rel=0&amp;showinfo=0" 
		frameborder="0" 
		allowfullscreen>
	</iframe>
</div>

<div class="iframe">
	<img class="ratio">
	<iframe src="https://player.vimeo.com/video/68749840" 
		frameborder="0" 
		webkitallowfullscreen mozallowfullscreen allowfullscreen>
	</iframe>
</div>

</p><img src="https://images.unsplash.com/photo-1432256851563-20155d0b7a39?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d5a324231354ac81741afa04368410f0" /><p>

![](http://turbo.paulstamatiou.com/uploads/2015/01/DSC08761-1000.jpg)
<small>Традиционное программирование. Javascript</small>

![Визуальное программирование. Quartz Composer](http://turbo.paulstamatiou.com/uploads/2015/01/DSC08761-1000.jpg)


>Этот текст - обычный лорем ипсум. Сейчас пойду куда-нибудь есть в Амстере. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

>Duis aute irure dolor in reprehenderit in voluptate velit esse
>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
>proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



## Links in the markdown

This is where I leave you to your own devices. Join **#wintersmith** on freenode if you have any questions. For example a link to `../bamboo-cutter/index.md` resolves to [`/articles/bamboo-cutter/`](../bamboo-cutter/index.md).

```coffeescript
page = new PageComponent
	size: Screen.size
	clip: false
	scrollVertical: false
	scale: .75

for i in [0..5]
	new Layer 
		backgroundColor: Utils.randomColor()
		width: Screen.width, height: 1000
		y: 160, borderRadius: 30, scale: .95
		x: i * Screen.width
		superLayer: page.content
	
page.draggable.props =
	enabled: true
	horizontal: false
	constraints: page.frame
```



## Патчи

Патч — базовый элемент Quartz Composer. Это аналог процедуры в традиционном программировании, он эквивалентен строке кода:

Кружочки с обеих сторон патча — это порты (параметры функции). Через левые порты данные поступают в патч, через правые — выводится результат преобразования.
На примере ниже четыре патча:


- Fill Layer заливает фон белым цветом.
- Touch отслеживает нажатие на экран.
	1. Композиции
	2. Патчи
	3. Три типа патчей
		- Fill Layer заливает фон белым цветом.
		- Touch отслеживает нажатие на экран.
	4. Соединения и типы данных
	5. Система координат и единицы измерения
- Button отрисовывает кнопку шириной 320 px с текстом «Sign in» и скруглениями в 24 px (эти значения можно прочитать рядом с названиями портов).
- Transition хранит в себе значения (Start Value, End Value), которые будут принимать Opacity и Scale кнопки по нажатию и отпусканию.


## Содержание
Welcome to your new blog! This is the default blog template with RSS, pagination and an archive. There are other templates available -- run `wintersmith new --help` to list them.


## Типы патчей

Существует три типа: приемники (consumers), *обработчики* (processors) и ***поставщики** (providers).
Изначально в Quartz Composer они различались ~~цветом~~: поставщики — фиолетовые, обработчики — черные, приемники — синие. Обратите внимание, патчи-поставщики чаще всего имеют порты только справа — они всегда отдают данные. Аналогично у патчей-приемников чаще всего порты только слева — они всегда принимают данные от других патчей.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

***

___


Существует три типа: приемники (consumers), *обработчики* (processors) и ***поставщики** (providers).
Изначально в Quartz Composer они различались ~~цветом~~: поставщики — фиолетовые, обработчики — черные, приемники — синие. Обратите внимание, патчи-поставщики чаще всего имеют порты только справа — они всегда отдают данные. Аналогично у патчей-приемников чаще всего порты только слева — они всегда принимают данные от других патчей.

![IMAGE ALT TEXT HERE](https://cdn-images-1.medium.com/max/1600/1*77Fc-oAlR3LO-M5fWHw1BA.png)

<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>

Small
<small>This line of text is meant to be treated as fine print.</small>

You can use the mark tag to <mark>highlight</mark> text.

<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>

<abbr title="attribute">attr</abbr>

<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>

<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>


<dl>
	<dt>Description lists</dt>
	<dd>A description list is perfect for defining terms.</dd>

	<dt>Euismod</dt>
	<dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
Donec id elit non mi porta gravida at eget metus.</dd>

	<dt>Malesuada porta</dt>
	<dd>Etiam porta sem malesuada magna mollis euismod.</dd>

</dl>

### User Input

To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

<samp>This text is meant to be treated as sample output from a computer program.</samp>

<table class="table">
  <tr>
  	<td>Hello</td>
  	<td>Goodbye</td>
  </tr>

  <tr>
  	<td>Hello</td>
  	<td>Goodbye</td>
  </tr>
</table>
