--Functions to operate different actions on data:

--COUNT FUNCTION:
SELECT COUNT (*) 
FROM Employees 
WHERE Title = 'Sales Representative' 
-- Counts total employees with the title 'Sales Representative'

SELECT COUNT (Region) 
FROM Employees 
-- Counts total non-null values in the 'Region' column

SELECT COUNT (DISTINCT Region) 
FROM Employees 
-- Counts distinct regions from the 'Region' column

--SUM FUNCTION:
SELECT SUM(UnitPrice) AS TotalPrice 
FROM Products 
-- Sums up all the values in the 'UnitPrice' column

SELECT SUM(UnitPrice) AS TotalPrice, 
SUM(UnitsInStock) AS TotalInStock, 
SUM(UnitsOnOrder) AS TotalOnOrders 
FROM Products 
-- Sums multiple columns: 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder'

SELECT AVG(UnitsOnOrder) AS 'Average Units On Order' 
FROM Products 
-- Calculates the average of 'UnitsOnOrder'

SELECT MAX (UnitsOnOrder) AS 'MAX Units In Order' 
FROM Products 
-- Finds the maximum value in the 'UnitsOnOrder' column

SELECT MAX (ProductName) AS 'Max Name' 
FROM Products 
-- Finds the maximum (alphabetically last) product name

--MIN FUNCTION:
SELECT MIN (UnitsOnOrder) AS 'Min Units In Order' 
FROM Products 
-- Finds the minimum value in the 'UnitsOnOrder' column

--MIN FUNCTION:
SELECT MIN (ProductName) AS 'Min Name' 
FROM Products 
-- Finds the minimum (alphabetically first) product name

-- MIN AND MAX FUNCTION TOGETHER 
SELECT MIN (UnitsOnOrder) AS 'Min Units', 
MAX (UnitsOnOrder) AS 'Max Units' 
FROM Products 
-- Retrieves both the minimum and maximum values from 'UnitsOnOrder'

--VAR FUNCTION:
SELECT VAR (UnitsOnOrder) AS 'Shonut units in order' 
FROM Products 
-- Calculates the variance of 'UnitsOnOrder'

--STDEV FUNCTION:
SELECT STDEV (UnitsOnOrder) AS 'Standard Deviation of units in order' 
FROM Products 
-- Calculates the standard deviation of 'UnitsOnOrder'

--FUNCTION WITH MULTIPLE FUNCTIONS:
SELECT COUNT (*) AS 'Count',  
AVG (UnitsInStock) AS 'Average Units',  
MIN (UnitsOnOrder) AS 'Min Units in order', 
MAX (UnitsOnOrder) AS 'Max Units in order', 
STDEV (UnitsOnOrder) AS 'STDeviation Units in order', 
VAR (UnitsOnOrder) AS 'Variance units in order', 
SUM (UnitPrice) AS 'Sum Units Price' 
FROM Products 
-- Performs multiple aggregate functions in one query

--MATHEMATICAL FUNCTIONS:
SELECT ABS(A) AS Absolute_Value 
FROM Numbers 
-- Returns the absolute value of A

SELECT ProductID, ProductName, UnitPrice 
FROM Products 
WHERE ProductID IN (5,14,15,18) 
-- Selects specific products by ID

SELECT UnitPrice, 
CEILING (UnitPrice) AS 'Ceiling', 
FLOOR (UnitPrice) AS 'Floor'  
FROM Products  
WHERE ProductID IN (5,14,15,18) 
-- Returns the ceiling and floor values of 'UnitPrice'

SELECT UnitPrice, 
ROUND (UnitPrice, 0) AS 'ROUND' 
FROM Products 
WHERE ProductID IN (5,14,15,18) 
-- Rounds the 'UnitPrice' to the nearest integer

SELECT UnitPrice, 
EXP (UnitPrice) AS 'Exp UnitPrice' 
FROM  Products 
-- Returns the exponential value of 'UnitPrice'

SELECT UnitPrice, 
SQRT (UnitPrice) AS 'SQRT' 
FROM Products 
-- Returns the square root of 'UnitPrice'

SELECT UnitsOnOrder, 
SIGN (UnitsOnOrder) AS 'Sign' 
FROM  Products 
-- Returns the sign of 'UnitsOnOrder' (-1, 0, or 1)

SELECT ProductName, UnitsOnOrder 
FROM Products 
WHERE SIGN (UnitsOnOrder) = 1 
-- Selects products where 'UnitsOnOrder' is positive

