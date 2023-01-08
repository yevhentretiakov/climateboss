/* Game Properties */
var leftBarNewsArray = [];
var score = 0;
var lastID = "id_0";
var activeScene = 0;
var date = new Date();

var ranks = [
    new Rank("badge1.png", 0, "Climate Recruit", "You can do more!"),
    new Rank("badge1.png", 500, "Climate Warrior", "You can do more!"),
    new Rank("badge1.png", 1000, "Climate Master", "Keep it coming!"),
    new Rank("badge1.png", 2000, "Climate Beast", "Thats's a good point!"),
    new Rank("badge1.png", 3000, "Climate Champion", "Very interesting!"),
    new Rank("badge1.png", 3645, "Climate Legend", "That's a real work of art!!")
];

var quotes = [
    new Quote("Climate change isn't something people get to choose to believe or not: it's happening.", "Matt Gaetz"),
    new Quote("The Earth should not be a worse place after my life than it was when I was born here.", "Rob Stewart"),
    new Quote("I want you to act as if the house is on fire, because it is.", "Greta Thunberg"),
    new Quote("The world will not be destroyed by those who do evil, but by those who watch them without doing anything.", "Albert Einstein"),
    new Quote("Twenty-five years ago people could be excused for not knowing much, or doing much, about climate change. Today we have no excuse.", "Desmond Tutu"),
    new Quote("The Earth is a fine place and worth fighting for.", "Ernest Hemingway"),
    new Quote("We do not inherit the earth from our ancestors, we borrow it from our children.", "Native American Proverb"),
    new Quote("What will save us is not technology or science. What will save us is the ethical transformation of our society.", "Carmelite Father Eduardo Agosta Scarel"),
    new Quote("I feel more confident than ever that the power to save the planet rests with the individual consumer.", "Denis Hayes"),
    new Quote("Only when the last tree has died and the last river been poisoned and the last fish been caught will we realize we cannot eat money.", "Cree Indian Proverb"),
    new Quote("For 200 years we’ve been conquering nature. Now we’re beating it to death.", "Tom McMillan"),
    new Quote("He that plants trees loves others beside himself.", "Thomas Fuller"),
    new Quote("Global warming threatens our health, our economy, our natural resources, and our children’s future. It is clear we must act.", "Eliot Spitzer"),
    new Quote("If you really think that the environment is less important than the economy, try holding your breath while you count your money.", "Guy McPherson"),
    new Quote("We are the first generation to feel the sting of climate change, and we are the last generation that can do something about it.", "Jay Inslee"),
    new Quote("If you don’t act against climate change, then no matter how much money you leave for your children, it’ll not even cover their healthcare bills, due to living in an unhealthy planet.", "Abhijit Naskar"),
    new Quote("The general population doesn’t know what’s happening, and it doesn’t even know that it doesn’t know.", "Noam Chomsky"),
    new Quote("The future will be green or not at all.", "Jonathon Porritt"),
    new Quote("The greatest threat to our planet is the belief that someone else will save it.", "Robert Swan")
];

var sceneArray = [
    
    // September 9, 2023
    new Scene(
        new Date(),
        [],
        [],
        storyBegin1
    ),
    
    // September 9, 2023
    new Scene(
        new Date(2023, 9 - 1, 9),
        ["gasses"],
        ["printedhouse"],
        storySeptember92023
    ),
    
    // October 19, 2024
    new Scene(
        new Date(2024, 10 - 1, 19),
        ["temperature"],
        ["solarfarm"],
        storyOctober192024
    ),
    
    // November 12, 2025
    new Scene(
        new Date(2025, 11 - 1, 12),
        ["science"],
        ["windpark"],
        storyNovember122025
    ),
    
    // March 17, 2026
    new Scene(
        new Date(2026, 3 - 1, 17),
        ["sealevel"],
        ["earth300"],
        storyMarch172026
    ),
    
    // November 10, 2027
    new Scene(
        new Date(2027, 11 - 1, 10),
        ["activist"],
        ["ecar"],
        storyNovember102027
    ),
    
    // July 7, 2028
    new Scene(
        new Date(2028, 7 - 1, 7),
        ["deforest"],
        ["treehouse"],
        storyJuly72028
    ),
    
    // August 20, 2029
    new Scene(
        new Date(2029, 8 - 1, 20),
        [],
        [],
        storyAugust202029
    ),
    
    // May 15, 2030
 
];

