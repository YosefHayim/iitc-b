# ex 1
# askName = input('What is your name?')
# print(f'Hello {askName}')

# ex 2
# a_number = int(input('Provide first number: '))
# b_number = int(input('Provide second number: '))
# print(f'sum is: {a_number + b_number}')

# ex 3
# square_num = int(input('Provide a number to be squared: '))
# print(f'The square result is: {square_num*square_num}')

# ex 4
# celsius_chosen = int(input('provide celsius to be chosen: '))
# fahrenheit = celsius_chosen * 9/5 + 32
# print(fahrenheit)

# ex 5
# radius_provided = int(input('Provide radius of circle: '))
# area = 3.14 * (radius_provided ** 2)
# print("The area of the circle is:", area)

# intermediate exercise
# ex 1
# number_provided = int(input('Provide a number to be checked if it is prime or not: '))
# if number_provided > 1:
#     for i in range(2, int(number_provided**0.5) + 1):
#         if number_provided % i == 0:
#             print(f'{number_provided} is not a prime number')
#             break
#     else:
#         print(f'{number_provided} is a prime number')
# else:
#     print('Number must be greater than 1')

# ex 2
# provided_string = input('Provide a string to check if it is a vowel or consonant: ').lower()
# if provided_string in 'aeiou':
#     print(f'This is a vowel: {provided_string}')
# else:
#     print(f'This is a consonant: {provided_string}')

# ex 3
# provided_number = int(input('provide a positive or negative or 0 number: '))
# if provided_number > 0:
#   print('this is positive')
# elif provided_number == 0:
#   print('this is natural')
# else:
#   print('this is negative')

# ex 4 
# year_chosen = int(input('provide a year to be checked if it is leap year or not: '))
# if (year_chosen % 4 == 0 and year_chosen % 100 != 0) or (year_chosen % 400 == 0):
#     print(f'This is a leap year: {year_chosen}')
# else:
#     print(f'This is not a leap year: {year_chosen}')

# ex 5 
# score = 5

# if score > 90:
#     print('A')
# elif 80 <= score <= 90:  # Includes 90
#     print('B')
# elif 70 <= score <= 80:  # Includes 80
#     print('C')
# elif 60 <= score <= 70:  # Includes 70
#     print('D')
# else:  # Covers everything below 60
#     print('F')

# intermediate exercise for loops
# ex 1
# for i in range(1,11):
#   print(i)

# ex 2
# sum = int(input('provide a number to count the sum to: '))
# for i in range(1,11):
#   sum += i
# print(sum)

# ex 5
# for i in range(11, 0, -1):
#     print(i)
#     if i == 1:
#         print('Blastoff')

# advanced exercises
# ex 1
# numbers_list = [1,2,3,12,6,8]
# biggest_num = 0
# for i in numbers_list:
#   if i > biggest_num:
#     biggest_num = i
# print(biggest_num)

# ex 2
# txt = 'radar'
# if txt == txt[::-1]:
#     print('this is palindrome')
# else:
#     print('this is not a palindrome')

# ex 4
# for i in range(1,51):
#   if i % 3 and i % 5 == 0:
#     print(f'this is divisible by both: {i}')

# ex 5 
# for i in range(1,10):
#   print('*'*i)
