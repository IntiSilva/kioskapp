
const products = [
    {
        name: "Caramel Chocolate Coffee",
        price: 59.9,
        image: "coffee_01",
        categoryId: 1
      },
      {
        name: "Large Iced Chocolate Coffee",
        price: 49.9,
        image: "coffee_02",
        categoryId: 1
      },
      {
        name: "Large Iced Chocolate Latte",
        price: 54.9,
        image: "coffee_03",
        categoryId: 1
      },
      {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        image: "coffee_04",
        categoryId: 1
      },
      {
        name: "Large Iced Chocolate Milkshake",
        price: 54.9,
        image: "coffee_05",
        categoryId: 1
      },
      {
        name: "Small Hot Mocha Coffee",
        price: 39.9,
        image: "coffee_06",
        categoryId: 1
      },
      {
        name: "Large Hot Chocolate Mocha",
        price: 59.9,
        image: "coffee_07",
        categoryId: 1
      },
      {
        name: "Large Hot Cappuccino Coffee",
        price: 59.9,
        image: "coffee_08",
        categoryId: 1
      },
      {
        name: "Medium Hot Mocha Coffee",
        price: 49.9,
        image: "coffee_09",
        categoryId: 1
      },
      {
        name: "Medium Iced Caramel Mocha",
        price: 49.9,
        image: "coffee_10",
        categoryId: 1
      },
      {
        name: "Medium Iced Chocolate Mocha",
        price: 49.9,
        image: "coffee_11",
        categoryId: 1
      },
      {
        name: "Espresso Coffee",
        price: 29.9,
        image: "coffee_12",
        categoryId: 1
      },
      {
        name: "Large Caramel Cappuccino",
        price: 59.9,
        image: "coffee_13",
        categoryId: 1
      },
      {
        name: "Large Caramel Coffee",
        price: 59.9,
        image: "coffee_14",
        categoryId: 1
      },
      {
        name: "3-Pack of Chocolate Donuts",
        price: 39.9,
        image: "donuts_01",
        categoryId: 4
      },
      {
        name: "3-Pack of Glazed Donuts",
        price: 39.9,
        image: "donuts_02",
        categoryId: 4
      },
      {
        name: "Strawberry Donut ",
        price: 19.9,
        image: "donuts_03",
        categoryId: 4
      },
      {
        name: "Chocolate Chip Donut ",
        price: 19.9,
        image: "donuts_04",
        categoryId: 4
      },
      {
        name: "Strawberry Sprinkle Glazed Donut",
        price: 19.9,
        image: "donuts_05",
        categoryId: 4
      },
      {
        name: "Chocolate Glazed Donut",
        price: 19.9,
        image: "donuts_06",
        categoryId: 4
      },
      {
        name: "Chocolate Lover's Chocolate Donut",
        price: 19.9,
        image: "donuts_07",
        categoryId: 4
      },
      {
        name: "3-Pack of Chocolate Donuts",
        price: 39.9,
        image: "donuts_08",
        categoryId: 4
      },
      {
        name: "3-Pack of Vanilla and Chocolate Donuts",
        price: 39.9,
        image: "donuts_09",
        categoryId: 4
      },
      {
        name: "6-Pack of Donuts",
        price: 69.9,
        image: "donuts_10",
        categoryId: 4
      },
      {
        name: "3-Pack of Assorted Donuts",
        price: 39.9,
        image: "donuts_11",
        categoryId: 4
      },
      {
        name: " Natural Chocolate Donut",
        price: 19.9,
        image: "donuts_12",
        categoryId: 4
      },
      {
        name: "3-Pack of Chocolate Chip Donuts",
        price: 39.9,
        image: "donuts_13",
        categoryId: 4
      },
      {
        name: "Chocolate Coconut Donut",
        price: 19.9,
        image: "donuts_14",
        categoryId: 4
      },
      {
        name: "Chocolate Cookies Pack",
        price: 29.9,
        image: "cookies_01",
        categoryId: 6
      },
      {
        name: "Chocolate and Oat Cookies Pack",
        price: 39.9,
        image: "cookies_02",
        categoryId: 6
      },
      {
        name: "Vanilla Muffins Pack",
        price: 39.9,
        image: "cookies_03",
        categoryId: 6
      },
      {
        name: "4-Pack of Oatmeal Cookies",
        price: 24.9,
        image: "cookies_04",
        categoryId: 6
      },
      {
        name: "Assorted Butter Cookies",
        price: 39.9,
        image: "cookies_05",
        categoryId: 6
      },
      {
        name: "Fruit-flavored Cookies",
        price: 39.9,
        image: "cookies_06",
        categoryId: 6
      },
      {
        name: "Plain Burger",
        price: 59.9,
        image: "hamburgers_01",
        categoryId: 2
      },
      {
        name: "Chicken Burger",
        price: 59.9,
        image: "hamburgers_02",
        categoryId: 2
      },
      {
        name: "Chicken and Chili Burger",
        price: 59.9,
        image: "hamburgers_03",
        categoryId: 2
      },
      {
        name: "Cheese and Cucumber Burger",
        price: 59.9,
        image: "hamburgers_04",
        categoryId: 2
      },
      {
        name: "Quarter Pound Burger",
        price: 59.9,
        image: "hamburgers_05",
        categoryId: 2
      },
      {
        name: "Double Cheeseburger",
        price: 69.9,
        image: "hamburgers_06",
        categoryId: 2
      },
      {
        name: "Special Hot Dog",
        price: 49.9,
        image: "hamburgers_07",
        categoryId: 2
      },
      {
        name: "2 Hot Dogs Pack",
        price: 69.9,
        image: "hamburgers_08",
        categoryId: 2
      },
      {
        name: "4 Slices of Cheese Pie",
        price: 69.9,
        image: "cake_01",
        categoryId: 5
      },
      {
        name: "Special Waffle",
        price: 49.9,
        image: "cake_02",
        categoryId: 5
      },
      {
        name: "House's Croissants",
        price: 39.9,
        image: "cake_03",
        categoryId: 5
      },
      {
        name: "Cheese Pie",
        price: 19.9,
        image: "cake_04",
        categoryId: 5
      },
      {
        name: "Chocolate Cake",
        price: 29.9,
        image: "cake_05",
        categoryId: 5
      },
      {
        name: "Slice of Chocolate Cake",
        price: 29.9,
        image: "cake_06",
        categoryId: 5
      },
      {
        name: "Spicy Double Cheese Pizza",
        price: 69.9,
        image: "pizzas_01",
        categoryId: 3
      },
      {
        name: "Ham and Cheese Pizza",
        price: 69.9,
        image: "pizzas_02",
        categoryId: 3
      },
      {
        name: "Double Cheese Pizza",
        price: 69.9,
        image: "pizzas_03",
        categoryId: 3
      },
      {
        name: "House's Special Pizza",
        price: 69.9,
        image: "pizzas_04",
        categoryId: 3
      },
      {
        name: "Chorizo Pizza",
        price: 69.9,
        image: "pizzas_05",
        categoryId: 3
      },
      {
        name: "Hawaiian Pizza",
        price: 69.9,
        image: "pizzas_06",
        categoryId: 3
      },
      {
        name: "Bacon Pizza",
        price: 69.9,
        image: "pizzas_07",
        categoryId: 3
      },
      {
        name: "Vegetable and Cheese Pizza",
        price: 69.9,
        image: "pizzas_08",
        categoryId: 3
      },
      {
        name: "Pepperoni and Cheese Pizza",
        price: 69.9,
        image: "pizzas_09",
        categoryId: 3
      },
      {
        name: "Olive and Cheese Pizza",
        price: 69.9,
        image: "pizzas_10",
        categoryId: 3
      },
      {
        name: "Cheese, Ham, and Mushroom Pizza",
        price: 69.9,
        image: "pizzas_11",
        categoryId: 3
      }
]

export {
    products
}