CREATE PROCEDURE GetOrdersByStatus
AS
BEGIN
    SELECT 
        ord.Date AS OrderDate,
        ord.SuppDate AS SupplyDate,
        ord.Status AS OrderStatus,
        inv.TotAmount AS OrderAmount
    FROM 
        dbo.ExOrders ord
    LEFT JOIN 
        dbo.Invoices inv ON ord.OrderNo = inv.OrderNo
    WHERE 
        ord.Status IN ('Pending', 'Canceled','Delivered')
    ORDER BY 
        ord.SuppDate;
END;

EXEC GetOrdersByStatus;
