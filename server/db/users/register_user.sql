INSERT INTO users (
    email,
    username,
    password
) VALUES (
    ${email},
    ${username},
    ${hash}
)

RETURNING *;