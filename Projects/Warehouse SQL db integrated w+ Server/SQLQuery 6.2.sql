SELECT 
    eo.date AS OrderDate,
    SUM(i.UnitPrice * eo.quant) AS OrderAmount,
    eo.code AS ItemCode,
    eo.quant AS QuantityOrdered,
    eo.status AS OrderStatus
FROM 
    dbo.ExOrders eo
JOIN 
    dbo.Items i ON eo.code = i.code
WHERE 
    eo.status = 'Shipped' 
    AND eo.date BETWEEN '2024-08-01' AND '2024-08-10'
    AND eo.orderno = '1002'
GROUP BY 
    eo.date, eo.code, eo.quant, eo.status
ORDER BY 
    eo.date;
