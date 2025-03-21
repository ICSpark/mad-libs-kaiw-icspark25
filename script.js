function dinner(){
    let food = prompt("Name a food");
    let smell= prompt("Name a strange thing");
    let adjective= prompt("Name an adjective");
    let animal=prompt("Name an animal");
    let verb=prompt("Name a verb")
    let object=prompt("Name an object")
    let funnyQuote=prompt("What's a funny quote?")
    let anotherQuote=prompt("What's another funny quote?")
    document.getElementById("output").innerHTML = `
<p>The dinner party started with a dish of ${food} that smelled like ${smell}. 
Suddenly, a ${adjective} ${animal} appeared and started ${verb}ing on the table! 
The host grabbed a ${object} and yelled "${funnyQuote}!" 
We all laughed and said "${anotherQuote}." It was unforgettable!</p>
`;
}
function mystery(){
    let adjective=prompt("Name an adjective");
    let place=prompt("Name a place");
    let sound=prompt("Name a sound");
    let sillyName1=prompt("Name a silly name");
    let object=prompt("Name an object");
    let noun=prompt("Name a noun");
    let name=prompt("Name a name")
    let jobTitle=prompt("Name a job title");
    let verb=prompt("Name a verb");
    let substance=prompt("Name a substance");
    let food=prompt("Name a food");
    document.getElementById("output").innerHTML = `
  <p>On a(n) ${adjective} night in the grand ${place}, a loud ${sound} revealed Lord ${sillyName1} lying beside a ${object}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction. 
  It turns out Lord ${sillyName1} had slipped on ${substance} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}
function travel(){
    let historicalFigure=prompt("Name a historical figure");
    let place=prompt("Name a place");
    let object=prompt("Name an object");
    let pluralNoun=prompt("Name a plural noun");
    let adjective1=prompt("Name an adjective");
    let verb=prompt("Name an verb");
    let historicalPlace=prompt("Name a historical place");
    let sillyName=prompt("Name a silly name");
    let adjective2=prompt("Name an another adjective");
    document.getElementById("output").innerHTML = `
    <p>Your time machine malfunctions, and a ${historicalFigure} steals your homework escaping to ${place})!
    Armed with a ${object}, you chase them through time, dodging ${pluralNoun} and a ${adjective1} dinosaur trying to ${verb} you.
    You finally catch the thief at the ${historicalPlace} and grab your homework just time.
    Back in class, your teacher, ${sillyName}, says, "That's the most ${adjective2} excuse ever!" But hey, you got an A!</p>
    `;
}