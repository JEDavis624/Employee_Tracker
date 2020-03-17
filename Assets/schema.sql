DROP DATABASE IF EXISTS employee_trackerDB
CREATE DATABASE employee_trackerDB

USE employee_trackerDB

CREATE TABLE department (
    id INT NOT NULL
    name VACHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT,
    PRIMARY KEY id
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id
    manager_id
    PRIMARY KEY id
);