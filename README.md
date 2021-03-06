# Gloomhelper App

Gloomhelper is an app for users playing the board game [Gloomhaven](https://boardgamegeek.com/boardgame/174430/gloomhaven) to more easily see and save character and party sheets across plays, rather than using paper sheets (and running out of erasers!).

## Links

* [Live Demo](https://gloomhelper.carmarsden.now.sh)
* [API Documentation](https://github.com/carmarsden/gloomhelper-server)


## Screenshots

### Home Page:

![home page](screenshots/home.png)

### Account Modals:

Choosing to log in or create an account pops up a modal on screen, leaving your work or page intact. Username and password are the only required user data.

![create account](screenshots/createacct.png)

### Add New Party:

Create a new party; content based on the Gloomhaven paper party sheets

![add party](screenshots/addparty.png)

### Add New Character:

Create a new character; first select class and then fill in character details based on the Gloomhaven paper character sheets

![add character](screenshots/addchar.png)

### Dashboard:

View your previously saved parties and characters.

Note: ability to edit/update previously saved parties & characters is coming soon!

![dashboard](screenshots/dashboard.png)

## Technology

### Built with:
* React, including Router & Context
    * Created with [create-react-app](https://github.com/facebook/create-react-app)
    * Confirmation modal via [react-modal](https://github.com/reactjs/react-modal)

### API Interface:
* Built to interface with Gloomhelper Server: [gloomhelper-server](https://github.com/carmarsden/gloomhelper-server)