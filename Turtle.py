from turtle import *#загрузка команд управления черепашкой
def turtle_controller(do, val):#определяет do val как входные параметры функции
    do = do.upper()#преобразует буквы в строке do в заглавные
    if do == 'F':
        forward(val)  #указывает что значение F параметра do соотвествует команде forward(вперед)
    elif do == 'B':
        backward(val)
    elif do == 'R': #сверяет значение do с извсетными буквами
        right(val)
    elif do == 'L':
        left(val)
    elif do == 'U':
        penup() #указывает на то чтоб перестал рисовать
    elif do == 'D':
        pendown() #указывает на чтоб начал рисовать
    elif do == 'N':
        reset() #обнуляет позицию, перемещяа в середину
    else:
        print('Unrecognized command') #печаетается, если значения do не соотвествуют известным командам
def string_artist(program):
    cmd_list = program.split('-') #указывает что нужно разделить строку по каждому символу"-" 
    for command in cmd_list: #цикл по списку строк: каждый элемент - это команда для черепашки
        cmd_len = len(command) #узнает длину строки
        if cmd_len == 0: #если длина строки ровна нулю(команда пустая) пропустить ее и перейти к следующей
            continue
        cmd_type = command[0]#берет первый символ в качестве команды
        num = 0
        if cmd_len > 1: #проверяет есть ли в команде еще символы(число)
            num_string = command[1:] #берет оставшиеся символы команд, отрезая от нее первый символ
            num = int(num_string) #образует строку в число
        print(command, ':', cmd_type, num) #печатает строкук на экране, чтоб видно было что происходит
        turtle_controller(cmd_type, num) #передает команду чер
instructions = '''Enter a program for the turtle:
eg F100-R45-U-F100-L45-D-F100-R90-B50
N = New drawing
U/D = Pen Up/Down
F100 = Forward 100
B50 = backwards 50
R90 = Right turn 90 deg
L45 = Left turn 45 deg'''
screen = getscreen()
while True:
    t_program = screen.textinput('Drawing Machine', instructions)
    print (t_program)
    if t_program == None or t_program.upper() == 'END':
        break
    string_artist(t_program)    
 
