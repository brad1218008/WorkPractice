----------------------------------------
-- SQL Homework
-- 2018/05/15
-- Brad Fang
----------------------------------------


--Open datebase
use TSQL2012
GO


--Q1.請列出每個銷售員每年訂單數量，並依員編及年度做排序。


SELECT Emp.EmployeeID as empid, Emp.FirstName as firstname, Emp.LastName as lastname,
	Year(Sal.OrderDate) as orderyear,count(*) as ordercnt
FROM HR.Employees as Emp, Sales.Orders as Sal
WHERE Emp.EmployeeID = Sal.EmployeeID
GROUP BY Emp.EmployeeID, Emp.FirstName, Emp.LastName, Year(Sal.OrderDate)
ORDER BY Emp.EmployeeID
GO


--Q2.列出最受歡迎產品前五名(銷售數量最多前五名)

SELECT TOP(5)OD.ProductID, Pro.ProductName, SUM(Qty) as qty
FROM Sales.OrderDetails as OD, Production.Products as Pro
WHERE OD.ProductID = Pro.ProductID
GROUP BY OD.ProductID, Pro.ProductName
ORDER BY qty DESC
GO


--Q3.以10歲為間隔列出每個年齡層員工人數

--SOLUTION 1
IF OBJECT_ID('HR.AgeRange') IS NOT NULL
	DROP VIEW HR.AgeRange;
GO

--count by range
CREATE VIEW HR.AgeRange
AS
SELECT SUM(CASE WHEN AgeTable.age BETWEEN 20 AND 29 THEN 1 ELSE 0 END) as [20~29],
	   SUM(CASE WHEN AgeTable.age BETWEEN 30 AND 39 THEN 1 ELSE 0 END) as [30~39],
	   SUM(CASE WHEN AgeTable.age BETWEEN 40 AND 49 THEN 1 ELSE 0 END) as [40~49],
	   SUM(CASE WHEN AgeTable.age BETWEEN 50 AND 59 THEN 1 ELSE 0 END) as [50~59],
	   SUM(CASE WHEN AgeTable.age BETWEEN 60 AND 69 THEN 1 ELSE 0 END) as [60~69],
	   SUM(CASE WHEN AgeTable.age BETWEEN 70 AND 79 THEN 1 ELSE 0 END) as [70~79]
FROM(SELECT DATEDIFF(YY,BirthDate,GETDATE()) as age
	FROM HR.Employees) as AgeTable
GO

--unpivot to convert
SELECT agera, total
FROM HR.AgeRange
UNPIVOT (total FOR agera IN([20~29],[30~39],[40~49],[50~59],[60~69],[70~79])) as unpvt
WHERE total != 0
GO

IF OBJECT_ID('HR.AgeRange') IS NOT NULL
	DROP VIEW HR.AgeRange;
GO

--SOLUTION 2

SELECT CASE WHEN a.age BETWEEN 20 AND 29 THEN '20-29' 
			WHEN a.age BETWEEN 30 AND 39 THEN '30-39' 
			WHEN a.age BETWEEN 40 AND 49 THEN '40-49' 
			WHEN a.age BETWEEN 50 AND 59 THEN '50-59'
			WHEN a.age BETWEEN 60 AND 69 THEN '60-69'
			WHEN a.age BETWEEN 70 AND 79 THEN '70-79'
			ELSE 'OVER 79' END as rng,
	   count(*) as cnt
FROM(SELECT  DATEDIFF(YY,BirthDate,GETDATE()) as age
	FROM HR.Employees) as a
GROUP BY CASE  WHEN a.age BETWEEN 20 AND 29 THEN '20-29' 
			   WHEN a.age BETWEEN 30 AND 39 THEN '30-39' 
			   WHEN a.age BETWEEN 40 AND 49 THEN '40-49' 
			   WHEN a.age BETWEEN 50 AND 59 THEN '50-59'
			   WHEN a.age BETWEEN 60 AND 69 THEN '60-69'
			   WHEN a.age BETWEEN 70 AND 79 THEN '70-79'
			   ELSE 'OVER 79' END
HAVING count(*) > 0

--SOLUTION 3

IF OBJECT_ID('HR.AgeRange') IS NOT NULL
	DROP PROC HR.AgeRange;
GO

--DECLARE @range INT = 5
CREATE PROC HR.AgeRange
(@range INT,@datetime DATETIME = null)
AS
IF @datetime IS NULL
 SET @datetime = GETDATE()
SELECT CONCAT(CAST(a.age as int)*@range , '-' ,CAST(a.age as int)*@range+@range-1) as age,
	   count(*) as cnt
