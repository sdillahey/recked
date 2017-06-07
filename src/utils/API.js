
// hit API based on search bar search
//does city, country, continent include the search result?
function APIsearch(string) {
    return fetch('/api/cities')
    .then(data => data.json())
    .then(cities => {
        return cities.filter(city => {
            return (
                city.city.toLowerCase().includes(string) ||
                city.country.toLowerCase().includes(string) ||
                city.continent.toLowerCase().includes(string)
            );
        })
    })
    
}

//hit API based on sidenav selection
//if C .. must include C
//if A .. must include A
// otherwise _ || _ || _

//Add a new Reck
//push newReck into the city's data.recks & save the city

//on addCityReck click: if the user doesn't have a board for that city,
// create a new board with keys user, city, image
// (skip prev if already exists) then push the reck into that city's data.recks


//find user boards, return find user and return user.boards

export default {
    APIsearch
};