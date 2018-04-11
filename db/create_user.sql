insert into users
(authid, name, round1wins, round2wins, round3wins, round4wins)
values ($1, $2, 0, 0, 0, 0)

returning *;