# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-23 22:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0041_country_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='country',
            old_name='id',
            new_name='idd',
        ),
    ]
