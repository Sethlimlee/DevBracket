insert into matches
(player1, player2, bracketid, match, roundid, player1name)
values 
($1,$2,$9,1,1,$10),
($3,$4,$9,2,1, null),
($5,$6,$9,3,1, null),
($7,$8,$9,4,1, null),
(null,null,$9,1,2, null),
(null,null,$9,2,2, null),
(null,null,$9,1,3, null)
