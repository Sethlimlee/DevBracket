select *
from teams
where $1 = ANY (teams.userid)