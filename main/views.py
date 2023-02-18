from django.conf.global_settings import MEDIA_URL
from django.shortcuts import render

from main.models import Image


def some_view(request):
    images = Image.objects.all()
    images = [x.image.url for x in images]
    return render(request, 'index.html', context={'images': images})
