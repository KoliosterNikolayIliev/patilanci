from django.conf.global_settings import MEDIA_URL
from django.shortcuts import render

from main.models import Image, Video


def some_view(request):
    images = Image.objects.all()
    images = [x.image_file.url for x in images]
    video = [x.embedded_video for x in Video.objects.all()]
    return render(request, 'index.html', context={'images': images, 'video': video})
