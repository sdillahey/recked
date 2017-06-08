
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

//do i want array to be full of true falses in position or include the selected values
function APIfilter(array) {
    return fetch('/api/cities')
    .then(data => data.json())
    .then(cities => {
        let prioritySearch = [];
        if (array.includes('A') && array.includes('C')) {
           prioritySearch = cities.filter(city => city.tags.includes('A' && 'C'));
        } else if (array.includes('A')) {
            return prioritySearch = cities.filter(city => city.tags.includes('A'));
        } else if (array.includes('C')) {
            return prioritySearch = cities.filter(city => city.tags.includes('C'));
        }
        return prioritySearch.length ? prioritySearch
            : cities.filter(city => city.tags.some((tag) => array.includes(tag)))
    })
}

//Add a new Reck
//push newReck into the city's data.recks & save the city

//on addCityReck click: if the user doesn't have a board for that city,
// create a new board with keys user, city, image
// (skip prev if already exists) then push the reck into that city's data.recks


//find user boards, return find user and return user.boards

export default {
    APIsearch,
    APIfilter
};