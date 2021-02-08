class BankAccount:
    def __init__ (self, account_number, balance = 0):
        self.account_number = account_number
        self.balance = balance
        self.savings = 0
        
    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def transfer_funds(self, amount, destination):
        self.withdraw(amount)
        destination.deposit(amount)