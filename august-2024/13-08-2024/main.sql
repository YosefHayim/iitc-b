--Learning about the join method in sql:
-- select OrderID,Customers.CustomerID,OrderDate,Freight
-- from Customers left join Orders
-- on Orders.CustomerID = Customers.CustomerID 

-- select ProductID,ProductName,CategoryName, S.CompanyName
-- from Categories as C join Products as P
-- on C.CategoryID = P.CategoryID
-- join Suppliers as S
-- on S.SupplierID = P.SupplierID

--Q4
SELECT R.RegionDescription, T.TerritoryDescription
FROM Region AS R
JOIN Territories AS T
ON R.RegionID = T.RegionID

--Q5
SELECT P.ProductName, P.UnitPrice, C.CategoryName
FROM Products AS P JOIN Categories AS C       
ON P.CategoryID = C.CategoryID 
WHERE P.UnitPrice > 50;

--Q6
select P.ProductID, P.UnitPrice,P.SupplierID,C.CategoryName
from Products as P join Categories as C
ON P.CategoryID = C.CategoryID
WHERE P.SupplierID = 3

--Q7
select P.ProductID,P.UnitPrice,P.SupplierID,C.CategoryID
from Products as P join Categories as C
on P.CategoryID = C.CategoryID
Where C.CategoryName like '%a%'

--Q8
select P.ProductName,C.CategoryName,S.CompanyName
from Products as P join Categories as C
on P.CategoryID = C.CategoryID
join Suppliers as S
on P.SupplierID = S.SupplierID

--Q9
select P.ProductName, C.Description, S.City
from Products as P join Categories as C
on p.CategoryID = C.CategoryID
join Suppliers as S
on C.CategoryID = S.SupplierID
Where S.City = 'London' or S.City = 'Tokyo'

--Q10
select P.ProductID, C.Description, S.Country
from Products as P join Categories as C
on p.CategoryID = c.CategoryID
join Suppliers as S
on C.CategoryID = S.SupplierID
Where S.Country like 'a%'

--Q11
SELECT C.CompanyName,O.OrderID          
FROM Customers AS C Left JOIN  Orders AS O       
ON C.CustomerID = O.CustomerID

--Q12
select E.FirstName,E.LastName,o.OrderID,o.OrderDate,o.ShipAddress,c.CustomerID,c.ContactName,c.Phone
from Orders as O join Customers as C
on O.CustomerID = C.CustomerID
join Employees as E
on E.EmployeeID = O.EmployeeID
Where O.OrderDate > '1996-01-01' and C.CustomerID like 'a%' or C.CustomerID like 'c%'
Order by O.OrderDate DESC

--Example how to get the count of orders per customerID using the group by
SELECT CustomerID, COUNT(OrderID) AS OrderCount 
FROM Orders 
GROUP BY CustomerID;

--Q1 -- Group By:
select e.LastName 
from Employees as E
order by e.LastName ASC

--Skipping the questions that are not using the group by.

--Q11
select max(p.unitprice) as 'Max-Unit-Price', S.SupplierID
from Products as P join Suppliers as S
on p.SupplierID = s.SupplierID
group by S.SupplierID
order by S.SupplierID DESC

--Q12
select avg(p.UnitPrice) as 'avgP',s.SupplierID
from Products as P join Suppliers as S
on P.SupplierID = S.SupplierID
group by s.SupplierID
order by avgP DESC

--Q13
SELECT C.Country,C.City,COUNT(C.CustomerID) AS CustomerCount  
FROM Customers AS C                
GROUP BY C.Country, C.City                        
                   
--Lesson Q
select avg(O.freight) as 'avgF', max(o.freight) as 'MaxF', O.ShipCountry
from orders as O
group by O.ShipCountry

--Lesson Q2 
select max(P.unitprice) as 'maxUnit',P.SupplierID
from Products as P
group by P.SupplierID
having max(P.UnitPrice) > 50
order by max(P.unitprice) ASC

--Q14
select avg(p.unitprice) as 'avgUPrice',p.CategoryID
from products as P
group by P.CategoryID
having max(p.UnitPrice) > 40
order by max(p.unitprice)

--Q15 
select COUNT(C.CustomerID) as 'CountC', C.City
from Customers as C
group by C.City
having C.city = 'london'

--Q16
select p.categoryID,p.SupplierID,max(p.unitprice) as 'MaxP', min(p.unitprice) as 'MinP',
avg(p.unitprice) as 'avgP'
from Products as P
group by p.CategoryID, p.SupplierID

--Q17
select max(p.unitprice) as 'MaxUnitP',p.CategoryID
from Products as p
group by p.CategoryID
having max(p.unitprice) > 40

--Q18
select avg(p.unitprice), p.supplierID
from Products as p
group by p.SupplierID
having avg(p.unitprice) > 40

--Q19
SELECT C.CategoryName,SUM(P.UnitsOnOrder) AS TotalUnitsOnOrder,  SUM(P.UnitsInStock) AS TotalUnitsInStock    
FROM Products AS P JOIN Categories AS C
ON  P.CategoryID = C.CategoryID
GROUP BY C.CategoryName                              
HAVING C.CategoryName LIKE '%C%' AND SUM(P.UnitsOnOrder) > 100             
ORDER BY C.CategoryName ASC

--Q20
SELECT C.Region, C.City, COUNT(C.CustomerID) as TotalCustomers
FROM Customers as C
WHERE (C.City LIKE '%M%' OR C.City LIKE '%L%') 
AND C.Region IS NOT NULL
GROUP BY C.Region, C.City
HAVING COUNT(C.CustomerID) >= 2

--Q21
SELECT E.LastName, SUM(O.EmployeeID) as TotalEmployeeOrders, MAX(O.OrderDate)
FROM Employees as E JOIN Orders as O
ON O.EmployeeID = E.EmployeeID
GROUP BY E.LastName, O.OrderDate
order by TotalEmployeeOrders DESC









