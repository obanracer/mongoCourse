import requests
import argparse

NUMBER_OF_TESTS = 9
tests = list(range(1, NUMBER_OF_TESTS + 1))

parser = argparse.ArgumentParser()
group = parser.add_mutually_exclusive_group(required=True)

group.add_argument("-r", "--run", help="runs the specified test or tests",
  type=int, choices=tests, nargs='+', action='store')

group.add_argument("-a", "--all", help="runs all tests, same as -r 1 ... 9", action='store_true')

parser.add_argument("-i", "--input", help="wait for input before running next test", action='store_true')

args = parser.parse_args()

if args.run != None: print("args.run = %s" % args.run)
if args.all != None: print("args.all = %s" % args.all)
if args.input != None: print("args.input = %s" % args.input)
print("\n")


LOCALHOST_API = "http://localhost:3000/_api/"

# =======================================================================
# =======================================================================
if args.all or 1 in args.run:
  if args.input:
    input("press enter to start test\n")

  print("create and save one...\n")
  CREATE_AND_SAVE_ONE = LOCALHOST_API + "create-and-save-person"
  x = requests.get(CREATE_AND_SAVE_ONE)
  print(x.text + "\n")
  print("==============================================================\n")

# =======================================================================
# =======================================================================

if args.all or 2 in args.run:
  if args.input:
    input("press enter to start test\n")
    
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

if args.all or 3 in args.run:
  if args.input:
    input("press enter to start test\n")
    
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

if args.all or 4 in args.run:
  if args.input:
    input("press enter to start test\n")
    
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

if args.all or 5 in args.run:
  if args.input:
    input("press enter to start test\n")
    
  print("finding someone by id...\n")
  FIND_BY_ID = LOCALHOST_API + "find-by-id"
  x = requests.get(FIND_BY_ID)
  print(x.text + "\n")
  print("==============================================================\n")

# =======================================================================
# =======================================================================

if args.all or 6 in args.run:
  if args.input:
    input("press enter to start test\n")
    
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

if args.all or 7 in args.run:
  if args.input:
    input("press enter to start test\n")
    
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

if args.all or 8 in args.run:
  if args.input:
    input("press enter to start test\n")
    
  print("removing one document by id...\n")
  luisMi = {
    "name": "Luis Miguel",
    "age": 50,
    "favoriteFoods": ["chicas de bikini azul o algo asi ke c io"]
  }
  REMOVE_ONE = LOCALHOST_API + "remove-one-person"
  x = requests.post(REMOVE_ONE, data=luisMi)
  print(x.text + "\n")
  print("==============================================================\n")

# =======================================================================
# =======================================================================

if args.all or 9 in args.run:
  if args.input:
    input("press enter to start test\n")
    
  print("removing people by name...\n")

  notMary1 = {
    "name": "Not Mary",
    "age": 69,
    "favoriteFoods": ["pfffff"]
  }

  mary1 = {
    "name": "Mary",
    "age": 69,
    "favoriteFoods": ["pfffff"]
  }

  mary2 = {
    "name": "Mary",
    "age": 69,
    "favoriteFoods": ["pfffff"]
  }

  notMary2 = {
    "name": "Also not Mary",
    "age": 69,
    "favoriteFoods": ["pfffff"]
  }

  anotherArrayOfPeople = [notMary1, mary1, notMary2, mary2]

  REMOVE_MARY = LOCALHOST_API + "remove-many-people"
  x = requests.post(REMOVE_MARY, json=anotherArrayOfPeople)
  print(x.text + "\n")
  print("==============================================================\n")

# =======================================================================
# =======================================================================