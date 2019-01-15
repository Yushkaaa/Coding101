
""" 1) The function should return the sum of
the values of the dictionary
"""
def sum_values(my_dictionary):
  total = 0
  for value in my_dictionary.values():
    total += value
  return total

print(sum_values({"milk":5, "eggs":2, "flour": 3}))
# should print 10
print(sum_values({10:1, 100:2, 1000:3}))
# should print 6



""" 2) This function should return the sum
of the values of all even keys"""
def sum_even_keys(my_dictionary):
  total = 0
  for key in my_dictionary.keys():
    if key%2 == 0:
      total += my_dictionary[key]
  return total

print(sum_even_keys({1:5, 2:2, 3:3}))
# should print 2
print(sum_even_keys({10:1, 100:2, 1000:3}))
# should print 6


""" 3) The function should add 10 to every value in my_dictionary and return my_dictionary"""
def add_ten(my_dictionary):
  for key in my_dictionary.keys():
    my_dictionary[key] += 10
  return my_dictionary

print(add_ten({1:5, 2:2, 3:3}))
# should print {1:15, 2:12, 3:13}
print(add_ten({10:1, 100:2, 1000:3}))
# should print {10:11, 100:12, 1000:13}


""" 4) This function should return a list of all
 values in the dictionary that are also keys."""
def values_that_are_keys(my_dictionary):
  value_keys = []
  for value in my_dictionary.values():
    if value in my_dictionary:
      value_keys.append(value)
  return value_keys

print(values_that_are_keys({1:100, 2:1, 3:4, 4:10, 5:5}))
# should print [1, 4, 5]
print(values_that_are_keys({"a":"apple", "b":"a", "c":100}))
# should print ["a"]


""" 5) The function should return the key
associated with the largest value in the dictionary."""
def max_key(my_dictionary):
  largest_key = float("-inf")
  largest_value = float("-inf")
  for key, value in my_dictionary.items():
    if value > largest_value:
      largest_value = value
      largest_key = key
  return largest_key

print(max_key({1:100, 2:1, 3:4, 4:10}))
# should print 1
print(max_key({"a":100, "b":10, "c":1000}))
# should print "c"


""" 6) The function should return a dictionary of
key/value pairs where every key is a word in words and
every value is the length of that word."""
def word_length_dictionary(words):
  word_lengths = {}
  for word in words:
    word_lengths[word] = len(word)
  return word_lengths

print(word_length_dictionary(["apple", "dog", "cat","alalalalallalala"]))
# should print {"apple":5, "dog": 3, "cat":3}
print(word_length_dictionary(["a", ""]))
# should print {"a": 1, "": 0}


""" 7)The function should return a dictionary containing
the frequency of each element in words."""
def frequency_dictionary(words):
  freqs = {}
  for word in words:
    if word not in freqs:
    	freqs[word] = 0
    freqs[word] += 1
  return freqs

print(frequency_dictionary(["apple", "apple","apple", "cat", 1]))
# should print {"apple":2, "cat":1, 1:1}
print(frequency_dictionary([0,0,0,0,0]))
# should print {0:5}

""" 8)The function should return the number of
unique values in the dictionary.""""
def unique_values(my_dictionary):
  seen_values = []
  for value in my_dictionary.values():
    if value not in seen_values:
      seen_values.append(value)
  return len(seen_values)

print(unique_values({0:3, 1:1, 4:1, 5:3, 5:5}))
# should print 3
print(unique_values({0:3, 1:3, 4:3, 5:3}))
# should print 1
