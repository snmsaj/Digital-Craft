while True:
    try:
        number = int(input("Enter number: "))

    except ValueError:
        print("Error! Please enter a number.")

    else:
        break
