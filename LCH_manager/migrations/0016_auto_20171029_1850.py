# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-29 16:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0015_auto_20171029_1453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='surname',
            field=models.CharField(blank=True, default=None, max_length=28, null=True),
        ),
    ]
