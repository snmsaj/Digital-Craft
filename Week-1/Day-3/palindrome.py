word = input("Please type in a word: ")
reversed_word = ""

for index in range(len(word)-1,-1,-1):
    reversed_word += word[index]


if word == reversed_word:
    print(f"{word} is a Palindrome")
else:
    print(f"{word} is NOT a Palindrome")