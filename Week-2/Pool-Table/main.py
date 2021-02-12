from pool_table import PoolTable, menu, write_to_file
import json
from datetime import datetime


tables = []
checkout_tables = []

for i in range(1,13): 
    table = PoolTable(i)
    tables.append(table)


choice = ""

while choice != "q":
    try:
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
            checkout_tables.append(tables[choose_table-1])
            write_to_file(checkout_tables)

        elif choice == "3":
            for i in  range(0,len(tables)):
                if tables[i].occupied == False:
                    print(f"Table {tables[i].table_num}: NOT OCCUPIED")
                else:
                    print(f"Table {tables[i].table_num}: OCCUPIED - {tables[i].start_time.time().strftime('%H:%M')}")

    except (ValueError, IndexError):
        print("Error! Invalid input.")
        continue