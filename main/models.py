from django.db import models


class Play(models.Model):
    name = models.CharField(max_length=150, blank=False)
    name_bg = models.CharField(max_length=150, blank=False)
    description = models.TextField(null=True, blank=True)
    description_bg = models.TextField(null=True, blank=True)
    program_bg = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Image(models.Model):
    description = models.CharField(max_length=200, blank=True)
    description_bg = models.CharField(max_length=200, blank=True)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    carousel = models.BooleanField(blank=False, default=False)
    image_file = models.ImageField(upload_to='images/')
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    play_main_image = models.BooleanField(blank=False, default=False)

    def save(self, *args, **kwargs):
        if self.play_main_image:
            Image.objects.exclude(pk=self.pk).update(play_main_image=False)
        super(Image, self).save(*args, **kwargs)


class Video(models.Model):
    description = models.TextField(null=True, blank=True)
    description_bg = models.TextField(null=True, blank=True)
    play = models.ForeignKey(to=Play, on_delete=models.CASCADE, blank=False, null=False)
    embedded_video = models.TextField(blank=False)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    play_main_video = models.BooleanField(blank=False, default=False)

    def save(self, *args, **kwargs):
        if self.play_main_video:
            Video.objects.exclude(pk=self.pk).update(play_main_image=False)
        super(Video, self).save(*args, **kwargs)


class LiveVideo(models.Model):
    description = models.TextField(null=True, blank=True)
    description_bg = models.TextField(null=True, blank=True)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    active = models.BooleanField(default=False)
    embedded_video = models.TextField(blank=False)


class ContactAndInfo(models.Model):
    phone = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    address_bg = models.TextField(blank=True, null=True)
    info = models.TextField(blank=True, null=True)
    info_bg = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    about_bg = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = 'Contacts and information'
        verbose_name_plural = 'Contacts and information'

    def __str__(self):
        return 'Contact information'


# class SocialNetwork(models.Model):
#     name = models.CharField(max_length=150, default='Unknown')
#     contact = models.ForeignKey(to=ContactAndInfo, on_delete=models.CASCADE)
#     url = models.URLField()
#     icon_class = models.CharField(max_length=150, blank=True, default=None, null=True)
#
#     def __str__(self):
#         return self.name
