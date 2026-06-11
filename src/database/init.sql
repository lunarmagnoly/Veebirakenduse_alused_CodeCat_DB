CREATE DATABASE CodeCatDB;

USE CodeCatDB;

CREATE TABLE Tasks (
    
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500),
    Status NVARCHAR(30) NOT NULL,
    Priority NVARCHAR(20),
    DueDate DATE,
    CompletedDate DATE
);