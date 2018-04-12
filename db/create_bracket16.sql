insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport)
values 
($1,$2,$17,1,1,$18, null, $19),
($3,$4,$17,2,1, null, null, $19),
($5,$6,$17,3,1, null, null, $19),
($7,$8,$17,4,1, null, null, $19),
($9,$10,$17,5,1, null, null, $19),
($11,$12,$17,6,1, null, null, $19),
($13,$14,$17,7,1, null, null, $19),
($15,$16,$17,8,1, null, null, $19),
(null,null,$17,1,2, null, null, $19),
(null,null,$17,2,2, null, null, $19),
(null,null,$17,3,2, null, null, $19),
(null,null,$17,4,2, null, null, $19),
(null,null,$17,1,3, null, null, $19),
(null,null,$17,2,3, null, null, $19),
(null,null,$17,1,4, null, null, $19),
(null,null,$17,1,5, null, 'yes', $19)
