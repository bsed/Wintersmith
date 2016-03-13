---
title: Code and stuff!
author: ant
date: 2012-10-01 15:00
template: article.jade
---

Syntax highlighting with [highlight.js](http://softwaremaniacs.org/soft/highlight/en/).
The theme used is tomorrow, you can find more themes [here](http://jmblog.github.io/color-themes-for-highlightjs/).

## Framer.js
Syntax highlighting with [highlight.js](http://softwaremaniacs.org/soft/highlight/en/).
The theme used is tomorrow, you can find more themes [here](http://jmblog.github.io/color-themes-for-highlightjs/).
```coffeescript
new BackgroundLayer

col1 = new Color("limegreen").desaturate(40).lighten(40)
col2 = new Color("limegreen")

toggle = new Layer
  width: 200
  borderRadius: 100
  backgroundColor: col1
  midX: Screen.width / 2
  midY: Screen.width / 2

toggle.on Events.TouchStart, ->
  if container.x < 300 then circle.states.switch "pressedLeft"
  else circle.states.switch "pressedRight"
  border.states.switch "pressed"
```

## CoffeeScript

```coffeescript
class Animal
  ### Intellegent design ###
  getDNA: ->
    print 'sequencing...'
    while true
      sleep 1

class Monkey extends Animal
  speak: ->
    print 'ah ah ah'

class Human extends Monkey
  speak: ->
    print ['yolo' unless i % 3] + ['swag' unless i % 5] or i for i in [1..100]
```

## JavaScript

```javascript
function getRandomNumber() {
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
}
```
