from django.urls import path

from main.views import (IndexView,
                        CarouselAPIView,
                        ImageGalleryAPIView,
                        VideoGalleryAPIView,
                        ContactAPIView,
                        PlayAPIView,
                        )

app_name = 'main'
urlpatterns = [
    # path('', IndexView.as_view(), name='home'),
    path('api/carousel', CarouselAPIView.as_view()),
    path('api/image_gallery', ImageGalleryAPIView.as_view()),
    path('api/video_gallery', VideoGalleryAPIView.as_view()),
    path('api/plays', PlayAPIView.as_view()),
    path('api/contact', ContactAPIView.as_view()),
]
