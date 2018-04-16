insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport, creator, player1img)
values 
($1,$2,$9,1,1,$10, null, $11, $1, $12),
($3,$4,$9,2,1, null, null, $11, $1, null),
($5,$6,$9,3,1, null, null, $11, $1, null),
($7,$8,$9,4,1, null, null, $11, $1, null),
(null,null,$9,1,2, null, null, $11, $1, null),
(null,null,$9,2,2, null, null, $11, $1, null),
(null,null,$9,1,3, null, null, $11, $1, null),
(null,null,$9,1,4, null, 'yes', $11, $1, null)
