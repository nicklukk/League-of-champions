from django.shortcuts import render

def home_page(request):
    return render(request, 'LCH_manager/hello_world.html', locals())
