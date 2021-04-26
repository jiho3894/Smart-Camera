![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Smart-Security&fontAlign=58&fontAlignY=30&color=gradient)

# 스마트 보안 카메라
 
 **라즈베리파이 3B+** 를 이용하여 특정 시간 보안이 필요한 공간에서 **비디오 스트리밍**을 하여
 **물체를 인식**하고 인식한 장면을 촬영 후 **이메일로 즉시 발송**하여 상황을 파악할 수 있도록 하고
 그 장면을 **웹에서 확인이 가능**하도록 제품을 만들었음.
 
## 사용언어 :
* HTML 5
* CSS 3
* JavaScript
* Python

## 그 외 라이브러리 , 프레임워크 :
* Jquery
* Vue.js
* Open CV
* GPIO
* Flask
* AUTH

## 바로가기
- [main.py](#1)
- [GPIO](#2)
- [mail.py](#3)
- [index.html](#4)
<img scr="https://user-images.githubusercontent.com/79081800/114302764-6f564a80-9b05-11eb-9055-6682a97cf69d.jpg">

# 사용 방법
 
# main.py <a id="1">
```python
app.config['BASIC_AUTH_USERNAME'] = '아이디'
app.config['BASIC_AUTH_PASSWORD'] = '비밀번호'
app.config['BASIC_AUTH_FORCE'] = True  #인증 여부
```
##### Flask 서버 입장시 인증 여부를 물어보는 코드
##### 본인의 상황에 따라 자율롭게 수정해주세요.
# GPIO <a id="2">

<img src="https://user-images.githubusercontent.com/79081800/116015139-4a201b00-a673-11eb-9822-d424116e3e57.png">


```python
pin = GPIO'번호' 에 해당하는 번호  # 상황에 따라 번호 수정
# pin = 18
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(pin, GPIO.OUT)
servo = GPIO.PWM(pin,50)
servo.start(0) 
```

##### 방향 전환에 필요한 카메라 모터 코드입니다 상황에 따라
##### 핀의 위치를 달리하였을 경우 pin 의 숫자를 변경해주세요

```python
servo.ChangeDutyCycle(2.5)  # Duty 회적각 0도
            sleep(10) # delay
            servo.ChangeDutyCycle(7.5) # Duty 회전각 90도
            sleep(10)  # delay
```

##### 모터의 회전 각도 설정입니다 본인의 구역에 맞게
##### 원하는 회전각과 delay를 설정해주세요

```python
if __name__ == '__main__':  # 통신 연결
    t = threading.Thread(target=check_for_objects, args=())
    t.daemon = True
    t.start()
    app.run(host='0.0.0.0', port=포트번호 , debug=False)  # host ip 주소와 포트번호 변경
```

##### Flask를 이용한 웹 서버 이동을 위한 코드입니다 고정 ip일 경우
##### '0.0.0.0'을 본인 ip로 변경해주세요 또한 포트 번호를 고유로 설정할 경우
##### app.run 코드 안에 (port=포트번호) 를 입력해주세요 

# mail.py <a id="3">
```python
fromEmail = '보내는 사람 이메일 입력'
fromEmailPassword = '보내는 사람 이메일의 앱 비밀번호'
toEmail = '받는 사람 이메일'
```

##### 물체 촬영 후 이메일 전송 코드 입니다 호스트의 이메일을 입력하고
##### 본인이 수령하고 싶은 이메일을 입력해주세요
##### [앱 비밀번호](https://support.google.com/accounts/answer/185833?hl=ko) 설정방법은 다음과 같습니다.

# index.html <a id="4">

<img src="https://user-images.githubusercontent.com/79081800/116017733-5dcf7f80-a67b-11eb-8640-377b644a9485.jpg" width="700" height="500">
<img src="https://user-images.githubusercontent.com/79081800/116017391-6bd0d080-a67a-11eb-8277-9f2458f22fbd.jpg" width="600" height="800">
<img src="https://user-images.githubusercontent.com/79081800/116017490-af2b3f00-a67a-11eb-8ca0-26b489f522bf.jpg" width="500" height="500">


[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:snugyun01@gmail.com)](mailto:crsn1111@gmail.com)
