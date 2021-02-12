from pool_table import PoolTable

def menu():
    print("\nPress 1 to check-in available tables")
    print("Press 2 to check-out/close table")
    print("Press 3 to list all tables and start times")
    print("Press q to quit\n")


tables = []

for i in range(1,13): 
    table = PoolTable(i)
    tables.append(table)

choice = ""

while choice != "q":
    menu()
    choice = input("Enter the option: ")

    if choice == "1":
        for i in  range(0,len(tables)):
            if tables[i].occupied == False:
                print(f"Table {tables[i].table_num}")

        while True:
            choose_table = int(input("Enter table # to check in: "))
            
            if tables[choose_table-1].occupied == True:
                print(f"Pool Table {tables[choose_table-1].table_num} is currently occupied.")
            else:
                tables[choose_table-1].check_in()
                break

    elif choice == "2":
        for i in  range(0,len(tables)):
            if tables[i].occupied == True:
                print(f"Table {tables[i].table_num}")

        choose_table = int(input("Enter table # to check out: "))
        tables[choose_table-1].check_out()

    elif choice == "3":
        for i in  range(0,len(tables)):
            if tables[i].occupied == False:
                print(f"Table {tables[i].table_num}: NOT OCCUPIED")
            else:
                print(f"Table {tables[i].table_num}: OCCUPIED - {tables[i].start_time.time().strftime('%H:%M')}")

    




# datetime.now().strftime('%m-%d-%Y')

# print(tables[1].table_num)
# tables[1].check_in()
# print(tables[1].occupied)
# tables[1].check_out()
# print(tables[1].occupied)
# print(tables[1].start_time)
# print(tables[1].end_time)
# print(tables[1].time_played())