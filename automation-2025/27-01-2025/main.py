class Person:
  def __init__(self, first_name,last_name):
    self.first_name = first_name
    self.last_name = last_name

  def greet(self):
    print(f'Hello dear {self.first_name + " "+  self.last_name}')

person_one = Person()
person_one.first_name = 'Joseph'
person_one.last_name = 'Sabag'

print(person_one)