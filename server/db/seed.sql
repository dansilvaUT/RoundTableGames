CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS user_info (
    user_info_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    about TEXT,
    profile_pic TEXT
)

CREATE TABLE IF NOT EXISTS games (
    game_id SERIAL PRIMARY KEY,
    game_name VARCHAR(100) NOT NULL,
    game_image TEXT NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS game_reviews (
    review_id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
    reviewer INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    review INTEGER,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL
)

CREATE TABLE IF NOT EXISTS game_tags (
    game_tag_id SERIAL PRIMARY KEY,
    game INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
    tag INTEGER REFERENCES tags(tag_id)
)
