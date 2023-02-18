from django.db import models


class Play(models.Model):
    description = models.TextField(default=None)
    program = models.TextField(default=None, null=True)


class Image(models.Model):
    category = models.CharField(max_length=50, blank=False)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    carousel = models.BooleanField(blank=False, default=False)
    image_file = models.ImageField(upload_to='images/')
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class Video(models.Model):
    description = models.TextField(default=None)
    play = models.ForeignKey(to=Play, on_delete=models.SET_NULL, blank=True, null=True)
    url = models.URLField()


class Comment(models.Model):
    play = models.ForeignKey(to=Play, on_delete=models.CASCADE)
    comment = models.TextField(default=None, blank=True, null=True)
    rating = models.IntegerField(default=None)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if self.rating > 5:
            self.rating = 5
        return super().save()


class ContactAndInfo(models.Model):
    phone = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(default=None, blank=True, null=True)
    info = models.TextField(default=None, blank=True, null=True)
    about = models.TextField(default=None, blank=True, null=True)


class SocialNetwork(models.Model):
    contact = models.ForeignKey(to=ContactAndInfo, on_delete=models.CASCADE)
    url = models.URLField()
    icon = models.URLField()


class Ticket(models.Model):
    play = models.ForeignKey(to=Play, on_delete=models.CASCADE)
    price = models.FloatField(default=0.0)
    ticket_type = models.TextField(max_length=200, blank=True, null=True)

# TODO finish with admin
# TODO make raw views without css and js with API possibility?
