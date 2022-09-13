from multiprocessing.util import sub_warning


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance+=amount
    def make_withdrawl(self, amount):
        self.account_balance-=amount
    def display_user_balance(self):
        print(self.account_balance)
    def transfer_money(self, other_user, amount):
        self.account_balance-=amount
        other_user.account_balance +=amount
        
        
laith = User("laith", "Barqlaith@gmail.com")
Zaki = User("Zaki", "ZakiNahhas@gmail.com")
sura = User("sura", "sura@gmail.com")

laith.make_deposit(50)
laith.make_deposit(30)
laith.make_deposit(500)
laith.make_withdrawl(200)
laith.display_user_balance()

Zaki.make_deposit(500)
Zaki.make_deposit(400)
Zaki.make_withdrawl(500)
Zaki.make_withdrawl(100)
Zaki.display_user_balance()

sura.make_deposit(2000)
sura.make_withdrawl(500)
sura.make_withdrawl(100)
sura.make_withdrawl(50)
sura.display_user_balance()
sura.transfer_money(Zaki, 100)
Zaki.display_user_balance()