# class Person:
#     def __init__(self, first_name, last_name):
#         self.first_name = first_name
#         self.last_name = last_name

#     def greet(self):
#         print(f'Hello dear {self.first_name} {self.last_name}')

#     def __str__(self):
#         return f'Person: {self.first_name} {self.last_name}'

# person_one = Person('joseph', 'sabag')

# print(person_one)

# Bank Account Management System
# class BankAccount:
#     def __init__(self, account_holder, initial_balance=0):
#         self.account_holder = account_holder
#         self.balance = initial_balance

#     def deposit(self, amount):
#         if amount > 0:
#             self.balance += amount
#             return f"Deposited: ${amount}"
#         return "Deposit amount must be positive."

#     def withdraw(self, amount):
#         if 0 < amount <= self.balance:
#             self.balance -= amount
#             return f"Withdrew: ${amount}"
#         return "Insufficient balance or invalid amount."

#     def check_balance(self):
#         return f"Balance: ${self.balance}"

# # Library Management System
# class Book:
#     def __init__(self, title, author, copies):
#         self.title = title
#         self.author = author
#         self.copies = copies

#     def display_info(self):
#         return f"Title: {self.title}, Author: {self.author}, Copies: {self.copies}"

#     def borrow(self):
#         if self.copies > 0:
#             self.copies -= 1
#             return f"Borrowed '{self.title}'."
#         return f"No copies of '{self.title}' available."

#     def return_book(self):
#         self.copies += 1
#         return f"Returned '{self.title}'."

# # Student Grade System
# class Student:
#     def __init__(self, name):
#         self.name = name
#         self.grades = []

#     def add_grade(self, grade):
#         if 0 <= grade <= 100:
#             self.grades.append(grade)
#             return f"Added grade: {grade}"
#         return "Grade must be between 0 and 100."

#     def calculate_average(self):
#         if self.grades:
#             return f"Average grade: {sum(self.grades) / len(self.grades):.2f}"
#         return "No grades available."

# # Shopping Cart System
# class ShoppingCart:
#     def __init__(self):
#         self.cart = {}

#     def add_item(self, item_name, quantity, price):
#         if item_name in self.cart:
#             self.cart[item_name]['quantity'] += quantity
#         else:
#             self.cart[item_name] = {'quantity': quantity, 'price': price}
#         return f"Added {quantity} of {item_name}."

#     def remove_item(self, item_name):
#         if item_name in self.cart:
#             del self.cart[item_name]
#             return f"Removed {item_name}."
#         return f"{item_name} not found in cart."

#     def view_cart(self):
#         return self.cart if self.cart else "Cart is empty."

# # Movie Ticket Booking System
# class MovieTheater:
#     def __init__(self, movie_name, seats):
#         self.movie_name = movie_name
#         self.seats = seats

#     def book_ticket(self, number):
#         if number <= self.seats:
#             self.seats -= number
#             return f"Booked {number} ticket(s) for '{self.movie_name}'."
#         return "Not enough seats available."

#     def cancel_ticket(self, number):
#         self.seats += number
#         return f"Cancelled {number} ticket(s)."

#     def check_seats(self):
#         return f"Available seats: {self.seats}"

# Bank Account example
# account = BankAccount("John Doe", 100)
# print(account.deposit(50))
# print(account.withdraw(30))
# print(account.check_balance())

# # Book example
# book = Book("1984", "George Orwell", 3)
# print(book.display_info())
# print(book.borrow())
# print(book.return_book())

# # Student example
# student = Student("Alice")
# print(student.add_grade(85))
# print(student.calculate_average())

# # Shopping Cart example
# cart = ShoppingCart()
# print(cart.add_item("Apple", 2, 1.5))
# print(cart.view_cart())
# print(cart.remove_item("Apple"))

# # Movie Theater example

# theater = MovieTheater("Inception", 10)
# print(theater.book_ticket(4))
# print(theater.cancel_ticket(2))
# print(theater.check_seats())


# inheritance
# class Animal:
#     def speak(self):
#         return "I make a sound"

# class Dog(Animal):
#     def speak(self):
#         return super().speak() + " and I bark"

# # Using the Dog class
# dog = Dog()
# print(dog.speak())  # Output: "I make a sound and I bark"

# using the _attribute wont allow to change outside of the class only inside with a fn.
