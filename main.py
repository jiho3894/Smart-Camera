import cv2
import sys
from mail import sendEmail
from flask import Flask, render_template, Response
from camera import VideoCamera
from flask_basicauth import BasicAuth
import time
import threading

email_update_interval = 600 # 이메일 전송 주기
video_camera = VideoCamera(flip=True) #카메라 스트리밍
object_classifier = cv2.CascadeClassifier("models/haarcascade_frontalface_default.xml") # Open CV 파일

app = Flask(__name__) # 서버 입장 데이터값 입력
app.config['BASIC_AUTH_USERNAME'] = '사용자 이름'
app.config['BASIC_AUTH_PASSWORD'] = '비밀번호'
app.config['BASIC_AUTH_FORCE'] = True

basic_auth = BasicAuth(app)
last_epoch = 0

def check_for_objects():  # 이메일 전송 관련 코드
	global last_epoch
	while True:
		try:
			frame, found_obj = video_camera.get_object(object_classifier)
			if found_obj and (time.time() - last_epoch) > email_update_interval:
				last_epoch = time.time()
				print ("물체를 감지하였습니다...!")
				sendEmail(frame)
				print ("이메일을 전송했습니다")
		except:
			print ("이메일 전송 오류 ") , sys.exc_info()[0]

@app.route('/')  # Flask 프레임워크 index.html 연결
@basic_auth.required
def index():
    return render_template('index.html')

def gen(camera):  # 카메라 촬영 파일
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')  # 스트리밍 화질
def video_feed():
    return Response(gen(video_camera),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':  # 통신 연결
    t = threading.Thread(target=check_for_objects, args=())
    t.daemon = True
    t.start()
    app.run(host='0.0.0.0', debug=False)
