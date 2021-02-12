with open("emails.txt") as file_object:
    emails = file_object.read()

email_list = emails.split(",")
duplicate_free_emails = []

for email in email_list:
    email = email.strip()

    if email not in duplicate_free_emails:
        duplicate_free_emails.append(email)


with open("duplicate-free-email-list.txt", "w") as file_object:
    for email in duplicate_free_emails:
        file_object.write(email)
        file_object.write("\n")
