function personConstructor(name) {
  return {
    name: name,
    distance_traveled: 0,
    say_something: function(saying) {
      console.log(`${this.name} says ${saying}`);
      return this;
    },
    walk: function() {
      console.log(`${this.name} is walking`);
      this.distance_traveled += 3;
      return this;
    },
    run: function() {
      console.log(`${this.name} is running`);
      this.distance_traveled += 10;
      return this;
    },
    crawl: function() {
      console.log(`${this.name} is crawling`);
      this.distance_traveled += 1;
      return this;
    }
  };
}

function ninjaConstructor(name, cohort, belt_level) {
  return {
    name: name,
    cohort: cohort,
    belt_level: "Yellow Belt",
    level_up: function() {
      this.belt_level = "Black Belt";
      return this;
    }
  };
}
