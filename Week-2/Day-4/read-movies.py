import json

with open("movies.json") as file:
    result = json.load(file)

movies = result["Search"]

for movie in movies:
    print(f"{movie['Title']} - {movie['Year']} - {movie['imdbID']} - {movie['Type']}")