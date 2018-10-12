function Tamogotchi(tamoName) {
    //
    this.petName;
    this.initialFood = 60;
    this.metabolismRate = 1000;

    /*
        add an array of objects
        -20 items
        -each element of the array has the following
            -mood(angry, happy, sad, joke)
            -mood percentage
            -saying(a saying relating the the mood)
    */

    this.moodSaying = [
        { mood:"angry", saying:"I'm about to get angry ..." },
        { mood:"angry", saying:"I'm slightly angry ... Just slightly." },
        { mood:"angry", saying:"I'm somewhat angry. Can you avoid this to happen?" },
        { mood:"angry", saying:"I'm kinda angry. I'm about to get really pissed off." },
        { mood:"angry", saying:"I'm quite angry! Give me your pillow!!" },
        { mood:"happy", saying:"I'm starting to feel happy ..." },
        { mood:"happy", saying:"I'm a bit happy." },
        { mood:"happy", saying:"I'm slowling feeling the happiness." },
        { mood:"happy", saying:"I'm feeling the happy mood ..." },
        { mood:"happy", saying:"I'm so happy that I feel like I could explode!" },
        { mood:"sad", saying:"I'm feeling a little sad ..." },
        { mood:"sad", saying:"I'm a bit overwhelmed and this is making me sad" },
        { mood:"sad", saying:"I'm feeling kinda sad." },
        { mood:"sad", saying:"I'm about to be fully sad." },
        { mood:"sad", saying:"I'm totally swallowed by sadness." },
        { mood:"joke", saying:"I'm having some fun." },
        { mood:"joke", saying:"I'm trying to think of some jokes." },
        { mood:"joke", saying:"I'm starting to feel funny." },
        { mood:"joke", saying:"Hey, let's talk about some parrot jokes!" },
        { mood:"joke", saying:"I'm cracking some ugly jokes!" }
    ]

    /*
        an array of compliments
        -10 items
    */
    this.tamaCompliments = [
        "Hey, how are you, Joe",
        "What's up?",
        "Hey, watch yourself, dude!",
        "Who's your daddy?",
        "Do you know my name?",
        "What is a Tamagutchi?",
        "Hey, don't step on my foot!",
        "Hey, that's not my mom!!",
        "I just wanna sleep. Leave me alone.",
        "Do you wanna see some Avengers 4 spoilers?",
    ]

    /*
        add an array of favourite foods(at least 10)
        each element of the array should have
        -food name
        -food value
        -chance of food poisoning
    */

    this.tamaFoods = [
        { foodName: "Bananas", foodValue: 3, foodPoison: 0.2 },
        { foodName: "Maple Syrup", foodValue: 2, foodPoison: 0.5 },
        { foodName: "Chocolate", foodValue: 1, foodPoison: 0.6 },
        { foodName: "Cheese Biscuits", foodValue: 0.5, foodPoison: 1 },
        { foodName: "Croissant", foodValue: 1.1, foodPoison: 0.7 },
        { foodName: "Spinach", foodValue: 3, foodPoison: 0.1 },
        { foodName: "Fruits Salad", foodValue: 3, foodPoison: 0.2 },
        { foodName: "Beef Patty", foodValue: 0.5, foodPoison: 0.7 },
        { foodName: "Coffee Donuts", foodValue: 0.1, foodPoison: 0.9 },
        { foodName: "Spicy Noodles", foodValue: 0.2, foodPoison: 1 }
    ]

    this.init = () => {
        this.petName = tamoName;
        console.log(`Hi!  I'm ${this.petName}`);
        this.hatch();
    }

    this.init();
}

Tamogotchi.prototype.resetFood = function(){
    this.food=this.initialFood;
}

Tamogotchi.prototype.hatch = function(){
    this.resetFood();
    this.startMetabolism();
}

Tamogotchi.prototype.die = function(){
    clearInterval(this.metabolism);
    console.log("I am dead!");
}

Tamogotchi.prototype.startMetabolism = function(){
    this.metabolism = setInterval(()=> {
        this.food -=1;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}

Tamogotchi.prototype.eatLasagna = function() {
    console.log(`can I see the food? ${this.food}`);
    this.food +=20;
}

//to add

//a drink coffee command that speeds up the metabolism of your pet}
Tamogotchi.prototype.drinkCoffee = function() {
  clearInterval(this.metabolism);
  this.newMetabolism(500);
}


//a drink beer command that slows down the metabolism of your pet
Tamogotchi.prototype.drinkBeer = function() {
  clearInterval(this.metabolism);
  this.newMetabolism(1500);
}


Tamogotchi.prototype.newMetabolism( newMeta ) = function(){
  this.metabolismRate = newMeta;
  this.startMetabolism();
}

/*
an eat food command that will select a random food that will
-check if the pet gets food poisoning
-add points to the pets food count if they don't get food poisoning
-remove points from the pets food count if they do get food poisoning
*/

Tamagotchi.prototype.eatFood = function() {
  this.selectFood = this.tamaFoods[ Math.floor( Math.random() * tamaFoods.length ) ];
  this.poisonRate = selectFood.foodPoison;
  let poisonChance = Math.random();
  if(poisonRate > poisonChance){
    this.food -= selectedFood.foodValue;
  }
  else{
    this.food += selectFood.foodValue;
  };
}

// a command that takes in a mood and returns a phrase

Tamagotchi.prototype.phraseMood = function() {
  this.selectMood = moodSaying.filter( mood => mood.mood );
  If( mood.mood == "angry" || mood.mood = "sad"  || mood.mood = "happy" || mood.mood = "joke"  ){
    let phrase = [ Math.floor( Math.random() * selectMood.length ) ];
    console.log( phrase.saying )
  }
}

/*
    a command that takes in your name and returns you a compliment structured using template
*/

Tamagotchi.prototype.returnCompliment = function( compName) {
  let cumpliment =this.tamaCompliments[Math.floor(Math.random()*this.tamaCompliments.length)];
  let updatedPhrase = compliment.replace(/tamagotchi/g, compName);
  console.log(updatedPhrase);
}
