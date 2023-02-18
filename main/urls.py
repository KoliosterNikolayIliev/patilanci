from django.urls import path

from main.views import some_view

app_name = 'main'
urlpatterns = [
    path('', some_view),
]
