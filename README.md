# Project title

**Nyammm** refers to something yummy both in Hungarian and Catalan as well. I wanted to create a recipe app that can combine my love for both cuisines.
However, my plans got a bit blocked by the available data online. Therefore, my project is a basic recipe app with all kinds of cuisine but its name still has a touch of foreignness. 😄

## Project description

Before starting to work on my project I created a Google survey and 27 respondents filled it in. Based on the results I got the confirmation that users would be happy to use a Catalan cuisine app and would actually need something to feel more integrated in Catalonia. Most of the respondents 63 % answered 'Yes' to the question whether this application would be necessary. Considering the fact that most of the respondents 51.9 % do not use any cooking app, this is a positive reaction. But now as I am doing a general recipe app I realized, that before asking my future users what they want, I should have checked first what I can do with the data available. 😆 Big lesson for the future.

Anyway, it was fun to create user stories, user personas and wireframe for this MVP and I thought that I can really do the app in a way I imagined. But none of the tested API contained specific Catalan food. Even if I could have done the categories based on the holidays, there was only one Catalan recipe in the Spoonacualar food API I used. I have tried other food APIs as well, many of them were not for free and/or did not contain categories/recipes I was interested in. Another limitation of the Spoonacular API is that the free version is limited and after 150 recipe requests (which can happen pretty quickly while working on the app) it stops working.
Frist I created a .env file but it was not working well, so I could not hide my API key and had to use it together with the Spoonacular link.
Instead of creating a global CSS file I used React styled components which was handy to know, especially until now we mainly used separate CSS files during our exercises. React started to feel like an amusement park with surprises instead of an endless trail into darkness.

I think with a back end part I could make an app I want, uploading specific recipes and images but for now I leave it only with front end.

As this app contains different cuisines I wanted to add some of my favorites: Greek and Mediterranean as well.
The homepage contains the Healthy picks and the Vegetarian dishes, these are my favorite ones so I wanted to highlight them as well.

## Technological part

Using React Hooks seemed scary first but they can help a lot with simplifying coding. For me as I did this project with the help of a youtube course, I really had to understand how and why to use these hooks.
-useState()
-useEffect()
-useParams()
-useLocation()
-useNavigate()

First I installed [this extension](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets) in the VSCode. It has useful methods to shorten the way to create new components or import from react.

I created a **components** and **pages** folder in the source folder. I also deleted many things which were originally in the react app. (like the logo or testing files).
The **pages** folder contains 5 different files.
The *Home.jsx* is the file that contains a quote and the *Veggie* and *Popular* components.
The *Cuisine.jsx* has a function called Cuisine and that fetches recipes from Spoonacular.
The *Pages.jsx* has a function called Pages that returns the routes for the other pages (Home, Cuisine, Recipe and Searched). This helps keeping the App.js file more organized and cleaner.
The *Recipe.jsx* has the actual recipe with two buttons, the 'ingredients' and the 'instructions'. The actual recipe page appears every time when someone clicks on the recipe title.
The *Searched.jsx* page is connected with the Search component which has the actual search input. And here I used the useNavigate() feature that helps navigating programmatically in the React app. (more info [here](https://refine.dev/blog/usenavigate-react-router-redirect/#:~:text=The%20useNavigate%20hook%20lets%20you,and%20how%20to%20use%20it.))

The **components** folder contains 4 components.
The *Category.jsx* contains the different categories which appear as circles with the react-icons inside them. Here I added different categories, and they are wrapped in NavLink which is similar to Link but adds an 'active' feature to it. More info [here](https://reactrouter.com/en/main/components/link)
The *Popular.jsx* component gets random healthy recipes filtered by the search word 'healthy'. Here the original version of the app had the Trending picks but as I am more interested in veggie food, I changed it to vegetarian.
The *Search.jsx* component has the useNavigate hook and connects the search bar input value to the actual Searched.jsx page.
The *Veggie.jsx* component together with the *Popular.jsx* compnent are added to the Home.jsx page. Which is rendered in the Pages.jsx page.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credit statement

This is a student project that was created at
[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.

I used the [Scrimba course](https://scrimba.com/learn/learnreact) to learn more about React and other tutorials from youtube:

[Recipe app React course](https://www.youtube.com/watch?v=xc4uOzlndAk&list=PLJwkTKz89ybl8n5W7f9nDyjaBfqY5W1Q8&index=2&t=1544s)
[Using APIs in React](https://www.youtube.com/watch?v=tvfeBLMA_Q4&list=PLJwkTKz89ybl8n5W7f9nDyjaBfqY5W1Q8&index=3)
[Spoonacular food API](https://spoonacular.com/food-api)
I am very grateful for the React Hook [useEffect](https://beta.reactjs.org/reference/react/useEffect#controlling-a-non-react-widget)
and for the [React icons](https://react-icons.github.io/react-icons/)
Also happy with [Google Fonts](https://fonts.google.com/)
And last but definitely not least I have spent quite some time with understanding [React Route](https://www.w3schools.com/react/react_router.asp)
