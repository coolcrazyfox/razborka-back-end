-- create TABLE person(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     surname VARCHAR(255)
-- );
-- create TABLE post(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     content VARCHAR(255),
--     user_id INTEGER,
--     FOREIGN KEY (user_id) REFERENCES person (id)
-- );
CREATE TABLE device(
    id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    country VARCHAR(255),
    device VARCHAR(255),
    oem_number VARCHAR(255) NOT NULL,
    count_ebay INTEGER DEFAULT 0,
    price_ebay DECIMAL(8,2),
    price_store DECIMAL(8,2),
    count_store INTEGER DEFAULT 0,
    link_adr VARCHAR(255),
    image_id VARCHAR(255)
    );

--     FOREIGN KEY (user_id) REFERENCES person (id)
);

