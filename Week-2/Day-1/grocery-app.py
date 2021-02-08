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
    print("\nPress 1 to add a store.\nPress 2 to add an item to a store.\nPress 3 to view list.\nPress q to quit.\n")
        

store_list = []
choice = ""

while choice != "q":
    display_menu()
    choice = input("Enter one of the options: ")

    if choice == "1":
        store_name = input("Enter store name: ")
        store_address = input("Enter the store's address: ")
        store = Store(store_name, store_address)
        store_list.append(store)

    elif choice == "2":
        for i in range(0, len(store_list)):
            print(f"{i + 1}. {store_list[i].name}")

        choose_store = int(input("Enter number for store you want to add item for: "))
        item_name = input("Name your item: ")
        item_price = float(input("How much does it cost: "))
        item_amount = int(input('How may will you buy: '))
        new_item = Item(item_name, item_price, item_amount)
        store_list[choose_store - 1].item.append(new_item)

    elif choice == "3":
        for i in range(0, len(store_list)):
            for item in store_list[i].item:
                print(f"{i + 1}. {store_list[i].name} ({store_list[i].address}):")
                print(f"\t{item.amount} of {item.item}. It costs ${item.price}")
        
    else:
        break