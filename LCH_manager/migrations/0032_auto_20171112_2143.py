# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-12 19:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0031_delete_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='basket_index',
            field=models.PositiveIntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4)]),
        ),
    ]