FROM(SELECT  DATEDIFF(YY,BirthDate,@datetime)/@range as age
	FROM HR.Employees
	WHERE DATEDIFF(YY,BirthDate,@datetime)/@range >= 0) as a
GROUP BY a.age
HAVING count(*) > 0
GO

EXEC HR.AgeRange @range=10,@datetime='2008/10/10';

IF OBJECT_ID('HR.AgeRange') IS NOT NULL
	DROP PROC HR.AgeRange;
GO

--4.撈出每個國家銷售數量前3名的員工及數量


IF OBJECT_ID('HR.TopThreeCountry') IS NOT NULL
	DROP VIEW HR.TopThreeCountry;
GO

--compute rank by country and employee
CREATE VIEW HR.TopThreeCountry
AS
SELECT ROW_NUMBER() OVER (PARTITION BY Ord.ShipCountry ORDER BY count(*) DESC) AS seq,
	   Ord.ShipCountry, Emp.EmployeeID, Emp.FirstName, Emp.LastName, count(*) as cnt
FROM Sales.Orders AS Ord, HR.Employees as Emp
WHERE Ord.EmployeeID = Emp.EmployeeID
GROUP BY Emp.EmployeeID, Ord.ShipCountry, Emp.FirstName, Emp.LastName
GO

--get top 3 in country
SELECT *
FROM HR.TopThreeCountry
WHERE seq <=3
GO

IF OBJECT_ID('HR.TopThreeCountry') IS NOT NULL
	DROP VIEW HR.TopThreeCountry;
GO

--5.請列出2006,2007,2008 員工銷售數字比較

--use sum to compute the results
SELECT Emp.EmployeeID As empid,Emp.FirstName AS firstname,Emp.LastName AS lastname,
	   SUM(CASE WHEN Year(Ord.OrderDate) = 2006 THEN 1 ELSE 0 END) AS CUT2006,
	   SUM(CASE WHEN Year(Ord.OrderDate) = 2007 THEN 1 ELSE 0 END) AS CUT2007,
	   SUM(CASE WHEN Year(Ord.OrderDate) = 2008 THEN 1 ELSE 0 END) AS CUT2008
FROM Sales.Orders AS Ord, HR.Employees AS Emp
WHERE Ord.EmployeeID = Emp.EmployeeID
GROUP BY Emp.EmployeeID, Emp.FirstName, Emp.LastName
ORDER BY Emp.EmployeeID


--6.請使用PIVOT語法列出2006,2007,2008 員工銷售數字比較

IF OBJECT_ID('HR.YearList') IS NOT NULL
	DROP VIEW HR.YearList;
GO

--count Employee sale every year
CREATE VIEW HR.YearList
AS
SELECT Emp.EmployeeID As empid, Emp.FirstName, Emp.LastName, Year(OrderDate) AS orderyear, COUNT(*) AS num
FROM Sales.Orders AS Ord, HR.Employees AS Emp
WHERE Ord.EmployeeID = Emp.EmployeeID
GROUP BY Emp.EmployeeID, Emp.FirstName, Emp.LastName, Year(OrderDate)
GO
--ISNULL([2006], 0) AS CNT2006,ISNULL([2007], 0) AS CNT2007,ISNULL([2008], 0) AS CNT2008
--use pivot to conert
SELECT empid,FirstName,LastName, ISNULL([2006], 0) AS CNT2006,
       ISNULL([2007], 0) AS CNT2007, ISNULL([2008],0) AS CNT2008
FROM HR.YearList
PIVOT (sum(num) FOR orderyear in([2006],[2007],[2008])) AS pvt
ORDER BY empid
GO

IF OBJECT_ID('HR.YearList') IS NOT NULL
	DROP VIEW HR.YearList;
GO

--7.呈上請使用PIVOT語法列出各年度員工銷售數字比較(動態分析所有年度)

IF OBJECT_ID('HR.YearList') IS NOT NULL
	DROP VIEW HR.YearList;
GO

--count Employee sale every year
CREATE VIEW HR.YearList
AS
SELECT Emp.EmployeeID As empid, Emp.FirstName, Emp.LastName, Year(OrderDate) AS orderyear, COUNT(*) AS num
FROM Sales.Orders AS Ord, HR.Employees AS Emp
WHERE Ord.EmployeeID = Emp.EmployeeID
GROUP BY Emp.EmployeeID, Emp.FirstName, Emp.LastName, Year(OrderDate)
GO

DECLARE @year NVARCHAR(MAX)
DECLARE @query NVARCHAR(MAX)
DECLARE @CTNyear NVARCHAR(MAX)

--dynamic colume name
SET @year =	STUFF((SELECT distinct ',' + QUOTENAME(Year(OrderDate)) 
					FROM Sales.Orders
					FOR XML PATH(''), TYPE
					).value('.', 'NVARCHAR(MAX)') 
					,1,1,'')

