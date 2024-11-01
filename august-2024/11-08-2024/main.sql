-- the way to get data in sql is in the follow structure:
-- select 
-- column name1
-- column name2
-- column name 3
-- from

-- example:
-- select 
-- orderID,
-- orderdate,
-- customerid,
-- freight
-- from orders

-- Breakpoints to remember and understand:
-- in sql uppercases does not effect the syntax.
-- in sql first we write what we select then from what table to get 
-- the data from and inside between the two we say what columns to fetch.

--Modifinyg existing column and adding to it values:
-- select
-- quantity,
-- unitprice,
-- quantity + 2 as newQuantity,
-- unitprice * 3 as newUnitPrice
-- from [Order Details]

--Specific search of data that get all connect columns of the employeeID:
-- select *
-- from EmployeeTerritories
-- where EmployeeID = 2

--Exercises we did:
--Q1
--select *
--from orders

--Q2
--select *
--from Employees

--Q3
--select region,hiredate,firstname,country
--from Employees

--Q4
--select orderdate,orderid,customerid
--from orders

--Q5
--select productid as Productidname,
--unitprice as untpr
--from Products

--Q6
--select Address as "Add",
--city as ct
--from Employees

--Q7
--select CustomerID,
--Address + ' '+ city as fullAddress
--from Customers

--Q8
--select FirstName + ' '+LastName as FullName,
--birthdate,
--BirthDate + 8 as BirthDatePlus8,
--ReportsTo as Manager
--from Employees

--Q9
--select distinct city
--from Employees

--Q10
--select distinct country
--from Employees
--Q11
--select distinct title
--from Employees

--Q12
--select distinct country,city
--from Customers

--Q13
--select FirstName,BirthDate+5 as birthdate
--from Employees

--Q14
--select ProductName,UnitPrice,unitprice+10
--from Products

--Q15
--select ProductID,ProductName,UnitPrice *1.65 as unitprice16precent,UnitsInStock,UnitsOnOrder,UnitPrice - UnitsInStock as differencebetweenunitpricetostock
--from Products

--Q16
-- select ProductID,ProductName,UnitsInStock + UnitsOnOrder * UnitPrice as unitcosts
-- from Products