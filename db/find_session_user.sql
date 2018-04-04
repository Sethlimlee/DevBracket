select *
    from users, teams
where users.id = $1 and users.id = ANY (teams.userid)
