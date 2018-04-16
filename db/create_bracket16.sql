insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport, creator, player1img)
values 
($1,$2,$17,1,1,$18, null, $19, $1, $20),
($3,$4,$17,2,1, null, null, $19, $1, null),
($5,$6,$17,3,1, null, null, $19, $1, null),
($7,$8,$17,4,1, null, null, $19, $1, null),
($9,$10,$17,5,1, null, null, $19, $1, null),
($11,$12,$17,6,1, null, null, $19, $1, null),
($13,$14,$17,7,1, null, null, $19, $1, null),
($15,$16,$17,8,1, null, null, $19, $1, null),
(null,null,$17,1,2, null, null, $19, $1, null),
(null,null,$17,2,2, null, null, $19, $1, null),
(null,null,$17,3,2, null, null, $19, $1, null),
(null,null,$17,4,2, null, null, $19, $1, null),
(null,null,$17,1,3, null, null, $19, $1, null),
(null,null,$17,2,3, null, null, $19, $1, null),
(null,null,$17,1,4, null, null, $19, $1, null),
(null,null,$17,1,5, null, 'yes', $19, $1, null)
