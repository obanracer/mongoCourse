import requests

LOCALHOST_API = "http://localhost:3000/_api/"

# =======================================================================
# =======================================================================

print("create and save one...\n")
CREATE_AND_SAVE_ONE = LOCALHOST_API + "create-and-save-person"
x = requests.get(CREATE_AND_SAVE_ONE)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("create many records...\n")
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

CREATE_MANY_RECORDS = LOCALHOST_API + "create-many-people"
x = requests.post(CREATE_MANY_RECORDS, json=arrayOfPeople)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("finding by name...\n")
elvis = {
  "name": "Elvis Presley",
  "age": 42,
  "favoriteFoods": ["El sándwich Elvis"]
}

FIND_ALL_BY_NAME = LOCALHOST_API + "find-all-by-name"
x = requests.post(FIND_ALL_BY_NAME, data=elvis)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("finding one by food...\n")
fosmeCulanito = {
  "name": "Fosme Culanito",
  "age": 65,
  "favoriteFoods": ["milanesa con papas fritas", "tarta de queso y jamon"]
}

FIND_ONE_BY_FOOD = LOCALHOST_API + "find-one-by-food"
x = requests.post(FIND_ONE_BY_FOOD, data=fosmeCulanito)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("finding someone by id...\n")
FIND_BY_ID = LOCALHOST_API + "find-by-id"
x = requests.get(FIND_BY_ID)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("finding, editing and saving...\n")
hamburglar = {
  "name": "El Hamburglero",
  "age": 40,
  "favoriteFoods": []
}
FIND_EDIT_SAVE = LOCALHOST_API + "find-edit-save"
x = requests.post(FIND_EDIT_SAVE, data=hamburglar)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================

print("finding by id and updating a single document...\n")
hamburTrucho = {
  "name": "El Hamburglero",
  "age": 40,
  "favoriteFoods": ["pizza", "PERO MIRALO QUE TRUUUCHOOOOO!!!"]
}
FIND_AND_UPDATE = LOCALHOST_API + "find-one-update"
x = requests.post(FIND_AND_UPDATE, data=hamburTrucho)
print(x.text + "\n")
print("==============================================================\n")

# =======================================================================
# =======================================================================