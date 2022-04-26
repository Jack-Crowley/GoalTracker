CREATE TABLE goals (
    id INT NOT NULL AUTO_INCREMENT,
    goal VARCHAR(45) NOT NULL,
    startdate DATE NULL,
    enddate DATE NULL,
    description VARCHAR(45) NULL,
    PRIMARY KEY (id));