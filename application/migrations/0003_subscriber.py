# Generated by Django 5.0 on 2024-01-25 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0002_customer_message'),
    ]

    operations = [
        migrations.CreateModel(
            name='subscriber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email_ID', models.EmailField(max_length=254)),
            ],
        ),
    ]