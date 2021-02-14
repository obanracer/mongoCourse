import requests

LOCALHOST_API = "http://localhost:3000/_api/"

CREATE_AND_SAVE_ONE = LOCALHOST_API + "create-and-save-person"
CREATE_MANY_RECORDS = LOCALHOST_API + "create-many-people"

# =======================================================================
# =======================================================================

print("create and save one... \n")
x = requests.get(CREATE_AND_SAVE_ONE)
print(x.text + "\n")

# =======================================================================
# =======================================================================

print("create many records... \n")
newPerson0 = {
  "name": "Rubén Quintana",
  "age": 53,
  "favoriteFoods": ["Curry de lenetejas", "Torta de chocolate"]
}

newPerson1 = {
  "name": "Remedios Salinas",
  "age": 35,
  "favoriteFoods": ["Carne a la Borgoña", "Rabas", "Canelones de espinaca"]
}

newPerson2 = {
  "name": "Victorino Reyes",
  "age": 22,
  "favoriteFoods": ["Sopa de pollo", "Tarta de manzana", "Ratatouille", "Matambre"]
}

arrayOfPeople = [newPerson0, newPerson1, newPerson2]
x = requests.post(CREATE_MANY_RECORDS, json=arrayOfPeople)
print(x.text + "\n")

# =======================================================================
# =======================================================================
