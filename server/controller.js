const chalk = require("chalk");
module.exports = {
  getTeam: (req, res) => {
    const db = req.app.get("db");

    db.get_team([req.params.team_name]).then(team => {
      console.log(team);
      res.status(200).send(team);
    });
  },

  getBracket: (req, res) => {
    const db = req.app.get("db");
    db.get_bracket([req.params.bracketid]).then(bracket => {
      res.status(200).send(bracket);
    });
  },

  findBracket: (req, res) => {
    const db = req.app.get("db");
    db.find_bracket([req.params.bracketid]).then(bracket => {
      res.status(200).send(bracket);
    });
  },

  winner: (req, res) => {
    const db = req.app.get("db");
    const { player, newMatch, bracketid, newRoundID, playerName, playerImg } = req.body;
    db
      .update_match([player, newMatch, bracketid, newRoundID, playerName, playerImg])
      .then(() => {
        return res.status(200).send();
      });
  },

  winner2: (req, res) => {
    const db = req.app.get("db");
    const { player, newMatch, bracketid, newRoundID, playerName, playerImg } = req.body;
    db
      .update_match2([player, newMatch, bracketid, newRoundID, playerName, playerImg])
      .then(() => {
        res.status(200).send();
      });
  },

  getBracketID: (req, res) => {
    const db = req.app.get("db");
    db.get_bracketid().then(response => {
      res.status(200).send(response);
    });
  },

  createBracket2: (req, res) => {
    const db = req.app.get("db");
    const { p1, p2, bracketid, p1name, sport, p1img } = req.body;

    db
      .create_bracket2([p1, p2, bracketid, p1name, sport, p1img])
      .then(() => res.status(200).send());
  },

  createBracket4: (req, res) => {
    const db = req.app.get("db");
    const { p1, p2, p3, p4, bracketid, p1name, sport, p1img } = req.body;

    db
      .create_bracket4([p1, p2, p3, p4, bracketid, p1name, sport, p1img])
      .then(() => res.status(200).send());
  },

  createBracket8: (req, res) => {
    const db = req.app.get("db");
    const {
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      bracketid,
      p1name,
      sport, p1img
    } = req.body;

    db
      .create_bracket8([
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8,
        bracketid,
        p1name,
        sport, p1img
      ])
      .then(() => res.status(200).send());
  },

  createBracket16: (req, res) => {
    const db = req.app.get("db");
    const {
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13,
      p14,
      p15,
      p16,
      bracketid,
      p1name,
      sport, p1img
    } = req.body;

    db
      .create_bracket16([
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7,
        p8,
        p9,
        p10,
        p11,
        p12,
        p13,
        p14,
        p15,
        p16,
        bracketid,
        p1name,
        sport, p1img
      ])
      .then(() => res.status(200).send());
  },

  getAllBracketIDs: (req, res) => {
    const db = req.app.get("db");

    db.get_all_bracketids().then(response => {
      res.status(200).send(response);
    });
  },

  rankings: (req, res) => {
    const db = req.app.get("db");

    db.get_rankings().then(response => {
      res.status(200).send(response);
    });
  },

  rankingsfoos: (req, res) => {
    const db = req.app.get("db");

    db.get_rankingsfoos().then(response => {
      res.status(200).send(response);
    });
  },

  addWin: (req, res) => {
    const db = req.app.get("db");
    const { player, roundid, sport, loser } = req.body;
    if (sport === "Pong") {
      if (roundid == 1) {
        db.add_win1([player]).then(() => {
          db.add_lose1([loser]).then(() => {
            res.status(200).send();
          })
        });
      }
      if (roundid == 2) {
        db.add_win2([player]).then(() => {
          res.status(200).send();
        });
      }
      if (roundid == 3) {
        db.add_win3([player]).then(() => {
          res.status(200).send();
        });
      }
      if (roundid == 4) {
        db.add_win4([player]).then(() => {
          res.status(200).send();
        });
      }
    }

    if (sport === "Foos") {
      if (roundid == 1) {
        db.add_win1Foos([player]).then(() => {
          db.add_lose1Foos([loser]).then(() => {
            res.status(200).send();
          })
        });
      }
      if (roundid == 2) {
        db.add_win2Foos([player]).then(() => {
          res.status(200).send();
        });
      }
      if (roundid == 3) {
        db.add_win3Foos([player]).then(() => {
          res.status(200).send();
        });
      }
      if (roundid == 4) {
        db.add_win4Foos([player]).then(() => {
          res.status(200).send();
        });
      }
    }
  },

  joinBracket: (req, res) => {
    const db = req.app.get("db");
    const { player1, player1name, total, matchid, player1img } = req.body;
    if (total !== 1) {
      db.join_bracket([player1, player1name, matchid, player1img ]).then(() => {
        res.status(200).send();
      });
    }
  },

  joinBracket2: (req, res) => {
    const db = req.app.get("db");
    const { player2, player2name, total, matchid, bracketid, player2img } = req.body;
    if (total !== 1) {
      db.join_bracket2([player2, player2name, matchid, player2img ]).then(() => {
        db.get_bracket;
        res.status(200).send();
      });
    } else {
      console.log("made it here");
      db.join_bracket2([player2, player2name, matchid, player2img]).then(() => {
        db.make_full([bracketid]).then(() => {
          res.status(200).send();
        });
      });
    }
  },

  button: (req, res) => {
    const db = req.app.get("db");
    const { match, bracketid, roundid } = req.body;
    db.button([match, bracketid, roundid]).then(() => {
      console.log('button should be removed')
      res.status(200).send();
    });
  },

  deleteBracket: (req, res) => {
    const db = req.app.get("db");
    db.delete_bracket([req.params.bracketid]).then(response => {
      res.status(200).send()
    })
  },
  
  updateUser: (req, res) => {
    const db = req.app.get("db");
    const { img, name, className } = req.body;
    const {id} = req.params
    db.update_user([id, img, name, className]).then(resp => {
      res.status(200).send()
    })
  },

  userBrackets: (req, res) => {
    const db = req.app.get("db");
    db.user_brackets().then(resp =>{
      res.status(200).send(resp)
    })
  },


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
