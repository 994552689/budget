DROP DATABASE IF EXISTS budgeting;
CREATE DATABASE budgeting;

CREATE TABLE envelopes (
  ID SERIAL PRIMARY KEY,
  category VARCHAR,
  budget INTEGER,
  fund INTEGER
);

INSERT INTO envelopes (category, budget, fund)
  VALUES ('Grocery', '1300', '1300');