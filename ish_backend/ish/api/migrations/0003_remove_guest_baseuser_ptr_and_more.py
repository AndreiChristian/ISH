# Generated by Django 4.2 on 2023-05-01 06:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_property_bathrooms_property_bedrooms_property_city_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='guest',
            name='baseuser_ptr',
        ),
        migrations.RemoveField(
            model_name='manager',
            name='baseuser_ptr',
        ),
        migrations.RemoveField(
            model_name='manager',
            name='regions',
        ),
        migrations.RemoveField(
            model_name='staff',
            name='baseuser_ptr',
        ),
        migrations.RemoveField(
            model_name='staff',
            name='region',
        ),
        migrations.DeleteModel(
            name='BaseUser',
        ),
        migrations.DeleteModel(
            name='Guest',
        ),
        migrations.DeleteModel(
            name='Manager',
        ),
        migrations.DeleteModel(
            name='Staff',
        ),
    ]
