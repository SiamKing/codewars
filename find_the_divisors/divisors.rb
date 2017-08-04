def divisors(n)
  arr = (2..(n / 2)).select {|num| n % num == 0}

  arr.empty? ? "#{n} is prime" : arr
end
