number = int(input("Enter in a number: "))
number_list = []

def create_list():
    for i in range(1,number+1):
        number_list.append(i)

def calculate_factorial():
    result = 1

    for num in number_list:
        result = result * num
    return result

create_list()
print(calculate_factorial())