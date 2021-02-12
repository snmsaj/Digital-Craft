from datetime import datetime

class PoolTable:
    def __init__(self, table_num):
        self.table_num = table_num
        self.occupied = False
        self.start_time = None
        self.end_time = None

    def check_in(self):
        self.occupied = True
        self.start_time = datetime.now()

    def check_out(self):
        self.occupied = False
        self.end_time = datetime.now()

    def time_played(self):
        return self.end_time - self.start_time


def menu():
    print("\nPress 1 to check-in available tables")
    print("Press 2 to check-out/close table")
    print("Press 3 to list all tables and start times")
    print("Press q to quit\n")


def write_to_file(add_checkout_table):
    with open(f"{datetime.now().strftime('%m-%d-%Y')}.txt","w") as file:
        for i in range(0,len(add_checkout_table)):
            file.write(f"Table Number: {add_checkout_table[i].table_num}\n")
            file.write(f"Start Time: {add_checkout_table[i].start_time}\n")
            file.write(f"End Time: {add_checkout_table[i].end_time}\n")
            file.write(f"Total Time Played: {add_checkout_table[i].time_played()}\n\n")