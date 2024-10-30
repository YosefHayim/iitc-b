--Answering Questions from 3.functions - exercises 
--Q8
select O.UnitPrice, 
ROUND(O.UnitPrice,0) as 'Rounded'
from [Order Details] as O

--Q9
select E.EmployeeID, 
SQRT(E.EmployeeID) as 'Square ID'
from Employees as E

--Q10
select O.OrderDate, 
O.ShippedDate,
DATEDIFF (dd,O.OrderDate,O.ShippedDate) AS 'DURATION'
from Orders as O

--Q11
SELECT CAST('2009-07-27' AS DATETIME) AS 'Converted'

--Q12
select LOWER(E.FirstName) as 'LowerFirst', 
E.LastName, UPPER(E.LastName) as 'UpperLast'
from Employees as E
WHERE E.EmployeeID between 3 and 5

--Q13
SELECT C.CategoryName,
C.Description,
CHARINDEX('i', C.Description) AS 'PositionOfI'
FROM Categories AS C
WHERE C.Description LIKE '% 4%';

--Q14
select P.ProductID,P.ProductName,REPLACE (P.ProductName,'e','-') AS REPLACEMENT 
from Products as P

--Q15
SELECT 
MIN(E.LastName) AS SmallestLastName,  -- Smallest last name alphabetically
MAX(E.FirstName) AS LargestFirstName  -- Largest first name alphabetically
FROM Employees AS E

--Q16
select COUNT(*) AS 'Number of rows'
from Employees as E

--Q17
SELECT COUNT(E.Region) AS 'Number of non-NULL Regions'
FROM Employees AS E
WHERE E.Region IS NOT NULL;

--Q18
select AVG(P.UnitPrice) as 'AverageP'
from Products as P

--Q19
SELECT COUNT(DISTINCT O.CustomerID) AS 'IDsNoDuplicates'
FROM Orders AS O;

--Q20
SELECT TOP (10) *
from Customers

--Q21
SELECT TOP (10) PERCENT *
FROM Customers 