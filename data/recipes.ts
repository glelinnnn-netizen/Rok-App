//recipe-app/data/recipes.ts
export interface Recipe {
  id: number;
  title: string;
  emoji: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  steps: string[];
  description: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    emoji: '🍝',
    time: '30 mins',
    difficulty: 'Easy',
    description: 'Classic Italian pasta with eggs, cheese, and pancetta.',
    ingredients: [
      '200g spaghetti',
      '3 large eggs',
      '100g pancetta',
      '50g Parmesan cheese',
      'Salt and pepper'
    ],
    steps: [
      'Boil spaghetti in salted water until al dente',
      'Fry pancetta until crispy',
      'Whisk eggs and Parmesan in a bowl',
      'Drain pasta and mix with pancetta',
      'Remove from heat and stir in egg mixture',
      'Season with salt and pepper'
    ]
  },
  {
    id: 2,
    title: 'Chicken Tacos',
    emoji: '🌮',
    time: '25 mins',
    difficulty: 'Easy',
    description: 'Delicious Mexican street tacos with seasoned chicken.',
    ingredients: [
      '8 corn tortillas',
      '500g chicken breast',
      '1 onion',
      'Cilantro',
      'Lime',
      'Taco seasoning'
    ],
    steps: [
      'Season chicken with taco seasoning',
      'Cook chicken in a pan until done',
      'Warm tortillas in a dry pan',
      'Shred chicken and assemble tacos',
      'Top with onion, cilantro, and lime juice'
    ]
  },
  {
    id: 3,
    title: 'Avocado Toast',
    emoji: '🥑',
    time: '10 mins',
    difficulty: 'Easy',
    description: 'Simple and healthy breakfast toast with avocado.',
    ingredients: [
      '2 slices sourdough bread',
      '2 ripe avocados',
      'Salt and pepper',
      'Red pepper flakes',
      'Olive oil'
    ],
    steps: [
      'Toast bread until golden brown',
      'Mash avocados in a bowl',
      'Season with salt and pepper',
      'Spread avocado on toast',
      'Top with red pepper flakes and drizzle olive oil'
    ]
  },
  {
    id: 4,
    title: 'Homemade Sushi',
    emoji: '🍣',
    time: '60 mins',
    difficulty: 'Hard',
    description: 'Fresh sushi rolls with salmon and avocado.',
    ingredients: [
      '2 cups sushi rice',
      '4 nori sheets',
      '200g fresh salmon',
      '1 avocado',
      'Soy sauce',
      'Wasabi'
    ],
    steps: [
      'Cook sushi rice and season with vinegar',
      'Slice salmon and avocado into strips',
      'Place nori on a bamboo mat',
      'Spread rice on nori',
      'Add salmon and avocado',
      'Roll tightly and slice'
    ]
  },
  {
    id: 5,
    title: 'Chocolate Cake',
    emoji: '🍰',
    time: '50 mins',
    difficulty: 'Medium',
    description: 'Rich and moist chocolate cake with buttercream frosting.',
    ingredients: [
      '2 cups flour',
      '1.5 cups sugar',
      '3/4 cup cocoa powder',
      '2 eggs',
      '1 cup milk',
      '1/2 cup butter'
    ],
    steps: [
      'Preheat oven to 350°F',
      'Mix dry ingredients in a bowl',
      'Add wet ingredients and mix',
      'Pour batter into cake pan',
      'Bake for 35 minutes',
      'Let cool and frost'
    ]
  },
  {
    id: 6,
    title: 'Greek Salad',
    emoji: '🥗',
    time: '15 mins',
    difficulty: 'Easy',
    description: 'Fresh Mediterranean salad with feta and olives.',
    ingredients: [
      'Cucumber',
      'Tomatoes',
      'Red onion',
      'Feta cheese',
      'Kalamata olives',
      'Olive oil',
      'Oregano'
    ],
    steps: [
      'Chop all vegetables into bite-sized pieces',
      'Combine in a large bowl',
      'Add feta cheese and olives',
      'Drizzle with olive oil',
      'Sprinkle with oregano'
    ]
  }
];