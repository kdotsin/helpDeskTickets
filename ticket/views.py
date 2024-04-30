from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Ticket
from .serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

    def destroy(self, request, *args, **kwargs):
        ticket = self.get_object()
        self.perform_destroy(ticket)
        return Response({'message': 'Ticket deleted successfully'}, status=status.HTTP_200_OK)
