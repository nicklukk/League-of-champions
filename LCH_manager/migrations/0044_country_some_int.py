# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-23 22:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0043_remove_country_idd'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='some_int',
            field=models.ImageField(default=0, upload_to=''),
        ),
    ]