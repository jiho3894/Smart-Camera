![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Smart-Security&fontAlign=58&fontAlignY=30&color=gradient)

# 스마트 보안 카메라
 
 **라즈베리파이 3B+** 를 이용하여 특정 시간 보안이 필요한 공간에서 **비디오 스트리밍**을 하여
 **물체를 인식**하고 인식한 장면을 촬영 후 **이메일로 즉시 발송**하여 상황을 파악할 수 있도록 하고
 그 장면을 **웹에서 확인이 가능**하도록 제품을 만들었음.
 
 
## 바로가기
- 웹 페이지 https://jiho3894.github.io/Smart-Camera/templates/index.html
- [사용언어](#5)
- [main.py](#1)
- [GPIO](#2)
- [mail.py](#3)
- [index.html](#4)
 
## 사용언어 : <a id="5">
* HTML 5
* CSS 3
* JavaScript (ES5 , ES6)
* Python

## 그 외 라이브러리 , 프레임워크 :
* Jquery
* Vue
* Open CV [설치 방법](http://www.pyimagesearch.com/2016/04/18/install-guide-raspberry-pi-3-raspbian-jessie-opencv-3/)
* GPIO
* Flask
* OAUTH 2.0 [사용 방법](https://developers.google.com/identity/protocols/oauth2)

## 라즈베리파이 구성도
<img src="https://user-images.githubusercontent.com/79081800/116809699-495b1d80-ab7a-11eb-9242-3a03d544a263.png" width="900" height="550">

## 웹 구현 구성도
<img src="https://user-images.githubusercontent.com/79081800/114302764-6f564a80-9b05-11eb-9055-6682a97cf69d.jpg">

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
#### 최종 ip는 라즈베리파이 현 ip를 입력해야합니다

# mail.py <a id="3">
```python
fromEmail = '보내는 사람 이메일 입력'
fromEmailPassword = '보내는 사람 이메일의 앱 비밀번호'
toEmail = '받는 사람 이메일'
```

##### 물체 촬영 후 이메일 전송 코드 입니다 호스트의 이메일을 입력하고
##### 본인이 수령하고 싶은 이메일을 입력해주세요
##### 앱 비밀번호 설정방법은 다음과 같습니다. [앱 비밀번호 만들기](https://support.google.com/accounts/answer/185833?hl=ko)

# index.html <a id="4">
[실행 과정 확인하기](https://github.com/jiho3894/Smart-Camera/files/6376400/2.pdf)

# 현 수정사안 :
- Servo motor 기능 불안정 상태
- Servo motor 기능을 route로 자유롭게 필요시 사용하도록 수정중 
- AUTH Gmail 로그인이 localhost 만 적용되는 문제
- 웹 페이지 CSS 추가 변경 진행중..

#### 추가 피드백은 아래 이메일로 부탁드립니다
#### 기타 오류가 있을시에 언제든지 의견을 받고 피드백 해드립니다.
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:snugyun01@gmail.com)](mailto:crsn1111@gmail.com)


