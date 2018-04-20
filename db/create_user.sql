insert into users
(authid, name, img, round1wins, round2wins, round3wins, round4wins, round1winsfoos, round2winsfoos, round3winsfoos, round4winsfoos, loss, lossfoos, slack)
values ($1, $2, $3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '(To Contact Opponents)')

returning *;