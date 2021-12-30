question_list = [
    "How many continents are there?",              # pehla question
    "What is the capital of India?",            # doosra question
    "NG mei kaun se course padhaya jaata hai?"    # teesra question
]

options_list = [
    #pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    #second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    #third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]

# har ek question ke liye, uski solution key (yeh index nahi hai)
solution_list = [3, 4, 1] 
answer_list=[
    ["(1)four","(3)seven"],
    ["(4)Delhi","(2)Bhopal"],
    ["(4)Agricultue","(1)Software Engineering"]
]
print("kon banega carorepati???")
i=0
s=0
count=0
while i<len(question_list):
    print(question_list[i])
    a=0
    b=i
    while a<len(options_list[i]):
        k=options_list[b][a]
        print(a+1,k)
        a=a+1
    lifeline=(input("you want life line"))
    if lifeline=="yes":
        print("50 50 life line")
        if count==0:
            print(answer_list[b])
            answer1=int(input("enter your answer1:"))
            if answer1==solution_list[i]:
                s=s+10000
                print("your answer is correct")
                print("you won Rs/",s)
                print("\U0001F917")
            else:
                print("your answer is wrong")
                print("you won zero")
                print("\U0001F629")
                break
            count=count+1
        else:
            print("you already use life life line: ")
            answer2=input("enter your second chance answer:")
            if answer2==solution_list[i]:
                print("your anser is correct")
                print("\U0001F921")
                s=s+10000
                print("you win Rs/:",s,"\U0001F918")
            else:
                print("your answer is wrong")
                print("\U0001F637")
                print("you win RS/: ",s)
                break
    else:
        pass
    answer2=int(input("enter your answer2: "))
    if answer2==solution_list[i]:
        print("your answer is correct")
        s=s+10000
        print("you won Rs/ :",s)
        print("\U0001F917")
    else:
        print("your answer is wrong")
        print("you won Rs/:",)
        print("\U0001F637")
            # b=b+1
    i=i+1
print("__congrulation you are a part of___KON BANAYGA CODEPATI___")
print("you win Rs/",s)
print("THANK YOU BEING PART OF KBC")
print("\U0001F639")


