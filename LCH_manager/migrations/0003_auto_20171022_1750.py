# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-22 14:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LCH_manager', '0002_city'),
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=28)),
                ('surname', models.CharField(max_length=28)),
                ('number', models.PositiveIntegerField(blank=True, default=None)),
                ('birthday', models.DateField(blank=True, default=None)),
                ('motherland', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Country')),
            ],
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=28)),
            ],
            options={
                'verbose_name': 'Position',
                'verbose_name_plural': 'Positions',
            },
        ),
        migrations.AddField(
            model_name='player',
            name='position',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='LCH_manager.Position'),
        ),
    ]
