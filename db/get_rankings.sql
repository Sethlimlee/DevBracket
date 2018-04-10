select *, ((users.round1wins * 30) + (users.round2wins * 60) + (users.round3wins * 90) + (users.round4wins * 120)) as points from users
order by points desc