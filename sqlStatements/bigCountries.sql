---  595. Big Countries
--- There is a table World
--- A country is big if it has an area of bigger than 
--- 3 million square km or a population of more than 25 million.
--- Write a SQL solution to output big countries' name, population and area.

select name, population, area from world where population > 25000000 or area > 3000000; 
---  Runtime: 231 ms, faster than 71.92% of MySQL online submissions for Big Countries.
---  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.