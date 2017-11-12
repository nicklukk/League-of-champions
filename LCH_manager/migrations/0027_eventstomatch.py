# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-12 18:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0026_auto_20171112_2017'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventsToMatch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(choices=[(0, 'Goal'), (1, 'Yellow card'), (2, 'Red card')], max_length=20)),
            ],
        ),
    ]
