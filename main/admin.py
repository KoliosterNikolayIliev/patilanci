from django.contrib import admin
from django.utils.html import format_html

from .models import Image, Play, Video, Comment


class ImageAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" width="100"/>'.format(obj.image_file.url))

    image_tag.short_description = 'Image'

    list_display = ('image_tag', 'category', 'play', 'carousel', 'date_created')


admin.site.register(Image, ImageAdmin)


class CommentInline(admin.TabularInline):
    model = Comment


class PlayAdmin(admin.ModelAdmin):
    inlines = (CommentInline,)


admin.site.register(Play, PlayAdmin)


class VideoAdmin(admin.ModelAdmin):
    pass


admin.site.register(Video)
