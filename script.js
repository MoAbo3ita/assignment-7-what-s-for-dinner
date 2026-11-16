const meals = [
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "images/mediterranean-quinoa-bowl.jpg",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.5,
    reviews: 156,
    prepTime: 20,
    cookTime: 35,
    servings: 2,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    ],
    nutrition: { calories: 480, protein: 18, carbs: 58, fat: 20, fiber: 9, sodium: 520 },
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "images/thai-green-curry.jpg",
    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: 4.7,
    reviews: 312,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "500g chicken breast, sliced",
      "1 zucchini, sliced",
      "1 red bell pepper, sliced",
      "Fresh Thai basil",
      "1 tablespoon fish sauce",
      "Jasmine rice, for serving",
    ],
    instructions: [
      "Heat a little coconut cream in a pan and fry the curry paste for 1 minute.",
      "Add the chicken and cook until it is no longer pink.",
      "Pour in the coconut milk and bring to a gentle simmer.",
      "Add the vegetables and fish sauce, then cook for 8 minutes.",
      "Stir in Thai basil and serve over hot jasmine rice.",
    ],
    nutrition: { calories: 540, protein: 34, carbs: 38, fat: 28, fiber: 5, sodium: 910 },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "images/bbq-pulled-pork.jpg",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.7,
    reviews: 412,
    prepTime: 15,
    cookTime: 240,
    servings: 4,
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
    ],
    nutrition: { calories: 620, protein: 48, carbs: 52, fat: 22, fiber: 3, sodium: 1180 },
    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "images/french-onion-soup.jpg",
    difficulty: "Intermediate",
    cuisine: "Mediterranean",
    rating: 4.7,
    reviews: 267,
    prepTime: 20,
    cookTime: 60,
    servings: 4,
    ingredients: [
      "6 large onions, thinly sliced",
      "3 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup dry white wine",
      "4 slices baguette",
      "200g Gruyère cheese, grated",
      "2 sprigs fresh thyme",
    ],
    instructions: [
      "Melt the butter in a large pot and add the sliced onions.",
      "Cook slowly for 40 minutes, stirring often, until deep golden brown.",
      "Add the wine and scrape the bottom of the pot, then add broth and thyme.",
      "Simmer for 20 minutes and season with salt and pepper.",
      "Ladle into bowls, top with baguette and cheese, then broil until bubbly.",
    ],
    nutrition: { calories: 410, protein: 19, carbs: 36, fat: 20, fiber: 4, sodium: 1050 },
    tips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    name: "Vegetable Coconut Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "images/vegetable-coconut-curry.jpg",
    difficulty: "Easy",
    cuisine: "Indian",
    rating: 4.6,
    reviews: 289,
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    ingredients: [
      "1 onion, diced",
      "2 cloves garlic, minced",
      "2 tablespoons curry powder",
      "1 can chickpeas",
      "2 potatoes, cubed",
      "1 cup spinach",
      "400ml coconut milk",
      "Basmati rice, for serving",
    ],
    instructions: [
      "Sauté onion and garlic until soft, then add the curry powder.",
      "Add potatoes and chickpeas and stir to coat with the spices.",
      "Pour in the coconut milk and simmer for 20 minutes.",
      "Stir in the spinach until wilted and serve with rice.",
    ],
    nutrition: { calories: 450, protein: 14, carbs: 56, fat: 19, fiber: 11, sodium: 480 },
    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    name: "Koshari",
    description: "Egypt's favorite street food: rice, lentils, pasta and spicy tomato sauce",
    image: "images/koshari.jpg",
    difficulty: "Intermediate",
    cuisine: "Egyptian",
    rating: 4.9,
    reviews: 530,
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "1 cup short pasta",
      "1/2 cup chickpeas",
      "3 onions, thinly sliced and fried",
      "Spicy tomato sauce",
      "Garlic vinegar (daqqa)",
    ],
    instructions: [
      "Boil the lentils until tender, then drain.",
      "Cook the rice with a little of the lentil water.",
      "Boil the pasta until al dente.",
      "Fry the onions until crispy and golden.",
      "Layer rice, lentils, pasta and chickpeas, then top with sauce, daqqa and onions.",
    ],
    nutrition: { calories: 590, protein: 20, carbs: 105, fat: 11, fiber: 14, sodium: 640 },
    tips: [
      "Fry the onions in batches so they stay crispy",
      "Keep the sauce and daqqa on the side so everyone can adjust",
      "Add a little cumin to the lentils for extra flavor",
      "Leftovers reheat well with a splash of water",
    ],
  },
];

