const team = {
  _players : [

  {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 22
  },
  {
    firstName: 'John',
    lastName: 'Cena',
    age: 20
  },
  {
    firstName: 'Paul',
    lastName: 'Pogba',
    age: 25
  },

  ],
    get players() {
     return this._players;
  },

  //function
  addPlayer(firstName , lastName , age ){
  let player= {
    firstName ,
    lastName,
    age
  };
    this.players.push(player);
  },
  addGame(opponent , teamPoints , opponentPoints ){
  let game= {
    opponent ,
    teamPoints,
    opponentPoints
  };
    this.games.push(game);
  },

  _games : [
  {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Veginia',
    teamPoints: 40,
    opponentPoints: 27
  },
  {
    opponent: 'Arial',
    teamPoints: 30,
    opponentPoints: 27
  },
  ],
      get games() {
      return this._games;
      }
};

/*team.addPlayer("Steph","Curry",28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 75);

team.addGame('LA', 20 , 27);
team.addGame('Hawaii', 15 , 27);
team.addGame('Japan', 10 , 27);


console.log(team.players);*/

for (let name in team._players){
  console.log(`${name}`)
}