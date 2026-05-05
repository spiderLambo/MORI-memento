a = "["
for i in range(1):
    for j in range(4, 8):
        a += f"[{i},{j}],"

a = a[:-1] + "]"

print(a)
