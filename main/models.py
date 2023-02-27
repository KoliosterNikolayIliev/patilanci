from django.db import models
from django.utils.datetime_safe import datetime


# todo LIVE !!! DA SE `UEM DOPYLNITELNO
class Play(models.Model):
    name = models.CharField(max_length=150, blank=False)
    name_bg = models.CharField(max_length=150, blank=False)
    description = models.TextField(null=True, blank=True)
    description_bg = models.TextField(null=True, blank=True)
    program_bg = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Image(models.Model):
    category = models.CharField(max_length=50, blank=False)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    carousel = models.BooleanField(blank=False, default=False)
    image_file = models.ImageField(upload_to='images/')
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)


# TODO are there gona be videos without play attached ????
class Video(models.Model):
    name = models.CharField(max_length=150, default='Unknown')
    description = models.TextField(null=True, blank=True)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    embedded_video = models.TextField(blank=False)
    date_created = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        if self.play.name:
            return f'{self.name} / {self.play.name}'
        return self.name


class LiveVideo(models.Model):
    name = models.CharField(max_length=150, default='Unknown')
    description = models.TextField(null=True, blank=True)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    active = models.BooleanField(default=False)
    embedded_video = models.TextField(blank=False)


def __str__(self):
    if self.play.name:
        return f'{self.name} / {self.play.name}'
    return self.name


class ContactAndInfo(models.Model):
    phone = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    address_bg = models.TextField(blank=True, null=True)
    info = models.TextField(blank=True, null=True)
    info_bg = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    about_bg = models.TextField(blank=True, null=True)

    # TODO - add image about

    class Meta:
        verbose_name = 'Contacts and information'
        verbose_name_plural = 'Contacts and information'

    def __str__(self):
        return 'Contact information'


class SocialNetwork(models.Model):
    name = models.CharField(max_length=150, default='Unknown')
    contact = models.ForeignKey(to=ContactAndInfo, on_delete=models.CASCADE)
    url = models.URLField()
    icon_class = models.CharField(max_length=150, blank=True, default=None, null=True)

    def __str__(self):
        return self.name

# TODO finish with admin
# TODO make raw views without css and js with API possibility?

