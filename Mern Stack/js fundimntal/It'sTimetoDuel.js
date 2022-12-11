class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    target.res -= this.power;
  }
}
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat == "resilience") {
        target.res += this.magnitude;
      } else {
        target.power += this.magnitude;
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}
const Unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const Unit2 = new Unit("blackBelt Ninja", 4, 5, 4);
const Effect1 = new Effect(
  "Hard Algorithem",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const Effect2 = new Effect(
  "Unhandled Promise Rejection",
  2,
  "reduce target's resilience by 3",
  "resilience",
  -2
);
const Effect3 = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

//first Effect
console.log(Unit1.res)
Effect1.play(Unit1);
console.log(Unit1.res);

//sec Effect
console.log(Unit1.res);
Effect2.play(Unit1);
console.log(Unit1.res);

//third Effect
// console.log(Unit1.power);
// Effect3.play(Unit1);
// console.log(Unit1.power);

//attack
console.log(Unit2.res);
Unit1.attack(Unit2);
console.log(Unit2.res);
