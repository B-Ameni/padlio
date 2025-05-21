from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def reserver(request):
    if request.method == "POST":
        data = json.loads(request.body)
        pays = data.get("pays")
        date = data.get("date")
        nombre = data.get("nombre")
        paiement = data.get("paiement")
        send_mail(
            subject="Confirmation de réservation",
            message=f"Votre réservation pour {nombre} personnes le {date} à {pays} est confirmée. Paiement : {paiement}",
            from_email="ton.email@exemple.com", 
            recipient_list=["utilisateur@example.com"], 
        )

        return JsonResponse({"message": "Réservation réussie et email envoyé."})
    else:
        return JsonResponse({"error": "Méthode non autorisée."}, status=405)
