from .models import *
import random
import operator
from faker import Faker


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