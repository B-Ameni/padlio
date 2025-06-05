from django.contrib import admin
from .models import User , Compte , Centre, Reservation, Paiement , Partie
# Register your models here.
admin.site.register(User)
admin.site.register(Compte)
admin.site.register(Centre)
admin.site.register(Reservation)
admin.site.register(Paiement)
admin.site.register(Partie)


