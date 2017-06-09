# Recked
## A Social Travel Platform built with the MERN Stack
### By Stacy Dillahey

<img src="https://i.imgur.com/CiiLe9X.png" width="150px">

Still a work in progress, Recked is planned to be a three-level tool for planning your next trip. To start, it provides search capabilities where you can narrow down on potential destinations based on a number of criteria. 

![Recked Search](https://i.imgur.com/qLHbamA.png)

Once you select a city, Recked will display a list of socially curated travel recommendations that pertain to that particular city. Based on your experience, you can up vote and down vote the recks and create your own.

![Recked Cities](https://i.imgur.com/QvbZs3d.png)

The last feature, which is still in the icebox, is to make your own ReckLists by adding your favorite recommendations. Here you will be able to see a map representation, through the GoogleMaps API, of your selected locations, displayed by category.

## Technologies Used:
1. React and React Router
2. MongoDB and Mongoose
3. Node.JS and Express
4. Bootstrap
5. AJAX via Fetch
6. Google OAuth and Passport
7. [React Stack Grid](https://tsuyoshiwada.github.io/react-stack-grid/#/)
8. [React Burger Menu](http://negomi.github.io/react-burger-menu/)

## The Production Process
Check Out the Deployed Site: 
[Here](https://recked.herokuapp.com/)  

See the Wireframes and User Stories: [Trello](https://trello.com/b/AalYVjba/recked)  

### Challenges Faced:  
- While implementing OAuth in a SPA, there were complications accessing the user data. Learned that the user is not included implicitly in the request when using Fetch.  
- Navigating throughout nested routes and redirecting within React while using React Router. Ended up using the history object as well as window.location.
- Handling for a user navigating via the URI to a nested route. Typically the componenet would be passed down state, but in these scenarios I handled the unavailable data by making an AJAX request for the necessary data.

### Upcoming Features:
- GoogleMaps API Integration
- User Photos incorporated with the Instagram API
- User Commenting capabilities


