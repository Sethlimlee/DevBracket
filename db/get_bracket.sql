select *
from matches
where bracketid = $1
order by id