var projectsArray = [
    new Project("ecar", "project6.png", "E-Car", "E-Car is a vehicle that uses several electric motors for propulsion. <br><br>With E-Car, you’ll reduce smog pollution around you right now and cut greenhouse gases to protect people and the planet for years to come. <br><br>Future generations will thank you.", 350, 3, "hide", ["science", "activist"]),
    
    new Project("windpark", "project5.png", "Wind Park", "Wind Park is a group of wind turbines in the same location used to produce electricity. Wind farms vary in size from a small number of turbines to several hundred wind turbines covering an extensive area. <br><br>Because they require no fuel, wind farms have less impact on the environment than many other forms of power generation and are often referred to as a good source of green energy.", 210, 2, "hide", ["science", "temperature"]),
    
    new Project("solarfarm", "project4.png", "Solar Farm", "A solar farm is a large collection of photovoltaic (PV) solar panels that absorb energy from the sun, convert it into electricity and send that electricity to the power grid for distribution and consumption by customers like you.<br><br>Our solar farm project will help reduce greenhouse gas emissions by up to 1.5 million tonnes of C02 each year - equivalent to the taking 330,000 cars off the road.", 190, 2, "hide", ["gasses", "temperature"]),
    
    new Project("printedhouse", "project3.png", "3D Printed House With Local Soil", "The construction sector is one of the sectors with the greatest impact on climate change: cement production is responsible for 8% of global GHG emissions. <br><br>One interesting option that is gaining momentum is the use of additive manufacturing, more popularly known as 3D printing, for the construction of housing. <br><br>Advantage of this system is that it makes it possible to use local materials such as soil clay, sand or plant fibres as raw materials, which avoids the use of cement.", 200, 2, "hide", ["gasses"]),
    
    new Project("treehouse", "project2.png", "Tree House", "Designed with environmental sustainability in mind, Tree House’s vertical garden is more than just a unique architectural structure. A natural insulation, the vertical garden reduces the estate’s carbon footprint by filtering pollutants and carbon dioxide out of the air. It reduces heat absorption and lowers the energy needed to cool indoor spaces.", 310, 1, "hide", ["gasses", "deforest"]),
    
    new Project("earth300", "project1.png", "Earth 300", "Part marine research station, part luxury cruise will bring together 160 of the brightest scientific minds and inspire them to study—and save—the planet. The 300-meter (984-foot) vessel includes a 13-story “science sphere” that will house two dozen scientific laboratories and a cantilevered observation deck.", 430, 4, "hide", ["sealevel", "science"])
];

