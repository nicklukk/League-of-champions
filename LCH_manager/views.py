from django.shortcuts import render
from .models import *


def home_page(request):
    return render(request, 'LCH_manager/home_page.html', locals())


def player(request, player_id):
    player = Player.objects.get(id=player_id)
    return render(request, 'LCH_manager/player.html', locals())


def team(request, team_id):
    team = Team.objects.get(id=team_id)
    return render(request, 'LCH_manager/team.html', locals())


def match(request, match_id):
    match = Match.objects.get(id=match_id)
    return render(request, 'LCH_manager/match.html', locals())


def country(request, country_name):
    country = Country.objects.get(name=country_name)
    teams = Team.objects.filter(city__country=country)
    return render(request, 'LCH_manager/country.html', locals())


def leader_board(request):

    return render(request, 'LCH_manager/leader_bord.html', locals())