const chalk = require('chalk');
module.exports = {
  getTeam: (req, res) => {
    const db = req.app.get("db");

    db.get_team([req.params.team_name]).then(team => {
      console.log(team);
      res.status(200).send(team);
    });
  },

  getBracket: (req,res) => {
    const db = req.app.get("db");
    db.get_bracket([req.params.bracketid]).then(bracket => {
      res.status(200).send(bracket)
    })
  }
  // getBracket: (req, res) => {
  //   const db = req.app.get("db");
  //   db.get_bracket([req.params.bracketid]).then(bracket => {
  //     bracket.map(match => {
  //       const db = req.app.get("db");
  //       db.get_player1([match.player1]).then(player1Name => {
  //         match.player1 = player1Name[0].name;
  //         const db = req.app.get("db");
  //         db.get_player2([match.player2]).then(player2Name => {
  //           match.player2 = player2Name[0].name;
  //           res.status(200).send(bracket);
  //         });
  //       });
  //     });
  //   });
  // },

  // getBracket: (req, res) => {
  //   const db = req.app.get("db");
  //   let displayBracket;
  //   db.get_bracket([req.params.bracketid]).then(bracket => {
  //     console.log(bracket);
  //     displayBracket = bracket.map((match, i) => {
  //       console.log(chalk.red(i, match.player1))
  //       if (match.player1 !== null) {
  //         db.get_player1([match.player1]).then(player1Name => {
  //           match.player1 = player1Name[0].name;
  //           console.log(chalk.blue(match.player1));
  //           // console.log(match.player1)
  //         });
  //       }
  //       if (match.player2 !== null) {
  //         db.get_player2([match.player2]).then(player2Name => {
  //           match.player2 = player2Name[0].name;
  //           // console.log(match.player2)
  //           console.log(chalk.yellow(match.player2));
  //           // console.log(bracket)
  //           // res.status(200).send(bracket)
  //         });
  //       }
  //       console.log(chalk.magenta(match.player1))
  //       return { ...match };
  //     });
  //   })
  //   .then(
  //     () => res.status(200).send(displayBracket))
  // },

  // getBracket: (req, res) => {
  //   const db = req.app.get("db");
  //   let displayBracket;
  //   db.get_bracket([req.params.bracketid]).then(bracket => {
  //     displayBracket = bracket.map((match, i) => {
  //       db.get_player1([match.player1]).then(player1Name => {
  //         db.get_player2([match.player2]).then(player2Name => {
            
  //           console.log(chalk.red(i))
  //           if(match.player1 !== null){
  //             match.player1 = player1Name[0].name
  //             console.log(chalk.magenta(match.player1));
              
  //           }
  //           if(match.player2 !== null){
  //             match.player2 = player2Name[0].name
  //             console.log(chalk.yellow(match.player2));
  //           }
  //             return match.player1
  //           })
  //         })
  //       })
  //     })
  //     .then(() => res.status(200).send(displayBracket))
  // },
};
