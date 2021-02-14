import json
from Note import Note

n = Note("Friction", "introduction to friction", "UC Berkeley", 0, True, False, False, "https://google.com", 'lec.pdf')

print(n.toJSON())
