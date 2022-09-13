def number_read():
    for num in range(0,151):
        print(num)




def printMultiples(a,b):
    for num in range(a,b):
        if num %5==0:
            print(num)
print(printMultiples(5, 1001))


def printWarld(c,d):
    for num in range(c,d):
        if num %5 == 0:
            print("Coding")
        if num % 10 == 0:
            print("Coding Dojo")
print(printWarld(1,101))


def numberMath(e,f):
    sum = 0
    for num in range(e,f):
        if num % 2 != 0:
            sum += num
    return sum
print(numberMath(0,500001))



for x in range(2018, 0, -4):
    if x > 0:
        print(x)







def multiply(lowNum, highNum, multi):
    for x in range(lowNum, highNum+1):
        if x % multi == 0:
            print(x)
print(multiply(2,9,3))