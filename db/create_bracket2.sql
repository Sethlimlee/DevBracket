insert into matches
(player1, player2, bracketid, match, roundid, player1name, winner, sport)
values 
($1,$2,$3,1,1,$4, null, $5),
(null,null,$3,1,2, null, 'yes', $5)