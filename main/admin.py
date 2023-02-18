from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from .models import Image, Play, Video, Comment, ContactAndInfo, SocialNetwork, Ticket


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" width="224"/>'.format(obj.image_file.url))

    image_tag.short_description = 'Image'

    list_display = ('image_tag', 'category', 'play', 'carousel', 'date_created')


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 0


@admin.register(Play)
class PlayAdmin(admin.ModelAdmin):
    inlines = (CommentInline,)


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    def video_tag(self, obj):
        return mark_safe(obj.embedded_video.replace('width="560" height="315"',  'width="224" height="126"'))

    video_tag.short_description = 'Video'

    list_display = ('video_tag', 'name', 'description', 'play')


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


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    pass
