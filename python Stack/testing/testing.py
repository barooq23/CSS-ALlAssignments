def minimum(list):
    if len(list)>0:
        min=list[0]
        for i in range(0,len(list)):
            if list[i]<min:
                min=list[i]
    else:
        return False
    return min
f=minimum([2,3,6,8,30,-20])
print(f)