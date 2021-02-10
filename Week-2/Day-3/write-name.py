first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")

with open("guest.txt", "w") as file:
    file.write(f"{first_name} {last_name}")