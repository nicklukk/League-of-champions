from django.db.models import Count
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


def leader_board(request, top):
    bombardiers = EventsToMatch.objects.filter(event='0') \
                      .values('player') \
                      .annotate(goals_num=Count('id')).order_by('-goals_num')[:int(top)]
    players = []
    i = 0
    for el in bombardiers:
        player = Player.objects.get(id=el['player'])
        i += 1
        players.append({'player': player, 'goals': el['goals_num'], 'num': i})
    # raw = '''SELECT name, surname, COUNT(LCH_manager_eventstomatch.id) AS goals FROM LCH_manager_eventstomatch
    #       JOIN LCH_manager_player ON LCH_manager_eventstomatch.player_id = LCH_manager_player.id
    #       GROUP BY player_id
    #       ORDER BY COUNT(LCH_manager_eventstomatch.id) DESC '''
    return render(request, 'LCH_manager/leader_bord.html', locals())


def matches(request):
    matches = Match.objects.all().order_by('-tour', 'host_team__group')
    return render(request, 'LCH_manager/matches.html', locals())
