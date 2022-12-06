class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(this);
  }
  drinkSake() {
    this.health += 10;
  }
}
const ninja1 = new Ninja("laiht");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("The Sun Doesn't always shine");
  }
}
const sensei1 = new Sensei("barooq");
sensei1.speakWisdom();
sensei1.showStats();
