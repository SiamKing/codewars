def solution(number)
 (3..number - 1).select {|num| num if num % 3 == 0 || num % 5 == 0}.inject(:+)
end
