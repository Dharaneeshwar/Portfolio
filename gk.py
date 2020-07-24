n=int(input());output = []
for index in range(n):
    number_of_days = int(input())
    l=list(map(int,input().split())) 
    output.append(0)
    for i in range(number_of_days):
        if l[i]>l[i+1]:
            flag = 0
            for j in range(i):
                if l[j]>l[i]:
                    flag = 1 
            if flag==0 :
                output[i]+=1 
for i,j in enumerate(output):
    print(f'Case #{i+1}: {j}')