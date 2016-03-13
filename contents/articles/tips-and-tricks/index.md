---
title: "Типс энд трикс"
author: ant
date: 2016-03-01
template: article.jade
---

Десять трюков, которые могут упростить работо во Фреймере.

---

## 1. Прозрачный фон
Вместо `backgroundColor: "transparent"` можно написать так:

```coffeescript
backgroundColor: null
backgroundColor: ""
```

## 2. Глобальный объект `Screen`
Чтобы прототип работал на любом телефоне, нужно прописывать ширину и высоту слоев не в абсолютных величинах (вроде «750 px»). Нужно выразить их через ширину и высоту экрана:

```coffeescript
layer A = new Layer
	width: Screen.width / 2
	height: Screen.height / 2

	maxY: Screen.height
```

Если размер слой заполняет весь экран, можно писать еще короче:

```coffeescript
layer A = new Layer
	size: Screen.size
```


## 3. `props`
Если приходится менять параметры одного и того же объекта, то можно писать скоращенно:


```coffeescript
layerA.width = 200
layerA.opacity = .2
layerA.x = 150

layerA.props =
	width: 200
	opacity: .2
	x: 150

layerA.draggable.props =
	enabled: true
	horizontal: false
	constraints:
		x: 0, y: 0
		width: 200, height: 200

```

Другие способы:

```coffeescript
at = (object, method) -> method.call object

at square, ->
	@height = 400
	@width = 400

###
###

(->
	@height = 800
	@width = 800
).call square
```

Тоже самое, когда наоборот: много объектов, а нужно сделать с ними одно и то же:

```coffeescript
square = new Layer
circle = new Layer
triangle = new Layer

for layers in [square, circle, triangle]
	layers.backgroundColor = "blue"
```

## 3. `frame`
Если приходится менять параметры одного и того же объекта, то можно писать скоращенно:

```coffeescript
layerA.width = 200
layerA.opacity = .2
layerA.x = 150
```

## 4. Замедлить все анимации в прототипе
Йо	
```coffeescript
Framer.Loop.delta = 1 / 60 / 5
```

## 5. Анонимные слои
Не обязательно давать имена бэкграундам и слоям:

```framerjs
new BackgroundLayer

for i in [0..3]
	new Layer
		x: i * 120
		backgroundColor: Utils.randomColor()
```


## 5. Анонимные слои
Не обязательно давать имена бэкграундам и слоям:

```coffeescript
new BackgroundLayer

for i in [0..3]
	new Layer
		x: i * 120
		backgroundColor: Utils.randomColor()
```

