insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport)
values 
($1,$2,$9,1,1,$10, null, $11),
($3,$4,$9,2,1, null, null, $11),
($5,$6,$9,3,1, null, null, $11),
($7,$8,$9,4,1, null, null, $11),
(null,null,$9,1,2, null, null, $11),
(null,null,$9,2,2, null, null, $11),
(null,null,$9,1,3, null, null, $11),
(null,null,$9,1,4, null, 'yes', $11)
