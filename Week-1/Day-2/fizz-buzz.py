def fizz_buzz():
    number = int(input("Please enter a whole number: "))

    if number % 3 == 0 and number % 5 == 0:
        print("Fizz Buzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print("The entered number is not divisible by 3 or 5")
    
fizz_buzz()