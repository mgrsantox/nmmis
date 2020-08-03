import os
import random
import string
from django.conf import settings


def aphnum_random(length=10):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(length)))


def aphnum_random1(length=11):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(length)))


def aphnum_random2(length=12):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(length)))


def aphnum_random3(length=13):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(length)))


data_location = settings.SHAPE_DATA_ROOT


def get_uploaded_file(f, folder_name):
    if not os.path.exists(data_location + '/' + folder_name + '/'):
        os.makedirs(data_location + '/' + folder_name + '/')
    with open(data_location + '/' + folder_name + '/' + f.name, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
