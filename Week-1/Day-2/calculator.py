x = float(input("Please enter the first number: "))
operand = input("Please enter an operand (+, - , * , /): ")
y = float(input("Please enter the second number: "))

def add():
    return x + y

def subtract():
    return x - y

def multiply():
    return x * y

def divide():
    return x / y

def calculator():
    if operand == "+":
        print(add())
    elif operand == "-":
        print(subtract())
    elif operand == "*":
        print(multiply())
    elif operand == "/":
        print(divide())
    else:
        print("Invalid operand. Please try again.")

calculator()