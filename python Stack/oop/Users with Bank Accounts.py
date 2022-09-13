class Bank_account:
    def __init__(self, int_rate=0.02, balance=0):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -=amount
        if self.balance <= amount:
            self.balance-=5
            print("Insufficient funds: Charging a $5 fee")
        return self
    def display_account_info(self):
            print(self.balance)
            return self
    def yield_interest(self):
        if self.balance > 1:
            self.balance-=self.balance * self.int_rate
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = Bank_account(int_rate=0.02, balance=0)
    def make_deposit(self, amount):
        self.account.deposit(amount)
    def make_withdrawl(self, amount):
        self.account.withdraw(amount)
    def display_user_balance(self):
        print(self.account.display_account_info)
    def transfer_money(self, other_user, amount):
        self.account.balance-=amount
        other_user.account.balance+=amount
        
laith = User("laith", "barqlaith@gmail.com")

laith.account.int_rate = 0.2

laith.account.display_account_info()
laith.account.deposit(200)

laith.account.yield_interest().display_account_info()

amin = User("amin", "amin@gmail.com")

amin.account.int_rate = 0.8

amin.account.display_account_info()
amin.account.deposit(500)

amin.account.yield_interest().display_account_info()