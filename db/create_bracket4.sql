insert into matches
(player1, player2, bracketid, match, roundid, player1name)
values 
($1,$2,$5,1,1,$6),
($3,$4,$5,2,1, null),
(null,null,$5,1,2, null)
