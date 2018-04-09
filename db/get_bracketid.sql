select bracketid
from matches
where bracketid = (select max(bracketid) from matches)
limit 1