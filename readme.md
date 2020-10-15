# genshin-impact
**genshin-impact** is a npm package that has info on genshin impact, so far there are only character info added. Only a couple characters are added, but I will add them soon, so stay tuned.

```js
let genshin = require("genshin-impact");

genshin.search("traveler");
```
and it will return:
```json
{ name: "Traveler", vision: "Adaptive", weapon: "Sword", gender: "Player's Choice", nation: "Unknown", rarity: "5", image: "https://i.imgur.com/rrG0ZY0.png", quote: "This world is full of unsolved mysteries.", constellation: "Viator/Viatrix", birthday: "Player's Choice", description: "The Traveler is the protagonist and a playable character in Genshin Impact. At the beginning of the game, both genders are twin siblings from another world, travelling throughout the universe, until an Unknown God ambushed, capturing one of them, and sealed their ways to travel, leaving them stranded on Teyvat." }
```
you can also get specific values out like this:
```js
let genshin = require("genshin-impact");

genshin.search("traveler").weapon;
```
and it will return:
```
Sword
```


The following characters are added so far:
* Traveler
* Amber