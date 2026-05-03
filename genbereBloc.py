a = "["
for i in range(6, 12):
    for j in range(2):
        a += f"[{j},{i}],"

a = a[:-1] + "]"

print(a)
