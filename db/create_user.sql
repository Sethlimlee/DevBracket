insert into users
(authid, name)
values ($1, $2)

returning *;