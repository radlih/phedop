import os
print ("""
                                             
                             \033[95m⣿⣿⣿⠿⠿⣿⣿⡿⢋⣶⣶⣬⣙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                             \033[95⣿⡿⢡⣿⣷⣶⣦⣥⣿⣿⣿⣿⣿⣷⣮⡛⢿⣿⣿⣿⣿⣿⣿⣿
                             \033[95⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢮⡙⣿⣿⣯⢐⡎⣿
                             \033[95⣿⢹⣿⣿⣿⣿⣿⣿⡿⣡⡬⢿⣿⣿⣿⣶⣶⣼⣦⠥⣖⣩⣾⣿
                             \033[95⣿⢸⣿⣿⣿⡿⣿⣿⣿⣿⠇⣌⢛⣻⣿⣿⣟⣛⣿⣧⠹⣿⣿⣿
                             \033[95⠏⣼⣿⣿⢏⣾⣿⣟⣩⣶⣶⣿⣿⣿⣿⣿⡟⡿⢸⡿⣡⣿⣿⣿
                             \033[95⣼⣿⣿⠇⣼⣿⣿⢸⠋⠁⠉⢽⣿⣿⣿⣟⣠⣤⣆⢃⢻⣿⣿⣿
                             \033[95⣿⣿⣿⣼⣿⣿⣿⡞⣿⣿⣷⣾⣿⣿⣿⣿⡿⠟⠛⠸⢦⣙⡋⣿
                             \033[95⣿⣿⣿⠹⣿⣿⡿⠗⣈⣭⣭⣭⣉⠻⡟⣩⣶⣾⣿⣿⣶⡙⣱⣿
                             \033[95⣿⣿⣿⣷⣌⡛⠠⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⢸⣿
                             \033[95⣿⣿⣿⣿⢏⣴⣧⣴⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣱⣶⣴⡜⢸⣿
                             \033[95⣿⣿⣿⢃⣾⣿⣿⣿⡷⠉⢿⣿⣿⣿⣿⣿⣿⢰⣾⣿⣿⣧⢸⣿
                          
""")
print("""\33[0;32m[1] RUN\n[2] CANCEL\nCancel or Run?""")
c = input(">>>: ")
if c == "1":
    os.system("npm i fs")
    os.system("npm install path")
    os.system("apt upgrade -y")
    os.system("apt install screen -y")
    os.system("apt install golang")
    os.system("apt update -y")
    os.system("npm i url")
    os.system("npm i net")
    os.system("npm i request")
    
elif c == "2":
    os.system("clear")
print ("DONE!")