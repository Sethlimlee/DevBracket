select *, ((users.round1winsfoos * 30) + (users.round2winsfoos * 60) + (users.round3winsfoos * 90) + (users.round4winsfoos * 120) + (users.loss * 15)) as points from users
order by points desc