insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport, creator, player1img)
values 
($1,$2,$5,1,1,$6, null, $7, $1, $8),
($3,$4,$5,2,1, null, null, $7, $1, null),
(null,null,$5,1,2, null, null, $7, $1, null),
(null,null,$5,1,3, null, 'yes', $7, $1, null)