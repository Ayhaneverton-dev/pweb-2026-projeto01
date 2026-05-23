from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def elenco(request):
    return render(request, 'elenco.html')

def sobre(request):
    return render(request, 'sobre.html')

# Create your views here.
