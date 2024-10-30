DECLARE @CustID VARCHAR(9) = '000000001';

SELECT 
    c.CustID AS CustomerID,
    c.CustName AS CustomerName,
    c.CustStatus AS CustomerStatus,
    eo.OrderNo AS OrderNumber,
    eo.Status AS OrderStatus,
    eo.Code AS ItemCode,
    eo.Quant AS QuantityOrdered,
    s.Freq AS OrderFrequency
FROM 
    dbo.Customers c
JOIN 
    dbo.ExOrders eo ON c.CustID = eo.CustID -
LEFT JOIN 
    dbo.Subscription s ON eo.OrderNo = s.OrderNo
WHERE 
    c.CustID = @CustID 
ORDER BY 
    eo.OrderNo;
