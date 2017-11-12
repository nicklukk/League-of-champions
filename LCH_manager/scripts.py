from .models import *
import random
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
