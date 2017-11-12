# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-12 20:15
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0032_auto_20171112_2143'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='city',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.City'),
        ),
        migrations.AlterField(
            model_name='team',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
