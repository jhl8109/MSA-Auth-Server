CREATE TABLE users.users (
    id int AUTO_INCREMENT,
    email char(40),
    name char(40),
    user_id varchar(255),
    encrypted_pwd varchar(255),
    PRIMARY KEY(id)
);
