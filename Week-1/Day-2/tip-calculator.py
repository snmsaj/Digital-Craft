def calculate_tip():
    total = float(input("Please enter the total amount: "))
    tip = float(input("Please enter the percentage of your tip: "))
    tip_amount = total * tip/100
    return tip_amount

print(f"Tip amount is ${calculate_tip()}.")
