# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-22 16:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0005_auto_20171022_1955'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='captain',
        ),
        migrations.AddField(
            model_name='team',
            name='players',
            field=models.ManyToManyField(blank=True, default=None, to='LCH_manager.Player'),
        ),
    ]