var skillsArray = [
    new Skill("gasses", "gasses.png", "Gasses", 320, "hide", [
        new Question("1", "What is the greenhouse effect?", "gasses1.png", 2, "Greenhouse gases, such as carbon dioxide, methane, nitrous oxide and water vapor, trap heat energy emanating from the Earth and prevent it from going into space. This keeps the planet much warmer than it would be otherwise. But human activities, such as burning fossil fuels, are adding even more carbon dioxide to the atmosphere and causing added warming.", ["The measurement of plant growth in areas affected by flooding", "The phenomenon in which gases in the Earth’s atmosphere prevent heat from escaping into space", "When climate change affects ecosystems", "The impact trees have on global temperatures"]),
        
        new Question("2", "Which greenhouse gas is the main driver of Earth’s current warming?", "gasses2.png", 3, "Some people mistakenly believe water vapor is the main driver of Earth’s current warming. But increased water vapor doesn’t cause human-produced global warming. Instead, it’s a consequence of it. Increased water vapor in the atmosphere supercharges the warming caused by other greenhouse gases, such as carbon dioxide, followed by methane.", ["Methane", "Nitrous oxide", "Carbon dioxide", "Water vapor"]),
        
        new Question("3", "Which of the following gases does not trap heat?", "gasses3.png", 2, "Heat-trapping greenhouse gases absorb and emit radiation within the thermal infrared range. Water vapor, carbon dioxide and methane are Earth's most abundant greenhouse gases. Nitrogen, which makes up 80 percent of Earth's atmosphere, is not a greenhouse gas. This is because its molecules, which contain two atoms of the same element (nitrogen), are unaffected by infrared light.", ["Carbon dioxide", "Nitrogen", "Water vapor", "Methane"])
    ]),
    
    new Skill("temperature", "temperature.png", "Temperature", 300, "hide", [
        new Question("1", "Today's warming is unprecedented in the last:", "temperature1.png", 4, "Although some think that the 'Medieval Warm Period' (approx. 800 – 1200 AD) was a global phenomenon, recent studies, including one by Neukom et al. 2019, show that there is no evidence that there were uniform warm and cold periods on Earth over the last 2,000 years.", ["100 years", "500 years", "1,000 years", "2,000 years"]),
        
        new Question("2", "How much have global average temperatures increased in the last century?", "temperature2.png", 4, "Global average temperatures have increased more than 1.4 degrees Fahrenheit over the last 100 years. Scientists project that Earth's average temperature will rise between two and 12 degrees  Fahrenheit by 2100. It's estimated that a change of just two degrees in average global temperature could result in sea level rise, lower crop yields, increased rainfall and flooding, more wildfires and other negative environmental impacts. The historic climate agreement involving 196 nations at the 2015 United Nations Climate Change Conference set a goal to limit global warming to less than 3.6 degrees Fahrenheit.", ["2.1 degrees Fahrenheit", "4.3 degrees Fahrenheit", "0.6 degrees Fahrenheit", "1.4 degrees Fahrenheit"]),
        
        new Question("3", "In a high-emissions scenario, how much does the IPCC predict the Earth will heat up by the end of the century, compared with the preindustrial era?", "temperature3.png", 3, "A “high-emissions scenario” is one that represents a major failure to curb greenhouse gas emissions. The IPCC predicts that in such a case the average global temperature could rise by 3.3° to 5.7° degrees Celsius, an increase that could trigger catastrophic consequences, such as massive sea-level rise. But with swift reductions in emissions, worst-case scenarios like this can still be avoided. The Paris climate agreement, if fully implemented, would steer the world off this severe pathway.", ["1.2° to 1.7° C", "2.1° to 3.5° C", "3.3° to 5.7° C", "Scientists do not predict a measurable change"])
    ]),
    
    new Skill("science", "science.png", "Science", 170, "hide", [
        new Question("1", "What has the scientific community concluded about climate change?", "science1.png", 1, "The U.N. Intergovernmental Panel on Climate Change (IPCC), the leading scientific body on the subject, declared last August that human-caused warming of the atmosphere, land and oceans is “unequivocal.” The only way to limit warming is to zero out emissions of greenhouse gases produced by burning fossil fuels and other human activities, the IPPC said.", ["The consensus is that it is both real and man-made.", "Scientists have shown it to be real but aren’t sure whether it is man-made.", "Scientists do not think climate change is real.", "There is little consensus."]),
        
        new Question("2", "How do scientists collect evidence about climate?", "science2.png", 4, "For the past few decades, scientists have had the benefit of global satellite data. We have accurate ground-based measurements that reach back just over a century. 'Proxy' methods, such as tree ring and ice core analysis, are used to reconstruct climate records before the rise of modern instruments.", ["Using remote sensing from space with satellites", "By ground-based measurements of surface temperature, carbon dioxide concentration and sea level", "By collecting 'proxy data' from tree rings, ice cores and historical records", "All of the above"])
    ]),
    
    new Skill("sealevel", "sealevel.png", "Sea Level", 120, "hide", [
        new Question("1", "How much have sea levels risen in the past 100 years?", "flood1.png", 1, "On average, global sea level has risen about seven inches in the last 100 years. By 2100, sea level is expected to increase by another 1.5 to 3 feet, resulting in stronger and more frequent storm surges.", ["7 inches", "5 inches", "2 inches", "16 inches"])
    ]),
    
    new Skill("activist", "activist.png", "Activism", 290, "hide", [
        new Question("1", "What famous goal did 195 countries affirm in Paris in 2015?", "activism1.png", 4, "While the Paris agreement did indeed identify 2 degrees Celsius (3.6 degrees Fahrenheit) as a line not to be crossed, it also suggested that countries should make an effort to keep warming even lower, to 1.5 degrees Celsius (2.7 degrees Fahrenheit) above preindustrial levels. Since then, additional evidence has suggested that this more stringent limit may be needed to avoid many severe consequences of warming. The latest IPCC report states that the world is on track to blaze past a crucial climate target within eight years.", ["Reducing global temperatures by 0.5 degrees.", "Bringing global temperatures back to preindustrial averages.", "Limiting warming to no more than 1 degree Celsius above preindustrial averages.", "Limiting warming to “well below” 2 degrees Celsius above preindustrial averages."]),
        
        new Question("2", "Which day is Earth Day?", "activism2.png", 1, "Earth Day falls on April 22nd. This is a nearly 50 year old tradition, established in 1970, dedicated to bringing the environment to the forefront. Each year, Earth Day Network works to bring together communities around the world in a huge campaign to tackle modern-day environmental problems in effort to continue the Earth Day tradition. For more information, check out our website.", ["Apr 22", "Dec 21", "Aug 12", "Oct 31"]),
        
        new Question("3", "Which was the first book to set the stage for society to change in becoming more environmentally aware?", "activism3.png", 3, "Published in 1962, Silent Spring was an extraordinary book that opened the public’s eyes to the dangers of DDT, the first broadly-used synthesized pesticide, to wildlife and human health. Due to the public outcry raised by Silent Spring, DDT was banned in 1972, but the impacts of Carson’s book did not end there. For the first time, the environment became a part of the public consciousness, and more than 50 years later, we see the affects of that as people across the world take up Carson’s banner in the modern-day environmental movement.", ["The Lorax by Dr. Seuss", "The Omnivore's Dilemma by Michael Pollan", "Silent Spring by Rachel Carson", "Population Bomb by Paul Ehrlich"])
    ]),
    
    new Skill("deforest", "deforest.png", "Deforastation", 330, "hide", [
        new Question("1", "Which of the following is NOT a problem caused by deforestation?", "deforest2.png", 4, "The answer is they are all problems caused by deforesetation. Across the world, forests are home to about 80% of terrestrial biodiversity, while many indigenous people (about 60 million) are completely dependent on the forest for their food and livelihood. Many more people live near forests and rely on them. In terms of the economy, forests provide 75-100 billion US dollars of goods and services every year.", ["Loss of biodiversity", "Hurting the economy", "The harming of many indigenous peoples", "They are all problems caused by deforestation"]),
        
        new Question("2", "What can you do to fight deforestation?", "deforest1.png", 4, "All of these are things that you can do to help fight deforestation. We also suggest recycling forest products that you use, choosing to buy recycled forest products, avoiding products that include palm oil, and supporting organizations that reforest and conserve.", ["Leave forests standing and plant more trees", "Reduce your use of products made from wood fiber including paper and cardboard", "Demand forest products from sustainable sources and deforestation free supply chains", "All of the above"]),
        
        new Question("3", "How many trees does it take to provide a day's supply of oxygen for 4 people?", "deforest3.png", 1, "One large tree is able to supply a day’s supply of oxygen for four people. Trees are also able to absorb up to 48 pounds of carbon dioxide a year.", ["1", "10", "50", "100"])
    ])
];