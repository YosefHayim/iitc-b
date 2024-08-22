--Making the SQL darkmode: https://www.sqlshades.com/


-- 1. Find only the column 'shipcountry' that equals 'USA'
-- SELECT shipcountry
-- FROM Orders
-- WHERE shipcountry = 'USA';

-- 2. Find products with names containing the letter 'C'
-- SELECT productname, unitprice + 9 AS 'Adjusted Price', categoryid
-- FROM Products
-- WHERE productname LIKE '%C%';

-- 3. Find category IDs greater than 3
-- SELECT categoryid
-- FROM Categories
-- WHERE categoryid > 3;

-- 4. Sum all the values in the 'unitprice' column
-- SELECT SUM(unitprice) AS 'Total Unit Price'
-- FROM Products;

-- 5. Get the minimum value of 'unitprice'
-- SELECT MIN(unitprice) AS 'Minimum Unit Price'
-- FROM Products;

-- 6. Count the number of orders placed by each customer
-- SELECT customerid, COUNT(orderid) AS 'Order Count'
-- FROM Orders
-- GROUP BY customerid;

-- 7. Find the average unit price of products in each category
-- SELECT categoryid, AVG(unitprice) AS 'Average Unit Price'
-- FROM Products
-- GROUP BY categoryid;

-- 8. Find products with a unit price greater than 20 and in category ID 1
-- SELECT productname, unitprice, categoryid
-- FROM Products
-- WHERE unitprice > 20 AND categoryid = 1;

-- 9. Find the maximum unit price for each category
-- SELECT categoryid, MAX(unitprice) AS 'Max Unit Price'
-- FROM Products
-- GROUP BY categoryid;

-- 10. Select orders placed in the year 2023
-- SELECT orderid, orderdate
-- FROM Orders
-- WHERE YEAR(orderdate) = 2023;

-- 11. Select orders where the 'shipcountry' is either 'USA' or 'Canada'
-- SELECT orderid, shipcountry
-- FROM Orders
-- WHERE shipcountry IN ('USA', 'Canada');

-- 12. Find the distinct ship countries in the 'Orders' table
-- SELECT DISTINCT shipcountry
-- FROM Orders;

-- 13. Select product names and their prices, sorted by price in descending order
-- SELECT productname, unitprice
-- FROM Products
-- ORDER BY unitprice DESC;

-- 14. Find the top 5 most expensive products
-- SELECT productname, unitprice
-- FROM Products
-- ORDER BY unitprice DESC
-- LIMIT 5;

-- 15. Calculate the total number of products in each category
-- SELECT categoryid, COUNT(productid) AS 'Product Count'
-- FROM Products
-- GROUP BY categoryid;

--16 
-- Select 
-- MIN(freight) as 'MIN',
-- MAX(freight) as 'MAX',
-- AVG(freight) as 'AVG',
-- SUM(freight) as 'SUM',
-- COUNT(freight) as 'COUNT' -- calculate the total numbers of freights in orders.
-- from orders

--17 showing between p.k and f.k from two different tables and removing every row that has null
-- select *
-- from Products join Categories
-- on products.CategoryID = Categories.CategoryID

--18 get me only what that is available in both tabels p.k and f.k
-- select *
-- from Products inner join Categories
-- on products.CategoryID = Categories.CategoryID

--Doing from the exercise book:
use northwind;


--Q17
--select CompanyName,Country
--from Customers
--where CompanyName like '%a%'

--Q18
--select ProductName,ProductID
--from Products
--where ProductName like '%'

--Q19
--select OrderDate,OrderID,CustomerID,EmployeeID
--from Orders
--where Orderdate between '1997-04-01' and '1997-05-31'

--Q20
--select CustomerID,CompanyName,Country,Phone,Region
--from Customers
--where Country like '[FGM]%' and Region is null

--Q21
--SELECT EmployeeID, FirstName + ' ' + LastName AS FullName, BirthDate, Country
--FROM Employees
--WHERE LastName LIKE '%[DK]' or BirthDate > '1963-01-01'

--Q22
--select ProductName,UnitPrice,SupplierID
--from Products
--where UnitPrice > 30 and (SupplierID = 1 or SupplierID = 3)

--Q23
--select OrderID,EmployeeID,OrderDate,RequiredDate,ShipName
--from Orders
--where EmployeeID = 7 and ShipName = 'QUICK-stop' or ShipName = 'du mond entire' or ShipName = 'eastern connection' and (RequiredDate - OrderDate > 20)

--Q24
--select ProductID,ProductName
--from Products
--where (SupplierID in (8,16,21) or UnitPrice < 10) and (UnitsInStock not between 10 and 100)

--JOIN QUESTIONS:

--SELECT Products.ProductName, Categories.CategoryName
--FROM Products
--JOIN Categories ON Products.CategoryID = Categories.CategoryID;

--SELECT Products.ProductName, Suppliers.CompanyName
--FROM Products
--JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;