update matches
set player2 = $1, player2name = $5, player2img = $6
where match = $2 and bracketid = $3 and roundid = $4