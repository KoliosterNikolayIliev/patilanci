from time import sleep

from django.conf.global_settings import MEDIA_URL
from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from main.models import Image, Video
from rest_framework import generics
from main.serializers import ImageSerializer

# def some_view(request):
#     images = Image.objects.all()
#     images = [x.image_file.url for x in images]
#     video = [x.embedded_video for x in Video.objects.all()]
#     return render(request, 'index.html', context={'images': images, 'video': video})

from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'carousel.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        images = Image.objects.all()
        images = [x.image_file.url for x in images]
        context['carousel_items'] = [
            {'image': '/media/images/test_results_XU7YuY4.jpg', 'caption': 'Caption 1'},
            {'image': '/media/images/viber_image_2022-07-13_19-37-35_ASGYiup.jpg', 'caption': 'Caption 2'},
            {'image': '/media/images/test_results_XU7YuY4.jpg', 'caption': 'Caption 3'},
        ]
        return context


class CarouselAPIView(generics.ListAPIView):
    queryset = Image.objects.filter(carousel=True)
    serializer_class = ImageSerializer

    def get(self, request, *args, **kwargs):
        sleep(3)
        return super().get(request, *args, **kwargs)
