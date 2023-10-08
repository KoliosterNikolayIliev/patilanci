from rest_framework import serializers
from main.models import Image, Video, ContactAndInfo, Play  # SocialNetwork


class ImageSerializer(serializers.ModelSerializer):
    image_field_url = serializers.SerializerMethodField()
    play_name = serializers.SerializerMethodField()
    play_name_bg = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ('id', 'image_field_url', 'description', 'description_bg', 'play_name', 'play_name_bg')

    def get_image_field_url(self, obj):
        return obj.image_file.url

    def get_play_name(self, obj):
        return obj.play.name

    def get_play_name_bg(self, obj):
        return obj.play.name_bg


class VideoSerializer(serializers.ModelSerializer):
    # embedded_video = serializers.SerializerMethodField()
    play_name = serializers.SerializerMethodField()
    play_name_bg = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ('id', 'embedded_video', 'description', 'description_bg', 'play_name', 'play_name_bg')

    # def get_image_field_url(self, obj):
    #     return obj.image_file.url

    def get_play_name(self, obj):
        return obj.play.name

    def get_play_name_bg(self, obj):
        return obj.play.name_bg


# class SocialNetworkSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SocialNetwork
#         fields = ('id', 'name', 'url', 'icon_class')


class PlaySerializer(serializers.ModelSerializer):
    poster_url = serializers.SerializerMethodField()

    class Meta:
        model = Play
        fields = ('id', 'name', 'name_bg', 'description', 'description_bg', 'next_play', 'poster_url')  # poster_url

    def get_poster_url(self, obj):
        image = obj.image_set.filter(poster=True)
        if len(image) > 0:
            return image[0].image_file.url
        return 'no_image'
    #
    # def get_play_name(self, obj):
    #     return obj.name
    #
    # def get_play_name_bg(self, obj):
    #     return obj.name_bg


class ContactSerializer(serializers.ModelSerializer):
    # socialnetwork_set = SocialNetworkSerializer(many=True)

    class Meta:
        model = ContactAndInfo
        fields = ('id', 'phone', 'address', 'address_bg', 'info', 'info_bg', 'about', 'about_bg',)
