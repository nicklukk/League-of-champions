from collections import defaultdict

from django.core.paginator import Paginator
from django.db.models import Count, Q
from django.shortcuts import render, render_to_response

from .models import *
from .scripts import grouping_catch, get_matches_results, get_match_results


def home_page(request):
    return render(request, 'LCH_manager/home_page.html', locals())


def player(request, player_id):
    player = Player.objects.get(id=player_id)
    if request.POST:
        player()
    return render(request, 'LCH_manager/player.html', locals())


def team(request, team_id):
    team = Team.objects.get(id=team_id)
    players = Player.objects.filter(team=team)
    captain = Player.objects.filter(team=team, is_a_captain=True)[0]
    order = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper']
    players = sorted(players, key=lambda x: order.index(x.position))
    nationalities = Player.objects.filter(team=team).values_list('motherland').annotate(Count('id'))
    matches_results = get_matches_results(Match.objects.filter(
        Q(host_team=team) | Q(guest_team=team)
    ).order_by('tour'))
    return render(request, 'LCH_manager/team.html', locals())


def match(request, match_id):
    match = Match.objects.get(id=match_id)
    information = get_match_results(match)
    return render(request, 'LCH_manager/match.html', locals())


def country(request, country_name):
    country = Country.objects.get(name=country_name)
    teams = Team.objects.filter(city__country=country)
    players = Player.objects.filter(motherland=country)
    return render(request, 'LCH_manager/country.html', locals())


def leader_board(request, top):
    bombardiers = EventsToMatch.objects.filter(event='Goal') \
                      .values_list('player__name', 'player__surname', 'player__id',
                                   'player__team__id', 'player__team__name') \
                      .annotate(goals_num=Count('id')).order_by('-goals_num')[:int(top)]
    return render(request, 'LCH_manager/leader_bord.html', locals())


def matches_in_group(request, page_num):
    tours = Match.objects.all().values('tour').distinct()
    matches_results = get_matches_results(Match.objects.all().order_by('-tour'))
    current_page = Paginator(matches_results, 16)
    return render_to_response('LCH_manager/matches.html',
                              {'matches': current_page.page(int(page_num)),
                               'tour': tours[tours.count() - int(page_num)]})


def automatization(request):
    teams_by_groups = grouping_catch()
    return render(request, 'LCH_manager/toss.html', locals())


def countries(request):
    countries = defaultdict(list)
    for team in Team.objects.all():
        countries[team.city.country].append(team)
    countries = dict(countries)
    return render(request, 'LCH_manager/countries.html', locals())
