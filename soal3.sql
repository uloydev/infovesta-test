-- query a
SELECT * FROM Employee e LEFT JOIN AnnualReviews a ON e.ID=a.EmpID;

-- query b
SELECT * FROM Employee WHERE TerminationDate IS NULL;

-- query c
SELECT * FROM Employee e LEFT JOIN AnnualReviews a ON e.ID=a.EmpID WHERE a.EmpID IS NULL ORDER BY HireDate ASC;

-- query d
SELECT e.*, COUNT(1) jumlah_review  FROM Employee e JOIN AnnualReviews a ON e.ID=a.EmpID GROUP BY a.EmpID;

-- query e 
