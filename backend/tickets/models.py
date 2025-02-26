from django.db import models

class Ticket(models.Model):
    STATUS_CHOICES = [
        ("Resolvido", "Resolvido"),
        ("Em espera", "Em espera"),
        ("Pendente", "Pendente"),
    ]
    number = models.CharField(max_length=45)
    status = models.CharField(
        max_length=45,
        choices=STATUS_CHOICES,
        default="Em espera",
    )
    creation_date = models.DateField()
    creation_time = models.TimeField()
    # assessment = models.CharField(max_length=45)
    finished = models.BooleanField()

    class Meta:
        db_table = 'ticket'
        managed = True