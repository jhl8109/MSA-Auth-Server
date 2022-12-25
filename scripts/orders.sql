CREATE TABLE users.orders (
    id int AUTO_INCREMENT,
    product_id char(40),
    qty int,
    unit_price int,
    total_price int,
    user_id varchar(255),
    order_id varchar(255),
    created_at Date,
    PRIMARY KEY(id)
);
