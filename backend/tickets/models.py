from django.db import models

class Ticket(models.Model):
    number = models.CharField(max_length=45)
    status = models.CharField(max_length=45)
    creation_date = models.DateField()
    creation_time = models.DateTimeField()
    assessment = models.CharField(max_length=45)
    finished = models.BooleanField()

    class Meta:
        db_table = 'ticket'
        managed = True