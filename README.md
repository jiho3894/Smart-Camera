![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=Smart-Camera&fontAlign=58&fontAlignY=30&color=gradient)

(2021.11.23 ver)
- 최종 운영자 메뉴얼 작성

# 스마트 카메라
 
 **라즈베리파이** 를 이용하여 특정 시간 보안이 필요한 공간에서 **비디오 스트리밍**을 하여
 **물체를 인식**하고 인식한 장면을 촬영 후 **이메일로 즉시 발송**하여 상황을 파악할 수 있도록 하고
 그 장면을 **문자인증을 통한 웹에서 확인이 가능**하도록 제품을 만들었음.
 
 
## 바로가기
- 웹 페이지 https://jiho3894.github.io/Smart-Camera/templates/index.html
- [사용언어](#1)
- [사용 방법](#2)
 
## 사용언어 : <a id="1">
* HTML 5
* CSS 3
* JavaScript
* Python

## 그 외 라이브러리 :
* Open CV [설치 방법](http://www.pyimagesearch.com/2016/04/18/install-guide-raspberry-pi-3-raspbian-jessie-opencv-3/)
* Email.JS [사용 방법](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
* GPIO
* Flask

## 라즈베리파이 구성도 (그림을 클릭해 확대하세요)
<img src="https://user-images.githubusercontent.com/79081800/140742387-33c63733-76a9-4876-9afc-a4bcf8eac7d6.png" width="900" height="550">

## 웹 구현 구성도 (그림을 클릭해 확대하세요)
<img src="https://user-images.githubusercontent.com/79081800/114302764-6f564a80-9b05-11eb-9055-6682a97cf69d.jpg">

# 사용 방법 <a id="2">
 
## index.html
[실행 과정 확인하기](https://github.com/jiho3894/Smart-Camera/files/7497202/start.pdf)
 
```python
if __name__ == '__main__':  # 통신 연결
    t = threading.Thread(target=check_for_objects, args=())
    t.daemon = True
    t.start()
    app.run(host='0.0.0.0', port=포트번호 , debug=False)  # host ip 주소와 포트번호 변경
```

#### Flask를 이용한 웹 서버 이동을 위한 코드입니다 
#### 가정에 사용중인 와이파이와 동일 환경에 연결해주시고
#### 라즈베리에 들어온 와이파이의 ip주소를
#### 본인이 확인하고 싶은 앱에 입력해주세요

 ## Email.JS
 ##### 이메일 인증 코드를 받는 절차입니다
 ##### [이메일 등록하기](https://dashboard.emailjs.com/admin)
```javaScript
const number = Math.floor(Math.random() * 9999);
 ...
form.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = '이메일 전송 중...';
  const serviceID = '서버 ID';
  const templateID = '템플릿 ID';
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '다시 전송하기';
      alert('전송 완료!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
```
 
#### 랜덤 코드 번호를 지정한 이메일로 전송하는 코드
#### 스마트 카메라 메인 홈페이지 입장전 필수로 인증을 거쳐야함

```html
<!--현재 시간-->
      <div id="clock">
        <h2>2021. 00. 00. 오전 00:00:00</h2>
        <h3>실시간 감시중</h3>
        <!-- 파이카메라 ( 이메일 인증 성공 시 확인 가능)-->
        <img id="camera" src="{{ url_for('video_feed') }}">
        <!-- 모바일 전화 신고 번호 -->
        <div >
          <button class="call" onclick="document.location.href='tel:182'"> 
          <a href="tel:182">즉시 신고</a>
        </div>
      </div>
```
         
### 카메라 실시간 확인 사이트 코드 파이카메라, 즉시신고 버튼

# mail.py
```python
fromEmail = '보내는 사람 이메일 입력'
fromEmailPassword = '보내는 사람 이메일의 앱 비밀번호'
toEmail = '받는 사람 이메일'
```

##### 물체 촬영 후 이메일 전송 코드 입니다 호스트의 이메일을 입력하고
##### 본인이 수령하고 싶은 이메일을 입력해주세요
##### 앱 비밀번호 설정방법은 다음과 같습니다. [앱 비밀번호 만들기](https://support.google.com/accounts/answer/185833?hl=ko)



### 추가 피드백은 아래 이메일로 부탁드립니다
### 기타 오류가 있을시에 언제든지 의견을 받고 피드백 해드립니다
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:snugyun01@gmail.com)](mailto:crsn1111@gmail.com)


