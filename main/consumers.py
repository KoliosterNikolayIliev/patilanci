from asgiref.sync import sync_to_async
import json
from channels.generic.websocket import AsyncWebsocketConsumer

from main.models import LiveVideo


class LiveStreamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.secret_key = None

        # Authenticate the WebSocket connection using the secret key
        query_params = self.scope.get('query_string').decode('utf-8')
        print(query_params)
        if 'key' in query_params:
            key, value = query_params.split('=')
            # TODO - change secret key
            if key == 'key' and value == '111':
                print('fffffffffffffffff')
                self.secret_key = value
                await self.accept()
                await self.fetch_live_stream_link(event=1)
            else:
                await self.close()
        else:
            await self.close()

    async def disconnect(self, close_code):
        pass

    # TODO finish this code
    # TODO - How to keep the connection open
    async def base_send(self):
        super().base_send()
    @sync_to_async
    def get_live_video_data(self):
        try:
            return LiveVideo.objects.first()
        except Exception as e:
            print('Error fetching LiveVideo:', e)
            return None

    async def fetch_live_stream_link(self, event):
        try:
            print('hehehehee')
            data = await self.get_live_video_data()
            print(data)
            if data is not None:
                you_tube_link = data.get_live_stream_link()
            else:
                you_tube_link = "unavailable"
            #you_tube_link = '<iframe width="560" height="315" src="https://www.youtube.com/embed/cIBos2i_7nA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            await self.send(text_data=json.dumps({'youtube_link': you_tube_link}))
            print('message sent')
        except Exception as e:
            print('The exception!!!')
            print(e)
            await self.close()
