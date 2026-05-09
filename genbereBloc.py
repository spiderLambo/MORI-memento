a = "["
for x in range(5):
    for y in range(6):
        a += f"[{y},{x}],"

a = a[:-1] + "]"

print(a)
