const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
    },
    set appetizers(appetizerIn) {},
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price
  
      return `Your meal is ${appetizer.name}, ${main.name} + ${dessert.name} and the price is ${totalPrice}`
    }
  };
  
  menu.addDishToCourse('appetizers', 'Green Salad', 7.99);
  menu.addDishToCourse('appetizers', 'Lentil Soup', 6.99);
  menu.addDishToCourse('appetizers', 'Mac and Chips', 9.99);
  menu.addDishToCourse('mains', 'Kabab', 14.5);
  menu.addDishToCourse('mains', 'Burger', 13.5);
  menu.addDishToCourse('mains', 'Rice and Chicken', 14.99);
  menu.addDishToCourse('mains', 'Steak', 18);
  menu.addDishToCourse('desserts', 'Coffee', 5.5);
  menu.addDishToCourse('desserts', 'Cake', 7.5);
  
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal)