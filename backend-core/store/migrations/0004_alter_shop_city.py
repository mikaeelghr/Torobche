# Generated by Django 3.2.16 on 2023-03-06 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_product_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='city',
            field=models.CharField(max_length=50),
        ),
    ]
