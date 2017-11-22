from django.db import models
from .static import *


class Country(models.Model):
    name = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = "Country"
        verbose_name_plural = "Countries"


class City(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    country = models.ForeignKey(Country, blank=True, default=None, null=True)

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = "City"
        verbose_name_plural = "Cities"


class Coach(models.Model):
    name = models.CharField(max_length=28)
    surname = models.CharField(max_length=28)

    def __str__(self):
        return "%s %s" % (self.name, self.surname)

    class Meta:
        verbose_name = "Coach"
        verbose_name_plural = "Coaches"


class Team(models.Model):
    name = models.CharField(max_length=56)
    city = models.ForeignKey(City, blank=True, default=None, null=True)
    year_of_foundation = models.PositiveIntegerField(blank=True, default=None, null=True)
    coach = models.ForeignKey(Coach, blank=True, default=None, null=True)
    basket_index = models.PositiveIntegerField(choices=((1, 1), (2, 2), (3, 3), (4, 4),))
    group = models.CharField(choices=GROUP_CHOICES, blank=True, null=True, default=None, max_length=1)
    is_in_tournament = models.BooleanField(default=True)
    image = models.ImageField(upload_to='images/teams/', blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.name,)

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"


class Player(models.Model):
    name = models.CharField(max_length=28)
    surname = models.CharField(max_length=28, blank=True, default=None, null=True)
    position = models.CharField(choices=POSITION_CHOICES,
                                blank=True, null=True, default=None, max_length=28)
    team = models.ForeignKey(Team, blank=True, default=None, null=True)
    number = models.PositiveIntegerField(blank=True, default=None, null=True)
    is_a_captain = models.BooleanField(default=False)
    birthday = models.DateField(blank=True, default=None, null=True)
    motherland = models.ForeignKey(Country, blank=True, default=None, null=True)
    image = models.ImageField(upload_to='images/players/', blank=True, null=True, default=None)

    def __str__(self):
        if self.surname != None:
            return "%s %s" % (self.name, self.surname)
        else:
            return "%s" % (self.name)

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"


class Match(models.Model):
    host_team = models.ForeignKey(Team)
    guest_team = models.ForeignKey(Team, related_name='guests_of_match')
    tour = models.CharField(max_length=32, null=True, default=None, blank=True)
    city = models.ForeignKey(City, blank=True, null=True, default=None)

    def __str__(self):
        return "%s" % (self.host_team.name + " - " + self.guest_team.name)

    class Meta:
        verbose_name = "Match"
        verbose_name_plural = "Matches"


class EventsToMatch(models.Model):
    event = models.CharField(choices=EVENT_CHOICES, max_length=28)
    player = models.ForeignKey(Player, null=True, default=None)
    match = models.ForeignKey(Match, null=True, default=None)
    minute = models.IntegerField(default=1)

    def __str__(self):
        return "%s %s %s %s" % (self.event, self.player, self.match, self.minute)

    class Meta:
        verbose_name = "Event in match"
        verbose_name_plural = "Events in matches"


class Conflicts(models.Model):
    country_1 = models.ForeignKey(Country)
    country_2 = models.ForeignKey(Country, related_name='guests_of_match')

    def __str__(self):
        return "%s %s" % (self.country_1, self.country_2)

    def get_other(self, country):
        if country == self.country_1:
            return self.country_2
        else:
            return self.country_1

    class Meta:
        verbose_name = "Conflict"
        verbose_name_plural = "Conflicts"
