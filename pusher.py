import time

from Pubnub import Pubnub

pubnub = Pubnub('demo', 'demo')


def push_time(count):
    message = {
        'time': time.time(),
        'count': count,
        }
    pubnub.publish({
        'channel': 'golden_guava',
        'message': message
        })


def main():
    count = 1
    while True:
        push_time(count)
        count += 1
        time.sleep(10)

if __name__ == '__main__':
    main()
