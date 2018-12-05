from random import*#загружает функции randint и choice из модуля random
from tkinter import*# загружает функции Tkinter

# переменная size задает размер холста 
size = 700
window = Tk()
canvas = Canvas(window, width = size, height = size)# Создает в окне холст
canvas.pack()

while True: # Бесконечный цикл, чтоб прога рисовала круги без остановки
    # выбор случайного цвета 
    col = choice(['pink','orange','purple','yellow', 'red'])
    x0 = randint(0,size)#
    y0 = randint(0,size)# Рисует в случайном месте и случайного размера
    d = randint(0,size/5)#
    canvas.create_oval(x0,y0,x0 + d,y0 +d, fill=col) # рисует и заполняет цветом
    window.update()
