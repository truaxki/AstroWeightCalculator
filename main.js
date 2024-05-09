document.addEventListener('DOMContentLoaded', function () {
    const planetSelect = document.getElementById('planets');
    const outputParagraph = document.getElementById('output');
    
    // Define planets and their gravitational multipliers
    const planets = {
        Sun: 27.9,
        Mercury: 0.377,
        Venus: 0.9032,
        Earth: 1,
        Mars: 0.3895,
        Jupiter: 2.640,
        Saturn: 1.139,
        Uranus: 0.917,
        Neptune: 1.148,
        Pluto: 0.06,
        Moon: 0.1655  
    };

    // Populate dropdown menu
    Object.keys(planets).forEach(planet => {
        let option = document.createElement('option');
        option.value = planet //.toLowerCase();  // keeping the value lowercase for internal use
        option.textContent = planet;
        planetSelect.appendChild(option);
    });

    // Add event listener for the Calculate button
    document.getElementById('calculate-button').addEventListener('click', () => {
        const weightInput = document.getElementById('user-weight');
        const input = parseFloat(weightInput.value);
        const planetName = planetSelect.options[planetSelect.selectedIndex].textContent;

        // const output = input * planets[planetName];
        // outputParagraph.textContent = `If you were on ${planetName}, you would weigh ${output}lbs!`;

        if (!isNaN(input) && planetName in planets) {
            // !!Remove math.round to pass the tests. This was added to prevent decimals trailing out of the container!!
            const output = Math.round(input * planets[planetName]); 
            const displayName = planetName === 'Sun' ? 'the Sun' : planetName; // Fix for "on Sun" => "on the Sun"
            outputParagraph.textContent = `If you were on ${displayName}, you would weigh ${output}lbs!`;
            console.log(planetName,output)
        } else {
            outputParagraph.textContent = 'Please enter a valid weight and select a planet.';
        }
    });
});
