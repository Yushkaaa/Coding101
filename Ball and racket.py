from tkinter import *
import random
import time
import datetime
from math import sqrt


#мяч
class Ball:
    def __init__(self, canvas, paddle, color):
        self.canvas = canvas
        self.paddle = paddle
        self.id = canvas.create_oval(10, 10, 25, 25, fill=color)
        self.canvas.move(self.id, 245, 100)
        #в X может попасть любое значение из исходного списка, от –3 до 3.
        starts = [-3, -2, -1, 1, 2, 3]
        random.shuffle(starts)
        self.x = starts[0]
        self.y = -3 #чтобы ускорить дви- жение мяча
        self.canvas_height = self.canvas.winfo_height()
        self.canvas_width = self.canvas.winfo_width()
        self.hit_bottom = False

       
    #в pos передвются текущие координаты мяча
    def hit_paddle(self, pos):
        #координаты ракетки сохраняем в переменной paddle_pos
        paddle_pos = self.canvas.coords(self.paddle.id)
        #pos[2] координата правая, pos[0] координата левая мяча
        if pos[2] >= paddle_pos[0] and pos[0] <= paddle_pos[2]:
            #pos[3] нижняя координата, pos[1] верхняя
            if pos[3] >= paddle_pos[1] and pos[3] <= paddle_pos[3]:

                return True
            return False
           
    def draw(self):
        self.canvas.move(self.id, self.x, self.y)
        pos = self.canvas.coords(self.id)
        #если мяч достиг верхней границы холста,нужно прекратить двигать его вверх,
        if pos[1] <= 0:
            self.y = 3           
        if pos[3] >= self.canvas_height:
           self.hit_bottom = True 
        if self.hit_paddle(pos) == True:
            self.y = -3   
        #проверкa, не достиг ли мяч правой границы холста
        if pos[0] <= 0:
            self.x = 3
        if pos[2] >= self.canvas_width:
            self.x = -3       
    
#ракетка
class Paddle:
    def __init__(self, canvas, color):
        self.canvas = canvas
        self.id = canvas.create_rectangle(0, 0, 100, 10, fill=color)
        self.canvas.move(self.id, 200, 300)
        self.x = 0
        #для движения, привязывание функции к клавишам
        self.canvas_width = self.canvas.winfo_width()
        self.canvas.bind_all('<KeyPress-Left>', self.turn_left)
        self.canvas.bind_all('<KeyPress-Right>', self.turn_right)

    def draw(self):
         self.canvas.move(self.id, self.x, 0)
         pos = self.canvas.coords(self.id)
         if pos[0] <= 0:
             self.x = 0
         elif pos[2] >= self.canvas_width:
             self.x = 0
       
    #движение
    def turn_left(self, evt):
          self.x = -2
    def turn_right(self, evt):
          self.x = 2
               

 
       
 
            
 #окно
tk = Tk()
tk.title("Игра") 
tk.resizable(0, 0) #сделает размер окна фиксированным
tk.wm_attributes("-topmost", 1) #разместить поверх всех остальных окон
canvas = Canvas(tk, width=500, height=400, bd=0,
highlightthickness=0)
canvas.pack()
tk.update()
   
####### СЧЕТ ######
score = 0

    
canvas.create_text(150, 30, text = 'SCORE', fill = 'black')
score_text = canvas.create_text(150, 50, fill = 'black')  

def show_score(score):
    cavans.itemconfig(score_text, text = str(score)) # отображает счет
def hit_paddle():
    if pos[3] >= paddle_pos[1] and pos[3] <= paddle_pos[3]:
        score = score + 1
        print (score)
        show_score(score)
#################    


paddle = Paddle(canvas, 'blue')
ball = Ball(canvas, paddle, 'red')

while 1:
    if ball.hit_bottom == False:
        ball.draw()
        paddle.draw()
    tk.update_idletasks()
    tk.update()
    time.sleep(0.01)



