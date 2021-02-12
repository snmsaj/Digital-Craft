import json

with open("users.json") as file:
    users = json.load(file)

for user in users:
    print(f"{user['name']} - {user['age']}")
    print(f"Age: {user['age']}")