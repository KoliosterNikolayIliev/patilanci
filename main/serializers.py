from rest_framework import serializers
from main.models import Image


class ImageSerializer(serializers.ModelSerializer):
    image_field_url = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ('id', 'image_field_url')

    def get_image_field_url(self, obj):
        print(obj.image_file.url)
        return obj.image_file.url
