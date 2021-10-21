import smtplib, os
from email import encoders
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage

# * 이메일 전송 코드 *

# 수신자와 발신자 지정
fromEmail = 'crsn1111@gmail.com'
fromEmailPassword = '보내는 사람 이메일의 앱 비밀번호'
toEmail = 'crsn1013@gmail.com'

def sendEmail(image):
	# 메일 수신 제목,수발신자,내용
	msgRoot = MIMEMultipart('related')
	msgRoot['Subject'] = '인물이 감지 되었습니다.'
	msgRoot['From'] = fromEmail
	msgRoot['To'] = toEmail
	msgRoot = MIMEText('현 시간에 인물이 감지 되어 인물 사진을 전송 하셨습니다.')
	msgRoot.preamble = 'Raspberry pi security camera update'
	
	msgAlternative = MIMEMultipart('alternative')
	msgRoot.attach(msgAlternative)
	msgText = MIMEText('Smart security cam found object')
	msgAlternative.attach(msgText)

	msgText = MIMEText('<img src="cid:image1">', 'html')
	msgAlternative.attach(msgText)

	msgImage = MIMEImage(image)
	msgImage.add_header('Content-ID', '<image1>')
	msgRoot.attach(msgImage)

	# 지메일은 포트번호 587 사용
	smtp = smtplib.SMTP('smtp.gmail.com', 587)
	smtp.starttls()
	smtp.login(fromEmail, fromEmailPassword)
	smtp.sendmail(fromEmail, toEmail, msgRoot.as_string())
	smtp.quit()