SELECT CHAR (72) 
-- Returns the character with ASCII value 72 ('H')

SELECT ASCII ('H') 
-- Returns the ASCII value of 'H'

SELECT firstname, 
UPPER (FIRSTNAME) AS Capital, 
LOWER (FIRSTNAME) AS Small 
FROM Employees 
-- Converts 'FIRSTNAME' to uppercase and lowercase

SELECT FIRSTNAME,
REPLICATE (FIRSTNAME,2) AS DOUBLENAME 
FROM Employees 
-- Repeats 'FIRSTNAME' twice

SELECT FirstName, 
SPACE (4) + FirstName AS SPACESFIRST, 
FIRSTNAME + SPACE (4) AS SPACESLAST  
FROM Employees 
-- Adds spaces before and after 'FirstName'

SELECT FIRSTNAME, 
LEN (FIRSTNAME) AS NUMCHAR 
FROM Employees 
-- Returns the length of 'FIRSTNAME'

SELECT LASTNAME, 
REPLACE (LASTNAME,'ha','**') AS REPLACEMENT 
FROM Employees 
-- Replaces 'ha' in 'LASTNAME' with '**'

SELECT FIRSTNAME, 
SUBSTRING (FIRSTNAME, 2, 3) AS Tat_Machrozet 
FROM Employees 
-- Extracts a substring from 'FIRSTNAME' starting at position 2 for 3 characters

SELECT LASTNAME, 
PATINDEX ('%O%', LASTNAME) 
AS O_POSITION 
-- Returns the starting position of 'O' in 'LASTNAME'

SELECT CHARINDEX ('l', 'MichalTal',7)  
-- Returns the position of 'l' starting from the 7th character in 'MichalTal'

SELECT GETDATE() AS CurrentDate 
-- Returns the current date and time

SELECT BirthDate,  
DATEADD (yy,2,BirthDate) AS 'New Birthdate'  
FROM Employees 
-- Adds 2 years to 'BirthDate'

SELECT birthdate, 
hiredate, 
DATEDIFF (yy,birthdate,hiredate) AS 'Hired at age' 
FROM Employees 
-- Calculates the difference in years between 'birthdate' and 'hiredate'

SELECT DATEPART (yyyy, '2009-07-27') 
-- Extracts the year part from the date

SELECT DATEPART (month,'2009-07-27') 
-- Extracts the month part from the date

SELECT DATEPART (yy,getdate()) 
-- Extracts the year part from the current date

SELECT DATENAME (month,'2009-07-27') 
-- Returns the name of the month from the date

SELECT birthdate, 
day (birthdate) AS 'Born in day' 
FROM Employees 
-- Extracts the day part from 'birthdate'

SELECT birthdate, 
month (birthdate) AS 'Born in month' 
FROM Employees 
-- Extracts the month part from 'birthdate'

SELECT birthdate, 
year (birthdate) AS 'Born in year' 
FROM Employees 
-- Extracts the year part from 'birthdate'

SELECT EmployeeID, 
STR (EmployeeID) AS EmpString 
FROM Employees 
-- Converts 'EmployeeID' to a string

SELECT CAST (10.6496 AS int) 
-- Casts the value to an integer, truncating decimals

SELECT CAST (10.3496847 AS money) 
-- Casts the value to a money data type

SELECT CONVERT (int, 3.14765) 
-- Converts the value to an integer

SELECT GETDATE () AS CurrentDate, 
CAST (GETDATE () AS char(12)) AS String 
-- Converts the current date to a string

SELECT HireDate,  
CONVERT (char,Hiredate, 3)  AS New_Date 
FROM Employees 
-- Converts 'HireDate' to a specific date format

SELECT GETDATE () AS CurrentDate, 
CONVERT (char(12), 
GETDATE (), 101) AS StringAmerican, 
CONVERT (char(12), 
GETDATE (), 103) AS StringEurope 
-- Converts the current date to different string formats (American and European)

SELECT suser_name () 
-- Returns the current system user name

SELECT LastName,  ISNULL (Region, 'Unknown') AS Region  
FROM Employees 
-- Replaces NULL values in 'Region' with 'Unknown'

SELECT TOP (7) CustomerID 
FROM Orders 
-- Selects the top 7 rows based on 'CustomerID'

SELECT TOP (7) PERCENT CustomerID 
FROM Orders 
-- Selects the top 7% of rows based on 'CustomerID'

SELECT SUM (LASTNAME) FROM CHARACTERS 
-- Sums the values in 'LASTNAME' column (assuming numeric values)
