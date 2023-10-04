from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from django.core.wsgi import get_wsgi_application
from django.urls import path
from main.consumers import LiveStreamConsumer

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': URLRouter([
        path('ws/live-stream/', LiveStreamConsumer.as_asgi()),
    ]),
})
