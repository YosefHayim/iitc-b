-- ### Example 1: Sub query Returning a Single Value
-- Display the `CompanyName` of customers from the same region as Employee with ID 4.
-- ```sql
-- SELECT CompanyName
-- FROM Customers
-- WHERE Region = 
--     (SELECT Region
--      FROM Employees
--      WHERE EmployeeID = 4);
-- ```

-- **Explanation:**
-- - We want to display data from Table A (`Customers`), but the condition is based on a field from Table B (`Employees`), specifically `EmployeeID = 4`.
-- - The common field between both tables is `Region`.
-- - The sub query retrieves the `Region` value of the employee with ID 4 from Table B, which becomes the argument for the main query.

-- ---

-- ### Example 2: Using an Aggregate Function in a Sub query
-- Display `ProductID`, `ProductName`, and `UnitPrice` from the `Products` table for products that are priced higher than the average `UnitPrice`.
-- ```sql
-- SELECT ProductID, ProductName, UnitPrice
-- FROM Products
-- WHERE UnitPrice > (SELECT AVG(UnitPrice) FROM Products);
-- ```

-- **Explanation:**
-- - The sub query returns the average value of the `UnitPrice` column from the `Products` table, which in this case might be something like 28.8663.
-- - The main query then returns the product data where the price is higher than this average value.

--Q1
SELECT Products.ProductName, Products.ProductID,Products.UnitPrice
FROM Products
WHERE Products.UnitPrice < 
    (SELECT Products.UnitPrice 
     FROM Products 
     WHERE Products.ProductID = 8);

--Q2
SELECT Products.ProductName, Products.UnitPrice
FROM Products
WHERE Products.UnitPrice > 
    (SELECT Products.UnitPrice 
     FROM Products 
     WHERE Products.ProductName = 'Tofu');

--Q3
SELECT E.FirstName, E.HireDate
FROM Employees as E
WHERE E.HireDate > 
    (SELECT E.HireDate 
     FROM Employees as E 
     WHERE E.EmployeeID = 6);

--Q4
SELECT Products.ProductID, Products.ProductName, Products.UnitPrice
FROM Products
WHERE Products.UnitPrice > 
    (SELECT AVG(Products.UnitPrice) 
     FROM Products);

--Q5
SELECT P.ProductName, P.UnitsInStock
FROM Products as P
WHERE P.UnitPrice < 
    (SELECT MIN(Products.UnitPrice) 
     FROM Products
	 Where Products.CategoryID = 5);

--Q6
SELECT *
FROM Products
WHERE CategoryID = (SELECT CategoryID
 FROM Products
 WHERE ProductName = 'Chai')
AND ProductName <> 'Chai'

--Q7
SELECT productName , UnitPrice , CategoryID
FROM products
WHERE unitPrice IN (SELECT unitPrice
 FROM products
 WHERE categoryID = 5)

--Q8
SELECT productName , UnitPrice
FROM products
WHERE unitPrice > (SELECT MIN(unitPrice)
 FROM products
 WHERE categoryID = 5)

--Q9
 SELECT productName , UnitPrice
FROM products
WHERE unitPrice > ALL (SELECT unitPrice
 FROM products
 WHERE categoryID = 5)

 --Q10
SELECT O.OrderID, O.OrderDate
FROM Orders O
WHERE (ShipCountry = 'Germany' OR ShipCountry = 'France' OR ShipCountry = 'Sweden') 
  AND O.OrderDate > '1997-01-01' and O.OrderDate < '1998-01-01'

--Q11
 SELECT productName , ProductID
FROM products
WHERE UnitPrice > (SELECT AVG(unitprice)
					from Products
					Where UnitsInStock > 50)

--Q12
SELECT ProductName
FROM products
WHERE CategoryID IN (SELECT CategoryID
 FROM categories
 WHERE CategoryName IN('Beverages','Condiments'))
AND SupplierID IN (SELECT SupplierID
FROM suppliers
WHERE region IS NULL)


--Q13
SELECT CompanyName
FROM Suppliers
WHERE SupplierID IN (SELECT SupplierID
 FROM Products
 WHERE CategoryID =
(SELECT CategoryID
 FROM Categories
WHERE CategoryName = 'beverages'))

