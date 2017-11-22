import copy
import operator
import random
from collections import defaultdict

from django.db.models import Q

from .models import *


def city_for_match():
    matches = Match.objects.all()
    for match in matches:
        match.city = match.host_team.city
        match.save(force_update=True)


def positions_for_players():
    players = Player.objects.all()
    teams = Team.objects.all()
    for team in teams:
        pl = players.filter(team=team)
        positions = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, ]
        for i in range(pl.count() - 15):
            positions.append(random.randint(0, 3))
        for player in pl:
            pos = positions.pop()
            player.position = pos
            player.save(force_update=True)


def chance(d):
    roll = random.randint(1, 100)
    print(roll)
    sorted_dict = sorted(d.items(), key=operator.itemgetter(1))
    acc = 0
    for el in sorted_dict:
        acc += el[1]
        if acc >= roll:
            return el[0]


def statistic():
    matches = Match.objects.all()
    teams = Team.objects.all()
    players = Player.objects.all()
    file = open(r"static\qaz.txt", "r", encoding="UTF-8")
    for line in file:
        arr = line.split("_")
        id = int(arr[1])
        match = matches.get(id=id)
        t1 = teams.get(name=arr[2])
        t2 = teams.get(name=arr[3])
        g1 = int(arr[4])
        g2 = int(arr[5])
        for goal in range(g1):
            position = chance({0: 1, 1: 20, 2: 29, 3: 50})
            p = players.filter(team=t1, position=position)
            player = random.choice(p)
            EventsToMatch.objects.create(event=0, player=player, match=match, minute=random.randint(1, 90))
        for goal in range(g2):
            position = chance({0: 1, 1: 20, 2: 29, 3: 50})
            p = players.filter(team=t2, position=position)
            player = random.choice(p)
            EventsToMatch.objects.create(event=0, player=player, match=match, minute=random.randint(1, 90))


def positions():
    players = Player.objects.all()
    file = open(r"static\txt_files\players.txt", 'r')
    i = 0
    for line in file:
        arr = line.split("_")
        idd = arr[1]
        p = arr[2]
        pos = ''
        if p == '0':
            pos = 'Goalkeeper'
        elif p == '1':
            pos = 'Defender'
        elif p == '2':
            pos = 'Midfielder'
        elif p == '3':
            pos = 'Forward'
        i += 1
        player = players.get(id=int(idd))
        player.position = pos
        player.save(force_update=True)
        print("OK " + i.__str__())


def grouping():
    teams_by_baskets = defaultdict(list)
    teams = copy.deepcopy(Team.objects.all())
    for team in teams:
        teams_by_baskets[team.basket_index].append(team)
    teams_by_groups = defaultdict(list)
    teams_by_groups.fromkeys(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ])

    for group in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ]:
        conflicts = []
        for key in teams_by_baskets:
            basket = teams_by_baskets[key]
            filtered_group = copy.deepcopy(basket)
            # removing teams with conflicts (filtering):
            for team in filtered_group:
                if team.city.country in conflicts:
                    filtered_group.remove(team)
            # print(conflicts)
            team = random.choice(filtered_group)
            basket.remove(team)
            teams_by_groups[group].append(team)
            # managing conflicts:
            country = team.city.country
            conflicts.append(country)
            countries = Conflicts.objects.filter(Q(country_1=country) | Q(country_2=country))
            for c in countries:
                conflicts.append(c.get_other(country))

    return sorted(teams_by_groups.items(), key=lambda t: t[0])


def grouping_catch():
    try:
        res = grouping()
        return res
    except IndexError:
        # print("error")
        return grouping_catch()


def get_matches_results(matches_query):
    results = []
    for match in matches_query:
        d = dict()
        d["team1"] = match.host_team
        d["team2"] = match.guest_team
        d["goals1"] = EventsToMatch.objects.filter(match=match, event="Goal",
                                                   player__team=match.host_team)
        d["goals2"] = EventsToMatch.objects.filter(match=match, event="Goal",
                                                   player__team=match.guest_team)
        d["match_id"] = match.id
        results.append(d)
    return results


def get_match_results(match):
    results = dict()
    results["goals1"] = EventsToMatch.objects.filter(match=match, event="Goal",
                                                     player__team=match.host_team).order_by("minute")
    results["goals2"] = EventsToMatch.objects.filter(match=match, event="Goal",
                                                     player__team=match.guest_team).order_by("minute")
    results["yellow1"] = EventsToMatch.objects.filter(match=match, event="Yellow card",
                                                      player__team=match.host_team).order_by("minute")
    results["yellow2"] = EventsToMatch.objects.filter(match=match, event="Yellow card",
                                                      player__team=match.guest_team).order_by("minute")
    results["red1"] = EventsToMatch.objects.filter(match=match, event="Red card",
                                                   player__team=match.host_team).order_by("minute")
    results["red2"] = EventsToMatch.objects.filter(match=match, event="Red card",
                                                   player__team=match.guest_team).order_by("minute")
    return results
