# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-30 14:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0018_auto_20171030_1310'),
    ]

    operations = [
        migrations.CreateModel(
            name='GoalsToPlayer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_of_goals', models.IntegerField(default=1)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Player')),
            ],
            options={
                'verbose_name': 'Goals_to_player',
                'verbose_name_plural': 'Goals_to_players',
            },
        ),
        migrations.RemoveField(
            model_name='goals_to_player',
            name='player',
        ),
        migrations.RemoveField(
            model_name='goals_to_player',
            name='statistic',
        ),
        migrations.DeleteModel(
            name='Goals_to_player',
        ),
        migrations.AddField(
            model_name='statistic',
            name='bombardiers',
            field=models.ManyToManyField(blank=True, default=None, to='LCH_manager.GoalsToPlayer'),
        ),
    ]