select distinct bracketid, bracketfull, player1, player2, bracketcomplete from matches
where roundid = 1
order by bracketid asc