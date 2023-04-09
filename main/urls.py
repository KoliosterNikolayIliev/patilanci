from django.urls import path

from main.views import IndexView, CarouselAPIView, GalleryAPIView

app_name = 'main'
urlpatterns = [
    path('', IndexView.as_view(), name='home'),
    path('api/carousel', CarouselAPIView.as_view()),
    path('api/gallery', GalleryAPIView.as_view()),
]

