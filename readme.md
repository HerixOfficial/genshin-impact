# genshin-impact
**genshin-impact** is a npm package that has info on the game, 'Genshin Impact.'

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

## Note
This npm package is very new, more characters will be added soon.


The following characters are added so far:
* Traveler
* Amber
* Kaeya
* Diluc
* Venti
* Lisa

### Character Properties
Each character has a value for:
* Name
* Vision
* Weapon
* Gender
* Nation
* Rarity
* Image
* Quote
* Constellation
* Birthday
* Description