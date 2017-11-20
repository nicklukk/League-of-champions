# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-16 20:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0039_auto_20171116_1622'),
    ]

    operations = [
        migrations.CreateModel(
            name='Conflicts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country_1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Country')),
                ('country_2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='guests_of_match', to='LCH_manager.Country')),
            ],
            options={
                'verbose_name_plural': 'Conflicts',
                'verbose_name': 'Conflict',
            },
        ),
    ]