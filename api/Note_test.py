import json
from Note import Note

n = Note(12321, "Friction", "introduction to friction", "UC Berkeley", 0, True, False, False)

print(n.toJSON())