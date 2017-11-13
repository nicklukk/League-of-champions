# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-12 18:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0027_eventstomatch'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventstomatch',
            name='event',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Goal'), (1, 'Yellow card'), (2, 'Red card')]),
        ),
    ]