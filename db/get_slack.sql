select users.*, slack.slackname
from users
left join slack on slack.userid = users.id
where id = $1
