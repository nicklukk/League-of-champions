# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-22 17:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0007_player_is_a_captain'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='is_a_captain',
        ),
        migrations.AddField(
            model_name='team',
            name='captain',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='captain_for_team', to='LCH_manager.Player'),
        ),
    ]
