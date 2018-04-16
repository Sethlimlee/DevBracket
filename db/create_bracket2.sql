insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport, creator, player1img)
values 
($1,$2,$3,1,1,$4, null, $5, $1, $6),
(null,null,$3,1,2, null, 'yes', $5, $1, null)