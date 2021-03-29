# Hotel Spa 

## Quick start

1.  This mini-project is using React Hooks as starting seed.
2.  Make sure that you have Node v8 or above installed.
3.  From the terminal `cd hotel-spa`.
3.  Run `npm run setup` in order to install dependencies and clean the git repo.
4.  Run `npm start` to see the example app at `http://localhost:3000`.

Now you're ready to rumble!

## Structure

The [`public`] folder contains the main HTML and the react icon.
In the [`src/`] folder you can find the entire application code, including JavaScript,
SCSS and JSON files.

## Solution

This application uses responsive design which adopts in different screens such as laptops, tablets, mobiles.
I decided to make a reusable layout because the components' styles were repeated. 

The main data for 2 tabs is in [`api/`] folder. All the fonts, images are situated inside the [`assets/`] folder.
In the [`components/pages`] you can find the main tabs which are imported into [`App.js`] where I used [`react-router-dom`].

The boxes, the accordion and the navigation are imported from the [`components/Box`],[`components/Accordion`] and [`components/Navigation`] which also contain some functionality.

[`Navigation`] is wrapped into the [`withRouter`] higher order component to connect it to the router. Here I use a logic where the main tab is redirected to [`Tab1`].

[`Box`]s' uses a radio button logic where the [`id`] of the box is used to change the option.

[`Accordion`] contains two level mapping and functionality to fold the and unfold them.



