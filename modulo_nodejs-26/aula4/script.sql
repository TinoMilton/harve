CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice123');
INSERT INTO users (name, email) VALUES ('Bob', 'bobdoidao');

INSERT INTO posts (user_id, title, content) VALUES (1, 'First Post', 'This is the content of the first post.');
INSERT INTO posts (user_id, title, content) VALUES (2, 'Second Post', 'This is the content of the second post.');
