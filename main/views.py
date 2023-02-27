from django.conf.global_settings import MEDIA_URL
from django.shortcuts import render

from main.models import Image, Video
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
