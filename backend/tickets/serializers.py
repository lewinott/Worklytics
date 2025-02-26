from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'
        extra_kwargs = {
            "finished": {
                "error_messages": {
                    "required": "O campo de finalizado é obrigatório!",
                    "blank": "O campo de finalizado não deve estar vazio!",
                    "max_length": "O finalizado deve ter no máximo {max_length} caracteres.",
                    "null": "O campo de finalizado não deve ser nulo!",
                }
            },
            "number": {
                "error_messages": {
                    "required": "O campo de numero do ticket é obrigatório!",
                    "blank": "O campo de numero do ticket não deve estar vazio!",
                    "max_length": "O numero do ticket deve ter no máximo {max_length} caracteres.",
                    "null": "O campo de numero do ticket não deve ser nulo!",
                }
            },
            "status": {
                "error_messages": {
                    "required": "O campo de status do ticket é obrigatório!",
                    "blank": "O campo de status do ticket não deve estar vazio!",
                    "max_length": "O status do ticket deve ter no máximo {max_length} caracteres.",
                    "null": "O campo de status do ticket não deve ser nulo!",
                }
            },
            "creation_date": {
                "error_messages": {
                    "required": "O campo de data de criação é obrigatório!",
                    "blank": "O campo de data de criação não deve estar vazio!",
                    "max_length": "O data de criação deve ter no máximo {max_length} caracteres.",
                    "null": "O campo de data de criação não deve ser nulo!",
                }
            },
            "creation_time": {
                "error_messages": {
                    "required": "O campo de hora de criação é obrigatório!",
                    "blank": "O campo de hora de criação não deve estar vazio!",
                    "max_length": "O hora de criação deve ter no máximo {max_length} caracteres.",
                    "null": "O campo de hora de criação não deve ser nulo!",
                }
            }
        }
