function personConstructor(name){
  person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){
      console.log(person.name);
    },
    say_something: function(phrase){
      console.log(person.name + ' says:' + phrase);
    },
    walk: function(){
      console.log(person.name + ' is walking!');
      person.distance_traveled += 3;
      return person;
    },
    run: function(){
      console.log(person.name + ' is running!');
      person.distance_traveled += 10;
      return person;
    },
    crawl: function(){
      console.log(`${person.name} is crawling!`); //EXAMPLE
      person.distance_traveled += 1;
      return person;
    }
  }
}

function ninjaConstructor(name){
  return ninja = {
    name: name,
    distance_traveled: 0,
    belt: "Yellow Belt",
    say_name: function(){
      console.log(ninja.name);
    },
    say_belt: function(){
      console.log(ninja.name + ' is a ' + ninja.belt);
    },
    say_cohort: function(phrase){
      console.log(ninja.name + ' is in ' + phrase);
    },
    levelup: function(){
      if(this.belt == "Yellow Belt"){
        this.belt = "Blue Belt";
        return this
      }
      if(this.belt == "Blue Belt"){
        this.belt = "Red Belt";
        return this
      }
      if(this.belt == "Red Belt"){
        this.belt = "Black Belt";
        return this
      }
      if(this.belt == "Black Belt"){
        console.log(ninja.name + ' cannot level-up anymore.')
        return this;
      }
      console.log(ninja.name + ' Leveled-Up!');
      return this;
    },
  }
}
var ninjanew = new ninjaConstructor('John')
console.log(ninjanew.name)
console.log(ninjanew.belt)
ninjanew.levelup()
console.log(ninjanew.belt)
