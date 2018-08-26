from django.http import HttpResponse

def google(request):
    
    html = "google-site-verification: googlee928d1f5ff907fe2.html" 
    return HttpResponse(html)