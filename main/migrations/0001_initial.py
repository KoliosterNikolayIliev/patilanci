# Generated by Django 4.1.7 on 2023-11-10 23:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactAndInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('address_bg', models.TextField(blank=True, null=True)),
                ('info', models.TextField(blank=True, null=True)),
                ('info_bg', models.TextField(blank=True, null=True)),
                ('about', models.TextField(blank=True, null=True)),
                ('about_bg', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Contacts and information',
                'verbose_name_plural': 'Contacts and information',
            },
        ),
        migrations.CreateModel(
            name='LiveVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('description_bg', models.TextField(blank=True, null=True)),
                ('embedded_video', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='NextLiveVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('live_video_is_playing', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Play',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('play_name', models.CharField(max_length=150)),
                ('play_name_bg', models.CharField(max_length=150)),
                ('description', models.TextField(blank=True, null=True)),
                ('description_bg', models.TextField(blank=True, null=True)),
                ('next_play', models.DateTimeField(blank=True, verbose_name='next_play')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('description_bg', models.TextField(blank=True, null=True)),
                ('embedded_video', models.TextField()),
                ('date_created', models.DateTimeField(auto_now_add=True, null=True)),
                ('play_main_video', models.BooleanField(default=False)),
                ('play', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.play')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=200)),
                ('description_bg', models.CharField(blank=True, max_length=200)),
                ('carousel', models.BooleanField(default=False)),
                ('image_file', models.ImageField(upload_to='images/')),
                ('date_created', models.DateTimeField(auto_now_add=True, null=True)),
                ('poster', models.BooleanField(default=False)),
                ('play', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.play')),
            ],
        ),
    ]
