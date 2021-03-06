# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-22 17:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0008_auto_20171022_2012'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('index', models.CharField(max_length=1, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'Group',
                'verbose_name_plural': 'Groups',
            },
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('host_goals_num', models.PositiveIntegerField(default=0)),
                ('guest_goals_num', models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.AddField(
            model_name='team',
            name='basket_index',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='match',
            name='guest_team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='guests_of_match', to='LCH_manager.Team'),
        ),
        migrations.AddField(
            model_name='match',
            name='host_team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Team'),
        ),
        migrations.AddField(
            model_name='team',
            name='group',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Group'),
        ),
    ]
