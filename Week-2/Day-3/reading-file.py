file = open("favorite-dish.txt", "w")
file.close()

while True:
    favorite = input("Enter your favorite dish or press q to quit: ")

    if favorite == "q":
        break
    else:
        with open("favorite-dish.txt", "a") as file_object:
            file_object.write(f"{favorite}\n")

with open("favorite-dish.txt") as file_object:
    content = file_object.read()

print(content)