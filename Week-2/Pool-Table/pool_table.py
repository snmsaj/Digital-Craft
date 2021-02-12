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







