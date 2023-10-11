from django.db.models.signals import post_delete, post_save
from django.conf import settings
from main.models import Image, LiveVideo
from django.dispatch import receiver
from main.views import connected_clients
import os


@receiver(post_delete, sender=Image)
def delete_file(sender, instance, **kwargs):
    file_path = os.path.join(settings.MEDIA_ROOT, str(instance.image_file))
    # Check if the file exists
    if os.path.isfile(file_path):
        # Delete the file from the filesystem
        os.remove(file_path)


@receiver(post_save, sender=LiveVideo)
def handle_post_save(sender, instance, created, **kwargs):
    if created:
        # Send the link to connected clients upon model creation
        link = instance.embedded_video  # Modify this based on your model's URL logic
        connected_clients.add(link)

@receiver(post_delete, sender=LiveVideo)
def handle_post_delete(sender, instance, **kwargs):
    connected_clients.add("no-live")