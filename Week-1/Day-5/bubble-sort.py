num_list = [2,1,45,67,89,4,5,7,9]
ordered_list = []

while num_list:
    minimum = num_list[0]

    for num in num_list:
        if num < minimum:
            minimum = num

    ordered_list.append(minimum)
    num_list.remove(minimum)
    
print(ordered_list)
print(ordered_list[::-1])