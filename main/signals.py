from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from django.conf import settings
from asgiref.sync import async_to_sync
import os
from main.consumers import LiveStreamConsumer


@receiver(post_delete)
def delete_file(sender, instance, **kwargs):
    if sender.__name__ == 'Image':
        # Get the file path
        file_path = os.path.join(settings.MEDIA_ROOT, str(instance.image_file))

        # Check if the file exists
        if os.path.isfile(file_path):
            # Delete the file from the filesystem
            os.remove(file_path)

# @async_to_sync
# async def get_the_mf():
#     consumer = LiveStreamConsumer()
#     # consumer.scope = {'user': sender}
#     print('caLL the func')
#     await consumer.fetch_live_stream_link(event=None)
#
# @receiver(post_delete)
# def delete_video(sender, instance, **kwargs):
#     if sender.__name__ == 'LiveVideo':
#         # await fetch_live_stream_link
#         print("link deleted")
#         get_the_mf()
#
#
# @receiver(post_save)
# def add_video(sender, instance, **kwargs):
#     if sender.__name__ == 'LiveVideo':
#         # await fetch_live_stream_link
#         print("link crated")
#         get_the_mf()

