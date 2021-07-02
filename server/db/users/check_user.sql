SELECT email, username
FROM users
WHERE email = ${email} OR username = ${username};