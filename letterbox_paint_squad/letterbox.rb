def paint_letter_boxes(start, finish)
  array = Array.new(10, 0)

  (start..finish).each do |num|
    num.to_s.split('').each do |n|
      array[n.to_i] += 1
    end
  end
  array
end
