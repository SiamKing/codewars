def divisors(n)
  arr = []

  (2..(n / 2)).each do |num|
    arr << num if n % num == 0
  end

  arr.empty? ? "#{n} is prime" : arr
end