const recipeImage = document.getElementById("recipe-image");
const tabContent = document.getElementById("tab-content");
const tabButtons = document.querySelectorAll("#tabs .nav-link");
const timeAlert = document.getElementById("time-alert");
const bookmarkBtn = document.getElementById("bookmark-btn");

let currentMeal = null;

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function getRandomMeal() {
  let meal;
  do {
    meal = meals[getRandomIndex(meals.length)];
  } while (meal === currentMeal && meals.length > 1);
  return meal;
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function buildTabHTML(tab, meal) {
  if (tab === "ingredients") {
    const items = meal.ingredients
      .map(
        (item, i) =>
          `<li class="col-12 col-md-6 d-flex align-items-center gap-2"><span class="num num-sm">${i + 1}</span>${item}</li>`
      )
      .join("");
    return `<div class="ingredients-box"><ul class="row g-2 list-unstyled mb-0">${items}</ul></div>`;
  }

  if (tab === "instructions") {
    const steps = meal.instructions
      .map(
        (step, i) =>
          `<li class="d-flex align-items-start gap-3"><span class="num">${i + 1}</span><p class="mb-0">${step}</p></li>`
      )
      .join("");
    return `<ol class="steps-list list-unstyled mb-0 d-flex flex-column">${steps}</ol>`;
  }

  if (tab === "nutrition") {
    const fields = [
      { label: "Calories", key: "calories", unit: " kcal", icon: "fa-fire", color: "orange" },
      { label: "Protein", key: "protein", unit: "g", icon: "fa-dumbbell", color: "blue" },
      { label: "Carbohydrates", key: "carbs", unit: "g", icon: "fa-wheat-awn", color: "yellow" },
      { label: "Fat", key: "fat", unit: "g", icon: "fa-droplet", color: "red" },
      { label: "Fiber", key: "fiber", unit: "g", icon: "fa-seedling", color: "green" },
      { label: "Sodium", key: "sodium", unit: "mg", icon: "fa-cube", color: "pink" },
    ];
    const cards = fields
      .map(
        (f) => `
        <div class="col-12 col-sm-6">
          <div class="nutri-card d-flex justify-content-between align-items-center">
            <span class="d-flex align-items-center gap-3">
              <span class="nutri-icon ${f.color} d-flex align-items-center justify-content-center">
                <i class="fa-solid ${f.icon}"></i>
              </span>
              ${f.label}
            </span>
            <strong>${meal.nutrition[f.key]}${f.unit}</strong>
          </div>
        </div>`
      )
      .join("");
    return `<div class="row g-2">${cards}</div>`;
  }

  const tips = meal.tips
    .map(
      (tip) =>
        `<li class="tip d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check"></i>${tip}</li>`
    )
    .join("");
  return `<ul class="list-unstyled mb-0 d-flex flex-column gap-2">${tips}</ul>`;
}

function showTab(tab) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  tabContent.innerHTML = buildTabHTML(tab, currentMeal);
  tabContent.scrollTop = 0;
}

function showMeal(meal) {
  currentMeal = meal;

  recipeImage.onerror = () => {
    recipeImage.onerror = null;
    recipeImage.src = meal.image.replace(/\.jpg$/, ".svg");
  };
  recipeImage.src = meal.image;
  recipeImage.alt = meal.name;

  setText("recipe-title", meal.name);
  setText("recipe-description", meal.description);
  setText("recipe-difficulty", meal.difficulty);
  setText("recipe-cuisine", meal.cuisine);
  setText("recipe-rating", meal.rating);
  setText("recipe-reviews", `(${meal.reviews} reviews)`);
  setText("prep-time", `${meal.prepTime} min`);
  setText("cook-time", `${meal.cookTime} min`);
  setText("servings", `${meal.servings} people`);

  document.getElementById("recipe-difficulty").className =
    "badge rounded-pill tag-" + meal.difficulty.toLowerCase();

  timeAlert.classList.toggle("d-none", meal.prepTime + meal.cookTime <= 45);

  bookmarkBtn.classList.remove("saved");
  showTab("ingredients");
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => showTab(btn.dataset.tab));
});

document.getElementById("another-btn").addEventListener("click", () => {
  showMeal(getRandomMeal());
});

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("saved");
});

document.getElementById("share-btn").addEventListener("click", () => {
  const text = `${currentMeal.name} - ${currentMeal.description}`;
  if (navigator.share) {
    navigator.share({ title: currentMeal.name, text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
});

showMeal(getRandomMeal());
