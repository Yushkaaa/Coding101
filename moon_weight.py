import sys
def moon_weight():
    print('какой ваш вес')
    weight = int(sys.stdin.readline())
    print ('Введите ежегодный прирост вашего веса')
    plus = float(sys.stdin.readline())
    for  year in range (1, 15):
        weight = weight + plus
        print ('Год %s, вес %s' % ( year, weight))

