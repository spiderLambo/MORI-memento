a = "["
for x in range(12):
    for y in range(5):
        a += f"[{y},{x}],"

a = a[:-1] + "]"

print(a)
