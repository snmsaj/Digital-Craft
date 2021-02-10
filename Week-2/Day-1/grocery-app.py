store_list = []

class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.item = []

    def show_list(self):
        print(f"{self.item[0]}, {self.item[1], {self.item[2]}}")


class Item:
    def __init__(self, item, price, amount):
        self.item = item
        self.price = price
        self.amount = amount


def display_menu():
    print("\nPress 1 to add a store.")
    print("Press 2 to add an item to a store.")
    print("Press 3 to view list.")
    print("Press 4 to delete a store and items within.")
    print("Press 5 to delete an item.")
    print("Press q to quit.\n")
        

def show_stores_and_items():
    for i in range(0, len(store_list)):
        print(f"{i + 1}. {store_list[i].name} ({store_list[i].address}):")
        for item in store_list[i].item:
            print(f"\t{item.amount} of {item.item}. It costs ${item.price}")



choice = ""

while choice != "q":
    display_menu()
    choice = input("Enter one of the options: ")
    

# Create Store Object and store in store_list
    if choice == "1":
        store_name = input("Enter store name: ")
        store_address = input("Enter the store's address: ")
        store = Store(store_name, store_address)
        store_list.append(store)

# Add an Item object into a Store object within the store_list
    elif choice == "2":
        for i in range(0, len(store_list)):
            print(f"{i + 1}. {store_list[i].name}")
        
        while True:
            try:
                choose_store = int(input("Enter number for store you want to add item for: ")) - 1
            except ValueError:
                print("Error! Please enter a whole number.")
            else:
                break

        item_name = input("Name your item: ")
        item_price = float(input("How much does it cost: "))
        item_amount = int(input('How may will you buy: '))
        item = Item(item_name, item_price, item_amount)
        store_list[choose_store].item.append(item)

# View all stores and items
    elif choice == "3":
        show_stores_and_items()

# Delete a store and items within
    elif choice == "4":
        show_stores_and_items()
        delete_store = int(input("Which store do you want to delete: "))
        del store_list[delete_store - 1]

# Delete an item in a store
    elif choice == "5":
        show_stores_and_items()
        choose_store = int(input("First enter the number of the store you want to delete items from: ")) - 1

        index = 1
        for item in store_list[choose_store].item: 
            print(f"{index}. {item.item}")
            index += 1

        delete_item = int(input("Enter the number for item to delete: ")) - 1
        del store_list[choose_store].item[delete_item]
        
    else:
        break