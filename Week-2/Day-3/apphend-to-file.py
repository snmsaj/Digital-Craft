file = open("I-love-programming.txt", "w")
file.close()

while True:
    reason = input("Enter a reason why you like programming or press q to quit: ")

    if reason == "q":
        break
    else:
        with open("I-love-programming.txt", "a") as file:
            file.write(f"{reason}\n")