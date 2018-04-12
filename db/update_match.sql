update matches
set player1 = $1, player1name = $5
where match = $2 and bracketid = $3 and roundid = $4