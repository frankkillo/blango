# Generated by Django 3.2.6 on 2022-04-19 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_alter_post_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(null=True, related_name='posts', to='blog.Tag'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='value',
            field=models.TextField(max_length=100, unique=True),
        ),
    ]