--dynamic colume
SET @CTNyear = STUFF((SELECT distinct ',ISNULL(' + QUOTENAME(Year(OrderDate)) +
					', 0) AS CNT' + CONVERT(NVARCHAR,Year(OrderDate)) + ''
					FROM Sales.Orders
					FOR XML PATH(''), TYPE
					).value('.', 'NVARCHAR(MAX)') 
					,1,1,'')

--Dynamic Query for Question
SET @query = 'SELECT empid,FirstName,LastName,' + @CTNyear +
			  ' FROM HR.YearList
			   PIVOT (sum(num) FOR orderyear in(' + @year + ')) AS pvt
			   ORDER BY empid'
EXEC(@query)
GO

IF OBJECT_ID('HR.YearList') IS NOT NULL
	DROP VIEW HR.YearList;
GO

--8. 請查詢出訂單編號為11070的明細資料，其中包含訂單代號、訂購日期(yyyy/mm/dd)、
--   需要日期(yyyy/mm/dd)、公司名稱(id-name)、管理員(名 姓)、商品(id-name)、原價、數量、小計

SELECT Ord.OrderID, FORMAT(Ord.OrderDate, 'yyyy/MM/dd') AS orderdate,
       FORMAT(Ord.RequiredDate, 'yyyy/MM/dd') AS requireDate,
	   convert(varchar(4),Cus.CustomerID) + '-' + Cus.CompanyName AS CompanyName,
	   Emp.FirstName + ' ' + Emp.LastName AS Name,
	   convert(varchar(4),Pro.ProductID) + '-' + Pro.ProductName AS ProductName,
	   Pro.UnitPrice, OD.Qty, (Pro.UnitPrice*OD.Qty) AS TotalPrice
FROM (Sales.Orders AS Ord
	 JOIN  Sales.OrderDetails AS OD
	  ON OD.OrderID = Ord.OrderID
	 JOIN  Sales.Customers AS Cus
	  ON Cus.CustomerID = Ord.CustomerID
	 JOIN  HR.Employees AS Emp
	  ON Emp.EmployeeID = Ord.EmployeeID)
		  JOIN Production.Products AS Pro
	     ON OD.ProductID = Pro.ProductID
WHERE Ord.OrderID = 11070


--9. 於11070訂單新增產品代號為38的商品,數量2個,沒有折扣,並修改需要日期為2008/10/10

--DECLARE @Oid INT = 11070
--DECLARE @Pid INT = 38
--DECLARE @Qty INT = 2
--DECLARE @disco FLOAT = 0.000
--DECLARE @updateTime DATETIME = '2008/10/10'

IF OBJECT_ID('Sales.InsertDate') IS NOT NULL
	DROP PROC Sales.InsertDate;
GO

CREATE PROCEDURE Sales.InsertDate
(@Oid INT,@Pid INT,@Qty INT,@disco FLOAT,@updateTime DATETIME)
AS
-- new Date 
INSERT INTO Sales.OrderDetails(OrderID,ProductID,UnitPrice,Qty,Discount)
	SELECT @Oid, @Pid, Pro.UnitPrice, @Qty, @disco
	FROM Production.Products AS Pro
	WHERE Pro.ProductID = @Pid

-- update date
UPDATE Sales.Orders
	SET RequiredDate = @updateTime
	WHERE OrderID = @Oid
GO

EXEC Sales.InsertDate @Oid=11070,@Pid=38,@Qty=2,@disco=0.000,@updateTime='2008/10/10';
GO

IF OBJECT_ID('Sales.InsertDate') IS NOT NULL
	DROP PROC Sales.InsertDate;
GO

--10. 請將題9新增的商品(商品代號=38)刪除

--DECLARE @Oid INT = 11070
--DECLARE @Pid INT = 38
--DECLARE @updateTime DATETIME = '2008/06/02'

IF OBJECT_ID('Sales.deleteDate') IS NOT NULL
	DROP PROC Sales.deleteDate;
GO

CREATE PROCEDURE Sales.deleteDate
(@Oid INT,@Pid INT,@updateTime DATETIME)
AS
--delete date
DELETE FROM Sales.OrderDetails
WHERE OrderID = @Oid
	and ProductID = @Pid

--update date
UPDATE Sales.Orders
	SET RequiredDate = @updateTime
	WHERE OrderID = @Oid
GO

EXEC Sales.deleteDate @Oid=11070,@Pid=38,@updateTime='2008/10/10';
GO

IF OBJECT_ID('Sales.deleteDate') IS NOT NULL
	DROP PROC Sales.deleteDate;
GO

