import cv2
import os
with open("persons.txt", "w") as f:
    for student in new_student:
        f.write("%s\n" % student)
new_student = []
cap = cv2.VideoCapture(0)
name = str(input('Enter your name : '))
new_student.append(name)
if not os.path.exists('images/samunder'):
    os.makedirs('images/samunder')
i=0
while True:
    ret, frame = cap.read()
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('s'):
        i+=1
        cv2.imwrite('images/samunder/image_{}.jpg'.format(i), frame)
        continue
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()
