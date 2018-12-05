from tkinter import*

window = Tk()
window.title('Alien')#отображает в заголовке имя
c = Canvas(window,height = 300, width= 400)#создает холст
c.pack()
body = c.create_oval(100,150,300,250, fill = 'green')
eye = c.create_oval(170,70, 230, 130, fill = 'white')
eyeball = c.create_oval(190,90,210,110, fill = 'black')
mouth = c.create_oval(150, 220,250,240, fill='black')
neck = c.create_line(200,150,200,130)
hat = c.create_polygon(180,75,220,75,200,20, fill = 'blue',outline ='black')

def mouth_open():
    c.itemconfig(mouth,fill = 'black')
def mouth_clouse():
    c.itemconfig(mouth,fill = 'red')
def yellow_hat():
    c.itemconfig(hat, fill = 'yellow')
def blue_hat():
    c.itemconfig(hat, fill = 'blue')
    
#моргает от команд
def blink():
    c.itemconfig(eye, fill = 'green')
    c.itemconfig(eyeball, state=HIDDEN)
    
#открытый глаз    
def unblink():
    c.itemconfig(eye, fill = 'white')
    c.itemconfig(eyeball, state = NORMAL)
words=c.create_text(200,280, text = 'Привет! Я инопланетянин')#позиция холста

def steal_hat():
    c.itemconfig(hat,state = HIDDEN)
    c.itemconfig(words,text = 'Верни мою шапку!')
window.attributes('-topmost',1)

def  burp(event): 
    mouth_open()
    c.itemconfig(words, text = 'БУУ!')
c.bind_all('<Button-1>', burp)

def blink2(event):#мограет от кнопок
    c.itemconfig(eye, fill = 'green')
    c.itemconfig(eyeball, state = HIDDEN)
    
def unblink2(event):
    c.itemconfig(eye, fill = 'white')
    c.itemconfig(eyeball, state = NORMAL)
    
c.bind_all('<KeyPress-a>', blink2)# bind привязывает функции к событиям
c.bind_all('<KeyPress-z>', unblink2)

def eye_control(event): #Управление глазом
    key= event.keysym #узнает имя нажатой клавиши
    if key == "Up":
        c.move(eyeball,0,-1)
    elif key == "Down":
        c.move(eyeball,0,1)
    elif key =="Left" :
        c.move(eyeball,-1,0)
    elif key =="Right":
        c.move(eyeball,1,0)
#привязывает eye_control к нажатию любой клавиши        
c.bind_all('<Key>',eye_control)

def mouth_open2(event): #отр/закр рот
    c.itemconfig(mouth,fill = 'black')
def mouth_clouse2(event):
    c.itemconfig(mouth,fill = 'red')
    
c.bind_all('<KeyPress-s>', mouth_open2)
c.bind_all('<KeyPress-x>', mouth_clouse2)    




    
    
