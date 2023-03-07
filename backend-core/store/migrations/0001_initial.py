# Generated by Django 3.2.16 on 2022-10-31 22:23

import django.contrib.postgres.fields.hstore
from django.contrib.postgres.operations import HStoreExtension
from django.db import migrations, models
import django.db.models.deletion
import store.utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        HStoreExtension(),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('is_leaf', models.BooleanField()),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.RESTRICT, to='store.category')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('uid', models.CharField(default=store.utils.generate_uid, editable=False, max_length=11, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, unique=True)),
                ('page_url', models.CharField(max_length=200)),
                ('features', django.contrib.postgres.fields.hstore.HStoreField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='store.category')),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('uid', models.CharField(default=store.utils.generate_uid, editable=False, max_length=11, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, unique=True)),
                ('domain', models.CharField(max_length=50, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProductHistory',
            fields=[
                ('uid', models.CharField(default=store.utils.generate_uid, editable=False, max_length=11, primary_key=True, serialize=False)),
                ('price', models.IntegerField()),
                ('is_available', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='history', to='store.product')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='shop',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.shop'),
        ),
    ]
