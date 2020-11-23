-- 620. Not Boring Movies

-- X city opened a new cinema, many people 
-- would like to go to this cinema.
-- The cinema also gives out a poster 
-- indicating the movies’ ratings and descriptions.
-- Please write a SQL query to output movies with
-- an odd numbered ID and a description that is not 'boring'. 
-- Order the result by rating.

select * from cinema 
    where id % 2 = 1 and 
    description<>'boring' 
    ORDER BY rating DESC;
-- Runtime: 253 ms, faster than 14.10% of MySQL online submissions for Not Boring Movies.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Not Boring Movies.