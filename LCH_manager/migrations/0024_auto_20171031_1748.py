# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-31 15:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0023_team_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='id',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='team',
            name='name',
            field=models.CharField(max_length=56),
        ),
    ]
