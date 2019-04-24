# Simplified Save System

Simplified Save System or SSS is a NodeJS server that can be used to save any type of date for all tour game projects.

## Getting Started

### Prerequisites

You need to have NodeJS running and a MongoDB database.

### Installing

First you'll need to clone this repository.

Next you change the .env to fix your setup.

Then you install the modules.

```
npm install
```

Finally you launch the server.

```
npm run start
```

## Usage

##### Registering a game :
```
[URL]/game/:new_game_name @POST
```
It will return a unique id corresponding to the game, keep it preciously.

##### Saving :
```
[URL]/:game_id/:user_id/:data @POST
```
(Soon to be changed)

##### Loading :
```
[URL]/:game_id/:user_id @GET
```


## Authors

* **Sebastien Vandromme** - *Initial work* - [Nathaden](https://github.com/Nathaden)

## License

This project is fully Open Source.

Do whatever you want with it.

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

