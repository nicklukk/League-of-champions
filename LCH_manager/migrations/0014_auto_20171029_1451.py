# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-29 12:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0013_team_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='group',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Group'),
        ),
    ]
