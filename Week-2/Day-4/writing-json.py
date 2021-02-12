import json

users = []

while True:
    name = input("What is your name: ")
    age = int(input("What is your age: "))

    with open("users.json","w") as file:
        user = {"name":name, "age":age}
        users.append(user)
        json.dump(users, file)

    choice = input("Press q to quit or any key to continue")
    
    if choice == "q":
        break


with open("users.json") as file:
    user_list = json.load(file)

for i in range(0, len(user_list)):
    for key in user_list[i]:
        print(f"Name: {key[name]}")