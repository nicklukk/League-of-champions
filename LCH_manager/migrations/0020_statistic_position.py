# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-30 18:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0019_auto_20171030_1621'),
    ]

    operations = [
        migrations.AddField(
            model_name='statistic',
            name='position',
            field=models.IntegerField(default=50),
        ),
    ]