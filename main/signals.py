from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.conf import settings
import os


@receiver(post_delete)
def delete_file(sender, instance, **kwargs):
    # Get the file path
    file_path = os.path.join(settings.MEDIA_ROOT, str(instance.image_file))

    # Check if the file exists
    if os.path.isfile(file_path):
        # Delete the file from the filesystem
        os.remove(file_path)