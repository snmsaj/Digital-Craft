def display_menu():
    print("\nPress 1 to add task.\nPress 2 to delete task.\nPress 3 to view all tasks.\nPress q to quit.\n")


def view_tasks():
    for i in range(0,len(task_list)):
        task = task_list[i]
        print(f"{i + 1} - {task['name']} - {task['priority']}")


task_list = []

while True:
    display_menu()
    choice = input("Type in the option: ")

    if choice == "1":
        name = input("Name the task you want to add: ")
        priority = input("Enter priority high, medium, or low: ")
        task = {"name":name , "priority":priority}
        task_list.append(task)

    elif choice == "2":
        view_tasks()
        delete = int(input("Enter in task number your want to delete: "))
        del task_list[delete - 1]

    elif choice == "3":
        if task_list == []:
            print("You have no tasks")
            continue
        else:
            view_tasks()
        
    elif choice == "q":
        break

    else:
        print("Error! Enter one of the menu options.")

print("Thanks for using the To Do list!")