# Generated by Django 5.1.6 on 2025-02-26 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=45)),
                ('status', models.CharField(max_length=45)),
                ('creation_date', models.DateField()),
                ('creation_time', models.DateTimeField()),
                ('assessment', models.CharField(max_length=45)),
                ('finished', models.BooleanField()),
            ],
            options={
                'db_table': 'ticket',
                'managed': True,
            },
        ),
    ]
