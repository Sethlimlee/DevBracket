module.exports = {

  getTeam: (req,res) => {
    const db = req.app.get("db")
    
  db.get_team([req.params.team_name])
  .then(team => {
    console.log(team)
    res.status(200).send(team)
  })
  }

}
