// Instruction
var storyBegin1 = [
    new Story(
        "id_1", 
        "Climate change threatens people with food and water scarcity, increased flooding, extreme heat, more disease, and economic loss. <span class='spacer'></span>Try yourself in the shoes of an entrepreneur who intends to make a difference at improving the state of the climate. <span class='spacer'></span>You have 8 years to prove yourself.", 
        [
            new Button("I'm Ready", "id_2")
        ]
    ), 
    
    new Story(
        "id_2", 
        "Over the next 8 years, you must earn the maximum number of score points. <span class='spacer'></span>You can earn them by creating projects, learning new things and making the right decisions as you play.", 
        [
            new Button("Let's Go!", "goToNextScene")
        ]
    )
];


// September 9, 2023
var storySeptember92023 = [
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// October 19, 2024
var storyOctober192024 = [
    new Story(
        "id_1", 
        "You need to take some documents from office. <span class='spacer'></span>How are you gonna get to office?", 
        [
            new Button("Walk", "id_2", 50),
            new Button("Public transport", "id_3"),
            new Button("Bike", "id_2", 50),
            new Button("Car", "id_3")
        ]
    ),
    new Story(
        "id_2", 
        "Good decision! You have become healthier.<span class='spacer'></span>Also this method of getting somewhere does not contribute to the release of gases.<span class='spacer'></span>So Earth have become helthier too.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "You arrived at the office. <span class='spacer'></span>This time, you paid a new attention to the traffic on the road and its impact on the climate.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// November 12, 2025
var storyNovember122025 = [
    new Story(
        "id_1", 
        "You decided to go to the store and buy groceries for dinner.<span class='spacer'></span>What will you have for dinner?", 
        [
            new Button("Meat", "id_3"),
            new Button("Fish", "id_3"),
            new Button("Vegan", "id_2", 70),
            new Button("Indian", "id_3")
        ]
    ),
    new Story(
        "id_2", 
        "You had a great vegan dinner. <span class='spacer'></span>Meat, fish and dairy production is a huge source of greenhouse gas. <span class='spacer'></span>Removing them from your diet makes a difference!", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "Dinner came out great.<span class='spacer'></span>But in terms of the impact on the climate, this food leaves much to be desired.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// March 17, 2026
var storyMarch172026 = [
    new Story(
        "id_1", 
        "You have some food left that you no longer want to eat.<span class='spacer'></span>What to do with this food?", 
        [
            new Button("Put it to the garbage", "id_3"),
            new Button("Feed a homeless cat", "id_2", 85)
        ]
    ),
    new Story(
        "id_2", 
        "You gave the rest of the food to the cat. <span class='spacer'></span>Fluffy was clearly pleased. <span class='spacer'></span>And by not throwing food in to the garbage, you prevented further greenhouse gas emissions.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "Food scraps placed in the garbage and carried to the landfill decompose and produce methane gas, a greenhouse gas which is far more potent that carbon dioxide.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// November 10, 2027
var storyNovember102027 = [
    new Story(
        "id_1", 
        "You have free time in the evening.", 
        [
            new Button("Take a bath", "id_3"),
            new Button("Rest", "id_3"),
            new Button("Plant trees", "id_2", 100),
            new Button("Read a new book", "id_3")
        ]
    ),
    new Story(
        "id_2", 
        "Trees are vital to our ecosystem. Often known as the ‘lungs of the Earth’, they play a key role in storing carbon dioxide and producing oxygen. Planting trees represents a real opportunity for carbon footprint compensation, and fighting against global warming.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "You had a good evening. <span class='spacer'></span>You can go to bed.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// July 7, 2028
var storyJuly72028 = [
    new Story(
        "id_1", 
        "You met with your old friends. They know almost nothing about climate change. You would like to dedicate them to it. <span class='spacer'></span>But you don't want to seem like a bore. <span class='spacer'></span>What interesting fact will you tell them that will hook them?", 
        [
            new Button("2,500 gallons of water are needed to produce 1 pound of beef.", "id_2", 120),
            new Button("Livestock and their byproducts account for at least 51% of all worldwide greenhouse gas emissions.", "id_2", 120),
            new Button("Up to 137 plant, animal and insect species are lost every day due to rainforest destruction.", "id_2", 120),
            new Button("1-2 acres of rainforest are cleared every second.", "id_2", 120),
            new Button("15x more protein on any given area of land with plants, rather than cows.", "id_2", 120)
        ]
    ),
    new Story(
        "id_2", 
        "They were amazed at what they heard.<span class='spacer'></span>You have an interesting dialogue. <span class='spacer'></span>You're a big lad.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available projects. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this year you realized your full potential, then click Continue and go to the next year.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];


// August 20, 2029
var storyAugust202029 = [
    new Story(
        "id_1", 
        "Time is coming to an end.<span class='spacer'></span>Next year you will know the result of your labors.", 
        [
            new Button("Continue", "getRank")
        ]
    )
];
