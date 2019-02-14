(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    console.log('\n');
    console.log('string with breaks');
    console.log('======');
    console.log('\n');
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join('\n');
    console.log(planetsString);

    console.log('\n');
    console.log('unordered list');
    console.log('======');
    console.log('\n');

    planetsArray = planetsString.split('\n');
    var planets = '<ul> \n'

    planetsArray.forEach(function(planet) {
        planets += '<li>' + planet + '</li> \n';
    });
    planets += '</ul>';

    console.log(planets);
})();
