insert into users
(authid, name, round1wins, round2wins, round3wins, round4wins, round1winsfoos, round2winsfoos, round3winsfoos, round4winsfoos, loss, lossfoos)
values ($1, $2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

returning *;