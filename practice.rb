# Write a method that prints out every number from 1 to 100.

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# 1) Write a function that takes in an array of numbers and returns its sum.
def sum_nums(numbers)
  sum = 0
  index = 0
  while index < numbers.length
    sum += numbers[index]
    index += 1
  end
  sum
end

p sum_nums([2, 4, 6, 10, 2])

# 2) Write a function that takes in an array of strings and returns the smallest string.

def smallest_string(strings)
  smallest_word = strings[0]
  strings.each do |string|
    if smallest_word.length > string.length
      smallest_word = string
    end
  end
  smallest_word
end

p smallest_string(["apple", "orange", "grapes", "fig"])

# 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

def reversed_numbers(numbers)
  reversed_array = []
  index = numbers.length - 1
  while index >= 0
    reversed_array << numbers[index]
    index -= 1
  end
  reversed_array
end

p reversed_numbers([2, 4, 6, 10, 2])

# 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

def a_words(words)
  count = 0
  words.each do |word|
    if word.start_with?("a")
      count += 1
    end
  end
  count
end

p a_words(["apple", "orange", "grapes", "afig"])

# 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

def frankenstring(strings)
  # result = ""
  strings.join(",")
  # strings.each do |string|
  #   result += "#{string},"
  # end
  # result
end

p frankenstring(["apple", "orange", "grapes", "fig"])

# 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

def product(numbers)
  result = 1
  numbers.each do |num|
    result *= num
  end
  result
end

p product([2, 4, 1, 2, 6])

# 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

def two_smallest_numbers(numbers)
  smallest_index = 0
  smallest_number = numbers[0]
  index = 0
  while index < numbers.length
    if numbers[index] < smallest_number
      smallest_number = numbers[index]
      smallest_index = index     
    end
    index +=1
  end
  index = 0 
  second_smallest_number = numbers[smallest_index - 1]
  while index < numbers.length
    if numbers[index] < second_smallest_number && index != smallest_index
      second_smallest_number = numbers[index]
    end
    index += 1
  end
  [smallest_number, second_smallest_number]
end

p two_smallest_numbers([3, 4, 1, 8, 6])

# 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
# 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
# 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.