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
  // ============ ZIMBABWEAN DISHES ============
  {
    id: 1,
    title: 'Sadza',
    emoji: '🍚',
    time: '20 mins',
    difficulty: 'Easy',
    description: 'Zimbabwe\'s staple — smooth, firm maize meal porridge served with relish.',
    ingredients: [
      '2 cups mealie meal (white maize meal)',
      '4 cups water',
      '1 tsp salt'
    ],
    steps: [
      'Bring 3 cups of water to a boil in a heavy pot',
      'Mix 1 cup mealie meal with 1 cup cold water to form a smooth paste',
      'Slowly stir the paste into the boiling water to avoid lumps',
      'Simmer for 10 minutes, then gradually add remaining mealie meal while stirring with a wooden spoon',
      'Keep turning and pressing the sadza until thick, smooth and glossy',
      'Cover and steam on low heat for 5 minutes, then serve with relish'
    ]
  },
  {
    id: 2,
    title: 'Muriwo unedovi',
    emoji: '🥬',
    time: '25 mins',
    difficulty: 'Easy',
    description: 'Fresh leafy greens cooked in creamy peanut butter — a classic side.',
    ingredients: [
      '1 bunch covo, rape or spinach, chopped',
      '3 tbsp smooth peanut butter',
      '1 tomato, chopped',
      '1 onion, chopped',
      '1 tsp cooking oil',
      'Salt to taste'
    ],
    steps: [
      'Sauté onion and tomato in oil until soft',
      'Add greens and a splash of water; cover and steam for 10 minutes',
      'Mix peanut butter with warm water to make a smooth paste',
      'Stir peanut butter into the greens and simmer for 5 minutes',
      'Season with salt and serve hot with sadza'
    ]
  },
  {
    id: 3,
    title: 'Nyama neSadza',
    emoji: '🍖',
    time: '1 hr 30 mins',
    difficulty: 'Medium',
    description: 'Slow-cooked beef stew with tomatoes and onions — the perfect sadza companion.',
    ingredients: [
      '500g beef, cut into chunks',
      '2 tomatoes, chopped',
      '1 onion, chopped',
      '2 tbsp oil',
      '1 tsp curry powder',
      'Salt and pepper'
    ],
    steps: [
      'Brown beef in oil in a large pot',
      'Add onions and cook until translucent',
      'Add tomatoes, curry powder, salt and pepper',
      'Add water to cover, then simmer covered for 1 hour until tender',
      'Serve hot with sadza and muriwo'
    ]
  },
  {
    id: 4,
    title: 'Mazondo',
    emoji: '🍲',
    time: '3 hrs',
    difficulty: 'Hard',
    description: 'Rich, slow-cooked beef trotters with onions — a Zimbabwean favourite.',
    ingredients: [
      '4 beef trotters, cleaned and cut',
      '2 onions, chopped',
      '3 tomatoes, chopped',
      '2 tbsp oil',
      'Salt and pepper',
      'Water for simmering'
    ],
    steps: [
      'Wash trotters thoroughly and place in a large pot',
      'Cover with water and boil for 1 hour, skimming foam',
      'Add onions, tomatoes, oil and seasoning',
      'Simmer covered for another 1½–2 hours until tender',
      'Serve with sadza or rice'
    ]
  },
  {
    id: 5,
    title: 'Muboora',
    emoji: '🎃',
    time: '30 mins',
    difficulty: 'Easy',
    description: 'Traditional pumpkin leaves cooked with peanut butter and tomato.',
    ingredients: [
      '1 bunch young pumpkin leaves, washed and chopped',
      '2 tbsp peanut butter',
      '1 tomato, chopped',
      '1 onion, chopped',
      '1 tsp oil',
      'Salt to taste'
    ],
    steps: [
      'Sauté onion and tomato in oil',
      'Add pumpkin leaves and a splash of water; cover and steam for 10 minutes',
      'Mix peanut butter with warm water and stir in',
      'Simmer 5 more minutes, season, and serve with sadza'
    ]
  },

  // ============ CAKES & BAKING ============
  {
    id: 6,
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
      '1/2 cup butter',
      '2 tsp baking powder',
      '1 tsp vanilla essence'
    ],
    steps: [
      'Preheat oven to 180°C (350°F). Grease and flour a cake tin',
      'Sift flour, cocoa and baking powder together in a bowl',
      'Cream butter and sugar until light and fluffy',
      'Beat in eggs one at a time, then add vanilla',
      'Alternately add dry ingredients and milk, mixing until smooth',
      'Pour batter into cake tin and bake for 35–40 minutes',
      'Insert a toothpick — if it comes out clean, the cake is ready',
      'Cool completely before frosting'
    ]
  },
  {
    id: 7,
    title: 'Vanilla Sponge Cake',
    emoji: '🎂',
    time: '45 mins',
    difficulty: 'Medium',
    description: 'Light and fluffy vanilla sponge — perfect for tea time.',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '4 eggs',
      '1/2 cup oil',
      '1/2 cup milk',
      '2 tsp baking powder',
      '2 tsp vanilla essence'
    ],
    steps: [
      'Preheat oven to 180°C (350°F) and grease a cake tin',
      'Sift flour and baking powder together',
      'Whisk eggs and sugar until pale and fluffy',
      'Add oil, milk and vanilla; mix well',
      'Fold in dry ingredients until just combined',
      'Bake for 30–35 minutes or until golden and springy',
      'Cool before serving or decorating'
    ]
  },

  // ============ ORIGINAL RECIPES ============
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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