const team = {
    _players: [
      {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
      },
      {
    firstName: 'Ardalan',
    lastName: 'Mirshani',
    age: 34
      },
      {
    firstName: 'Taylor',
    lastName: 'Gadapa',
    age:38
      }
    ],
    _games: [
      {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'longNight',
    teamPoints: 52,
    opponentPoints: 67
  },
  {
    opponent: 'Victory',
    teamPoints: 32,
    opponentPoints: 22
  }
    ],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this.players.push(player)
    },
    addGame(opp, myPts, oppPts)  {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      }
      this.games.push(game)
    }
  
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  team.addGame('Real Madrid', 32, 18);
  team.addGame('LiverPool', 11, 11);
  
  console.log(team.games)