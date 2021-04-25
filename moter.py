import RPi.GPIO as GPIO
import time


def moveMoter():
    SERVO_PIN = 18
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(SERVO_PIN, GPIO.OUT)
    servo = GPIO.PWM(SERVO_PIN,50)
    servo.start(0)

    try:
        while True:
            servo.ChangeDutyCycle(2.5)
            time.sleep(3)
            servo.ChangeDutyCycle(7.5)
            time.sleep(3)
            servo.ChangeDutyCycle(2.5)
            time.sleep(3)

    except keyboardInterrupt:
            servo.stop()
            GPIO.cleanup()