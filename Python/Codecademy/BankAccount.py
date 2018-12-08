class BankAccount(object):
    balance = 0


    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return "%s's account has a balance of  $%.2f" % (self.name, self.balance)

    def show_balance(self):
        return "Total balance is $%.2f" % self.balance
  	

    def deposit(self, amount) :
        if amount <= 0:
            print ("Deposit needs to be a positive amount")
            return
  	else
        print "Depositing $%.2f" % amoumt
        self.balance += amount
        self.show_balance()
    
    def withdraw(self, amount):
        if amount => self.balance:
            print "Not enough money in account"
            return
  	else:
   	    print "Withdrawing %.2f" % amount
            self.balance -= amount
            self.show_balance()
    
    
my_account = BankAccount("Ekaterina") 
print my_account
my_account.show_balance()
my_accont.deposit(2000)
my_account.withdraw(1000)
print my_account
