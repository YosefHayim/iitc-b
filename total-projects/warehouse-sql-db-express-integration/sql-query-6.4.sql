DECLARE @FromDate DATE = '2024-08-10';  

SELECT 
    acc.Date AS PaymentDate,
    acc.OrderNo AS OrderNumber,
    acc.ReceiptNo AS ReceiptNumber,
    CASE WHEN acc.CrdtDebt = 'credit' THEN acc.Amount ELSE NULL END AS Income,
    CASE WHEN acc.CrdtDebt = 'debit' THEN acc.Amount ELSE NULL END AS Expense
FROM 
    dbo.Accounting acc
WHERE 
    acc.Date >= @FromDate
ORDER BY 
    acc.Date;

SELECT 
    SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END) AS TotalIncome,
    SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS TotalExpense,
    SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END) 
    - SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS Balance
FROM 
    dbo.Accounting
WHERE 
    Date >= @FromDate;
