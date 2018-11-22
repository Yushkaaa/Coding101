from tkinter import *
import random
import time
class Game:
    def __init__(self):
        self.tk = Tk()
        self.tk.title("Человечек спешит к выходу")
        #задает фиксированный размер окну
        self.tk.resizable(0, 0)
        #поверх окон
        self.tk.wm_attributes("-topmost", 1)
        self.canvas = Canvas(self.tk, width=500, height=500, \
                             highlightthickness=0)
        self.canvas.pack()
        self.tk.update()
        self.canvas_height = 500
        self.canvas_width = 500
        self.bg = PhotoImage(file="background.gif")
        w = self.bg.width()
        h = self.bg.height()
        #перебирает столбцы (слева направо)
        for x in range(0, 5):
            #переберает строки (сверху вниз)
            for y in range(0, 5):
                self. canvas.create_image(x * w, y * h,\
                                          image=self.bg, anchor='nw')
        self.sprites = []
        self.running = True
        def mainloop(self):
            while 1:
                if self.running == True:
                    for sprite in self.sprites:
                        sprite.move()
                self.tk.update_idletasks()
                self.tk.update()
                time.sleep(0.01)

class Coords: #для размещения спрайтов на экране.
    def __init__(self, x1=0, y1=0, x2=0, y2=0):
        self.x1 = x1
        self.y1 = y1
        self.x2 = x2
        self.y2 = y2

    def within_x(co1, co2): #проверяет песечение пар х-координат горизонталь
        if co1.x1 > co2.x1 and co1.x1 < co2.x2:
            return True
        elif co1.x2 > co2.x1 and co1.x2 < co2.x2:
            return True
        elif co2.x1 > co1.x1 and co2.x1 < co1.x2:
            return True
        elif co2.x2 > co1.x1 and co2.x2 < co1.x2:
            return True
        else:
            return False#горизонтальные координаты отрезков не пересекаются

    def within_y(co1, co2):#проверяет песечение y-координат, вертикаль
        if (co1.y1 > co2.y1 and co1.y1 < co2.y2) \
            or (co1.y2 > co2.y1 and co1.y2 < co2.y2) \
            or (co2.y1 > co1.y1 and co2.y1 < co1.y2) \
            or (co2.y2 > co1.y1 and co2.y2 < co1.y2):
             return True
        else:
            return False

#проверка столкновения слева
    def collided_left(co1, co2):
#проверяет, пересекаются ли по вертикале
        if within_y(co1, co2):
            if co1.x1 <= co2.x2 and co1.x1 >= co2.x1:
#если объект столкнулся левой стр.̆(kоордината x1) с другим объектом
                return True
            return False

#проверка столкновения справа
    def collided_right(co1, co2): 
        if within_y(co1, co2):
            if co1.x2 >= co2.x1 and co1.x2 <= co2.x2:
                return True
            return False

#проверска столкновения сверху
    def collided_top(co1, co2):
#проверка пересечения по горизонтале
       if within_x(co1, co2):
            if co1.y1 <= co2.y2 and co1.y1 >= co2.y1:
                return True
            return False

    def collided_bottom(y, co1, co2):
        if within_x(co1, co2):
            y_calc = co1.y2 + y
            if y_calc >= co2.y1 and y_calc <= co2.y2:
                return True
            return False

class Sprite:
    def __init__(self, game):
        self.game = game
        self.endgame = False
        self.coordinates = None
    def move(self):
        pass
    def coords(self):
       return self.coordinates       
#плотформа
class PlatformSprite(Sprite):
# init принемает значение self,game,photo_image,x,y, width и height.
    def __init__(self, game, photo_image, x, y, width, height):
        Sprite.__init__(self, game)
        self.photo_image = photo_image
#cоздаем изображение на экране 
        self.image = game.canvas.create_image(x, y, \
                                              image=self.photo_image, anchor='nw')
        self.coordinates = Coords(x, y, x + width, y + height)

    
g = Game()
platform1 = PlatformSprite(g, PhotoImage(file="platform1.gif"), \
                           0, 480, 100, 10)
platform2 = PlatformSprite(g, PhotoImage(file="platform1.gif"), \
                           150, 440, 100, 10)
platform3 = PlatformSprite(g, PhotoImage(file="platform1.gif"), \
                           300, 400, 100, 10)
platform4 = PlatformSprite(g, PhotoImage(file="platform1.gif"), \
                           300, 160, 100, 10)
platform5 = PlatformSprite(g, PhotoImage(file="platform2.gif"), \
                           175, 350, 66, 10)
platform6 = PlatformSprite(g, PhotoImage(file="platform2.gif"), \
                           50, 300, 66, 10)
platform7 = PlatformSprite(g, PhotoImage(file="platform2.gif"), \
                           170, 120, 66, 10)
platform8 = PlatformSprite(g, PhotoImage(file="platform2.gif"), \
                           45, 60, 66, 10)
platform9 = PlatformSprite(g, PhotoImage(file="platform3.gif"), \
                           170, 250, 32, 10)
platform10 = PlatformSprite(g, PhotoImage(file="platform3.gif"), \
                            230, 200, 32, 10)
g.sprites.append(platform1)
g.sprites.append(platform2)
g.sprites.append(platform3)
g.sprites.append(platform4)
g.sprites.append(platform5)
g.sprites.append(platform6)
g.sprites.append(platform7)
g.sprites.append(platform8)
g.sprites.append(platform9)
g.sprites.append(platform10)
g.mainloop()

