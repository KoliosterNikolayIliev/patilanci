import re

from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from .models import Image, Play, Video, ContactAndInfo, SocialNetwork, LiveVideo


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_filter = ('play',)

    def image_tag(self, obj):
        return format_html('<img src="{}" width="224"/>'.format(obj.image_file.url))

    image_tag.short_description = 'Image'

    # def play_name(self, obj):
    #     return obj.play.name

    # play_name.short_description = 'Play'

    list_display = ('image_tag', 'description', 'description_bg', 'play', 'carousel', 'play_main_image', 'date_created')


@admin.register(Play)
class PlayAdmin(admin.ModelAdmin):
    pass


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_filter = ('play',)

    def video_tag(self, obj):
        pattern = r'width="\d+" height="\d+"'
        return mark_safe(re.sub(pattern, 'width="224" height="126"', obj.embedded_video))

    video_tag.short_description = 'Video'

    list_display = ('id', 'video_tag', 'description', 'description_bg', 'play', 'play_main_video', 'date_created')


@admin.register(LiveVideo)
class LiveVideoAdmin(admin.ModelAdmin):
    def video_tag(self, obj):
        pattern = r'width="\d+" height="\d+"'
        return mark_safe(re.sub(pattern, 'width="672" height="378"', obj.embedded_video))

    video_tag.short_description = 'Live video'

    list_display = ('video_tag', 'description', 'description_bg', 'play')


class SocialNetworkInline(admin.TabularInline):
    model = SocialNetwork
    extra = 0


@admin.register(ContactAndInfo)
class ContactAndInfoAdmin(admin.ModelAdmin):
    inlines = (SocialNetworkInline,)

    def has_add_permission(self, request):
        if ContactAndInfo.objects.count() > 0:
            return False
        return True
